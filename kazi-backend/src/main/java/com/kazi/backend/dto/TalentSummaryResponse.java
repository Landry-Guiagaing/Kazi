package com.kazi.backend.dto;

import lombok.Builder;
import lombok.Data;
import java.util.UUID;

@Data
@Builder
public class TalentSummaryResponse {
    private UUID id;
    private String name;      // On utilisera l'email ou un nom plus tard
    private String title;
    private String location;
    private String image;     // On ajoutera l'image plus tard
}