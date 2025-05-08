export function Tag({children}: { children: React.ReactNode })
{
    return (
        <span className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-sm inline-block">
            {children}
        </span>
    );
}