﻿import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import {CustomMDX} from "@components/mdx";
import MDXImage from "@components/mdx-image";

async function getExperienceMdx()
{
    const filePath = path.join(process.cwd(), 'src/app/(professional-experience)/professional-experience.mdx');

    if (!fs.existsSync(filePath))
    {
        throw new Error(`MDX file not found: ${filePath}`);
    }
    
    const rawSource = await fs.promises.readFile(filePath, 'utf8');
    const {content} = matter(rawSource);
    return content;
}

export default async function ProfessionalExperience()
{
    const content = await getExperienceMdx();

    return (
        <section id="professional-experience">
            <h2 className="font-bold text-3xl mb-8 tracking-tighter">
                Professional Experience
            </h2>
            <div className="prose dark:prose-invert">
                <CustomMDX source={content}/>
            </div>
        </section>
    );
}