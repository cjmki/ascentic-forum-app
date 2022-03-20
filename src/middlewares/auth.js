import UnauthorizedError from '../exceptions/UnauthorizedError';
import verifyJWT from '../services/user/verifyJWT';

export default (roles) => {
  return async (req, res, next) => {
    const authHeader = req.headers.authorization;
    let token;
    if (authHeader) {
      token = authHeader.split(' ')[1];
    }
    if (!token) {
      throw new UnauthorizedError('unauthenticated');
    }

    const user = await verifyJWT(token);

    if (roles !== undefined && !roles.includes(user.role)) {
      throw new UnauthorizedError('unauthorized');
    }
    res.locals.user = user;
    next();
  };
};
