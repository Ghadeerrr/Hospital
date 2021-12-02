package com.example.demo.doctors;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface doctorRepository  extends JpaRepository<Doctor, Integer> {

    List<Doctor> findAllBydepartment_id(int department_id);
}
