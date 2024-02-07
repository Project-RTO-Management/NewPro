package com.app.dto;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.Future;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.usertype.UserType;
import org.hibernate.validator.constraints.Length;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.app.entities.Address;
import com.app.entities.Fine;
import com.app.entities.Gender;
import com.app.entities.License;
import com.app.entities.Role;
import com.app.entities.VehicleRegistration;
import com.app.entities.examApplication;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import io.swagger.v3.oas.annotations.Hidden;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Component
public class UserDTO {
	@JsonProperty(access = Access.READ_ONLY) // used during serialization ->skip it in deserial
	private Integer id;	
	private String userName;
	private String s_d_w;
	@Email(message = "invalid email")
	@Size(min = 5, max = 20, message = "invalid email length")
	private String email;
	@JsonProperty(access =Access.WRITE_ONLY )//used during de-ser, not in serial
	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Invalid Pattern of password")
	private String password;
	@Past(message = "Must be Past Date")
	private LocalDate birthDate;
	//@Enumerated(EnumType.STRING)
	private Gender gender;
    @Length(min = 10, max = 10, message = "Phone must be 10 digit number.")
	private String phoneNo;
    @Hidden
	private Role role = Role.APPLICANT;
//	private Address permanentAdd;
//	private Address correspondAdd;
//	
//	@JsonProperty(access = Access.READ_ONLY)
//	private examApplication examApp;
//	@JsonProperty(access = Access.READ_ONLY)
//	private Set<VehicleRegistration> vehReg = new HashSet<VehicleRegistration>();
//	@JsonProperty(access = Access.READ_ONLY)
//	private Set<Fine> fine= new HashSet<Fine>();
//	@JsonProperty(access = Access.READ_ONLY)
//	private Set<License> license = new HashSet<License>();
}
