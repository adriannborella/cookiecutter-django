export COMPOSE_PROJECT_NAME={{ cookiecutter.project_slug }}_;
export AP_COMMIT_VERSION=$(git log -1 --pretty=format:%h);
export AP_DOCKER_REGISTRY='{{ cookiecutter.registry }}/';
export AP_WEB_IMAGE=$AP_DOCKER_REGISTRY'{{ cookiecutter.project_slug }}_web:'$AP_COMMIT_VERSION;
export AP_FRONT_IMAGE=$AP_DOCKER_REGISTRY'{{ cookiecutter.project_slug }}_front:'$AP_COMMIT_VERSION;
export AP_LB_IMAGE=$AP_DOCKER_REGISTRY'{{ cookiecutter.project_slug }}_lb:'$AP_COMMIT_VERSION;

bash ./compose-ci.sh build
bash ./compose-ci.sh push-web
bash ./compose-ci.sh push-lb