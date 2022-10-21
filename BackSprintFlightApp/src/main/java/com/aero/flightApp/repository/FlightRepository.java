package com.aero.flightApp.repository;

import com.aero.flightApp.models.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FlightRepository extends JpaRepository<Flight, Long>{

    List<Flight> findByOrigin(String origin);

}

