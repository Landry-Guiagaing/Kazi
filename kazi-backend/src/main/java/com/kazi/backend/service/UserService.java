package com.kazi.backend.service;

import com.kazi.backend.dto.RegisterRequest;
import com.kazi.backend.dto.UserResponse;
import com.kazi.backend.entity.CompanyProfile;
import com.kazi.backend.entity.TalentProfile;
import com.kazi.backend.entity.User;
import com.kazi.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public UserResponse register(RegisterRequest request) {
        // 1. Vérifier si l'email existe déjà
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Cet email est déjà utilisé.");
        }

        // 2. Hacher le mot de passe
        String hashedPassword = passwordEncoder.encode(request.getPassword());

        // 3. Créer l'utilisateur
        User user = User.builder()
                .email(request.getEmail())
                .password(hashedPassword)
                .role(request.getRole())
                .build();

        // 4. Créer le profil associé (Talent ou Entreprise)
        if ("TALENT".equals(request.getRole())) {
            TalentProfile talentProfile = TalentProfile.builder().user(user).build();
            user.setTalentProfile(talentProfile);
        } else if ("COMPANY".equals(request.getRole())) {
            CompanyProfile companyProfile = CompanyProfile.builder().user(user).build();
            user.setCompanyProfile(companyProfile);
        }

        // 5. Sauvegarder (grâce au cascade, le profil est sauvegardé aussi)
        User savedUser = userRepository.save(user);

        // 6. Retourner le DTO de réponse
        return UserResponse.builder()
                .id(savedUser.getId())
                .email(savedUser.getEmail())
                .role(savedUser.getRole())
                .build();
    }
}