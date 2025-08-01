interface StatProps {
  value: string
  label: string
}

function StatItem({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2 text-slate-800">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  )
}

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-12">
      <StatItem value="7" label="Products Managed" />
      <StatItem value="30+" label="Product Features Launched" />
      <StatItem value="12+" label="Enterprise Deliveries Led" />
      <StatItem value="19" label="Certifications" />      
    </div>
  )
}
