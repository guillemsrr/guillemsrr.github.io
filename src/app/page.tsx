import React from "react";
import Image from "next/image";
import Link from "next/link";
import Projects from "@app/(projects)/projects/projects";

export default function MainPage()
{
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center gap-10">
                <Image
                    alt="Guillem Serra"
                    src="/images/foto_Guillem.png"
                    width={350}
                    height={250}
                    className="rounded-4xl object-cover shadow-lg"
                />

                <div className="max-w-xl space-y-4">
                    <h1 className="text-3xl font-bold leading-snug">
                        Hi! I'm Guillem Serra, a video game programmer with 5+ years of experience in Unreal C++, and
                        Unity.
                    </h1>
                    <p className="">
                        I specialize in scalable code, clean architecture, and bringing ideas to life through gameplay
                        systems and tools.
                    </p>
                    <p className="mt-4">
                        I'm always open to discussing creative ideas, meaningful projects, or collaborative
                        opportunities.
                        Feel free to reach out!
                    </p>
                        
                    <div className={"py-4"}>
                        <Link
                            href="mailto:guillemserra.dev@gmail.com"
                            className="email-button inline-block px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                        >
                            Email me
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <p className="mt-8">
                    Check out my projects if you're interested!
                </p>
                <p className="mt-4">
                    They range from simple junior games to more complex
                    projects. (Work in progress)
                </p>
                <Projects/>
            </div>
        </div>
    )
}