package com.kazi.backend.service;

import com.kazi.backend.dto.AddSkillRequest;
import com.kazi.backend.dto.TalentDetailResponse;
import com.kazi.backend.dto.TalentSummaryResponse;
import com.kazi.backend.dto.UpdateTalentProfileRequest;
import com.kazi.backend.entity.Skill;
import com.kazi.backend.entity.TalentProfile;
import com.kazi.backend.repository.SkillRepository;
import com.kazi.backend.repository.TalentProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TalentService {

    private final TalentProfileRepository talentProfileRepository;
    private final SkillRepository skillRepository;

    public List<TalentSummaryResponse> getAllTalents() {
        return talentProfileRepository.findAll().stream()
                .map(this::mapToSummary)
                .collect(Collectors.toList());
    }

    public TalentDetailResponse getTalentById(UUID id) {
        TalentProfile profile = talentProfileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Talent non trouvé avec l'id : " + id));
        return mapToDetail(profile);
    }

    @Transactional
    public TalentDetailResponse updateProfile(UUID talentId, UUID userId, UpdateTalentProfileRequest request) {
        TalentProfile profile = talentProfileRepository.findById(talentId)
                .orElseThrow(() -> new RuntimeException("Talent non trouvé avec l'id : " + talentId));

        if (!profile.getUser().getId().equals(userId)) {
            throw new RuntimeException("Vous n'êtes pas autorisé à modifier ce profil.");
        }

        if (request.getTitle() != null) profile.setTitle(request.getTitle());
        if (request.getBio() != null) profile.setBio(request.getBio());
        if (request.getLocation() != null) profile.setLocation(request.getLocation());
        if (request.getWebsite() != null) profile.setWebsite(request.getWebsite());
        if (request.getLinkedin() != null) profile.setLinkedin(request.getLinkedin());
        if (request.getGithub() != null) profile.setGithub(request.getGithub());

        TalentProfile updated = talentProfileRepository.save(profile);
        return mapToDetail(updated);
    }

    @Transactional
    public TalentDetailResponse addSkill(UUID talentId, UUID userId, AddSkillRequest request) {
        TalentProfile profile = talentProfileRepository.findById(talentId)
                .orElseThrow(() -> new RuntimeException("Talent non trouvé avec l'id : " + talentId));

        if (!profile.getUser().getId().equals(userId)) {
            throw new RuntimeException("Vous n'êtes pas autorisé à modifier ce profil.");
        }

        // Chercher la compétence, ou la créer si elle n'existe pas
        Skill skill = skillRepository.findByName(request.getName())
                .orElseGet(() -> skillRepository.save(
                        Skill.builder().name(request.getName()).build()
                ));

        // Ajouter la compétence au profil (le Set évite les doublons)
        profile.getSkills().add(skill);

        TalentProfile updated = talentProfileRepository.save(profile);
        return mapToDetail(updated);
    }

    private TalentSummaryResponse mapToSummary(TalentProfile profile) {
        return TalentSummaryResponse.builder()
                .id(profile.getId())
                .name(profile.getUser().getEmail())
                .title(profile.getTitle())
                .location(profile.getLocation())
                .image(null)
                .build();
    }

    private TalentDetailResponse mapToDetail(TalentProfile profile) {
        List<String> skillNames = profile.getSkills().stream()
                .map(Skill::getName)
                .collect(Collectors.toList());

        return TalentDetailResponse.builder()
                .id(profile.getId())
                .email(profile.getUser().getEmail())
                .title(profile.getTitle())
                .bio(profile.getBio())
                .location(profile.getLocation())
                .website(profile.getWebsite())
                .linkedin(profile.getLinkedin())
                .github(profile.getGithub())
                .skills(skillNames)
                .build();
    }
}