package com.ipl.backend.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api")
public class TestController {

        @GetMapping("/test")
        public ResponseEntity<String> getMethodName() {
            return new ResponseEntity<String>("Hello World!", HttpStatus.ACCEPTED);

        }
        
}
