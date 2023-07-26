
ARG AP_IMAGE_FROM

FROM $AP_IMAGE_FROM

ENV PIP_DISABLE_PIP_VERSION_CHECK 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /opt/{{cookiecutter.project_slug}} \
    && mkdir /opt/{{cookiecutter.project_slug}}/web \
    && mkdir /opt/{{cookiecutter.project_slug}}/static \
    && mkdir /opt/{{cookiecutter.project_slug}}/media \
    && mkdir /opt/{{cookiecutter.project_slug}}/import_files \
    && mkdir /opt/{{cookiecutter.project_slug}}/logs \
    && mkdir /cache

WORKDIR /opt/{{cookiecutter.project_slug}}/web

COPY requirements/base.txt requirements/local.txt entrypoint.sh /cache/

ARG AP_REQUIREMENT_FILE

RUN pip install -U pip \
    && pip install -r /cache/$AP_REQUIREMENT_FILE

ADD {{cookiecutter.project_name}} /opt/{{cookiecutter.project_slug}}/web

RUN chmod +x /cache/entrypoint.sh