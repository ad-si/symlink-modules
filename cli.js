#! /usr/bin/env node

'use strict'

const symlinkModules = require('./index.js')

symlinkModules(process.argv.slice(2))
