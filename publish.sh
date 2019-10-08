#!/bin/sh

rm -r ./dist/*
tsc
npm version minor
npm publish
git push