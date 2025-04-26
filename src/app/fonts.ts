// app/fonts.ts (create this file if you want to be clean)

import {Montserrat} from 'next/font/google'

export const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap', // optional, for performance
})