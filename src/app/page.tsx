import Projects from "@app/(projects)/projects";
import ProfessionalExperience from "@app/(professional-experience)/professional-experience";
import About from "@app/about/about";


export default function MainPage()
{
    return (
        <div>
            <About/>
            <ProfessionalExperience/>
            {/*<Projects/>*/}
        </div>
    )
}