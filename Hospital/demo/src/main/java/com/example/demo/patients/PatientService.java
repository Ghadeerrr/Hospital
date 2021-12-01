package com.example.demo.patients;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {


    private final PatientRepository patientRepository;

    @Autowired
    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public List<Patient> getPatients(){
        return patientRepository.findAll();
    }

    public Patient getPatient(String id){
        Integer patient_id = Integer.parseInt(id);

        return patientRepository.findById(patient_id).orElse(null);
    }

    public Patient createPatient(Patient patient){
        return patientRepository.save(patient);

    }

    public void deletePatient(String id ){
        Integer patient_id = Integer.parseInt(id);
        patientRepository.deleteById(patient_id);

    }

    public Patient updatePatient(String id, Patient data){
        Integer patient_id = Integer.parseInt(id);

        Patient patient = patientRepository.findById(patient_id).orElse(null);

        if (patient != null){


            patient.setFirstName(data.getFirstName());
            patient.setLasttName(data.getLasttName());
           patient.setAge(data.getAge());
            patient.setBloodType(data.getBloodType());
            patient.setPhoneNumber(data.getPhoneNumber());
           patient.setPassword(data.getPassword());
            patient.setGender(data.getGender());
            patientRepository.save(patient);
        }
        return patient;

    }

}



