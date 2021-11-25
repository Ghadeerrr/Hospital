package com.example.demo.patients;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {


    private final patientRepository patientrepository;

    @Autowired
    public PatientService(patientRepository patientrepository) {
        this.patientrepository = patientrepository;
    }

}
