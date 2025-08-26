# Base image 
# Stage 1:Build
FROM node:18-alpine AS builder
# Working Directory 
WORKDIR /app
# package file
COPY package*.json ./
# Dependencies install karo
RUN npm install 
# App copy
COPY . .
RUN npm run build

# # App start command
# CMD ["npm", "run", "dev"]
# Stage 2 base image
# production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]