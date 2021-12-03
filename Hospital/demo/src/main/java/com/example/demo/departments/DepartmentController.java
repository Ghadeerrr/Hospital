package com.example.demo.departments;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path= "departments")
@CrossOrigin("*")
public class DepartmentController {

    private final DepartmentService departmentservice;

    @Autowired
    public DepartmentController(DepartmentService departmentservice) {
        this.departmentservice = departmentservice;
    }

    @PostMapping
    public Department addDepartment(@RequestBody Department department){
        return departmentservice.addDepartment(department);
    }

    @PostMapping ("/s")
    public List<Department> addDepartments(@RequestBody List<Department> departments){
        departmentservice.addDepartments(departments);
        return getDepartments();
    }

    @GetMapping
    public List<Department> getDepartments(){

        return departmentservice.getDepartments();
    }

    @DeleteMapping ("/{id}")
    public List<Department> deletDepartment(@PathVariable int id){
        departmentservice.deletDepartment(id);
        return getDepartments();

    }
}