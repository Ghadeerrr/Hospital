package com.example.demo.patients;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface patientRepository extends JpaRepository<Patient, Integer> {
}
