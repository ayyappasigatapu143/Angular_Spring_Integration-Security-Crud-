package com.info.beans.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

/**
 * @author Ayyappa
 *
 */
/**
 * @author Ayyappa
 *
 */
/**
 * @author Ayyappa
 *
 */
@Entity
@Table(name="users",uniqueConstraints = {
		@UniqueConstraint(columnNames = {"username"})
})
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String username;
	private String email;
	private String password;
	
	@OneToMany
	@JoinTable(name = "roles",joinColumns = {
			@JoinColumn(columnDefinition = "id",referencedColumnName = "user_id")
	},inverseJoinColumns = {
			@JoinColumn(columnDefinition = "id",referencedColumnName = "role_id")
	})
	private Set<Role> roles;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	
	
	
	
}
