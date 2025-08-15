export function TCard({ children, className = "" }) {
  return <div className={"rounded-2xl border border-slate-200 bg-white shadow-sm " + className}>{children}</div>
}

export function TCardBody({ children, className = "" }) {
  return <div className={"p-5 " + className}>{children}</div>
}

const Card = TCard
export default Card
