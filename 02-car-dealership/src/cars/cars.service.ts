import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
  ];

  public findAll() {
    return this.cars;
  }

  public findById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  public create(createCarDto: CreateCarDto) {
    const newCar = { id: uuid(), ...createCarDto };
    this.cars.push(newCar);

    return newCar;
  }

  public update(id: string, updateCarDto: UpdateCarDto) {
    let carDb = this.findById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = {
          ...carDb,
          ...updateCarDto,
          id,
        };
        return carDb;
      }
      return car;
    });
    return carDb;
  }

  public delete(id: string) {
    let carDb = this.findById(id);

    this.cars = this.cars.filter((car) => car.id !== id);

    return {
      deleted: true,
    };
  }

  fillCarsWithSeedDate(cars: Car[]) {
    this.cars = cars;
  }
}
