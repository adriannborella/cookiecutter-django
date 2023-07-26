#!/usr/bin/env bash
set -e

cd docker/local

export COMPOSE_PROJECT_NAME={{ cookiecutter.project_slug }};

docker compose \
    -f docker-compose.yml \
    $@
