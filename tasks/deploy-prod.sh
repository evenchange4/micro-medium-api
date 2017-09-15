#!/bin/bash

set -ex

# ENV Variables, Note: NOW_TOKEN in travisCI
ORIGIN='https://michaelhsu.tw'
# NOW config
TEAM='medium-api-prod'
PROJECT='micro-medium-api'
ALIAS='micro-medium-api-michaelhsutw.now.sh'

export PATH="./node_modules/.bin:$PATH"

# 1. Wair for deployment ready
URL=$(now -e ORIGIN="$ORIGIN" --public --token "$NOW_TOKEN" --team $TEAM)
await-url "$URL"
now ls --token "$NOW_TOKEN" --team $TEAM

# 2. Alias
now alias set "$URL" "$ALIAS" --token "$NOW_TOKEN" --team $TEAM

# 3. Purge old services
now remove --yes --safe --token "$NOW_TOKEN" --team $TEAM $PROJECT

# 4. Scale to 1
now scale "$ALIAS" 1 --token "$NOW_TOKEN" --team $TEAM

# 5. Log results
now ls --token "$NOW_TOKEN" --team $TEAM
now alias ls --token "$NOW_TOKEN" --team $TEAM
