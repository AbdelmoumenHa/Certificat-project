package com.example.demo.Repository;

import com.example.demo.Entity.Model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ModelRepository extends JpaRepository<Model,Long> {
    public Optional<Model> findById(Long id);
}