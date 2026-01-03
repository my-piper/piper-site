# Stage 1: Build the application
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for building)
RUN npm ci

# Copy source code
COPY . .

# Build for production (client + server)
RUN npm run build

# Stage 2: Production env
FROM node:18-alpine

WORKDIR /app

# Copy package files for production install
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy build artifacts and server script from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=80

# Expose port
EXPOSE 80

# Start SSR server
CMD ["npm", "run", "serve"]
