package com.example.demo.Repository;

import com.example.demo.Entity.CertificatInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CertificatInfoRepository extends JpaRepository<CertificatInfo,Long> {
}
