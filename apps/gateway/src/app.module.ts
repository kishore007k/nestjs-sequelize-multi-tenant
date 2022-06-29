import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { ApolloDriver } from "@nestjs/apollo";
import { AppResolver } from "./app.resolver";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    UsersModule,

    // Apollo GraphQL
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "apps/gateway/src/schema.gql"),
      installSubscriptionHandlers: true,
      context: ({ req, res }) => ({ req, res }),
      uploads: {
        maxFileSize: 10000000, // 10 MB
        maxFiles: 5,
      },
    }),
  ],

  providers: [AppResolver, AppService],
})
export class AppModule {}
