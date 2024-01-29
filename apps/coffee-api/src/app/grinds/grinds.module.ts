import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grind } from './grind.entity';
import { GrindController } from './grind.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Grind])],
  controllers: [GrindController],
})
export class GrindsModule {}
