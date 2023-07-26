import os
import sys
import psycopg2


if __name__ == '__main__':
    print("Example")
    try:
        conn = psycopg2.connect(
            **{
                'dbname': os.getenv('PG_DB_NAME'),
                'user': os.getenv('PG_USER'),
                'password': os.getenv('PG_PASS'),
                'host': os.getenv('PG_HOST'),
                'port': os.getenv('PG_PORT'),
                'connect_timeout': 1,
            }
        )
        conn.close()
        print('OK')
    except psycopg2.OperationalError as ex:
        print("Error", ex)
        sys.exit(-1)
    sys.exit(0)
