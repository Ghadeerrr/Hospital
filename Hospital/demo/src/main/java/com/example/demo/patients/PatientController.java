package com.example.demo.patients;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path= "patients")
public class PatientController {

    private final PatientService patientService;


    @Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping
    public List<Patient> getPatientS(){
        return patientService.getPatients();

    }

    @GetMapping("/{id}")
    public Patient getPatient(@PathVariable String id){
        return patientService.getPatient(id);

    }

    @PostMapping
    public Patient createPatient(@RequestBody Patient patient){
        return patientService.createPatient(patient);
    }

    @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable String id){
        patientService.deletePatient(id);

    }

    @PutMapping("/{id}")
    public Patient updatePatient(@PathVariable String id, @RequestBody Patient data){
       return patientService.updatePatient(id, data);
    }

}




