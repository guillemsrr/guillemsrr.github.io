export default function PackagesLayout({children}: { children: React.ReactNode })
{
    return (
        <div className={"mx-auto max-w-7xl md:px-4"}>
            {children}
        </div>
    );
}