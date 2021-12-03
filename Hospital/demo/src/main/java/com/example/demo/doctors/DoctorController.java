package com.example.demo.doctors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path= "doctors")
@CrossOrigin("*")
public class DoctorController {


    private final DoctorService doctordervice;


    @Autowired
    public DoctorController(DoctorService doctordervice) {
        this.doctordervice = doctordervice;
    }


    @PostMapping
    public Doctor addDoctor(@RequestBody Form form){
        return doctordervice.addDoctor(form.getDoctor(), form.getDepartmentId());
    }


    @GetMapping
    public List<Doctor> getDoctors(){

        return doctordervice.getDoctors();
    }

    @DeleteMapping ("/{id}")
    public List<Doctor> deletDoctor(@PathVariable int id){
        doctordervice.deletDoctor(id);
        return getDoctors();

    }

    @GetMapping ("/{id}")
    public List<Doctor> getDoctorDeprtment(@PathVariable int id){
        return doctordervice.getDoctorDepartment(id);
    }


}

class Form{
    private Doctor doctor;
    private int departmentId;

    public Doctor getDoctor() {
        return doctor;
    }

    public int getDepartmentId() {
        return departmentId;
    }


}
