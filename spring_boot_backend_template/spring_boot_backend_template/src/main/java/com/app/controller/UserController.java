package com.app.controller;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.entities.Role;
import com.app.entities.User;
import com.app.service.UserService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/users")
@Validated
public class UserController {
    @Autowired
	private UserService userService;
    
    
    @PostMapping("/register")
	public String addUserDetails(@RequestBody UserDTO userDto) {
		System.out.println("in add user ");
		System.out.println(userDto);
		return userService.addUserDetails(userDto);
	}
    
	@PostMapping("/login")
	public String processLoginForm(@RequestParam String em,
			@RequestParam String pass, Model map, HttpSession session) {
		System.out.println("in process login form " + em + " " + pass);// em pass : not null
		try {
			// invoke service layer method for authentication
			User user = userService.authenticateUser(em, pass);
			System.out.println(user);
			// add validated user details under session scope
			session.setAttribute("user_details", user);
			// role based authorization
			if (user.getRole() == Role.APPLICANT) {
				// user role , redirect to user details
				return "redirect:/users/home";
			}
			// => admin, trafficpolice role --redirect to dept list page
			return "redirect:/users/list";
		} catch (Exception e) {
			System.out.println("err in handler " + e);
			// forward clnt in the same request to the login page , highlighted with errs
			map.addAttribute("message", "Invalid Email or Passsword!!!");
			return "/login";
		}

	}
	
	
	@GetMapping("/logout")
	public String logout(Model map, HttpSession session) {
			System.out.println("in logout");
			// add user details under model attribute
			map.addAttribute("user_details", session.getAttribute("user_details"));
			// invalidate Http Session
			session.invalidate();
			return "/users/logout";
		}
}
