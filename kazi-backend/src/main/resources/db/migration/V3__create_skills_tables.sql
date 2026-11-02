CREATE TABLE skills (
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE talent_skills (
    talent_profile_id UUID NOT NULL,
    skill_id UUID NOT NULL,
    PRIMARY KEY (talent_profile_id, skill_id),
    CONSTRAINT fk_ts_talent FOREIGN KEY (talent_profile_id) REFERENCES talent_profiles(id) ON DELETE CASCADE,
    CONSTRAINT fk_ts_skill FOREIGN KEY (skill_id) REFERENCES skills(id) ON DELETE CASCADE
);