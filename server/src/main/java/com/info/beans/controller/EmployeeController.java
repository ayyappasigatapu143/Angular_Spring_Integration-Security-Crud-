package com.info.beans.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.controllers.Emp;
import com.info.beans.model.Employee;
import com.info.beans.service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class EmployeeController {
	@Autowired
	private EmployeeService empService;
	
	Logger logger= Logger.getLogger(EmployeeService.class);

	@PostMapping("/addEmployee")
	public String addEmployee(@RequestBody Employee employee) {
		

		   logger.info("Inside the Add Employee Method "+ employee);
		 
		System.out.println("Employee Obj" + employee);

		empService.saveEmployee(employee);
		return "employee saved";
	}
	/*
	 * @GetMapping("/getAll") public List<Employee> getAllUsers(){ return empList; }
	 * 
	 * @DeleteMapping("/delete/{id}") public String
	 * deleteEmployee(@PathVariable("id") String id){
	 * empList.remove(Integer.parseInt(id)); return "emp removed"; }
	 */

	@GetMapping("/getAll")
	public List<Employee> getAllUsers() {
		return empService.getAllEmployees();
	}

	@PostMapping("/login")
	public String loginUser() {
		return "hello world";
	}

	@GetMapping("/authenticate")
	public String isAppAuthenticated() { 
		
		System.out.println("isAuthenticated ");
		logger.info("loggerlogger");
		return "hello";
	}

	@PostMapping("/updateEmployee")
	public String updateEmployee(@RequestBody Employee employee) {
		empService.updateEmployee(employee);
		return "employee updated";
	}

	@DeleteMapping("/deleteEmployee")
	public String deleteEmployee(@PathVariable("id") Integer id) {
		return "esgsegse";
	}

	@RequestMapping("/getEmp")
	public List<Emp> getEmp() {
		System.out.println("getEmp get Callled ");
		List<Emp> list = new ArrayList<Emp>();
		list.add(new Emp(1, "dsbsd"));
		list.add(new Emp(2, "dsbsd"));
		list.add(new Emp(3, "dsbsd"));
		list.add(new Emp(4, "dsbsd"));
		list.add(new Emp(5, "dsbsd"));
		return list;
	}
}
