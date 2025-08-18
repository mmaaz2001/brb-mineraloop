// // src/pages/MineralDetail.jsx
// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { ArrowLeft, CheckCircle } from "lucide-react";
// import { COLORS, MINERALS } from "../utils/constant";

// // Clean up small punctuation glitches from pasted text
// function sanitizeText(str) {
//   if (typeof str !== "string") return str;
//   return str
//     .replace(/–\s*–/g, "–")   // "– –" -> "–"
//     .replace(/-\s*-/g, "–")   // "- -" -> "–"
//     .replace(/\s{2,}/g, " ")  // collapse spaces
//     .trim();
// }

// // Normalize string | string[] | undefined -> string[]
// function toArrayMaybe(v) {
//   if (Array.isArray(v)) return v.filter(Boolean).map((s) => String(s));
//   if (typeof v === "string" && v.trim()) return [v];
//   return [];
// }

// export default function MineralDetail() {
//   const { mineralName } = useParams();
//   const mineral = MINERALS.find((m) => m.slug === mineralName);

//   if (!mineral) {
//     return (
//       <div className="py-20 text-center">
//         <h1 className="text-2xl font-semibold">Mineral not found</h1>
//         <Link to="/" className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
//           <ArrowLeft className="h-4 w-4" /> Back to Home
//         </Link>
//       </div>
//     );
//   }

//   // Image with working fallback
//   const [imgSrc, setImgSrc] = useState(() => mineral?.image || `/assets/${mineral.slug}.jpg`);
//   useEffect(() => {
//     if (mineral) setImgSrc(mineral.image || `/assets/${mineral.slug}.jpg`);
//   }, [mineral?.slug]);

//   return (
//     <div className="py-16 lg:py-24">
//       <div className="mx-auto max-w-7xl px-4">
//         {/* Breadcrumb */}
//         <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8" aria-label="Breadcrumb">
//           <Link to="/" className="hover:text-slate-900">Home</Link>
//           <span>/</span>
//           <span>Minerals</span>
//           <span>/</span>
//           <span className="text-slate-900 font-medium">{mineral.name}</span>
//         </nav>

//         {/* Single-column layout */}
//         <div className="max-w-3xl mx-auto">
//           {/* Back */}
//           <div className="flex items-center gap-4 mb-6">
//             <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
//               <ArrowLeft className="h-4 w-4" /> Back
//             </Link>
//           </div>

//           {/* Title + summary */}
//           <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
//             {mineral.title || mineral.name}
//           </h1>
//           {mineral.summary && (
//             <p className="text-lg text-slate-600 mb-8">{sanitizeText(mineral.summary)}</p>
//           )}

//           {/* Hero Image */}
//           <div className="relative rounded-2xl overflow-hidden mb-8 shadow-lg">
//             <img
//               src={imgSrc || "/placeholder.svg"}
//               alt={`${mineral.name} sample`}
//               className="w-full h-64 md:h-80 object-cover"
//               onError={() => setImgSrc("/assets/logo.png")}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//             <div className="absolute bottom-3 left-3 text-white font-semibold text-lg drop-shadow">
//               {mineral.name}
//             </div>
//           </div>

//           {/* Intro paragraph */}
//           {mineral.description && (
//             <div className="prose max-w-none mb-8">
//               <p className="text-slate-700 leading-relaxed">{sanitizeText(mineral.description)}</p>
//             </div>
//           )}

//           {/* Sections (support content BEFORE and AFTER list) */}
//           <div className="prose max-w-none">
//             {Array.isArray(mineral.sections) &&
//               mineral.sections.map((sec, idx) => {
//                 // 1) Explicit before/after support
//                 let beforeParas = toArrayMaybe(
//                   sec.contentBefore || sec.before || sec.intro
//                 );
//                 let afterParas = toArrayMaybe(
//                   sec.contentAfter || sec.after || sec.post || sec.postContent || sec.trailing
//                 );

