package com.company.taxi_api.controller;

import com.company.taxi_api.entity.CarEntity;
import com.company.taxi_api.exception.CarNotFoundException;
import com.company.taxi_api.exception.NumberAlreadyExistException;
import com.company.taxi_api.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    CarService carService;

    @GetMapping("/")
    public ResponseEntity getCars(){
        try {
            return ResponseEntity.ok(carService.findAll());
        } catch (CarNotFoundException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable Long id){
        try {
            return ResponseEntity.ok(carService.findById(id));
        } catch (CarNotFoundException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @GetMapping("/search")
    public ResponseEntity getByNumber(@RequestParam String number){
        try {
            return ResponseEntity.ok(carService.findByNumber(number));
        } catch (CarNotFoundException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/create")
    public ResponseEntity create(@RequestBody CarEntity car){
        try {
            carService.create(car);
            return ResponseEntity.ok("Car save!");
        } catch (NumberAlreadyExistException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/{id}/update")
    public ResponseEntity update(@PathVariable Long id, @RequestBody CarEntity car){
        try{
            carService.update(id, car);
            return ResponseEntity.ok("Update Successful");
        } catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        try {
            carService.delete(id);
            return ResponseEntity.ok("Delete successful");
        } catch (Exception e ){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
