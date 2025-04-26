import ProfessionalExperience from "@app/(professional-experience)/professional-experience";
import About from "@app/about/about";
import Projects from "@app/(projects)/projects/projects";

export default function MainPage()
{
    return (
        <div>
            <About/>
            <div className="mb-32"/>
            <ProfessionalExperience/>
            {/*<Projects/>*/}
        </div>
    )
}