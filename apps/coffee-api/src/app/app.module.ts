import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrindModule } from './grind/grind.module';
import { ConfigModule } from '@nestjs/config';
import { BrewingMethodeModule } from './brewing-methode/brewing-methode.module';
import { CoffeeBeanModule } from './coffee-bean/coffee-bean.module';
import { BrewingModule } from './brewing/brewing.module';
import { BrewingCategoryModule } from './brewing-category/brewing-category.module';
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
    GrindModule,
    BrewingMethodeModule,
    CoffeeBeanModule,
    BrewingModule,
    BrewingCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
