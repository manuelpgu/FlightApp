package com.aero.flightApp;

import com.aero.flightApp.controller.FlightController;
import com.aero.flightApp.models.Flight;
import com.aero.flightApp.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;
import java.util.List;

@SpringBootApplication
public class FlightAppApplication implements CommandLineRunner {
	@Autowired
	FlightRepository flightRepository;

	public static void main(String[] args) {
		SpringApplication.run(FlightAppApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Flight firstFlight = new Flight("Sevilla","Berlin",new Date());
		Flight secondFlight = new Flight("Sevilla","Mallorca",new Date());
		Flight thirdFlight = new Flight("Mallorca","Sevilla",new Date());

		flightRepository.saveAll(List.of(firstFlight, secondFlight, thirdFlight));

	}
}
