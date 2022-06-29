import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as chalk from "chalk";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const log = console.log;

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
  });

  await app.startAllMicroservices();

  await app.listen(3000, () => {
    log(
      chalk.bgHex("#6fa8dc")(
        "Gateway API Microservice is listening on port 3000!",
      ),
    );
  });
}
bootstrap();
