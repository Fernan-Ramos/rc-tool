#!/usr/bin/env node
const { createComponent } = require("./cli");
const { SMALL_TYPE } = require("../constants/types");

createComponent({ mode: SMALL_TYPE })