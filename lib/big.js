#!/usr/bin/env node
const { createComponent } = require("./cli");
const { BIG_TYPE } = require("../constants/types");

createComponent({ mode: BIG_TYPE })