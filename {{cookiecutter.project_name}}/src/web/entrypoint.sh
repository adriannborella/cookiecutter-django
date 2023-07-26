#!/bin/bash

postgres_ready() {
python << END
import sys

import psycopg2

try:
    print(f'dbname:"${PG_DB_NAME}" | user: "${PG_USER}" | pass: "${PG_PASS}" | host: "${PG_HOST}" | port: "${PG_PORT}"')
    psycopg2.connect(
        dbname="${PG_DB_NAME}",
        user="${PG_USER}",
        password="${PG_PASS}",
        host="${PG_HOST}",
        port="${PG_PORT}",
    )
except psycopg2.OperationalError:
    sys.exit(-1)
sys.exit(0)

END
}

echo '=> TEST DATABASE CONECTION'
until postgres_ready; do
  >&2 echo '=> Waiting for PostgreSQL to become available...'
  sleep 1
done
>&2 echo '=> PostgreSQL is available'

# echo "=> Performing database migrations..."
# python manage.py migrate

# echo "=> Collecting static files..."
# python manage.py collectstatic --clear --no-input

# echo "=> Compiling translations..."
# python manage.py compilemessages

echo "INFO: Starting ($@)"
exec "$@"