import Image from 'next/image'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import {CustomMDX} from "@components/mdx";

async function getAboutMdx()
{
    const filePath = path.join(process.cwd(), 'src/app/about/about.mdx');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    //const {content} = matter(fileContent);
    return fileContent;
}

export default async function About()
{
    const aboutMdx = await getAboutMdx();

    return (
        <section id="about">
            <h2 className="font-bold text-3xl mb-8 tracking-tighter">
                About me
            </h2>
            <div className="prose prose-neutral">
                <div className="flex flex-col md:flex-row gap-8">

                    <Image
                        alt="Guillem Serra"
                        src="/images/foto_Guillem.png"
                        width={250}
                        height={100}
                        className="flex-grow object-cover"
                    />
                    <div className="flex flex-col gap-6 flex-shrink">
                        <p className="mb-4">{`
I’m a programmer with 5+ years of experience using Unreal Engine (C++) and Unity, on projects ranging from indie solo development to collaborative studio teams. Committed to writing scalable & efficient code focusing on establishing design principles and building robust software architectures. I’m always looking to expand my knowledge and skills while creating meaningful and impactful experiences.                   
                        `}</p>
                    </div>
                </div>
                <CustomMDX source={aboutMdx}/>
            </div>
        </section>

    )
}