package com.carmel.frontend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class KycController {
  
    @GetMapping("/kyc-form")
    public String greeting() {
		return "kyc-form";
  }
  
}