package com.doj.spring4.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author sathish
 *
 */
@Controller
@RequestMapping("/")
public class HelloSpring4Controller {

	/*
	 * @RequestMapping("/hello") public ModelAndView sayHello() { return new
	 * ModelAndView("hello2"); }
	 */

	@RequestMapping(value = "/addressType", method = RequestMethod.GET)
	public String addressType() {
		return "master/addresstype";
	}

	
	
	@RequestMapping("/registration")
	public ModelAndView say() {
		return new ModelAndView("registration");
	}

	@RequestMapping(value = "/gender", method = RequestMethod.GET)
	public String gender() {
		return "master/gender1";
	}

	@RequestMapping(value = "/currency", method = RequestMethod.GET)
	public String currency() {
		return "master/currency";
	}

	@RequestMapping(value = "/industry", method = RequestMethod.GET)
	public String industry() {
		return "master/industry";
	}

	@RequestMapping(value = "/employmentType", method = RequestMethod.GET)
	public String empType() {
		return "master/employmenttype";
	}

	@RequestMapping(value = "/country", method = RequestMethod.GET)
	public String country() {
		return "master/country1";
	}

	@RequestMapping(value = "/state", method = RequestMethod.GET)
	public String state() {
		return "master/state";
	}

	@RequestMapping(value = "/city", method = RequestMethod.GET)
	public String city() {
		return "master/city";
	}

	@RequestMapping(value = "/courses", method = RequestMethod.GET)
	public String courses() {
		return "master/courses";
	}

	@RequestMapping(value = "/domains", method = RequestMethod.GET)
	public String domains() {
		return "master/domains";
	}

	@RequestMapping(value = "/employertype", method = RequestMethod.GET)
	public String employertype() {
		return "master/employertype";
	}

	@RequestMapping(value = "/employmenttype", method = RequestMethod.GET)
	public String employmenttype() {
		return "master/employmenttype";
	}

	@RequestMapping(value = "/university", method = RequestMethod.GET)
	public String university() {
		return "master/university";
	}

	@RequestMapping(value = "/specilization", method = RequestMethod.GET)
	public String specilization() {
		return "master/specilization";
	}

	@RequestMapping(value = "/roles", method = RequestMethod.GET)
	public String roles() {
		return "master/roles";
	}

	@RequestMapping(value = "/fileExtension", method = RequestMethod.GET)
	public String fileExtension() {
		return "master/fileExtension";
	}
	
	@RequestMapping(value = "/educationtype", method = RequestMethod.GET)
	public String educationtype() {
		return "master/educationtype";
	}
	
	
	@RequestMapping(value = "/jobroles", method = RequestMethod.GET)
	public String jobroles() {
		return "master/jobroles";
	}
	
	
	@RequestMapping(value = "/languages", method = RequestMethod.GET)
	public String languages() {
		return "master/languages";
	}

	@RequestMapping(value = "/job_Seeker", method = RequestMethod.GET)
	public String jobSeeker() {
		return "transaction/jobseeker_Registration";
	}

	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public String user() {
		return "transaction/user_Registration";
	}

	@RequestMapping(value = "/employer", method = RequestMethod.GET)
	public String employer() {
		return "transaction/employer";
	}

	@RequestMapping(value = "/employerjobseeker", method = RequestMethod.GET)
	public String employerjobseeker() {
		return "transaction/employerjobseeker";
	}

	@RequestMapping(value = "/files", method = RequestMethod.GET)
	public String files() {
		return "transaction/files";
	}

	@RequestMapping(value = "/languageknown", method = RequestMethod.GET)
	public String languageknown() {
		return "transaction/languageknown";
	}
	
	@RequestMapping(value ="/postJob",method =RequestMethod.GET)
	public String postJob(){
		return "transaction/PostJob";
		
	}
	
	
	@RequestMapping(value ="/Address",method =RequestMethod.GET)
	public String Address(){
		return "transaction/Address";
		
	}

	@RequestMapping(value ="/ExperienceDetails",method =RequestMethod.GET)
	public String ExperienceDetails(){
		return "transaction/ExperienceDetails";
		
	}
	
	@RequestMapping(value ="/JobSeeker",method =RequestMethod.GET)
	public String JobSeeker(){
		return "transaction/JobSeeker";
		
	}
	
	@RequestMapping(value ="/PostJobSeeker",method =RequestMethod.GET)
	public String PostJobSeeker(){
		return "transaction/PostJobSeeker";
		
	}
	
	@RequestMapping(value ="/ProjectDetails",method =RequestMethod.GET)
	public String ProjectDetails(){
		return "transaction/ProjectDetails";
		
	}
	
	@RequestMapping(value ="/Users",method =RequestMethod.GET)
	public String Users(){
		return "transaction/Users";
		
	}

	@RequestMapping(value ="/EducationDetails",method =RequestMethod.GET)
	public String EducationDetails(){
		return "transaction/EducationDetails";
		
	}
	
	
	@RequestMapping(value ="/PostJobDomains",method =RequestMethod.GET)
	public String postJobDomains(){
		return "transaction/PostJobDomains";
		
	}

	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String other() {
		return "main/index";
	}

}
