package com.kazi.backend.controller;

import com.kazi.backend.dto.TalentDetailResponse;
import com.kazi.backend.dto.TalentSummaryResponse;
import com.kazi.backend.dto.UpdateTalentProfileRequest;
import com.kazi.backend.service.TalentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/talents")
@RequiredArgsConstructor
public class TalentController {

    private final TalentService talentService;

    @GetMapping
    public ResponseEntity<List<TalentSummaryResponse>> getAllTalents() {
        return ResponseEntity.ok(talentService.getAllTalents());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TalentDetailResponse> getTalentById(@PathVariable UUID id) {
        return ResponseEntity.ok(talentService.getTalentById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TalentDetailResponse> updateTalent(
            @PathVariable UUID id,
            @RequestHeader("X-User-Id") UUID userId,
            @Valid @RequestBody UpdateTalentProfileRequest request) {
        return ResponseEntity.ok(talentService.updateProfile(id, userId, request));
    }
}