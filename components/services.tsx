import type React from "react"
import { Code, Palette, BarChart3 } from "lucide-react"
import { CardWrapper } from "./ui/card-wrapper"

interface ServiceProps {
  title: string
  description: string
  icon: React.ReactNode
}

function ServiceCard({ title, description, icon }: ServiceProps) {
  return (
    <CardWrapper className="hover:border-primary/40 transition-colors">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-[rgba(190,162,112,1)]">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </CardWrapper>
  )
}

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="text-center mb-12">
        <p className="max-w-4xl mx-auto px-8 font-normal text-slate-400 text-xl">
          I design and build AI systems at the intersection of data science, backend engineering, and machine learning
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon={<Code className="text-[rgba(190,162,112,1)]" size={24} />}
          title="Data Science"
          description="Turning raw, messy data into reliable, well-evaluated machine learning models"
        />
        <ServiceCard
          icon={<Palette className="text-[rgba(190,162,112,1)]" size={24} />}
          title="Backend Engineering"
          description="Building backend services and APIs in Python and Django to integrate the models to applications"
        />
        <ServiceCard
          icon={<BarChart3 className="text-[rgba(190,162,112,1)]" size={24} />}
          title="Analytics"
          description="Cleaning, analyzing, and visualizing data using Pandas, NumPy, SQL, and Matplotlib to surface meaningful patterns"
        />
      </div>
    </section>
  )
}
