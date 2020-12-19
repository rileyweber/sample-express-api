const express = require('express');
const routes = require('./routes');

const app = express();

const authMiddleware = (req, res, next) => {
  const { headers } = req;
  // check Aothorization header. If it's not valid, throw an error
  const valid = true; // switch to `false` to see how the api behaves
  if (!valid) {
    res.errorCode = 401;
    throw new Error('Invalid auth token');
  }
  next();
};
const errorMiddleware = (err, req, res, next) => {
  console.log(err); // you'll see this error in the terminal
  res.status(res.errorCode || 500).send(err.message || 'unknown error');
  next();
}

app.use(authMiddleware);
app.use(routes);
app.use(errorMiddleware);

app.listen(8080, () => console.log('server listening on port 8080'));
