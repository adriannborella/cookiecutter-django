#!/usr/bin/env bash
set -e

while getopts v:e: flag
do
    case "${flag}" in
        v) VERSION=${OPTARG};;
        e) ENVIROMENT=${OPTARG};;
    esac
done

if [ "$VERSION" = "" ]
then
  echo "You must to send a version with the flag -v"
  exit
fi

if [ "$ENVIROMENT" = "" ]
then
  echo "You must to send a enviroment with the flag -e"
  exit
fi

export AP_COMMIT_VERSION=$VERSION

export COMPOSE_PROJECT_NAME={{ cookiecutter.project_slug }}_$ENVIROMENT
export DOCKER_DEFAULT_PLATFORM=linux/amd64
export AP_DOCKER_REGISTRY='{{ cookiecutter.registry }}/'
export AP_WEB_IMAGE=$AP_DOCKER_REGISTRY'{{ cookiecutter.project_slug }}_web:'$AP_COMMIT_VERSION
export AP_FRONT_IMAGE=$AP_DOCKER_REGISTRY'{{ cookiecutter.project_slug }}_front:'$AP_COMMIT_VERSION
export AP_LB_IMAGE=$AP_DOCKER_REGISTRY'{{ cookiecutter.project_slug }}_lb:'$AP_COMMIT_VERSION

docker-compose -f docker/$ENVIROMENT/docker-compose.yml up -d
