import LinkIcon from './link-icon'
import Image from "next/image";

export default function ExternalLinks()
{
    return (
        <div className={""}>
            <ul className="font-sm flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <li>
                    <a
                        className="flex items-center p-2 rounded-lg general-anchor"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/guillemsrr"
                    >
                        <LinkIcon
                            path={"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"}
                        />
                        <p className="ml-2">github</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center p-2 rounded-lg general-anchor"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://guillem-serra.itch.io/"
                    >
                        <Image
                            src="/itchio.svg"
                            alt="Itch.io"
                            width={24}
                            height={24}
                            className="dark:invert transition-all"
                        />
                        <p className="ml-2">itch</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center p-2 rounded-lg general-anchor"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.behance.net/guillemserra"
                    >
                        <Image
                            src="/behance.svg"
                            alt="Behance"
                            width={24}
                            height={24}
                            className="dark:invert transition-all"
                        />

                        <p className="ml-1">behance</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center p-2 rounded-lg general-anchor"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/guillemserralorenz/"
                    >
                        <LinkIcon
                            path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                        />
                        <p className="ml-2">linkedin</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}