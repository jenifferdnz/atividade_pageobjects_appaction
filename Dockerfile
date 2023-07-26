FROM cypress/base:latest

WORKDIR /home/cypress/

RUN apt-get update

COPY . /home/cypress

RUN npm install

CMD ["npm", "run", "test"]