const { Router } = require('express');
const helloWorld = require('./hello');

const router = new Router();

router.use('/hello', helloWorld);

module.exports = router;
