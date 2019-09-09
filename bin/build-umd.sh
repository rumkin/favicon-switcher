#!/bin/bash

set -e

echo ";(function(mod){"
echo "if (typeof module === 'object' && typeof exports === 'object') { module.exports = mod() }"
echo "else if (typeof define === 'function' && define.amd) { define(mod()) }"
echo "else { window.faviconSwitcher = mod() }"
echo "})(function(){"
cat $1
echo ""
echo "return initSwitcher"
echo "})"
