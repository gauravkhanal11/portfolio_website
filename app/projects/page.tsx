import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const techStack = ["Python", "Django", "SQL", "Pandas", "NumPy", "SimPy", "Matplotlib", "AWS"]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="pt-16">
        {/* --- INFINITE TECH STACK SCROLLER --- */}
        <section className="border-y border-slate-100 bg-slate-50/50 py-8 overflow-hidden">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              display: flex;
              width: max-content;
              animation: scroll 25s linear infinite;
            }
          `}</style>
          <div className="relative flex items-center overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="animate-scroll">
              {[...techStack, ...techStack].map((tech, index) => (
                <div key={index} className="flex items-center mx-10">
                  <span className="text-xl font-bold text-slate-400 tracking-widest uppercase italic">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Cryptonode */}
            <a
              href="https://github.com/gauravkhanal11/cryptonode"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-300 rounded-lg p-6 flex flex-col cursor-pointer
                     hover:border-[#bea270] hover:bg-[#bea270]/5 transition-all duration-200 group shadow-sm overflow-hidden"
            >
              {/* Thumbnail Adjusted to Full Width of Container */}
              <div className="relative w-full aspect-[16/9] mb-6 rounded-md overflow-hidden border border-slate-100">
                <Image
                  src="/project_thumbnail_cryptonode.jpg"
                  alt="Crypto node thumbnail"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-[#bea270] transition-colors text-left">
                Cryptonode
              </h3>

              <div className="flex gap-2 mb-6 justify-start">
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  Python
                </span>
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  Django
                </span>
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  REST API
                </span>
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  HTML
                </span>
              </div>

              <p className="mb-4 text-left flex-grow text-base text-slate-500 leading-relaxed">
                {
                  "A website built on top of the Django framework that provides real time data and analytics on the overall crypto market, specific crypto currencies, and news surrounding crypto currency."
                }
              </p>
            </a>

            {/* Card 2: Simulation */}
            <a
              href="https://github.com/gauravkhanal11/Simulation/blob/main/Simulation_AVS_system.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-300 rounded-lg p-6 flex flex-col cursor-pointer
                     hover:border-[#bea270] hover:bg-[#bea270]/5 transition-all duration-200 group shadow-sm overflow-hidden"
            >
              {/* Thumbnail Adjusted to Full Width of Container */}
              <div className="relative w-full aspect-[16/9] mb-6 rounded-md overflow-hidden border border-slate-100">
                <Image
                  src="/project_thumbnail_simulation.jpg"
                  alt="Simulation Thumbnail"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-[#bea270] transition-colors text-left">
                Warehouse storage and retrieval simulation
              </h3>

              <div className="flex gap-2 mb-6 justify-start">
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  Python
                </span>
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  SimPy
                </span>
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  NumPy
                </span>
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  Pandas
                </span>
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  Matplotlib
                </span>
              </div>

              <p className="mb-4 text-left flex-grow text-base text-slate-500 leading-relaxed">
                {
                  "A discrete-event simulation of a warehouse with autonomous vehicles and lift operations to identify improvement areas. The similation model as a Poisson process and the model is translated using SimPy."
                }
              </p>
            </a>

            {/* Card 3: Scrum Tracker */}
            <a
              href="https://docs.google.com/spreadsheets/d/10hbzPgbozAFC9J80fFrXM4tdNXdR_OInZSqxpFcsrkk/edit?gid=1274515555#gid=1274515555"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-300 rounded-lg p-6 flex flex-col cursor-pointer
                     hover:border-[#bea270] hover:bg-[#bea270]/5 transition-all duration-200 group shadow-sm overflow-hidden"
            >
              {/* Thumbnail Adjusted to Full Width of Container */}
              <div className="relative w-full aspect-[16/9] mb-6 rounded-md overflow-hidden border border-slate-100">
                <Image
                  src="/project_thumbnail_excel.jpg"
                  alt="Google Sheet Thumbnail"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-[#bea270] transition-colors text-left">
                Scrum Tracker and Dashboard
              </h3>

              <div className="flex gap-2 mb-6 justify-start">
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  Advanced Excel
                </span>
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  Data Visualization
                </span>
              </div>

              <p className="mb-4 text-left flex-grow text-base text-slate-500 leading-relaxed">
                {
                  "Sometimes Excel/ Google sheets is powerful enough for data cleanup, analysis, and visualizations. We just tend to under estimate it. Here, in this Scrum tracker, I use some advanced Excel formulas which cover these areas when playing around with Data."
                }
              </p>
            </a>

            {/* Card 4: Healthcare */}
            <a
              href="https://github.com/gauravkhanal11/data_analysis/blob/main/Heathcare-Analysis.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-300 rounded-lg p-6 flex flex-col cursor-pointer
                     hover:border-[#bea270] hover:bg-[#bea270]/5 transition-all duration-200 group shadow-sm overflow-hidden"
            >
              <div className="relative w-full aspect-[16/9] mb-6 rounded-md overflow-hidden border border-slate-100">
                <Image
                  src="/project_healthcare_EDA.png"
                  alt="Healthcare Data Analysis Thumbnail"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-[#bea270] transition-colors text-left">
                Healthcare EDA, data cleanup, analysis, and visualization
              </h3>

              <div className="flex flex-wrap gap-2 mb-6 justify-start">
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  Python
                </span>
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  Pandas
                </span>
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  NumPy
                </span>
                <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-[#bea270] text-[#bea270] rounded-md bg-transparent">
                  Matplotlib
                </span>
              </div>

              <p className="mb-4 text-left flex-grow text-base text-slate-500 leading-relaxed">
                {
                  "Using a open Kaggle Healthcare dataset and performed exploratory data analysis, data cleanup, analysis, and visualization with Python's data libraries"
                }
              </p>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
