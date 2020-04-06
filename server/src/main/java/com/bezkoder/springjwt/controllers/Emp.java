package com.bezkoder.springjwt.controllers;

public class Emp {

	public Emp() {
		System.out.println("Emp");

	}

	private String name;
	private Integer id;

	public Emp(Integer id,String name) {
		super();
		this.name = name;
		this.id = id;
	}

	@Override
	public String toString() {
		return "Emp [id=" + id + ", name=" + name + "]";
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
