#! /usr/bin/env node

'use strict'

const symlinkDependencies = require('./index.js')

symlinkDependencies(process.argv.slice(2))
