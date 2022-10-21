package com.aero.flightApp;

import com.aero.flightApp.controller.FlightController;
import com.aero.flightApp.models.Flight;
import com.aero.flightApp.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Calendar;
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

		Date currentDate = new Date();

		// convert date to calendar
		Calendar c = Calendar.getInstance();
		c.setTime(currentDate);
		c.add(Calendar.MONTH, 1);
		// convert calendar to date
		Date currentDatePlusOne = c.getTime();

		Flight firstFlight = new Flight("Sevilla","Berlin",new Date(), 55);
		Flight secondFlightToSevilla = new Flight("Sevilla","Berlin",currentDatePlusOne, 55);

		Flight secondFlight = new Flight("Sevilla","Mallorca",new Date(), 100);
		Flight thirdFlight = new Flight("Mallorca","Sevilla",new Date(), 20);

		flightRepository.saveAll(List.of(firstFlight, secondFlightToSevilla, secondFlight, thirdFlight));

	}
}
