package com.example.demo.patients;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path= "patients")
public class PatientController {

    private final PatientService patientservice;


    @Autowired
    public PatientController(PatientService patientservice) {
        this.patientservice = patientservice;
    }




}
