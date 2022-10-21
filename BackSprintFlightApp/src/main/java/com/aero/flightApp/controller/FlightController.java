package com.aero.flightApp.controller;


import com.aero.flightApp.models.Flight;
import com.aero.flightApp.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="/flights")
public class FlightController {
	@Autowired
	private final FlightRepository flightRepository;

	public FlightController(FlightRepository flightRepository) {
		this.flightRepository = flightRepository;
	}


	@GetMapping("")
	public List<Flight> getDestionations(){
		List<Flight> allFlights = flightRepository.findAll().stream()
				.distinct()
				.collect(Collectors.toList());
		return allFlights;
	}

	@GetMapping("/{id}")
	public Flight getFlight(@PathVariable Long id) {
		return flightRepository.findById(id).orElseThrow(RuntimeException::new);
	}
	
	@PostMapping
	public ResponseEntity createClient (@RequestBody Flight flight) throws URISyntaxException {

		Flight savedClient = flightRepository.save(flight);
		return ResponseEntity.created(new URI("/clients/" + savedClient.getId())).body(savedClient);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity updateClient(@PathVariable Long id, @RequestBody Flight flight) {
		Flight currentFlight = flightRepository.findById(id).orElseThrow(RuntimeException::new);
		currentFlight.setDate(flight.getDate());
		currentFlight.setDestination(flight.getDestination());
		currentFlight.setOrigin(flight.getOrigin());

		currentFlight = flightRepository.save(flight);

        return ResponseEntity.ok(currentFlight);
	}
	
	@DeleteMapping("/{id}")
    public ResponseEntity deleteFlight(@PathVariable Long id) {
        flightRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
