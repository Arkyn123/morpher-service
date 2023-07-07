import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MorpherServiceService } from './morpher-service.service';
import { createMorpherServiceDto } from './dto/create.morpher-service';

@Controller('morpher-service')
export class MorpherServiceController {
    constructor(private readonly MorpherServiceService: MorpherServiceService) { }

    @Get(`/:word/:declination`)
    getWord(@Param('word') word: string, @Param('declination') declination: string) {
        return this.MorpherServiceService.findOne(word, declination)
    }

    @Post(`/create`)
    createDeclination(@Body() createMorpherServiceDto: createMorpherServiceDto) {
        return this.MorpherServiceService.create(createMorpherServiceDto);
    }

    @Get(`/get`)
    findAll() {
        return this.MorpherServiceService.findAll();
    }
}
