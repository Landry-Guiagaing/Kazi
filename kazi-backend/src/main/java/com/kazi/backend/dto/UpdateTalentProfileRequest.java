package com.kazi.backend.dto;

import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UpdateTalentProfileRequest {

    @Size(max = 255, message = "Le titre ne doit pas dépasser 255 caractères")
    private String title;

    @Size(max = 2000, message = "La biographie ne doit pas dépasser 2000 caractères")
    private String bio;

    @Size(max = 255, message = "La localisation ne doit pas dépasser 255 caractères")
    private String location;

    private String website;
    private String linkedin;
    private String github;
}