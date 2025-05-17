import LinkIcon from "@app/(header)/link-icon";

export default function Footer()
{
    return (
        <footer className="mb-8">
            <div className={'mt-8 flex flex-col sm:flex-row justify-between gap-4 sm:gap-0'}>
                <p className="text-neutral-600 dark:text-neutral-300 text-center sm:text-left">
                © {new Date().getFullYear()} Guillem Serra. All rights reserved.
                </p>

                
                <div className={"flex items-center justify-center sm:justify-start general-anchor font-sm"}>
                <p className="text-neutral-600 dark:text-neutral-300">made by me</p>

                    <a
                        className="flex items-center gap-1 hover:underline ml-4"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/guillemsrr/guillemsrr.github.io"
                    >
                        <LinkIcon
                            path="M16 18l6-6-6-6M8 6l-6 6 6 6"
                        />
                        <span>source</span>
                    </a>
                </div>

            </div>
        </footer>
    )
}