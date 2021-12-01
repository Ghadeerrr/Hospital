package com.example.demo.Appointment;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path= "appointment")
public class AppointmentController {

    private final AppointmentService appointmentService;

    @Autowired
    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @GetMapping
    public List<Appointment> getAllAppointment(){
        return appointmentService.getAllAppointment();
    }

    @GetMapping("/{id}")
    public Appointment getAppointment(@PathVariable String id ){
        return appointmentService.getAppointment(id);
    }

    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentService.createAppointment(appointment);
    }

    @DeleteMapping("/{id}")
    public String deleteAppointment(@PathVariable String id) {
        return appointmentService.deleteAppointment(id);
    }
//    Edit doctor_id in appointment
    @PutMapping("/{appointmentId}/doctor/{doctorId}")
    public Appointment addDoctorToAppointment(@RequestBody @PathVariable int appointmentId, @PathVariable int doctorId) {
        return appointmentService.addDoctorToAppointment(appointmentId,doctorId);
    }

//    Edit patient_Id in appointment
    @PutMapping("/{appointmentId}/patient/{patientId}")
    public Appointment addPatientToAppointment(@RequestBody @PathVariable int appointmentId, @PathVariable int patientId) {
        return appointmentService.addPatientToAppointment(appointmentId,patientId);
    }

    @PutMapping("/{id}")
    public Appointment UpdateState(@PathVariable String id, @RequestBody Appointment appointment) {
        return appointmentService.UpdateState(id,appointment);
    }
}