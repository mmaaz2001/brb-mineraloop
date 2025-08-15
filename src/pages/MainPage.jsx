
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Globe, Leaf, Shield, Truck, Users, Zap } from "lucide-react"
import { COLORS, MINERALS } from "../utils/constant"
import Card from "../components/ui/Card"

export default function MainPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const heroWords = [
    { text: "Premium", color: COLORS.primary },
    { text: "Industrial", color: COLORS.secondary },
    { text: "Minerals—", color: COLORS.liberty },
    { text: "sourced,", color: COLORS.primary },
    { text: "processed,", color: COLORS.secondary },
    { text: "delivered", color: COLORS.liberty },
  ]

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
      <section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white"
        style={patternStyle}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {heroWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-3 font-black"
                style={{ color: word.color }}
              >
                {word.text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Leading the global minerals trade with sustainable practices and innovative solutions
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <button
              onClick={() => document.getElementById("minerals").scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r"
              style={{
                background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
                boxShadow: `0 10px 25px ${COLORS.liberty}40`,
              }}
            >
              Explore Minerals <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold border-2 hover:bg-gray-50 transition-all duration-300"
              style={{ borderColor: COLORS.liberty, color: COLORS.liberty }}
            >
              Get Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white" style={patternStyle}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              About BRB Mineraloop
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A trusted name in the global minerals industry, committed to excellence and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.text }}>
                Our Story
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                BRB Mineraloop has been at the forefront of the minerals trading industry for over two decades. We
                specialize in sourcing, processing, and delivering high-quality industrial minerals to clients
                worldwide.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our commitment to sustainable practices and innovative solutions has made us a preferred partner for
                businesses across various industries including construction, manufacturing, and technology.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="text-center p-4 rounded-lg bg-gradient-to-br"
                  style={{ background: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.secondary}20)` }}
                >
                  <div className="text-3xl font-bold" style={{ color: COLORS.liberty }}>
                    20+
                  </div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div
                  className="text-center p-4 rounded-lg bg-gradient-to-br"
                  style={{ background: `linear-gradient(135deg, ${COLORS.secondary}20, ${COLORS.liberty}20)` }}
                >
                  <div className="text-3xl font-bold" style={{ color: COLORS.liberty }}>
                    50+
                  </div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="BRB Mineraloop Operations"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Minerals Section */}
      <section id="minerals" className="py-20 bg-gray-50" style={patternStyle}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Our Minerals Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality industrial minerals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MINERALS.map((mineral, index) => (
              <div
                key={mineral.slug}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-500 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl"
                style={{
                  boxShadow: `0 10px 25px ${COLORS.liberty}20`,
                }}
              >
                <Link to={`/mineral/${mineral.slug}`} className="block">
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
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-500"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.target.src = `/placeholder.svg?height=320&width=400&query=${mineral.name} mineral crystal formation industrial`
                        }}
                      />
                    </div>

                    <div className="absolute top-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">{mineral.name}</h3>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-4">{mineral.summary}</p>
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
                        <span className="text-white font-bold text-lg">{mineral.name.charAt(0)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 bg-white" style={patternStyle}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Sustainability First
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to environmental responsibility drives every aspect of our operations
            </p>
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
              <Card
                key={index}
                className="text-center p-8 bg-gradient-to-br"
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
            ))}
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section id="operations" className="py-20 bg-gray-50" style={patternStyle}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Our Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From extraction to delivery, we ensure quality at every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Extraction", description: "State-of-the-art mining techniques" },
              { icon: Shield, title: "Processing", description: "Advanced purification methods" },
              { icon: CheckCircle, title: "Quality Control", description: "Rigorous testing standards" },
              { icon: Truck, title: "Logistics", description: "Global delivery network" },
            ].map((step, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-gradient-to-br"
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
            ))}
          </div>
        </div>
      </section>

      {/* Why BRB Section */}
      <section id="why-brb" className="py-20 bg-white" style={patternStyle}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose BRB?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  "Premium quality minerals with consistent specifications",
                  "Global supply chain with reliable delivery",
                  "Sustainable and ethical sourcing practices",
                  "Technical expertise and customer support",
                  "Competitive pricing and flexible terms",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: COLORS.primary }} />
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="/placeholder.svg?height=400&width=600" alt="BRB Team" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50" style={patternStyle}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your mineral requirements? Contact our expert team today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.text }}>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r"
                    style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }}
                  >
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+92 111 272 111</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r"
                    style={{ background: `linear-gradient(135deg, ${COLORS.secondary}, ${COLORS.liberty})` }}
                  >
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@brbgroup.pk</p>
                  </div>
                </div>
              </div>
            </div>

            <Card
              className="p-8 bg-gradient-to-br"
              style={{ background: `linear-gradient(135deg, ${COLORS.primary}10, ${COLORS.secondary}10)` }}
            >
              <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.text }}>
                Send us a message
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent"
                    style={{ focusRingColor: COLORS.liberty }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent"
                    style={{ focusRingColor: COLORS.liberty }}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent"
                    style={{ focusRingColor: COLORS.liberty }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
                    boxShadow: `0 4px 15px ${COLORS.liberty}40`,
                  }}
                >
                  Send Message
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
