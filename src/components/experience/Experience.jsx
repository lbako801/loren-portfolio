import React from 'react';
import './experience.css';

const Experience = () => {
    const experiences = [
        {
            year: '2025-NOW',
            title: 'Systems Manager',
            company: '@ AMC Acquisitions Group',
            description: 'Leading the development and implementation of business systems, focusing on process optimization and digital transformation.',
            details: [
                'Manage all software for the group.',
                'Lead Business Central implementations and develop internal tools',
                'Digitize and modernize business processes'
            ]
        },
        {
            year: '2023-2025',
            title: 'Application Specialist/Developer',
            company: '@ Gerflor',
            description: 'Sole North American developer at Gerflor Group, handling all development tasks. Also helped with IT support and training.',
            details: [
                'Full-stack experience with proprietary PHP framework and SQL databases (2000+)',
                'Built financial tools with SWIFT integration; maintained legacy VB and ERP systems',
                'Developed and maintained large web apps and data warehouses',
                'Automated processes and collaborated across departments',
                'Skilled in AL development for Business Central; built 30+ custom APIs',
                'Extended BC with custom pages, fields, controls, and inventory logic',
                'Deep understanding of finance, purchasing, sales, inventory, production, and ISVs'
            ]
        },
        {
            year: '2006...ish',
            title: "The Beginning",
            // company: 'Myself',
            description: 'Started early at 8 years old with an internet connection, too much free time, and no supervision. Learned Lua by modifying Garry\'s Mod and built HTML/CSS pages for users on GaiaOnline.',
            details: [
                'Created underwhelming mods with overwhelming confidence',
                'Traded GaiaOnline profile layouts for in-game currency... no regrets',
            ]  
        },
    ];

    return (
        <section className="experience-section" id="experience">
            <div className="timeline-container">
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot" data-year={exp.year}></div>
                            <div className="timeline-content">
                                <h3>{exp.title}</h3>
                                <h4>{exp.company}</h4>
                                {/* <h5>{exp.year}</h5> */}
                                <p>{exp.description}</p>
                                <div className="expanded-details">
                                    <ul>
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience; 