package com.app.controller;

import java.util.Random;

import javax.servlet.http.HttpSession;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.dto.VehRegDTO;
import com.app.entities.VehicleRegistration;
import com.app.service.vehicalRegService;

@RestController
@RequestMapping("/vehicalRegistration")
public class VehicalRegistrationFormController{
	
	@Autowired
	public vehicalRegService service;
	

	 
	 @PostMapping("/vehReg")
	public String vehGenerator(@RequestBody VehRegDTO vehregdto,HttpSession session)
	{
	
		return service.generateRegistrationNo(vehregdto,session);
		
	}
}


