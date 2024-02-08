package com.app.service;

import javax.servlet.http.HttpSession;

import com.app.dto.VehRegDTO;

public interface vehicalRegService {
	public String generateRegistrationNumber();

	public String generateRegistrationNo(VehRegDTO vRegDTO,HttpSession session);

}
