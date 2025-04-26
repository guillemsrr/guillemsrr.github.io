import type {Metadata} from 'next'
import ProfessionalExperience from "@app/(professional-experience)/professional-experience";

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Featured projects and work',
}

export default function ProfessionalExperiencePage()
{
    return (
        <ProfessionalExperience/>
    )
}