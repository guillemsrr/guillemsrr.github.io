import {DescriptionProject} from "@app/(projects)/(packages)/descriptionProject";

export default async function UnrealProjects()
{
    return (
        <div>
            <div className={"prose mb-8"}>
                <h1>Unreal Engine Development</h1>
                <p>
                    Over the past years I’ve worked extensively with Unreal Engine across a variety of
                    roles, from gameplay systems programming to tooling UI and AI, always with a strong focus on code
                    architecture, scalability, and production-ready workflows.
                </p>
                <p>
                    I've contributed both as a solo developer and within multidisciplinary AA teams, taking ownership of
                    major features, developing in-editor tools to streamline workflows, and implementing scalable runtime architectures
                    for complex player interactions, procedural content, and reactive audio/AI systems.
                </p>
                <p>
                    Below is a selection of Unreal-based projects that reflect different aspects of my work, from
                    commercial game development to simple prototypes and game jam explorations.
                </p>
            </div>
            <DescriptionProject projectSlug="soliloquy">
                <div>
                    <h3>Generalist programmer</h3>
                    <p>
                        This is my first attempt into making a full-fledged commercial game with a small
                        multi-disciplinary team.
                        After working for more than 2 years on it, although we couldn't finally release the game due to
                        overscope and budget,
                        everything I learnt on the process is basically priceless. General architecture, planning, team
                        leading, design...
                        I'm very proud of the final product and I hope to continue working on it in the future.
                    </p>
                    <ul>
                        <li>3Cs, gameplay systems, procgen world</li>
                        <li>UI (CommonUI)</li>
                        <li>Audio (MetaSounds, dynamic SFX)</li>
                        <li>AI (State Trees)</li>
                    </ul>
                    <p>
                        It is not open source but I'll be happy to show anything you may be interested in.
                    </p>
                </div>
            </DescriptionProject>

            <DescriptionProject projectSlug="vgscript">
                <div>
                    <h3>Tools programmer, UE Plugin</h3>
                    <p>
                        Developed this plugin to integrate narrative scripts directly into the
                        Unreal Editor, supporting actions data parsing and localization systems.
                    </p>
                    <p>
                        I'll document it better when I have more time, and create a simple walkthrough demo in the
                        future.
                    </p>
                </div>
            </DescriptionProject>

            <DescriptionProject projectSlug="snake">
                <div>
                    <h3>Low-level C++ OpenGL exploration</h3>
                    <p>
                        A real-time 3D snake implementation using SDL3 and OpenGL, featuring pathfinding and simple
                        audio synths.
                    </p>
                    <p>
                        I developed this project to deepen my understanding of low-level rendering with OpenGL and to
                        sharpen my C++ skills without using Unreal Engine. Next stop, multithreading!
                    </p>
                </div>
            </DescriptionProject>

            <DescriptionProject projectSlug="archer">
                <div>
                    <h3>Gameplay programmer, Top-down prototype</h3>
                    <p>
                        Developed an event-driven state machine in Unreal Engine C++ to manage player locomotion and
                        actions, as part of a self-initiated system architecture exploration.
                    </p>
                </div>
            </DescriptionProject>

            <DescriptionProject projectSlug="a-void">
                <div>
                    <h3>Solo Game Jam Project – Ludum Dare 50</h3>
                    <p>(48 hour project!)</p>
                    <p>
                        Developed a simple obstacle avoidance game to grow my skills as an UE programmer.
                        The theme of the jam was "delay the inevitable"
                    </p>
                    <p>
                        Designed, coded, and polished the experience solo, demonstrating rapid iteration and end-to-end
                        ownership.
                    </p>
                    <p>
                        I think that's a cool project to expand on, right now the gameplay has room for improvement!"
                    </p>
                </div>
            </DescriptionProject>

            <DescriptionProject projectSlug="cellular-automata">
                <div>
                    <h3>Raylib C++ Prototype</h3>
                    <p>
                        For a long time I wanted to try out the "Conway's Game of Life" algorithm, so it was time to
                        show my skills as a C++ developer
                        and built a version of it in 3D using Raylib for the first time (second, actually).
                    </p>
                </div>
            </DescriptionProject>
        </div>
    );
}