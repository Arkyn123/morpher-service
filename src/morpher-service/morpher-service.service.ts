import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { morpherService } from './morpher-service.model';
import { exceptionService } from './exception.model';
import { CreateMorpherServiceDto } from './dto/create.morpher-service';
import { UpdateMorpherServiceDto } from './dto/update.morpher-service';
import { ConversionDto } from './dto/conversion';
import { ExceptionDto } from './dto/exception';

@Injectable()
export class MorpherServiceService {
  constructor(
    @InjectModel(morpherService)
    private readonly wordRepository: typeof morpherService,
    @InjectModel(exceptionService)
    private readonly exceptionRepository: typeof exceptionService,
  ) {}

  async findOne(word: string, declination: string) {
    word = word.toLowerCase();
    word = word.charAt(0).toUpperCase() + word.slice(1);
    const result = await this.wordRepository.findOne({ where: { im: word } });
    if (result) {
      switch (declination) {
        case 'rod':
          return result.rod;
        case 'dat':
          return result.dat;
        case 'vin':
          return result.vin;
        case 'tvor':
          return result.tvor;
        case 'predl':
          return result.predl;
        default:
          return result.im;
      }
    }
    return null;
  }

  async create(createMorpherServiceDto: CreateMorpherServiceDto) {
    return await this.wordRepository.create({ ...createMorpherServiceDto });
  }

  async update(id: string, updateMorpherServiceDto: UpdateMorpherServiceDto) {
    return this.wordRepository.update(updateMorpherServiceDto, {
      where: { id },
    });
  }

  async findAll() {
    return await this.wordRepository.findAll();
  }

  async conversion(conversionDto: ConversionDto) {
    let result;
    const newWord = conversionDto.orgName.split(':');
    newWord.length > 1
      ? (result = conversionDto.orgName
          .split(':')[1]
          .split('_')[0]
          .toLowerCase())
      : (result = conversionDto.orgName
          .split(':')[0]
          .split('_')[0]
          .toLowerCase());

    const exceptions = await this.exceptionRepository.findAll();

    exceptions.forEach((exception) => {
      const exceptionText = exception.exception;
      const replacementText = exceptionText.toLowerCase();
      const regex = new RegExp(replacementText, 'gi');
      result = result.replace(regex, exceptionText);
    });

    return result.replace(/`/g, '"').replace(/'/g, '"');
  }

  async add(exceptionDto: ExceptionDto) {
    return this.exceptionRepository.create({ ...exceptionDto });
  }
}
