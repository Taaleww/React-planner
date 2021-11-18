import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(
  //   session({
  //     secret: 'keyboard cat', //get from env vars
  //     resave: 'false',
  //     saveUnintialiazed: false,
  //     cookie: { maxAge: 3600000 }, //make sure to set this, it wil check if it's expire -> it'll trigger user to make a new log in
  //   }),
  // );

  // app.use(passport.initialize());
  // app.use(passport.session());

  await app.listen(5000);
  console.info(`Server is running on http://localhost:5000/graphql`)
}
bootstrap();
