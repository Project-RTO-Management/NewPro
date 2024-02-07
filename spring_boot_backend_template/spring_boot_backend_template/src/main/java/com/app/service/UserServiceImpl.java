package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserDao;
import com.app.dto.UserDTO;
import com.app.entities.User;
@Service
@Transactional
public class UserServiceImpl implements UserService {
@Autowired
private UserDao userDao;
@Autowired
private UserDTO userDto;
@Autowired
private ModelMapper mapper;

@Override
public User authenticateUser(String em, String pass) {

	return  userDao.findByEmailAndPassword(em, pass).orElseThrow();
}

@Override
public String addUserDetails( UserDTO userdto) {
	User user = mapper.map(userdto, User.class);
	userDao.save(user);
	return "Added new user ....";
}


}
