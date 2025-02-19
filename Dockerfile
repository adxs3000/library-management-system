# Step 1: Build the React app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React app files into the container
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the build output from the previous build stage
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
