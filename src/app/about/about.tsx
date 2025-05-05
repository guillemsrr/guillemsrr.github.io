import Image from 'next-export-optimize-images/image'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import {CustomMDX} from "@components/mdx";

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
                <div className="prose prose-neutral dark:prose-invert">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="relative w-full md:w-2/3 aspect-square">
                            <Image
                                src="/images/foto_Guillem.png"
                                alt="Guillem Serra"
                                fill
                                loading="lazy"
                                className="object-cover rounded-4xl shadow"
                            />
                        </div>
                        <div className="flex flex-col gap-4 flex-shrink">
                            <p>
                                I’m Guillem Serra, a video game programmer with over 5 years of experience using Unreal
                                Engine (C++) and Unity. My work spans solo indie projects to collaborative studio teams.
                            </p>
                            <p>
                                I care deeply about building reliable, maintainable software that enables creativity —
                                whether through gameplay mechanics, editor extensions, or procedural systems. I strive
                                to bridge technical excellence with design intent, bringing ideas to life in ways that
                                are elegant, efficient, and expressive.
                            </p>
                            <p>
                                I’m driven by curiosity and constant learning, and I thrive in environments where
                                technical challenge meets artistic ambition.
                            </p>
                        </div>
                    </div>
                    <CustomMDX source={aboutMdx}/>
                </div>
            </section>
        </div>
    );
}