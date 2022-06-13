package com.company.taxi_api.service;

import com.company.taxi_api.entity.CarEntity;
import com.company.taxi_api.exception.CarNotFoundException;
import com.company.taxi_api.exception.NumberAlreadyExistException;
import com.company.taxi_api.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarService {
    @Autowired
    CarRepository carRepository;

    public Iterable<CarEntity> findAll() throws CarNotFoundException {
        Iterable<CarEntity> cars = carRepository.findAll();
        if (cars == null){
            throw new CarNotFoundException("Car not found!");
        }
        else return cars;
    }

    public CarEntity findById(Long id) throws CarNotFoundException {
        CarEntity car = carRepository.findById(id).get();
        if (car == null){
            throw new CarNotFoundException("Car not found!");
        }
        else return car;
    }
    public CarEntity findByNumber(String number) throws CarNotFoundException {
        CarEntity car = carRepository.findByNumber(number);
        if (car == null){
            throw new CarNotFoundException("Car not found!");
        }
        else return car;
    }

    public CarEntity create(CarEntity car) throws NumberAlreadyExistException {
        if (carRepository.findByNumber(car.getNumber()) != null){
            throw new NumberAlreadyExistException("Number already exist!");
        }
        else return carRepository.save(car);
    }

    public long update(Long id, CarEntity updatedCar){
        if (updatedCar != null){
            CarEntity car = carRepository.findById(id).get();
            car.setBrand(updatedCar.getBrand());
            car.setModel(updatedCar.getModel());
            car.setNumber(updatedCar.getNumber());
            car.setColor(updatedCar.getColor());
            car.setRate(updatedCar.getRate());
            carRepository.save(car);
            return id;
        }
        else return id;
    }
    public Long delete(long id){
        carRepository.deleteById(id);
        return id;
    }
}
