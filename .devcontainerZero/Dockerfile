FROM node:current-bullseye

RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y python3 python3-pip

ENV PYTHON /usr/bin/python3

RUN apt-get install -y zsh && \
    sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

ENV SHELL=/bin/zsh

RUN npm install -g npm@latest

# FROM node:latest

# ARG NPM_VERSION=latest

# RUN apt-get update && apt-get upgrade -y

# RUN apt-get install -y python3 python3-pip

# ENV PYTHON /usr/bin/python3

# RUN apt-get install -y zsh && \
#     sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# ENV SHELL=/bin/zsh

# RUN npm install -g npm@${NPM_VERSION}