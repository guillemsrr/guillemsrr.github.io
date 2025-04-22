'use client'
import Link from 'next/link'

const navItems = {
  '#about': {
    name: 'about',
  },
  '#work': {
    name: 'work',
  },
  '#projects': {
    name: 'projects',
  },
  '#skills': {
    name: 'skills',
  },
}

export function Navbar() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const section = document.querySelector(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // Offset for navbar height
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black py-4 -mx-2 px-2 shadow-sm mb-16">
      <div className="flex">
        <div className="flex flex-row space-x-2">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <a
                key={path}
                href={path}
                onClick={(e) => scrollToSection(e, path)}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-4 m-1 font-medium capitalize"
              >
                {name}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}