//                 // 2) If only `content` is given, decide smartly where it should go.
//                 //    Heuristic: for sections like "Reserves" or "Key Deposits" (and when type === 'list'),
//                 //    show the paragraph AFTER the points (matches your Barite + Iron Ore cases).
//                 if (!beforeParas.length && !afterParas.length) {
//                   const base = toArrayMaybe(sec.content);
//                   if (base.length) {
//                     const title = String(sec.title || "").toLowerCase();
//                     const wantsAfter =
//                       sec.type === "list" ||
//                       /reserves|key deposits/.test(title);
//                     if (wantsAfter) afterParas = base;
//                     else beforeParas = base; // e.g., "Importance of ..." intro line before bullets
//                   }
//                 }

//                 const listItems = toArrayMaybe(sec.items);

//                 return (
//                   <section key={idx} className="mb-8">
//                     {sec.title && (
//                       <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
//                         {sanitizeText(sec.title)}
//                       </h2>
//                     )}

//                     {/* Before-list paragraphs */}
//                     {beforeParas.map((p, i) => (
//                       <p key={`pre-${i}`} className="text-slate-700 leading-relaxed mb-4">
//                         {sanitizeText(p)}
//                       </p>
//                     ))}

//                     {/* List */}
//                     {listItems.length > 0 && (
//                       <div className="grid gap-3 mt-2">
//                         {listItems.map((item, i) => (
//                           <div
//                             key={i}
//                             className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-100"
//                           >
//                             <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
//                             <span className="text-slate-700">{sanitizeText(item)}</span>
//                           </div>
//                         ))}
//                       </div>
//                     )}

//                     {/* After-list paragraphs */}
//                     {afterParas.map((p, i) => (
//                       <p key={`post-${i}`} className="text-slate-700 leading-relaxed mt-4">
//                         {sanitizeText(p)}
//                       </p>
//                     ))}
//                   </section>
//                 );
//               })}
//           </div>

