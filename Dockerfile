FROM node:20-alpine

WORKDIR /app

# Copy package files and install dependencies before copying the rest of the code
# This takes advantage of Docker's layer caching to speed up rebuilds
COPY package.json package-lock.json* ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]