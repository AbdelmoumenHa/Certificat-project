package com.example.demo.Entity;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CertificatInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomDoctor;
    private String nomPation;
    private LocalDate date;
    private int nomberJour;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private  String place;

}
