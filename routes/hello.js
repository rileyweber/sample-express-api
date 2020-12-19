const { Router } = require('express');

const router = new Router();

router.get('/world', (req, res, next) => {
  res.send('Hello World!');
  next();
});

router.get('/:name', (req, res, next) => {
  const { params } = req;
  res.send(`Hello ${params.name}`);
  next();
});

module.exports = router;
