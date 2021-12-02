package com.example.demo.departments;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DepartmentService {

    private final departmentRepository departmentrepository;

    @Autowired
    public DepartmentService(departmentRepository departmentrepository) {
        this.departmentrepository = departmentrepository;
    }

    public Department addDepartment(Department department){

        return departmentrepository.save(department);
    }

    public void addDepartments(List<Department> departments){
        for(int i=0;i<departments.size();i++){
            departmentrepository.save(departments.get(i));}
    }

    public List<Department> getDepartments(){

        return  departmentrepository.findAll();
    }

    public void deletDepartment(int id){

        departmentrepository.deleteById(id);
    }
}
