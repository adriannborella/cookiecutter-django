DJANGO_APPS = [
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.admin",
]
THIRD_PARTY_APPS = [
    "rest_framework", # https://www.django-rest-framework.org/    
    'rest_framework_simplejwt', # https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html    
    "corsheaders", # https://pypi.org/project/django-cors-headers/
]

LOCAL_APPS = [
    # "equality_proyect.users.apps.UsersConfig",
    # Your stuff: custom apps go here
]

# https://docs.djangoproject.com/en/dev/ref/settings/#installed-apps
INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS