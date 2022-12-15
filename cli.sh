#!/usr/bin/env sh

if [ $# != 2 ]; then
  echo "Usage: $0 <project> <module>"
  exit 0
else 
  _project=$1
  _module=$2
fi

echo $_project $_module