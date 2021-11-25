package com.example.demo.departments;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path= "departments")
public class DepartmentController {

    private final DepartmentService departmentservice;

    @Autowired
    public DepartmentController(DepartmentService departmentservice) {
        this.departmentservice = departmentservice;
    }
}
