FROM node:9.10.1

# Prepare app directory
RUN mkdir -p /opt/dashboard
ADD . /opt/dashboard

# Install yarn package manager
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Install dependencies
WORKDIR /opt/dashboard

# RUN npm install
RUN ~/.yarn/bin/yarn install

# Build the app
RUN ~/.yarn/bin/yarn run build

# Install static server to serve files
RUN ~/.yarn/bin/yarn global add serve

# Expose the app port
EXPOSE 81

# Start the app
CMD serve -l 81 -s build