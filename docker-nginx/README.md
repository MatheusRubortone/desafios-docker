# Desafio Docker – Node.js + MySQL + Nginx

Este projeto consiste em uma aplicação Node.js com Express que se conecta a um banco MySQL e é exposta através de um proxy reverso Nginx, tudo orquestrado com Docker Compose.

Ao acessar a aplicação, um nome aleatório é inserido no banco de dados e a lista de nomes cadastrados é exibida na tela. Cada vez que a página é recarregada, um novo nome é inserido no banco e exibido na tela.

# Passo a passo para a execução

## Clonar projeto e subir o container

```bash
git clone https://github.com/MatheusRubortone/desafios-docker.git
cd desafios-docker/docker-nginx
``

```bash
docker-compose up -d
```

## Acessar o localhost

http://localhost:8080
