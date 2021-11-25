package com.example.demo.doctors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {

    private final doctorRepository doctorrepository;


    @Autowired
    public DoctorService(doctorRepository doctorrepository) {
        this.doctorrepository = doctorrepository;
    }
}
