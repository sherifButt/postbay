# POSTbay

This is a monorepo for a web application consisting of a React frontend and an Express backend.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn (v1.x)
- Docker
- Docker Compose

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sherifbutt/postbay.git
   cd postbay
   ```

2. Install the dependencies for both frontend and backend:

   ```bash
   yarn install
   ```

### Running the Application

To start both servers simultaneously:

   ```bash
   yarn start
   ```

   This will start the React development server on `http://localhost:3000` and the backend server on `http://localhost:3001`.

### Building the Application

To build the entire application (both frontend and backend), run:

```bash
yarn build
```

This will create a production build of the frontend and backend.

### Project Structure

```
postbay/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── yarn.lock
├── backend/
│   ├── src/
│   ├── package.json
│   └── yarn.lock
├── package.json
├── yarn.lock
├── Dockerfile
├── docker-compose.yml
└── .dockerignore
```

- **frontend/**: Contains the React frontend application.
- **backend/**: Contains the Express backend application.
- **package.json**: Root package file that defines the workspaces and scripts.
- **yarn.lock**: Lock file for managing dependencies.

### Scripts

- **`yarn start:frontend`**: Starts the React development server.
- **`yarn start:backend`**: Starts the backend server.
- **`yarn start`**: Starts both the frontend and backend servers simultaneously.
- **`yarn build`**: Builds both the frontend and backend applications.

### Environment Variables

You can configure environment variables in the root `.env` file for the backend and in the `.env` file in the `frontend` directory for the frontend. For example, to set the API URL for the frontend:

```
# .env in the root directory
PORT=3001
NODE_ENV=production

# .env in the frontend directory
REACT_APP_API_URL=http://localhost:3001
```

### Docker Deployment

To deploy the application using Docker, you can use the provided `docker-compose.yml` file. Here’s how you can build and run the Docker containers:

1. Build the Docker images:

   ```bash
   docker-compose build
   ```

2. Run the Docker containers:

   ```bash
   docker-compose up
   ```

This will start both the frontend and backend servers within their respective Docker containers, exposing the frontend on `http://localhost:3000` and the backend on `http://localhost:3001`.


### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- This project uses [React](https://reactjs.org/) for the frontend.
- This project uses [Express](https://expressjs.com/) for the backend.
- Special thanks to the [npm-run-all](https://www.npmjs.com/package/npm-run-all) package for managing concurrent scripts.
