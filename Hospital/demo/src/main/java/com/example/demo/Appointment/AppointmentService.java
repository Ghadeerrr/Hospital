package com.example.demo.Appointment;


import com.example.demo.doctors.Doctor;
import com.example.demo.doctors.doctorRepository;
import com.example.demo.patients.Patient;
import com.example.demo.patients.patientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Service
public class AppointmentService {

    private final appointmentRepository appointmentRepository;
    private final doctorRepository doctorrepository;
    private final patientRepository patientrepository;

    public AppointmentService(com.example.demo.Appointment.appointmentRepository appointmentRepository, doctorRepository doctorrepository, patientRepository patientrepository) {
        this.appointmentRepository = appointmentRepository;
        this.doctorrepository = doctorrepository;
        this.patientrepository = patientrepository;
    }

    public List<Appointment> getAllAppointment(){
        return appointmentRepository.findAll();
    }

    public Appointment getAppointment(String id){
        int Id = Integer.parseInt(id);
        return appointmentRepository.findById(Id).orElse(null);
    }

    public Appointment createAppointment(Appointment appointment){
        return appointmentRepository.save(appointment);
    }

    public String deleteAppointment(String id){
        int Id = Integer.parseInt(id);
        appointmentRepository.deleteById(Id);
        return "deleted";
    }

    public Appointment addDoctorToAppointment(int appointmentId, int doctorId) {
        Appointment appointment = appointmentRepository.findById(appointmentId).get();
        Doctor doctor = doctorrepository.findById(doctorId).get();
        appointment.setDoctor(doctor);
        return appointmentRepository.save(appointment);
    }

    public Appointment addPatientToAppointment(int appointmentId, int patientId) {
        Appointment appointment = appointmentRepository.findById(appointmentId).get();
        Patient patient = patientrepository.findById(patientId).get();
        appointment.setPatient(patient);
        return appointmentRepository.save(appointment);
    }
    public Appointment UpdateState(String id , Appointment appointmentState){
        int Id = Integer.parseInt(id);
        Appointment appointment = appointmentRepository.findById(Id).orElse(null);
        if (appointment != null){
            appointment.setState(appointmentState.getState());
            appointmentRepository.save(appointment);
        }
        return appointment;
    }
}
