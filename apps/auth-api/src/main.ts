import { NestFactory } from "@nestjs/core";
import { AuthApiModule } from "./auth-api.module";
import * as chalk from "chalk";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthApiModule,
    {
      transport: Transport.NATS,
      options: {
        url: "nats://localhost:4222",
      },
    },
  );

  const log = console.log;

  await app.listen().then(() => {
    log(chalk.bgMagenta("Auth API Microservice is listening on port 3000!"));
  });
}
bootstrap();
