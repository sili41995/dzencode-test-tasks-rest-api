## Preparing for coding

1. Make sure you have an LTS version of Node.js installed on your computer. Run the command `node -v` in the terminal. If the terminal displays the version (for example, v20.10.0), then Node.js is installed on your PC. [Download and install](https://nodejs.org/en/) if needed.
2. Clone this repository.
3. Open the project in VSCode, launch the terminal.
4. Install the project's base dependencies with the `npm install` command.
5. Start development mode by running the `npm run dev` command.
6. Go to [http://localhost:3000](http://localhost:3000) in your browser. This
   page will automatically reload after saving changes to the project files.

## Preparing for use Docker container

1. Make sure you have an LTS version of Docker Desktop installed on your computer. [Download and install](https://www.docker.com/products/docker-desktop/) if needed.
2. Make sure you have a Docker extension added to your Visual Studio Code. [Download and install](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) if needed.
3. To create a Docker image, run the command `docker build .`
4. After successfully creating the image, you can start the container using the following command: `docker run -p 4000:3000 -d imageId` (for example, `docker run -p 4000:3000 -d 1f3r45rtdbbnc57632`).
5. Go to [http://localhost:4000](http://localhost:4000) in your browser.
