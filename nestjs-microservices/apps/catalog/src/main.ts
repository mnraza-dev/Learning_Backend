import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Transport, MicroserviceOptions } from "@nestjs/microservices";
import { CatalogModule } from "./catalog.module";

async function bootstrap() {
  process.title = "catalog";
  const logger = new Logger("CatalogBootstrap");
  const port = Number(process.env.CATALOG_TCP_PORT) || 3001;

  // create microservices instance
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(CatalogModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port,
    }
  });
  app.enableShutdownHooks();
  await app.listen();
  logger.log(`Catalog microservice (TCP) is listening on port ${port}`);
}


bootstrap();