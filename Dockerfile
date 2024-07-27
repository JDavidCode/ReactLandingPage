# Stage 1: Build the application
FROM node:latest AS builder

WORKDIR /app

# Ensure destination ends with '/' to indicate it's a directory
COPY package*.json ./
RUN npm install

# Copy all other files from the current context
COPY ./ ./

# Build the application
RUN npm run build 

# Stage 2: Create a production image
FROM nginx:latest 

# Copy the built files from the "builder" stage
COPY --from=builder /app/dist/ /usr/share/nginx/html/

# Expose port 80 for Nginx
EXPOSE 8080
