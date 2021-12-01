package com.example.demo.Appointment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface appointmentRepository extends JpaRepository<Appointment, Integer> {
}
