import { Module } from '@nestjs/common';
import { ClienteService } from './estudiante.service';
import { ClienteController } from './estudiante.controller';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class EstudianteModule {}
