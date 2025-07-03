export default function PackagesLayout({children}: { children: React.ReactNode })
{
    return (
        <div className={"mx-auto max-w-7xl"}>
            {children}
            
            <div className={"prose"}>
                Check out the rest of the projects on my <a href={"/projects"}>projects page</a>!
            </div>
        </div>
    );
}