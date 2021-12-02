package com.example.demo.doctors;


import com.example.demo.departments.Department;
import com.example.demo.departments.departmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    private final doctorRepository doctorrepository;
    private final departmentRepository departmentrepository;


    @Autowired
    public DoctorService(doctorRepository doctorrepository, departmentRepository departmentrepository) {
        this.doctorrepository = doctorrepository;
        this.departmentrepository = departmentrepository;
    }

    public Doctor addDoctor(Doctor doctor, int department_id){

        Department department=departmentrepository.findById(department_id).orElse(null);
        doctor.setDepartment(department);
        return doctorrepository.save(doctor);
    }

    public List<Doctor> getDoctorDepartment(int departmentId){
        return doctorrepository.findAllBydepartment_id(departmentId);
    }



    public List<Doctor> getDoctors(){

        return  doctorrepository.findAll();
    }

    public void deletDoctor(int id){

        doctorrepository.deleteById(id);
    }
}
