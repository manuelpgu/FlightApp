package com.aero.flightApp.repository;

import com.aero.flightApp.models.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightRepository extends JpaRepository<Flight, Long>{

}

