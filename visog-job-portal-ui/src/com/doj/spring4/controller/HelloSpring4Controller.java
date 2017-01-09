package com.doj.spring4.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author  sathish
 *
 */
@Controller
@RequestMapping("/")  
public class HelloSpring4Controller {
	
	@RequestMapping("/hello")  
	public ModelAndView sayHello() {  
		String message = "visog-job-portal-ui";
		return new ModelAndView("hello2");
	}  
	
	@RequestMapping(value = "/addressType", method = RequestMethod.GET)   
	public String addressType() {  
		String message = "visog-job-portal-ui";
		return "master/addresstype";
	}
	
	
	@RequestMapping("/registration")  
	public ModelAndView say() {  
		String message = "visog-job-portal-ui";
		return new ModelAndView("registration");
	}  
	@RequestMapping(value = "/gender", method = RequestMethod.GET)   
	public String gender() {  
		String message = "visog-job-portal-ui";
		return "master/gender1";
	} 
	
	@RequestMapping(value = "/currency", method = RequestMethod.GET)   
	public String currency() {  
		String message = "visog-job-portal-ui";
		return "master/currency";
	} 
	
	@RequestMapping(value = "/industry", method = RequestMethod.GET)   
	public String industry() {  
		String message = "visog-job-portal-ui";
		return "master/industry";
	} 
	
	@RequestMapping(value = "/employmentType", method = RequestMethod.GET)   
	public String empType() {  
		String message = "visog-job-portal-ui";
		return "master/employmenttype";
	} 
	
	@RequestMapping(value = "/country", method = RequestMethod.GET)
	public String country() {  
		String message = "visog-job-portal-ui";
//		System.out.println("In country>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
//		return "country";
		return "master/country1";
	} 
	 
	@RequestMapping(value = "/state", method = RequestMethod.GET)  
	public String state() {  
		String message = "visog-job-portal-ui";
		return "master/state";
	} 
	 
	@RequestMapping(value= "/city" ,method = RequestMethod.GET)  
	public String city() {  
		String message = "visog-job-portal-ui";
		return "master/city";
	} 
	
	@RequestMapping(value= "/courses" ,method = RequestMethod.GET)  
	public String courses() {  
		String message = "visog-job-portal-ui";
		return "master/courses";
	}
	

	@RequestMapping(value= "/domains" ,method = RequestMethod.GET)  
	public String domains() {  
		String message = "visog-job-portal-ui";
		return "master/domains";
	}
	
	@RequestMapping(value= "/employertype" ,method = RequestMethod.GET)  
	public String employertype() {  
		String message = "visog-job-portal-ui";
		return "master/employertype";
	}
	
	@RequestMapping(value= "/employmenttype" ,method = RequestMethod.GET)  
	public String employmenttype() {  
		String message = "visog-job-portal-ui";
		return "master/employmenttype";
	}
	
	@RequestMapping(value= "/university" ,method = RequestMethod.GET)  
	public String university() {  
		String message = "visog-job-portal-ui";
		return "master/university";
	}
	@RequestMapping(value= "/specilization" ,method = RequestMethod.GET)  
	public String specilization() {  
		String message = "visog-job-portal-ui";
		return "master/specilization";
	}
		@RequestMapping(value = "/roles", method = RequestMethod.GET)  
		public String roles() {  
			String message = "visog-job-portal-ui";
			return "master/roles";
		} 
		 
		@RequestMapping(value= "/fileExtension" ,method = RequestMethod.GET)  
		public String fileExtension() {  
			String message = "visog-job-portal-ui";
			return "master/fileExtension";
		} 
		@RequestMapping(value= "/job_Seeker" ,method = RequestMethod.GET)  
		public String jobSeeker() {  
			String message = "visog-job-portal-ui";
			return "transaction/jobseeker_Registration";
		} 
	
		@RequestMapping(value= "/user" ,method = RequestMethod.GET)  
		public String user() {  
			String message = "visog-job-portal-ui";
			return "transaction/user_Registration";
		} 
		
		@RequestMapping(value = "/employer", method = RequestMethod.GET)   
		public String employer() {  
			String message = "visog-job-portal-ui";
			return "transaction/employer";
		}
		
		@RequestMapping(value = "/employerjobseeker", method = RequestMethod.GET)   
		public String employerjobseeker() {  
			String message = "visog-job-portal-ui";
			return "transaction/employerjobseeker";
		}
		
		@RequestMapping(value = "/files", method = RequestMethod.GET)   
		public String files() {  
			String message = "visog-job-portal-ui";
			return "transaction/files";
		}
		
		@RequestMapping(value = "/languageknown", method = RequestMethod.GET)   
		public String languageknown() {  
			String message = "visog-job-portal-ui";
			return "transaction/languageknown";
		}
	
		@RequestMapping(value= "/index" ,method = RequestMethod.GET)  
		public String other() {  
			String message = "visog-job-portal-ui";
			return "main/index";
		}
	
}
