DJANGO_APPS = [
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    # "django.contrib.sites",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # "django.contrib.humanize", # Handy template tags
    "django.contrib.admin",
    # "django.forms",
]
THIRD_PARTY_APPS = [
    # "crispy_forms",
    # "allauth",
    # "allauth.account",
    # "allauth.socialaccount",
    # "rest_framework",
    # "rest_framework.authtoken",
    # "corsheaders",
]

LOCAL_APPS = [
    # "equality_proyect.users.apps.UsersConfig",
    # Your stuff: custom apps go here
]
# https://docs.djangoproject.com/en/dev/ref/settings/#installed-apps
INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS