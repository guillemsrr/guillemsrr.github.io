import Image from 'next-export-optimize-images/image'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import {CustomMDX} from "@components/mdx";
import React from "react";

async function getAboutMdx()
{
    const filePath = path.join(process.cwd(), 'src/app/about/about.mdx');
    if (!fs.existsSync(filePath))
    {
        throw new Error(`MDX file not found: ${filePath}`);
    }

    const rawSource = await fs.promises.readFile(filePath, 'utf8');
    const {content} = matter(rawSource);
    return content;
}

export default async function About()
{
    const aboutMdx = await getAboutMdx();

    return (
        <div className="mx-0">
            <section id="about">
                <h2 className="font-bold text-3xl mb-8 tracking-tighter">
                    About Me
                </h2>
                <div className="prose">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="relative w-full md:w-2/3 aspect-square">
                            <Image
                                src="/images/foto_Guillem.png"
                                alt="Guillem Serra"
                                fill
                                loading="lazy"
                                className="object-cover rounded-3xl shadow-lg"
                            />

                        </div>
                        <div className="flex flex-col">
                            <p>
                                I’m Guillem Serra, a video game developer with over 5 years of experience using Unreal
                                Engine (C++) and Unity.
                            </p>
                            <p>
                                I build systems with scalability in mind, whether it's gameplay mechanics, editor tools,
                                UI logic, or
                                procedural generation; designed to boost team productivity and enhance the player
                                experience. My goal is to turn design intent into expressive, efficient, and
                                maintainable code.
                            </p>
                            <p>
                                I'm driven by passion for my craft and a constant desire to learn and grow, both
                                individually and alongside my team. I thrive where technical challenges meet artistic
                                ambition.
                            </p>
                            <div>
                                <a
                                    href="/CV_GuillemSerra.pdf"
                                    download
                                    className="email-button px-4 py-2 rounded-lg bg-gray-600 text-white dark:text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                    <CustomMDX source={aboutMdx}/>
                </div>
            </section>
        </div>
    );
}