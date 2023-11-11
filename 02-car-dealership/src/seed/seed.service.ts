import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/car.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRAND_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  // somemethod() {}

  populateDb() {
    this.carsService.fillCarsWithSeedDate(CARS_SEED);
    this.brandsService.fillBrandsWithSeedDate(BRAND_SEED);
  }
}
