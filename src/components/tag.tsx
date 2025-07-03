export function Tag({
                        children,
                        bgColor = 'bg-gray-300 dark:bg-gray-700',
                    }: {
    children: React.ReactNode;
    bgColor?: string;
})
{
    return (
        <span className={`px-3 py-1 rounded-full text-sm inline-block text-black dark:text-white ${bgColor}`}>
      {children}
    </span>
    );
}