# Stage 1: Build the React application
FROM node:21-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Deploy the build files using the AWS CLI
FROM mesosphere/aws-cli
WORKDIR /app
# Copy the build artifacts from the builder stage
COPY --from=builder /app/dist .
CMD ["s3", "sync", "./", "s3://react-vite-basic-showcase"]
