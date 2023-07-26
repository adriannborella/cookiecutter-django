#!/usr/bin/env bash
set -e

if [ "${1}" == 'build' ]; then
    echo "Building docker image"
    docker --version
    docker compose --compatibility -f docker/ci/docker-compose.yml build
fi

if [ "${1}" == 'push-web' ]; then
    echo "Pushin {{ cookiecutter.project_slug }}_web:$AP_COMMIT_VERSION"
    docker push adriannborella/{{ cookiecutter.project_slug }}_web:$AP_COMMIT_VERSION
fi

if [ "${1}" == 'push-lb' ]; then
    echo "Pushin {{ cookiecutter.project_slug }}_lb:$AP_COMMIT_VERSION"
    docker push adriannborella/{{ cookiecutter.project_slug }}_lb:$AP_COMMIT_VERSION
fi

if [ "${1}" == 'down' ]; then
    echo "Version finished:$AP_COMMIT_VERSION"
    docker compose -f docker/ci/docker-compose.yml down
fi
