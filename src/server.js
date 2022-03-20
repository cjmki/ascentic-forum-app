import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from './config/morgan';
import logger from './config/logger';
import config from './config/config';
import errorMiddleware from './middlewares/error';
import setupRoutes from './routes';
import 'regenerator-runtime/runtime';
import 'core-js/stable';
import sanityChecker from './util/sanityChecker';

const app = express();

app.disable('x-powered-by');

function onUnhandledError(err) {
  try {
    logger.error(err);
  } catch (e) {
    console.log('LOGGER ERROR:', e);
    console.log('APPLICATION ERROR:', err);
  }
  process.exit(1);
}

process.on('unhandledRejection', onUnhandledError);
process.on('uncaughtException', onUnhandledError);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('response-time')());

app.use(morgan.successHandler);
app.use(morgan.errorHandler);

if (config.env.isDev || config.env.isTest) {
  app.use(cors());
} else {
  app.use(cors({ origin: ['https://sample.com', 'https://www.sample.com'] }));
}

setupRoutes(app, '/api/v1');
app.use(errorMiddleware);

app.get('/health', (req, res) => {
  res.status(200).send('health : ok');
});

app.get('/info', (req, res) => {
  // TODO: set this to auto increment.
  res.status(200).send(`build number : ${config.version}`);
});

logger.info(`application env : ${process.env.NODE_ENV}`);

app.use((req, res) => {
  res.status(404).json({ error: { message: '404' } });
});

app.listen(config.port, (err) => {
  if (err) {
    logger.error(err);
  } else {
    logger.info(`server listening on port : ${config.port}`);
  }
});

sanityChecker.initiate();

export default app;
