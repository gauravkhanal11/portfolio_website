import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Navbar } from "@/components/navbar" // Import Navbar
import { Footer } from "@/components/footer" // Import Footer

export default function ProductHubPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar /> {/* Use Navbar component */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-3 px-11">
            <h1 className="mb-8 leading-tight text-slate-800 font-semibold text-4xl">
              This led to my first Product Management Interview
              <br />
            </h1>
            <p className="mb-6 text-slate-400 text-base">
              {
                "Product Management is a highly competitive field, with a typical PM to developer ratio between 1:6 to 1:20. This means every opening gets flooded with qualified applicants. Standing out without any solid Product Experience requires more than just checking the boxes. My strategy was to lean into my UI/UX strengths alongside my product thinking. Instead of submitting a standard feature breakdown or product specs for my recruitment assignment, I went the extra mile by including full-fledged designs to communicate the user journey and product experience visually."
              }
            </p>
            <p className="text-lg mb-6 text-slate-400">{""}</p>
            <p className="mb-8 text-slate-400 text-base">
              {
                "This effort made all the difference. The submission I’m sharing here helped me stand out. While I see a lot of improvements in this today, this was enough to get called up to an interview for an entry-level role as an Associate Product Manager."
              }
            </p>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-[#bea270] border-[#bea270] hover:bg-[#bea270] hover:text-white active:bg-[#bea270]/90 bg-transparent group"
              >
                <a
                  href="https://drive.google.com/drive/folders/1U6J9pfut1rnxUHNgxMKp1DX_nESwvbkd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Presentation
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-[#bea270] border-[#bea270] hover:bg-[#bea270] hover:text-white active:bg-[#bea270]/90 bg-transparent group"
              >
                <a
                  href="https://xd.adobe.com/view/0090bfcf-0034-4bd8-80b7-f8d3242f2154-55c3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Designs
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Mobile Phone Image */}
          <div className="flex justify-center lg:justify-start lg:col-span-2">
            <div className="relative w-[180px] h-[360px] md:w-[210px] md:h-[420px] lg:w-[240px] lg:h-[480px]">
              <Image
                src="/product-hub-job-offer-design.png"
                alt="Mobile phone displaying product UI design"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </main>
      {/* New Section for Google Sheet Icon and Description */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <a
            href="https://docs.google.com/spreadsheets/d/10hbzPgbozAFC9J80fFrXM4tdNXdR_OInZSqxpFcsrkk/edit?gid=1274515555#gid=1274515555"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 rounded-lg p-6 flex flex-col cursor-pointer
                   hover:border-[#bea270] hover:bg-[#bea270]/10 transition-colors duration-200 group"
          >
            <div className="relative w-24 h-24 mb-4 mx-auto">
              <Image src="/product-hub-google-sheet-icon.png" alt="Google Sheet Icon" fill className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-[#bea270] transition-colors text-center">
              Spreadsheet for PMs
            </h3>
            <p className="mb-4 text-left flex-grow text-base text-slate-400">
              {
                "Here’s a sample spreadsheet to track engineering tasks. In real-world scenarios, you’ll likely use more robust tools like Jira or ClickUp for task management. So, you don’t need to rely on spreadsheets like this to stay organized. That said, the real value of this sheet lies in the formulas and visualizations I’ve embedded. I’ve included some of the most commonly used formulas for data wrangling and visualizations. The tracking tool itself is just a gimmick. Use this as a reference to practice, investigate, and master these functions. "
              }
            </p>
          </a>
          {/* Card 2 */}
          <a
            href="https://drive.google.com/drive/folders/1QPmVoWJS32Qx_sIEKSy31rBRk31Oga4a" // Reverting to placeholder link
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 rounded-lg p-6 flex flex-col cursor-pointer
                   hover:border-[#bea270] hover:bg-[#bea270]/10 transition-colors duration-200 group"
          >
            <div className="relative w-24 h-24 mb-4 mx-auto">
              <Image src="/product-hub-prd-icon.png" alt="PRD Icon" fill className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-[#bea270] transition-colors text-center">
              PRD Sample
            </h3>
            <p className="mb-4 text-left flex-grow text-base text-slate-400">
              {
                "Crafting Product Requirement Document a.k.a PRD is one of the most important tasks of a Product Manager. Here is a sample of a PRD document."
              }
            </p>
          </a>
        </div>
      </section>
      <Footer /> {/* Use Footer component */}
    </div>
  )
}
