# Dinho Bot

Dinho Bot is a personal finance assistant built using the Llama 3.2 model. It helps users with topics related to personal finance, investments, market analysis, and financial planning. The bot is part of the TechFinance application and provides clear, precise, and useful responses in Brazilian Portuguese.

## Features

- Personal finance assistance
- Investment simulations
- Market analysis
- Financial planning
- Financial report generation
- Personalized insights

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/gabrielalmir/techfinance-dinho-bot.git
  cd techfinance-dinho-bot
  ```

2. Build and start the services:
  ```sh
  docker-compose up --build
  ```

### Usage

The Dinho Bot service will be available at `http://localhost:3001`. You can interact with the bot via the `/chat` endpoint.

### Environment Variables

- `PORT`: The port on which the Dinho Bot service runs (default: 3001).
- `OLLAMA_URL`: The URL of the Ollama service (default: `http://localhost:11434`).

## Project Structure

- `dinho/`: Contains the Dinho Bot service.
  - `src/`: Source code for the Dinho Bot service.
   - `config/`: Configuration files.
   - `assets/`: Assets used by the bot.
  - `Dockerfile`: Dockerfile for building the Dinho Bot service.
  - `tsconfig.json`: TypeScript configuration file.
  - `package.json`: Project dependencies and scripts.
  - `.editorconfig`: Editor configuration file.
  - `.gitignore`: Git ignore file.

- `ollama/`: Contains the Ollama service.
  - `Dockerfile`: Dockerfile for building the Ollama service.

- `docker-compose.yaml`: Docker Compose configuration file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

Gabriel Almir - [GitHub](https://github.com/gabrielalmir)
