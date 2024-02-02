# Version
FROM node:20

# Set working directory in the container
WORKDIR /app

# Copy all files from the current directory to the container
COPY . .

# Install pnpm globally
RUN npm install -g pnpm

# Install the dependencies
RUN pnpm install

# Export the port
EXPOSE 5000

# Start the application
CMD ["pnpm", "run", "dev"]
