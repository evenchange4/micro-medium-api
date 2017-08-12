#!/bin/bash

set -exu

PROJECT='micro-medium-api'
PKG='./pkg'

cd $PKG

# MAC
mv $PROJECT-macos $PROJECT
zip $PROJECT-macos.zip $PROJECT
rm $PROJECT

# Windos
mv $PROJECT-win.exe $PROJECT.exe
zip $PROJECT-win.zip $PROJECT.exe
rm $PROJECT.exe

# Linux
mv $PROJECT-linux $PROJECT
tar -cvzf $PROJECT-linux.tgz $PROJECT
rm $PROJECT

# Log

ls -Al
