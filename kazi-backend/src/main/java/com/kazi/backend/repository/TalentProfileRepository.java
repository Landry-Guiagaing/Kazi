package com.kazi.backend.repository;

import com.kazi.backend.entity.TalentProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface TalentProfileRepository extends JpaRepository<TalentProfile, UUID> {
    Optional<TalentProfile> findByUserId(UUID userId);
}