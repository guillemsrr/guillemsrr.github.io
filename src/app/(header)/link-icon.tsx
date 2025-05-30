﻿export default function LinkIcon({path}: { path: string })
{
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d={path}
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
    )
}