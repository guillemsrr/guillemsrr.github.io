﻿'use client';

import {useMemo, useState} from "react";
import {ProjectCard} from "@app/(projects)/projects/projectCard";
import type {Project} from "@app/(projects)/projectsData";

const FILTERS = ['all', 'Open Source', 'Unreal Engine', 'Unity', 'OpenGL, SDL, Raylib', 'Godot', 'Jam'];

export function Projects({projects}: { projects: Project[] })
{
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = useMemo(() =>
    {
        if (activeFilter === 'all')
        {
            return projects;
        }

        if (activeFilter === 'Open Source')
        {
            return projects.filter(project => project.isOpenSourced);
        }

        return projects.filter(project =>
        {
            const tags: string[] = project.tags?.split(',').map(tag => tag.trim()) || [];
            if (activeFilter.includes(','))
            {
                const group = activeFilter.split(',').map(tag => tag.trim());
                return tags.some(tag => group.includes(tag));
            }

            return tags.includes(activeFilter);
        });

    }, [activeFilter, projects]);

    return (
        <div className={""}>
            <div className={"px-2 bg-neutral-50 dark:bg-neutral-700"}>
                {/*<h2 className={"pb-1"}>Filters:</h2>*/}
                <div className={"mb-6 flex flex-wrap gap-2 sm:gap-4 p-2 "}>
                    {FILTERS.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg transition-colors duration-200 ${
                                activeFilter === filter
                                    ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                                    : 'text-gray-900 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-500 bg-gray-300 dark:bg-gray-800'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 items-start">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project}/>
                ))}
            </div>
        </div>
    );
}