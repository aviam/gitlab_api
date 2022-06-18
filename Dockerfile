FROM node:slim
COPY ./ ./
EXPOSE 3030
CMD [ "npm", "start" ]
