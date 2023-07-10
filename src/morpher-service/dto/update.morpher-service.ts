import { PartialType } from '@nestjs/mapped-types';
import { CreateMorpherServiceDto } from './create.morpher-service';

export class UpdateMorpherServiceDto extends PartialType(
  CreateMorpherServiceDto,
) {}
