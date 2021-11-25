package com.example.demo.doctors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path= "doctors")
public class DoctorController {


    private final DoctorService doctordervice;


    @Autowired
    public DoctorController(DoctorService doctordervice) {
        this.doctordervice = doctordervice;
    }
}
