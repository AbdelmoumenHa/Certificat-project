package com.example.demo.Entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Model {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String part1;
    private String part2;

    private String part3;
    private String part4;
    private String part5;
    private String part6;
    private String part7;
    private String part8;
    private String part9;
   private  String part10;






}
