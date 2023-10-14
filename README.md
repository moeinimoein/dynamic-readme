# Developpement

Requirements:
  - Docker
  - docker compose

Running in developpement:

```sh
git pull
npm i
rm -rf dist/
docker build -t charleschrismann/dynamic-readme:latest .
docker-compose -f docker-compose.dev.yml --env-file .env.dev up --build
```

Running in production:

```sh
docker-compose -f docker-compose.prod.yml up
```

delet all volumes

```sh
docker compose -f docker-compose.dev.yml --env-file .env.dev down -v
```

note: production file not ready