import Image from 'next/image'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import {CustomMDX} from "@components/mdx";

async function getAboutMdx()
{
    const filePath = path.join(process.cwd(), 'src/app/about/about.mdx');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const {content} = matter(fileContent);
    return content;
}

export default async function About()
{
    const aboutMdx = await getAboutMdx();

    return (
        <section id="about">
            <h1 className="text-2xl font-semibold tracking-tighter">
                About
            </h1>
            <div className="prose prose-neutral dark:prose-invert">
                <div className="flex flex-col md:flex-row gap-8">
                    <Image
                        alt="Guillem Serra"
                        src="/images/foto_Guillem.jpg"
                        width={100}
                        height={100}
                        priority
                        className="rounded-full bg-neutral-100 dark:bg-neutral-800"
                    />
                    <div className="flex flex-col gap-6">
                        <p className="mb-4">
                            {`
I’m a game programmer with 5+ years of experience using Unreal Engine (C++) and Unity, on projects ranging from indie solo development to collaborative studio teams. Committed to writing scalable, efficient code grounded in established design principles and robust software architectures. I’m always looking to expand my knowledge and skills while creating meaningful and impactful games.                 `}
                        </p>
                    </div>
                </div>
                <CustomMDX source={aboutMdx}/>
            </div>
        </section>

    )
}