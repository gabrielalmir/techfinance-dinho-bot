# Usa a imagem base do Ollama
FROM ollama/ollama:latest

# Instala um shell (opcional, para suporte a comandos compostos)
RUN apt-get update && apt-get install -y bash

# Define variáveis de ambiente
ENV OLLAMA_KEEP_ALIVE=24h
ENV OLLAMA_HOST=0.0.0.0
