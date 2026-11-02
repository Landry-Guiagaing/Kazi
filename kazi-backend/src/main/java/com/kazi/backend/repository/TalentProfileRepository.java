package com.kazi.backend.repository;

import com.kazi.backend.entity.TalentProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface TalentProfileRepository extends JpaRepository<TalentProfile, UUID> {

    Optional<TalentProfile> findByUserId(UUID userId);

    @Query("""
        SELECT DISTINCT p FROM TalentProfile p
        LEFT JOIN p.skills s
        WHERE (:skill IS NULL OR s.name = :skill)
        AND (:location IS NULL OR p.location LIKE %:location%)
        AND (:title IS NULL OR p.title LIKE %:title%)
        """)
    List<TalentProfile> searchTalents(
            @Param("skill") String skill,
            @Param("location") String location,
            @Param("title") String title
    );
}