package com.app.service;



import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.VehRegDAO;
import com.app.dto.VehRegDTO;
import com.app.entities.User;
import com.app.entities.VehicleRegistration;



@Service
@Transactional
public class VehicalRegServiceImpl implements vehicalRegService {

	@Autowired
	public VehRegDAO dao;
	
	 @Autowired
	 public ModelMapper mapper;
	 
	
	
	// Method to generate a random alphanumeric registration number
	    public String generateRegistrationNumber() {
	        // You can customize the logic to generate registration numbers based on your requirements
	        String registrationNumber = ""; // Initialize an empty string

	        // Generate a random string of alphanumeric characters
	        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	        int length = 10; // Length of the registration number

	        for (int i = 0; i < length; i++) {
	            int index = (int) (Math.random() * characters.length());
	            registrationNumber += characters.charAt(index);
	        }

	        return registrationNumber;
	    }



		@Override
		public String generateRegistrationNo(VehRegDTO vehDto,HttpSession session) {
			VehicleRegistration veh=mapper.map(vehDto, VehicleRegistration.class);
			User user = (User)session.getAttribute("user_details");
			System.out.println(user.toString());
			veh.setRegistrationNo(this.generateRegistrationNumber());
			veh.setUser(user);
			dao.save(veh);
			
			return veh.getRegistrationNo();
		}
	    
	    
	}


	



