import Image from "next/image";
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import {CustomMDX} from "@components/mdx";
import React from "react";
import {imageBaseUrl} from "@components/globals";

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
                <h1 className="h1">
                    About Me
                </h1>
                <div className="prose">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="relative w-full md:w-2/3 aspect-square">
                            <Image
                                src={imageBaseUrl + "/images/guillem1.jpg"}
                                alt="Guillem Serra"
                                fill
                                loading="lazy"
                                className="object-cover rounded-4xl shadow-lg"
                            />

                        </div>
                        <div className="flex flex-col">
                            <p>
                                I'm Guillem Serra, a video game programmer with over 6 years of professional experience.
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
                            {/*<p>
                                In the picture I almost couldn't open my eyes!!
                            </p>*/}
                        </div>
                    </div>
                    <CustomMDX source={aboutMdx}/>
                </div>
            </section>
        </div>
    );
}