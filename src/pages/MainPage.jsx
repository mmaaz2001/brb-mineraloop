
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Globe, Leaf, Shield, Truck, Users, Zap } from "lucide-react"
import { COLORS, MINERALS } from "../utils/constant"
import Card from "../components/ui/Card"
import ContactSection from "../components/Contact-Section"
import HeroSection from "../components/HeroSection"

export default function MainPage() {
  
  
  const patternStyle = {
    backgroundImage: `
      radial-gradient(circle at 25px 25px, ${COLORS.primary}08 2px, transparent 2px),
      radial-gradient(circle at 75px 75px, ${COLORS.secondary}08 2px, transparent 2px)
    `,
    backgroundSize: "100px 100px",
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-white" style={patternStyle}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                About BRB Mineraloop
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A trusted name in the global minerals industry, committed to excellence and sustainability
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.text }}>
                Our Story
              </motion.h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                BRB Mineraloop is a leading minerals trading and processing company, and a proud subsidiary of the BRB Group. We specialize in the
sourcing, processing, and supply of high-quality industrial minerals,
serving diverse industries both locally and internationally. With a
commitment to reliability, integrity, and innovation, BRB Mineraloop
has built a strong reputation for excellence in the mineral sector.

              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">


<motion.h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.text }}>
                PART OF THE BRB GROUP 
              </motion.h3>

As a subsidiary of the BRB Group, BRB Mineraloop benefits from the
Group’s extensive business network, financial strength, and decades
of experience in trade and industry. This synergy allows us to expand
our reach, diversify our product range, and deliver unmatched value
to our customers
              </p>
              {/* <p className="text-gray-600 leading-relaxed">
                With a dedicated team of experts and state-of-the-art facilities, we ensure that our minerals meet the
                highest quality standards while minimizing environmental impact. Our vision is to lead the global
                minerals trade with integrity, innovation, and a focus on sustainability.
              </p> */}


            </div>
            <div className="relative">
              <video
                src="/assets/intro.mp4"
                autoPlay
                loop
                muted
                playsInline
                poster="/placeholder.svg"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Minerals Section */}
      <section id="minerals" className="py-20 bg-gray-50" style={patternStyle}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                Our Minerals Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of high-quality industrial minerals
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MINERALS.map((mineral, index) => {
              // Different animation styles based on index
              const animations = [
                { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },  // fade-up
                { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }, // fade-left
                { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },  // fade-right
                { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }, // zoom-in
              ];

              const variant = animations[index % animations.length];

              return (
                <motion.div
                  key={mineral.slug}
                  initial="hidden"
                  whileInView="visible"
                  variants={variant}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div
                    className="group cursor-pointer transform hover:scale-105 transition-all duration-500 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl"
                    style={{
                      boxShadow: `0 10px 25px ${COLORS.liberty}20`,
                    }}
                  >
                    <Link to={`/mineral/${mineral.slug}`} className="block">
                      {/* same card content */}
                      <div className="relative h-80 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-gradient-to-br"
                          style={{
                            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary}, ${COLORS.liberty})`,
                          }}
                        >
                          <img
                            src={mineral.image || "/placeholder.svg"}
                            alt={`${mineral.name} mineral`}
                            className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500"
                            onError={(e) => {
                              e.target.src = `/placeholder.svg?height=320&width=400&query=${mineral.name} mineral crystal formation industrial`
                            }}
                          />
                        </div>

                        <div className="absolute top-6 left-6 right-6">
                          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                            {mineral.name}
                          </h3>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                          <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                            <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-4">{mineral.description}</p>
                            <div className="flex items-center justify-between">
                              <div
                                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r transition-all duration-300 hover:shadow-lg"
                                style={{
                                  background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                                }}
                              >
                                Learn more
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r backdrop-blur-sm"
                            style={{ background: `linear-gradient(135deg, ${COLORS.secondary}80, ${COLORS.liberty}80)` }}
                          >
                            <span className="text-white font-bold text-lg">
                              {mineral.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 bg-white" style={patternStyle}>
        
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                Sustainability First
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to environmental responsibility drives every aspect of our operations
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Environmental Protection",
                description:
                  "Implementing eco-friendly extraction and processing methods to minimize environmental impact.",
              },
              {
                icon: Shield,
                title: "Safety Standards",
                description: "Maintaining the highest safety standards for our workers and surrounding communities.",
              },
              {
                icon: Globe,
                title: "Global Responsibility",
                description: "Contributing to sustainable development goals through responsible mining practices.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >

                <Card
  key={index}
  className="text-center p-8 bg-gradient-to-br transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
  style={{ background: `linear-gradient(135deg, ${COLORS.primary}10, ${COLORS.secondary}10)` }}
>

                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r"
                    style={{ background: `linear-gradient(135deg, ${COLORS.secondary}, ${COLORS.liberty})` }}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.text }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section id="operations" className="py-20 bg-gray-50" style={patternStyle}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                Our Operations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From extraction to delivery, we ensure quality at every step
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2, // 👈 cards animate one after another
                },
              },
            }}
          >
            {[
              { icon: Zap, title: "Extraction", description: "State-of-the-art mining techniques" },
              { icon: Shield, title: "Processing", description: "Advanced purification methods" },
              { icon: CheckCircle, title: "Quality Control", description: "Rigorous testing standards" },
              { icon: Truck, title: "Logistics", description: "Global delivery network" },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, rotate: -10, scale: 0.9, y: 50 },
                  visible: { opacity: 1, rotate: 0, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Card
                  className="text-center p-6 bg-gradient-to-br transform transition-transform duration-500 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl"
                  style={{ background: `linear-gradient(135deg, ${COLORS.secondary}10, ${COLORS.liberty}10)` }}
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-r"
                    style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.liberty})` }}
                  >
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: COLORS.text }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="why-brb" className="py-20 bg-white" style={patternStyle}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                Why Choose BRB MINERALOOP?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference of working with industry leaders
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Your Trusted Minerals Partner
              </h3>
              <div className="grid gap-8">
  {[
    {
      title: "Wide Portfolio",
      description: "Wide portfolio of high-demand minerals.",
    },
    {
      title: "Global Supply Chain",
      description: "Reliable global supply chain.",
    },
    {
      title: "Quality Commitment",
      description: "Strong commitment to quality control.",
    },
    {
      title: "Experienced Team",
      description: "Professional and experienced team.",
    },
    {
      title: "Competitive Advantage",
      description: "Competitive market rates with timely delivery.",
    },
  ].map((benefit, index) => (
    <motion.div
      key={index}
      className="group p-6 rounded-2xl bg-gradient-to-r hover:shadow-lg transition-all duration-300"
      style={{
        background: `linear-gradient(135deg, ${COLORS.primary}08, ${COLORS.secondary}08, ${COLORS.liberty}05)`,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-r flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
          style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }}
        >
          {/* Simple check icon for all points */}
          <CheckCircle className="h-7 w-7 text-white" />
        </div>
        <div>
          <h4 className="text-xl font-bold mb-3" style={{ color: COLORS.text }}>
            {benefit.title}
          </h4>
          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
        </div>
      </div>
    </motion.div>
  ))}
