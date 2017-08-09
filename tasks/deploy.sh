#!/bin/bash

set -ex

# Arguments
ORIGIN='*'
ALIAS='micro-medium-api.now.sh'
# Project config
TEAM=micro-medium-api

alias now="node_modules/.bin/now"
alias now-purge="node_modules/.bin/now-purge"
alias await-url="node_modules/.bin/await-url"

# 0. Use team
now switch $TEAM --token "$NOW_TOKEN"
now-purge -t "$NOW_TOKEN" --team $TEAM # make sure there is quato

# 1. Wair for deployment ready
URL=$(now -e ORIGIN="$ORIGIN" --public --token "$NOW_TOKEN")
node_modules/.bin/await-url "$URL"
now ls --token "$NOW_TOKEN"

# 2. Alias
now alias set "$URL" "$ALIAS" --token "$NOW_TOKEN"

# 3. Scale to 1
now scale "$ALIAS" 1 --token "$NOW_TOKEN"

# 4. Purge
sleep 5 # TODO: remove it
now-purge -t "$NOW_TOKEN" --team $TEAM
