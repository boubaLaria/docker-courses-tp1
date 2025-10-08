FROM node:21-alpine3.18

WORKDIR /app

# Copy package files and configuration files first
COPY package*.json ./
COPY tsconfig.json ./
COPY nest-cli.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate TypeScript dist files
RUN npm run build

# Verify the build
RUN ls -la dist/

EXPOSE 5001

# Use production mode
CMD ["node", "dist/main.js"]
