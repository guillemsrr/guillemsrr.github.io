import React from 'react';
import {Tag} from "@app/(professional-experience)/tag";
import {MDXRemote} from "next-mdx-remote/rsc";

const components = {
    Tag,
}

export function ExperienceMDX({source}: { source: any })
{
    return (
        <MDXRemote source={source} components={components}/>
    );
}