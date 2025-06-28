import React from "react";
import Link from "next/link";
import SelectedProjects from "@app/(projects)/SelectedProjects";
import {imageBaseUrl} from "@components/globals";
import Image from "next/image";

export default function MainPage()
{
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center gap-10">
                <Image
                    alt="Guillem Serra"
                    src={imageBaseUrl + "/images/foto_Guillem.png"}
                    width={350}
                    height={250}
                    className="rounded-4xl object-cover shadow-lg"
                />

                <div className="max-w-xl">
                    <h1 className="text-3xl font-bold leading-snug">
                        Hi! I'm Guillem Serra, a video games programmer with 6+ years of experience in Unreal C++ and
                        Unity.
                    </h1>
                    <p className="mt-8 text-l">
                        Studio-born, indie-hardened, driven to create interactive experiences that strive to leave a
                        mark.
                    </p>
                    <p className="mt-4 text-l">
                        I'm open to meaningful and challenging collaborations.
                    </p>
                    <p className="text-l">
                        Feel free to reach out!
                    </p>

                    <div className={"py-4 gap-4 flex flex-wrap"}>
                        <Link
                            href="mailto:guillemserra.dev@gmail.com"
                            className="email-button inline-block px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                        >
                            Email me
                        </Link>
                        <a
                            href={imageBaseUrl + "/CV_GuillemSerra_GameProgrammer.pdf"}
                            download
                            className="email-button inline-block px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

            <div className={"!mt-8 mb-16"}>
                <h2 className={"!text-3xl"}>
                    Selected projects:
                </h2>
                <p className={"!mt-4 !mb-8"}>
                    Check out the rest of my projects if you're interested!
                </p>
                <SelectedProjects/>
            </div>
        </div>
    )
}