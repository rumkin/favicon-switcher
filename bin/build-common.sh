#!/bin/bash

set -e

echo ";(function(mod){"
cat $1
echo ""
echo "initSwitcher()"
echo "})()"
