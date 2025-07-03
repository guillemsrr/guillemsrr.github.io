import type {Metadata} from 'next'
import React from 'react';
import Image from 'next/image';
import {ExperienceEntry} from "@app/(professional-experience)/experienceEntry";
import YouTube from "@components/video-youtube";
import {imageBaseUrl} from "@components/globals";

export const metadata: Metadata = {
    title: 'Professional Experience',
    description: 'Featured projects and work',
}

export default async function ProfessionalExperiencePage()
{
    return (
        <div>
            <h2 className="font-bold text-2xl mb-8 tracking-tighter">
                Professional Experience
            </h2>

            <ExperienceEntry
                title="Senior Unreal Engine developer"
                experienceSlug={"noumen"}
                visual={<YouTube id="SEum9lRKIkM"/>}
            />
            <ExperienceEntry
                title="Unreal Engine programmer"
                experienceSlug={"piccolo"}
                visual={<YouTube id="s0riRDvgBss"/>}

            />
            <ExperienceEntry
                title="Procgen React developer"
                experienceSlug={"pluno"}
                visual={<Image
                    alt="Generation image"
                    src={imageBaseUrl + "/images/pluno.png"}
                    width={400}
                    height={400}
                    className="my-8"
                />}
            />
            <ExperienceEntry
                title="Unity developer"
                experienceSlug={"innovamat"}
                visual={<YouTube id={"BVKrfDID4UE"}/>}
            />
            <ExperienceEntry
                title="Junior Unity VR developer"
                experienceSlug={"beworld"}
            />
        </div>
    );
}