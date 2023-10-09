# Developpement

Requirements:
  - Docker
  - docker compose

Running in developpement:

```sh
docker-compose -f docker-compose.dev.yml --env-file .env.dev up --build
```

Running in production:

```sh
docker-compose -f docker-compose.prod.yml up
```

note: production file not ready