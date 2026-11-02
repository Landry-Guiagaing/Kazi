package com.kazi.backend.dto;

import lombok.Builder;
import lombok.Data;
import java.util.List;
import java.util.UUID;

@Data
@Builder
public class TalentDetailResponse {
    private UUID id;
    private String email;
    private String title;
    private String bio;
    private String location;
    private String website;
    private String linkedin;
    private String github;
    private List<String> skills;
}