//           {/* Technical Specifications (optional) */}
//           {mineral.specifications && (
//             <div className="mt-10 mb-2">
//               <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
//                 Technical Specifications
//               </h2>
//               <div
//                 className="rounded-xl p-6 shadow-lg"
//                 style={{
//                   background: `linear-gradient(135deg, ${COLORS.primary}15, ${COLORS.secondary}15, ${COLORS.liberty}15)`,
//                   border: `1px solid ${COLORS.primary}30`,
//                 }}
//               >
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   {Object.entries(mineral.specifications).map(([key, value]) => (
//                     <div
//                       key={key}
//                       className="flex justify-between items-center py-3 px-4 bg-white/70 rounded-lg border border-white/50"
//                     >
//                       <span className="font-medium text-slate-700">{key}</span>
//                       <span className="text-slate-600 font-semibold">{String(value)}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// src/pages/MineralDetail.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { COLORS, MINERALS } from "../utils/constant";

function sanitizeText(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/–\s*–/g, "–")
    .replace(/-\s*-/g, "–")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function toArrayMaybe(v) {
  if (Array.isArray(v)) return v.filter(Boolean).map((s) => String(s));
  if (typeof v === "string" && v.trim()) return [v];
  return [];
}

export default function MineralDetail() {
  const { mineralName } = useParams();
  const mineral = MINERALS.find((m) => m.slug === mineralName);

  if (!mineral) {
    return (
      <div className="py-20 text-center bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
          <h1 className="text-2xl font-semibold mb-4">Mineral not found</h1>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const [imgSrc, setImgSrc] = useState(() => mineral?.image || `/assets/${mineral.slug}.jpg`);
  useEffect(() => {
    if (mineral) setImgSrc(mineral.image || `/assets/${mineral.slug}.jpg`);
  }, [mineral?.slug]);

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 relative">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 shadow-sm w-fit" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span>/</span>
          <span>Minerals</span>
          <span>/</span>
          <span className="text-slate-900 font-medium bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">{mineral.name}</span>
        </nav>

        {/* Back button */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="group inline-flex items-center gap-2 px-5 py-3 bg-white/70 backdrop-blur-sm text-slate-600 hover:text-white rounded-full border border-white/30 hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back
          </Link>
        </div>

        {/* Title + summary */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            {mineral.title || mineral.name}
          </h1>
          {mineral.summary && (
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">{sanitizeText(mineral.summary)}</p>
          )}
        </div>

        {/* Image and description side by side */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={imgSrc || "/placeholder.svg"}
                alt={`${mineral.name} sample`}
                className="w-full h-auto max-h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                onError={() => setImgSrc("/assets/logo.png")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-xl drop-shadow-lg">
                {mineral.name}
              </div>
            </div>
          </div>

          {/* Description */}
          {mineral.description && (
            <div className="w-full lg:w-1/2">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg h-full">
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Overview
                </h2>
                <p className="text-slate-700 leading-relaxed text-lg">{sanitizeText(mineral.description)}</p>
              </div>
            </div>
          )}
        </div>

        {/* Sections */}
        <div className="prose max-w-none space-y-10">
          {Array.isArray(mineral.sections) &&
            mineral.sections.map((sec, idx) => {
              let beforeParas = toArrayMaybe(
                sec.contentBefore || sec.before || sec.intro
              );
              let afterParas = toArrayMaybe(
                sec.contentAfter || sec.after || sec.post || sec.postContent || sec.trailing
              );

              const hasItems = toArrayMaybe(sec.items).length > 0;
              
              if (!beforeParas.length && !afterParas.length && sec.content) {
                if (hasItems) {
                  beforeParas = toArrayMaybe(sec.content);
                } else {
                  const base = toArrayMaybe(sec.content);
                  const title = String(sec.title || "").toLowerCase();
                  const wantsAfter = sec.type === "list" || /reserves|key deposits/.test(title);
                  if (wantsAfter) afterParas = base;
                  else beforeParas = base;
                }
              }

              if (sec.title === "Barite Reserves in Pakistan" && hasItems) {
                beforeParas = ["Pakistan is richly endowed with abundant barite deposits, particularly in:"];
                afterParas = ["These reserves are of high commercial value, with the potential to meet both domestic industrial requirements and a growing global demand."];
              }

              if (sec.title === "Key Deposits in Pakistan" && hasItems) {
                beforeParas = [];
                afterParas = ["These reserves are estimated to contain iron content (Fe) up to 60%, making them suitable for commercial extraction and steel manufacturing."];
              }

              const listItems = toArrayMaybe(sec.items);

              return (
                <section key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">
                  {sec.title && (
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1 h-8 bg-gradient-to-b from-green-600 via-teal-600 to-blue-600 rounded-full"></div>
                      <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent m-0">
                        {sanitizeText(sec.title)}
                      </h2>
                    </div>
                  )}

                  {/* Before-list paragraphs */}
                  {beforeParas.map((p, i) => (
                    <p key={`pre-${i}`} className="text-slate-700 leading-relaxed mb-4 text-lg">
                      {sanitizeText(p)}
                    </p>
                  ))}

                  {/* List */}
                  {listItems.length > 0 && (
                    <div className="grid gap-4 mt-2">
                      {listItems.map((item, i) => (
                        <div
                          key={i}
                          className="group flex items-start gap-3 p-5 bg-gradient-to-r from-blue-50/80 to-teal-50/80 rounded-xl border border-blue-200/50 hover:border-blue-300/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                        >
                          <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-slate-700 font-medium leading-relaxed">{sanitizeText(item)}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* After-list paragraphs */}
                  {afterParas.map((p, i) => (
                    <p key={`post-${i}`} className="text-slate-700 leading-relaxed mt-4 text-lg">
                      {sanitizeText(p)}
                    </p>
                  ))}
                </section>
              );
            })}
        </div>

        {/* Technical Specifications */}
        {mineral.specifications && (
          <div className="mt-10 mb-2">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent text-center">
              Technical Specifications
            </h2>
            <div
              className="rounded-2xl p-8 shadow-xl border border-white/40 bg-white/70 backdrop-blur-sm"
              style={{
                background: `linear-gradient(135deg, ${COLORS.primary}15, ${COLORS.secondary}15, ${COLORS.liberty}15)`,
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                {Object.entries(mineral.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="group flex justify-between items-center py-4 px-6 bg-white/70 rounded-xl border border-white/50 hover:border-blue-300/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="font-medium text-slate-700">{key}</span>
                    <span className="text-slate-600 font-semibold text-lg">{String(value)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}