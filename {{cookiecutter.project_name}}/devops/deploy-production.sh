#!/usr/bin/env bash
set -e

while getopts v: flag
do
    case "${flag}" in
        v) VERSION=${OPTARG};;
    esac
done

if [ "$VERSION" = "" ]
then
  echo "You must to send a version with the flag -v"
  exit
fi

bash ./deploy.sh -v $VERSION -e production
