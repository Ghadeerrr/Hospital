package com.example.demo.Appointment;

import com.example.demo.doctors.Doctor;
import com.example.demo.patients.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface appointmentRepository extends JpaRepository<Appointment, Integer> {
    List<Appointment> findAllBypatient_id(int patient_id);
    List<Appointment> findAllBydoctor_id(int doctor_id);

}
