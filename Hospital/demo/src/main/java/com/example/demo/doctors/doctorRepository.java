package com.example.demo.doctors;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface doctorRepository  extends JpaRepository<Doctor, Integer> {
}
