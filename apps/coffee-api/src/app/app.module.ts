import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GrindController} from "./grind/grind.controller";

@Module({
  imports: [],
  controllers: [AppController, GrindController],
  providers: [AppService],
})
export class AppModule {}
