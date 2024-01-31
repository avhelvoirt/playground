import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grind } from './grind.entity';
import { GrindController } from './grind.controller';
import { GrindService } from './grind.service';

@Module({
  imports: [TypeOrmModule.forFeature([Grind])],
  controllers: [GrindController],
  providers: [GrindService],
})
export class GrindModule {}
