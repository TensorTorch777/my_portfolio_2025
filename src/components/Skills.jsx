import React from 'react';
import {
    BACKEND_SKILL,
    FRONTEND_SKILL,
    FULLSTACK_SKILL,
    OTHER_SKILL,
    SKILL_DATA,
} from '../constants';
import SkillDataProvider from './SkillDataProvider';

const Skills = () => {
    return (
        <section
            id="skills"
            className="skills-section"
            style={{ transform: "scale(0.9)" }}
        >
            <div className="skills-header">
                <h2 className="skills-title">
                    Making apps with modern technologies.
                </h2>
                <p className="skills-subtitle cursive">
                    Never miss a task, deadline or idea.
                </p>
            </div>

            <div className="skills-row">
                {SKILL_DATA.map((skill, i) => (
                    <SkillDataProvider
                        key={skill.skill_name}
                        src={skill.image}
                        name={skill.skill_name}
                        width={skill.width}
                        height={skill.height}
                        index={i}
                    />
                ))}
            </div>

            <div className="skills-row">
                {FRONTEND_SKILL.map((skill, i) => (
                    <SkillDataProvider
                        key={skill.skill_name}
                        src={skill.image}
                        name={skill.skill_name}
                        width={skill.width}
                        height={skill.height}
                        index={i}
                    />
                ))}
            </div>
            <div className="skills-row">
                {BACKEND_SKILL.map((skill, i) => (
                    <SkillDataProvider
                        key={skill.skill_name}
                        src={skill.image}
                        name={skill.skill_name}
                        width={skill.width}
                        height={skill.height}
                        index={i}
                    />
                ))}
            </div>
            <div className="skills-row">
                {FULLSTACK_SKILL.map((skill, i) => (
                    <SkillDataProvider
                        key={skill.skill_name}
                        src={skill.image}
                        name={skill.skill_name}
                        width={skill.width}
                        height={skill.height}
                        index={i}
                    />
                ))}
            </div>
            <div className="skills-row">
                {OTHER_SKILL.map((skill, i) => (
                    <SkillDataProvider
                        key={skill.skill_name}
                        src={skill.image}
                        name={skill.skill_name}
                        width={skill.width}
                        height={skill.height}
                        index={i}
                    />
                ))}
            </div>

            <div className="skills-bg-container">
                <div className="skills-video-wrapper">
                    <video
                        className="skills-video"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                    >
                        <source src="/videos/skills-bg.webm" type="video/webm" />
                    </video>
                </div>
            </div>
        </section>
    );
};

export default Skills;
