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
          Cooking up digital magic to have your Product stand out? Here's how I can help your Product make some noise:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon={<Code className="text-[rgba(190,162,112,1)]" size={24} />}
          title="Product Consulting"
          description="Whether your product is at 0-1 or 1-N, I help your team turn ideas into clear, buildable features that fit your business goals and code"
        />
        <ServiceCard
          icon={<Palette className="text-[rgba(190,162,112,1)]" size={24} />}
          title="UI/UX Design"
          description="Designing intuitive and engaging user experiences that consistently satisfy and retain users."
        />
        <ServiceCard
          icon={<BarChart3 className="text-[rgba(190,162,112,1)]" size={24} />}
          title="Analytics"
          description="I help identify crucial KPIs and MOS and will build you the right tracking infrastructure and dashboards to measure your product's impact"
        />
      </div>
    </section>
  )
}
