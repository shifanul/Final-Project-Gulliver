const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

express()
  .use(helmet())
  .use(morgan(tiny))

  .get()

  .listen(8000, () => {
    console.log("server launched on server 8000");
  });
