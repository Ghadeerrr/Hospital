package com.example.demo.Appointment;

import com.example.demo.doctors.Doctor;
import com.example.demo.patients.Patient;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;


@Entity
@Table(name = "appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String date;
    private String state;

//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "doctor_id", referencedColumnName = "id")
//    private Doctor doctor;

//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "patient_id", referencedColumnName = "id")
//    private Patient patient;


    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "doctor_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Doctor doctor;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "patient_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Patient patient;

    public Appointment(){}
    public Appointment(int id, String date, String state, Doctor doctor, Patient patient) {
        this.id = id;
        this.date = date;
        this.state = state;
        this.doctor = doctor;
        this.patient = patient;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

}
