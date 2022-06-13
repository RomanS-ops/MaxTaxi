package com.company.taxi_api.repository;

import com.company.taxi_api.entity.CarEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<CarEntity, Long> {
    CarEntity findByNumber(String number);
}
