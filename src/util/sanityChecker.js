import sqlClient from '../config/sql/sqlClient';
import logger from '../config/logger';

/**
 * module to run sanity checks on outside connections
 * TODO : follow circuit breaker pattern for fall back if no living connection
 *        and add scheduler to check connection periodically.
 */

const checkSQL = async () => {
  try {
    await sqlClient.authenticate();
    logger.info('SQL - connection established');
  } catch (err) {
    logger.error(`SQL - connection failed | ${err}`);
  }
};

const initiate = () => {
  checkSQL();
};

export default { initiate };
