"use client"

import Image from "next/image"
import Link from "next/link"
import { CardWrapper } from "./ui/card-wrapper"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface BlogProps {
  title: string
  description: string
  image: string
  blogLink: string
  githubLink?: string // githubLink is optional
}

function BlogCard({ title, description, image, blogLink }: BlogProps) {
  return (
    <Link
      href={blogLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform duration-300 ease-in-out hover:scale-110"
    >
      <CardWrapper className="flex flex-col h-full cursor-pointer">
        <div className="relative h-48 mb-4 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="flex-grow min-h-[7rem]">
          <h3 className="text-lg font-semibold mb-2 text-[#bea270] line-clamp-2">{title}</h3>
          <p className="text-sm mb-4 line-clamp-3 text-slate-300">{description}</p>
        </div>
      </CardWrapper>
    </Link>
  )
}

export function Blogs() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false) // To prevent rapid clicks during animation

  const blogsPerPage = 3

  const blogs = [
    {
      title: "Bridging the Gap between Design and Development",
      description:
        "In the world of software product development, two teams: Product Design team and Software Development team often hold ...",
      image: "/blog-design-dev.jpeg",
      blogLink: "https://gauravkhanal1.wordpress.com/2024/10/04/bridging-the-gap-between-design-and-development/",
    },
    {
      title: "The Working of Conversational AI: Voicebots, Chatbots, and Voice Assistants",
      description: "How are these AI voice bots, chatbots and voice assistants exactly built?",
      image: "/blog-conversational-ai.jpeg",
      blogLink:
        "https://gauravkhanal1.wordpress.com/2024/01/12/the-working-of-conversational-ai-voicebots-chatbots-and-voice-assistants/",
    },
    {
      title: "Getting started with Mongo",
      description:
        "An introductory guide which will help you get started with Mongo for everyone , including someone from a non technical background",
      image: "/blog-getting-started-mongo.png",
      blogLink: "https://gauravkhanal1.wordpress.com/2024/05/26/getting-started-with-mongo/",
    },
    {
      title: "Micro Front End Architecture for Software Development",
      description:
        "A software development approach where a large web application is divided into smaller, independently deployable front-end components or ...",
      image: "/blog-micro-fe.png",
      blogLink: "https://gauravkhanal1.wordpress.com/2024/06/01/micro-front-end-architecture-for-software-development/",
    },
    {
      title: "Understanding Natural Language Processing Algorithm",
      description:
        "In this blog, I give you a walkthrough behind how the Natural Language Processing algorithm is built.",
      image: "/blog-understanding-nlp.jpeg",
      blogLink: "https://gauravkhanal1.wordpress.com/2023/12/02/understanding-natural-language-processing-algorithm/",
    },
  ]

  const totalPages = Math.ceil(blogs.length / blogsPerPage)

  const handlePageChange = (newPage: number) => {
    if (isTransitioning || newPage < 1 || newPage > totalPages || newPage === currentPage) {
      return
    }

    setIsTransitioning(true)
    setCurrentPage(newPage)

    // Set a timeout to re-enable clicks after the transition duration
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // This should match the transition duration in CSS
  }

  const handleNextPage = () => handlePageChange(currentPage + 1)
  const handlePrevPage = () => handlePageChange(currentPage - 1)
  const handlePageClick = (pageNumber: number) => handlePageChange(pageNumber)

  return (
    <section className="py-16" id="works">
      <div className="mb-12 text-center">
        <h2 className="font-bold mb-4 text-5xl text-slate-800">Tech Blogs</h2>
        <p className="max-w-2xl text-xl mx-auto text-center px-8 text-slate-400">
          My blogs delve into the intricacies of software development, while exploring the transformative power of data and artificial intelligence
        </p>
      </div>
      <div className="relative flex items-center justify-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevPage}
          disabled={currentPage === 1 || isTransitioning}
          className="absolute left-0 z-10 text-slate-600 hover:text-primary disabled:opacity-50"
        >
          <ChevronLeft size={32} />
        </Button>

        {/* Viewport for the slider */}
        <div className="overflow-hidden w-full py-12 px-8">
          {/* Sliding track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentPage - 1) * 100}%)` }}
          >
            {Array.from({ length: totalPages }, (_, pageIndex) => {
              const pageStartIndex = pageIndex * blogsPerPage
              const pageEndIndex = pageStartIndex + blogsPerPage
              const pageBlogs = blogs.slice(pageStartIndex, pageEndIndex)

              return (
                <div
                  key={pageIndex}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 flex-shrink-0 w-full px-4"
                >
                  {pageBlogs.map((blog, index) => (
                    <BlogCard key={pageStartIndex + index} {...blog} />
                  ))}
                </div>
              )
            })}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleNextPage}
          disabled={currentPage === totalPages || isTransitioning}
          className="absolute right-0 z-10 text-slate-600 hover:text-primary disabled:opacity-50"
        >
          <ChevronRight size={32} />
        </Button>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            variant="outline"
            size="icon"
            onClick={() => handlePageClick(i + 1)}
            disabled={isTransitioning}
            className={`
              ${
                currentPage === i + 1
                  ? "bg-[#bea270] text-white border-[#bea270]"
                  : "text-[#bea270] border-[#bea270] bg-transparent"
              }
              hover:bg-[#bea270] hover:text-white transition-colors duration-200
            `}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </section>
  )
}
