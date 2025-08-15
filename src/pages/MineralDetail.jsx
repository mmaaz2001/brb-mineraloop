"use client"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, CheckCircle, FileText, Truck, Globe2 } from "lucide-react"
import { COLORS, MINERALS, btnBase } from "../utils/constant"
import { TCard, TCardBody } from "../components/ui/Card"

export default function MineralDetail() {
  const { mineralName } = useParams()
  const mineral = MINERALS.find((m) => m.slug === mineralName)

  if (!mineral) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-semibold">Mineral not found</h1>
        <Link to="/" className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-8">
          <Link to="/" className="hover:text-slate-900">
            Home
          </Link>
          <span>/</span>
          <span>Minerals</span>
          <span>/</span>
          <span className="text-slate-900 font-medium">{mineral.name}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
                <ArrowLeft className="h-4 w-4" /> Back
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{mineral.name}</h1>
            <p className="text-lg text-slate-600 mb-8">{mineral.summary}</p>

            {/* Hero Image */}
            <div className="rounded-2xl h-64 mb-8 shadow-lg" style={{ backgroundColor: COLORS.primary }}>
              <div className="h-full flex items-center justify-center text-white text-xl font-semibold">
                {mineral.name} Sample
              </div>
            </div>

            {/* Description */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-slate-700 leading-relaxed">{mineral.description}</p>
            </div>

            {/* Applications */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Applications</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {mineral.applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
              <TCard>
                <TCardBody>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(mineral.specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0"
                      >
                        <span className="font-medium text-slate-700">{key}</span>
                        <span className="text-slate-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </TCardBody>
              </TCard>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <TCard>
              <TCardBody>
                <h3 className="font-semibold mb-4">Get Started</h3>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className={`${btnBase} w-full text-white`}
                    style={{ backgroundColor: COLORS.liberty }}
                  >
                    Request Quote
                  </Link>
                  <Link
                    to="/contact"
                    className={`${btnBase} w-full border-0`}
                    style={{ color: COLORS.liberty, boxShadow: "inset 0 0 0 1px #25949B" }}
                  >
                    Download COA
                  </Link>
                </div>
              </TCardBody>
            </TCard>

            {/* Features */}
            <TCard>
              <TCardBody>
                <h3 className="font-semibold mb-4">Why Choose Our {mineral.name}?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-slate-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Quality Assured</div>
                      <div className="text-xs text-slate-600">MSDS & COA provided</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-slate-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Global Shipping</div>
                      <div className="text-xs text-slate-600">INCOTERMS compliant</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe2 className="h-5 w-5 text-slate-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Export Ready</div>
                      <div className="text-xs text-slate-600">Full documentation</div>
                    </div>
                  </div>
                </div>
              </TCardBody>
            </TCard>

            {/* Related Minerals */}
            <TCard>
              <TCardBody>
                <h3 className="font-semibold mb-4">Related Minerals</h3>
                <div className="space-y-2">
                  {MINERALS.filter((m) => m.slug !== mineralName)
                    .slice(0, 3)
                    .map((relatedMineral) => (
                      <Link
                        key={relatedMineral.slug}
                        to={`/mineral/${relatedMineral.slug}`}
                        className="block p-2 rounded-lg hover:bg-slate-50 text-sm"
                      >
                        <div className="font-medium">{relatedMineral.name}</div>
                        <div className="text-xs text-slate-500 line-clamp-1">{relatedMineral.summary}</div>
                      </Link>
                    ))}
                </div>
              </TCardBody>
            </TCard>
          </div>
        </div>
      </div>
    </div>
  )
}
