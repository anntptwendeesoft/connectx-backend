import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCityDto, FindCityDto } from './city.dto';
import { Prisma } from '@prisma/client';
import {getDefaultPaginationReponse} from "../../utils/pagination.util";

@Injectable()
export class CityService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCityDto: CreateCityDto) {
    const { name, country, latitude, longitude } = createCityDto;

    return this.prisma.city.create({
      data: { name, country, latitude, longitude },
    });
  }

  async find(findCityDto: FindCityDto) {
    const { query, size, page } = findCityDto;
    const skip = (page - 1) * size;
    const filter: Prisma.CityWhereInput = {};

    if (query) {
      filter.name = {
        contains: query,
        mode: 'insensitive',
      };
    }

    const [cities, count] = await Promise.all([
      this.prisma.city.findMany({
        skip,
        take: size,
        where: filter,
      }),
      this.prisma.city.count({
        where: filter,
      }),
    ]);

    return {
      ...getDefaultPaginationReponse(findCityDto, count),
      data: cities
    }
  }
}
