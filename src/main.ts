/**
 * Declaration of Express Module
 */
import * as express from 'express';

/**
 * Variable declaration of express
 */
var app = express();

/**
 * Declare Api route
 */
import ApiRoutes from './routes/dataRoute';

/**
 * Declaration of Express to use Api Route at '/'
 */
app.use('/', ApiRoutes());

  /**
 * Express listen function with port that is being listened on
 */
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});


