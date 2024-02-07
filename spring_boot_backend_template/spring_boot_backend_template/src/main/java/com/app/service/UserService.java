package com.app.service;

import com.app.dto.UserDTO;
import com.app.entities.*;

public interface UserService {

	User authenticateUser(String em, String pass);

	String addUserDetails(UserDTO userDto);


}
