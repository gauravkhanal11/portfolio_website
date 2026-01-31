import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Blogs } from "@/components/blogs"
import { Introduction } from "@/components/introduction"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
        }}
      >
        <div className="relative text-center px-4 text-white">
          <h1 className="text-white font-normal leading-3 text-4xl mb-3 mt-14">gauravkhanal.com</h1>
          <p className="font-normal leading-7 mb-10 mt-7 text-white text-xl">
            Artificial Intelligence, Backend Engineering, Data Science, Data Analytics, Software Systems, AI Product Features
          </p>
          {/* Dock Section */}
          <div className="text-center mt-16">
            <h3 className="font-semibold text-lg mb-0.5 leading-7 text-[rgba(190,162,112,1)]">Reach out to me</h3>
            <div className="flex justify-center items-center">
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-5 flex gap-7">
                <a
                  href="mailto:gauravkhanal26@gmail.com"
                  className="dock-icon transform transition-all duration-300 hover:scale-150 hover:-translate-y-2"
                >
                  <Image src="/email-icon.png" alt="Email" width={55} height={55} className="rounded-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gaurav-khanal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dock-icon transform transition-all duration-300 hover:scale-150 hover:-translate-y-2"
                >
                  <Image src="/linkedin-icon.png" alt="LinkedIn" width={55} height={55} className="rounded-lg" />
                </a>
                <a
                  href="https://wa.me/13435983630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dock-icon transform transition-all duration-300 hover:scale-150 hover:-translate-y-2"
                >
                  <Image src="/whatsapp-icon-new.png" alt="WhatsApp" width={55} height={55} className="rounded-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Stats />
      <Introduction />
      {/* Other Sections */}
      <div className="container mx-auto px-4">
        <Services />
        <Blogs />
      </div>
      {/* New Section with Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[400px] flex items-center justify-center mx-0 flex-col py-0 mt-20 mb-0"
        style={{
          backgroundImage: "url('/projects-background.jpeg')",
        }}
      >
        <div className="relative text-center px-4 text-white">
          <h2 className="text-4xl font-bold mb-4 text-white">Projects</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-slate-300">
            My personal projects which covers technology areas such as Machine Learning, Backend Engineering, and Simulations
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="text-[#bea270] border-[#bea270] hover:bg-[#bea270] hover:text-white active:bg-[#bea270]/90 bg-transparent group"
          >
            <a href="/projects" className="flex items-center gap-2">
              Have a Look
            </a>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}
