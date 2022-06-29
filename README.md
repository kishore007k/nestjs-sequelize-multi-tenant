<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository, [Sequelize ORM](https://sequelize.org/), [GraphQL](https://docs.nestjs.com/graphql/quick-start) server with Multi-tenant & [Microservice](https://docs.nestjs.com/microservices/basics) (NATS) feature.

In this application we have used separate database for each organizations. The databases will be automatically created when a request is received.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# Start docker
$ docker compose up -d

# watch mode
$ npm run start:dev
```

## Multi-Tenant database

Each request that comes in must have a key [`x-tenant-id`](apps/gateway/src/users/users.service.ts) value `[your-organization-name]` pair.
Note that the database that gets created will have the same name as your organization id with the prefix *tenant_*.

## Stay in touch

- Author - [Kishore Kumar](https://www.linkedin.com/in/kishore-kumar-6bb5801a2/)
- Website - [https://kishore.netlify.app](https://kishore.netlify.app/)
- Github - [kishore007k](https://github.com/kishore007k)

## License

Nest is [MIT licensed](LICENSE).
