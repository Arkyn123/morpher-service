import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { MorpherServiceService } from './morpher-service.service';
import { CreateMorpherServiceDto } from './dto/create.morpher-service';
import { UpdateMorpherServiceDto } from './dto/update.morpher-service';
import { ConversionDto } from './dto/conversion';
import { ExceptionDto } from './dto/exception';

@Controller('morpher-service')
export class MorpherServiceController {
  constructor(private readonly morpherServiceService: MorpherServiceService) {}

  @Get(`/:word/:declination`)
  getWord(
    @Param('word') word: string,
    @Param('declination') declination: string,
  ) {
    return this.morpherServiceService.findOne(word, declination);
  }

  @Post(`/create`)
  createDeclination(@Body() createMorpherServiceDto: CreateMorpherServiceDto) {
    return this.morpherServiceService.create(createMorpherServiceDto);
  }

  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body() updateMorpherServiceDto: UpdateMorpherServiceDto,
  ) {
    return this.morpherServiceService.update(id, updateMorpherServiceDto);
  }

  @Get(`/get`)
  findAll() {
    return this.morpherServiceService.findAll();
  }

  @Post(`/conversion`)
  conversion(@Body() conversionDto: ConversionDto) {
    return this.morpherServiceService.conversion(conversionDto);
  }

  @Post(`/addexception`)
  addException(@Body() exceptionDto: ExceptionDto) {
    return this.morpherServiceService.add(exceptionDto);
  }
}
