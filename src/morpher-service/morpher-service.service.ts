import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { morpherService } from './morpher-service.model';
import { createMorpherServiceDto } from './dto/create.morpher-service';



@Injectable()
export class MorpherServiceService {


    constructor(
        @InjectModel(morpherService)
        private readonly userRepository: typeof morpherService
    ) { }


    async findOne(word: string, declination: string) {
        word = word.toLowerCase()
        word = word.charAt(0).toUpperCase() + word.slice(1);
        const result = await this.userRepository.findOne({ where: { im: word } })
        if (result) {
            switch (declination) {
                case 'rod':
                    return result.rod
                case 'dat':
                    return result.dat
                case 'vin':
                    return result.vin
                case 'tvor':
                    return result.tvor
                case 'predl':
                    return result.predl
                default:
                    return result.im
            }
        }
        return null
    }

    async create(createMorpherServiceDto: createMorpherServiceDto) {
        return await this.userRepository.create({ ...createMorpherServiceDto });
    }

    async findAll() {
        return await this.userRepository.findAll();
    }
}

