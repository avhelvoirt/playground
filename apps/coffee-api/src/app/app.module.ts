import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrindsModule } from './grinds/grinds.module';
import { ConfigModule } from '@nestjs/config';
import ormConfig from '../../config/orm.config';
import ormConfigProd from '../../config/orm.config.prod';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
    }),
    TypeOrmModule.forRootAsync({
      useFactory:
        process.env.NODE_ENV !== 'production' ? ormConfig : ormConfigProd,
    }),
    GrindsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
