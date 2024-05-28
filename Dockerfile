# Dockerfile
# Stage 1: Build React app
FROM node:16 AS build

WORKDIR /app

# Copy frontend package files
COPY frontend/package.json ./frontend/

# Install frontend dependencies using Yarn
# RUN cd frontend && yarn install

# Copy the rest of the frontend code and build it
COPY frontend /app/frontend
RUN cd frontend && yarn install && yarn build

# Stage 2: Setup backend and serve React app
FROM node:16

WORKDIR /app

# Copy backend package files
COPY backend/package.json ./backend/

# Install backend dependencies using Yarn
RUN cd backend && yarn install

# Copy the built React app from the previous stage
COPY --from=build /app/frontend/build /app/frontend/build

# Copy backend code
COPY backend /app/backend

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV REACT_APP_API_URL=http://app:3000/api

# Expose the backend port
EXPOSE 3000

# Start the backend server
CMD ["node", "backend/index.js"]
