"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter, usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleNavLinkClick = (sectionId: string) => {
    if (pathname !== "/") {
      router.push(`/#${sectionId}`)
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const handleProjectsClick = () => {
    router.push("/projects")
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0"></Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavLinkClick("services")}
              className="text-white hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleNavLinkClick("works")}
              className="text-white hover:text-primary transition-colors"
            >
              Blogs
            </button>
            <button onClick={handleProjectsClick} className="text-white hover:text-primary transition-colors">
              Projects
            </button>
            <Button onClick={() => handleNavLinkClick("hero-section")}>Contact</Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-4">
              <button
                onClick={() => handleNavLinkClick("services")}
                className="text-white hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleNavLinkClick("works")}
                className="text-white hover:text-primary transition-colors text-left"
              >
                Blogs
              </button>
              <button
                onClick={handleProjectsClick}
                className="text-white hover:text-primary transition-colors text-left"
              >
                Projects
              </button>
              <Button className="w-full" onClick={() => handleNavLinkClick("hero-section")}>
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
