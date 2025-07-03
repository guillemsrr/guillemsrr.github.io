import {DescriptionProject} from "@app/(projects)/(packages)/descriptionProject";

export default async function UnityProjects()
{
    return (
        <div>
            <div className={"prose mb-8"}>
                <h2>Unity Development</h2>
                <p>
                    My first professional experiences in the video game industry are with Unity. I've built gameplay systems, 
                    procedural generation tools, UI/UX architecture for both mobile and VR devices.
                    Most of this portfolio work was developed in solo or small-team environments, 
                    with an emphasis on clean code, scalability, and experimenting with systems thinking through
                    personal projects and game jams.
                </p>
                <p>
                    While my current focus is Unreal Engine, I remain highly proficient in Unity and open to
                    contributing to Unity-based projects.
                    I'm comfortable with both OOP and ECS/DOTS.
                </p>
                <p>
                    Below is a selection of Unity-based projects showcasing my skills,
                    mainly for game jams and procedural generation experiments.
                </p>
            </div>
            <DescriptionProject projectSlug="wfc-unity">
                <div>
                    <h3>Procedural Generation experiment</h3>
                    <p>
                        Implemented this procgen algorithm in Unity for cell-based level generation.
                        Focused on constraint propagation, pattern entropy, and runtime visualization.
                    </p>
                    <p>
                        I created different projects to keep improving my skills and understanding of the algorithm,
                        while participating in different PROCGEN jams.
                    </p>
                </div>
            </DescriptionProject>

            <DescriptionProject projectSlug="wfc-godot">
                <div>
                    <h3>Procedural Generation (again?) yup, but now in Godot (C#)</h3>
                    <p>
                        Ported the WFC algorithm to Godot to test the engine and reuse my C# skills.
                        This time I wanted to create some type of game so I came up with the idea of infinite jigsaw
                        puzzles, using any image provided.
                    </p>
                </div>
            </DescriptionProject>

            <DescriptionProject projectSlug="threaded-loop">
                <div>
                    <h3>Puzzle Game made in 48h</h3>
                    <p>
                        A minimal puzzle game where players must account for recursive actions and future
                        states. Designed to challenge players’ foresight and planning, built in under 48h solo.
                    </p>
                    <p>
                        Jams are a great way to improve my Unity skills and create fun projects.
                    </p>
                </div>
            </DescriptionProject>

            <DescriptionProject projectSlug="mvc">
                <div>
                    <h3>Software architecture pattern Implementation</h3>
                    <p>
                        Implemented the Model-View-Controller pattern in Unity through a user task editor prototype.
                        Demonstrated separation of concerns and clean UI logic communication for scalable application
                        design.
                    </p>
                </div>
            </DescriptionProject>

            <DescriptionProject projectSlug="concrete">
                <div>
                    <h3>Gameplay programming, Vertical Slice</h3>
                    <p>
                        Designed and implemented a prototype of a puzzle-adventure game made in University, in a small
                        team.
                    </p>
                    <p>
                        The game wasn't continued after university, but was a great learning experience; particularly
                        for
                        designing a scalable architecture for mechanics with interactable elements,
                        Iks, Game/Level design, and as scene lighting.
                    </p>
                </div>
            </DescriptionProject>

            <DescriptionProject projectSlug="marwan">
                <div>
                    <h3>Narrative Interactive experience</h3>
                    <p>
                        A reflective narrative game developed for a jam, portraying a father guiding his son, Marwan,
                        through a refugee journey across the sea. The experience blends real-time boat control with
                        branching dialogue and emotional storytelling.
                    </p>
                    <p>

                    </p>
                </div>
            </DescriptionProject>

            <DescriptionProject projectSlug="time-for-democracy">
                <div>
                    <h3>Short game made with a political theme</h3>
                    <p>
                        Explored a conceptual game design with symbolic mechanics and minimalistic game feel.
                        I wanted to create use my programming skills for steering behaviors and units movement.
                    </p>
                    <p>
                        Made for a game design class where the teacher asked for "a game that featured time in some
                        way".
                        My young political mind couldn't think about anything else than this "time domaining"
                        history-twisting era.
                    </p>
                </div>
            </DescriptionProject>
        </div>
    );
}