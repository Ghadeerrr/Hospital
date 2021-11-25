package com.example.demo.departments;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartmentService {

    private final departmentRepository departmentrepository;

    @Autowired
    public DepartmentService(departmentRepository departmentrepository) {
        this.departmentrepository = departmentrepository;
    }
}
