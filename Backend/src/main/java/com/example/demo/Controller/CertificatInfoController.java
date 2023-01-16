package com.example.demo.Controller;


import com.example.demo.Entity.CertificatInfo;
import com.example.demo.Repository.CertificatInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@CrossOrigin("*")
public class CertificatInfoController {

    @Autowired
    private CertificatInfoRepository certificatInfoRepository;

    @PostMapping("/saveInfo")
    public void saveInfoCertificat(@RequestBody CertificatInfo certifInfo){
        certificatInfoRepository.save(certifInfo);
    }
}