</div>

            </motion.div>

            <motion.div
              className="relative group rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src="/assets/intro.jpg?height=600&width=500"
                alt="BRB Mineraloop Advanced Processing Facility"
                className="w-full h-[600px] object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
              />

              {/* Dark overlay when hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text (centered on hover) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center text-white px-6"
                >
                  <h4 className="text-2xl font-bold mb-2">Advanced Processing Excellence</h4>
                  <p className="text-gray-200 max-w-md mx-auto">
                    State-of-the-art facilities ensuring consistent quality and efficient processing of all mineral types
                  </p>
                </motion.div>
              </div>
            </motion.div>



          </div>

          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="inline-block p-10 rounded-3xl bg-gradient-to-r shadow-2xl max-w-2xl"
              style={{
                background: `linear-gradient(135deg, ${COLORS.primary}12, ${COLORS.secondary}12, ${COLORS.liberty}08)`,
                boxShadow: `0 20px 40px ${COLORS.liberty}15`,
              }}
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Ready to Experience the Difference?
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Join industry leaders who trust BRB Mineraloop for their critical mineral supply needs
              </p>
              <button
                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center rounded-2xl px-10 py-5 font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r hover:scale-105 text-lg"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
                  boxShadow: `0 10px 30px ${COLORS.liberty}40`,
                }}
              >
                Start Your Partnership <ArrowRight className="ml-3 h-6 w-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* contact section */}

<ContactSection />

    </div>
  )
}
