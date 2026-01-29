# Use Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of application
COPY . .

# Expose port
EXPOSE 5000

# Start command
CMD ["npm", "start"]
