package com.example.demo.departments;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface departmentRepository extends JpaRepository<Department, Integer> {
}
