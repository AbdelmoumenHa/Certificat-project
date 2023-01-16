package com.example.demo.Controller;

import com.example.demo.Entity.Model;
import com.example.demo.Repository.ModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class ModelController {

    @Autowired
    private ModelRepository modelRepository;

    @GetMapping("/models")
    public List<Model> getModels(){
       return modelRepository.findAll();
    }


    @GetMapping("/model/{id}")
    public Optional<Model> getModelElementById(@PathVariable Long id){
        return modelRepository.findById(id);
    }
}
