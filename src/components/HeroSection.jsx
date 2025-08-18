import React from "react"
import { COLORS } from "../utils/constant"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Card from "../components/ui/Card"


export default function HeroSection() {
    
    
    const heroWords = [
    { text: "Premium", color: COLORS.primary },
    { text: "Industrial", color: COLORS.secondary },
    { text: "Minerals—", color: COLORS.liberty },
    { text: "sourced,", color: COLORS.primary },
    { text: "processed,", color: COLORS.secondary },
    { text: "delivered", color: COLORS.liberty },
  ]

  // Variants for the container that will stagger its children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between each word
      },
    },
  }

    // Variants for each word
  const wordVariants = {
    hidden: {
      opacity: 0,
      width: 0, // Start with no width (hidden)
      transition: { duration: 0.3 }
    },
    visible: {
      opacity: 1,
      width: "auto", // Animate to full width
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  }

  // Variants for the blinking cursor
  const cursorVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 1, 0],
      transition: { repeat: Infinity, duration: 0.8 }
    }
  }
    
    const patternStyle = {
        backgroundImage: `
          radial-gradient(circle at 25px 25px, ${COLORS.primary}08 2px, transparent 2px),
          radial-gradient(circle at 75px 75px, ${COLORS.secondary}08 2px, transparent 2px)
        `,
        backgroundSize: "100px 100px",
      }
    return(
        <>
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
                className="inline-block overflow-hidden whitespace-nowrap mr-3 font-black"
                style={{ color: word.color }}
              >
                {word.text}
                {/* Blinking cursor after each word */}
                {index === heroWords.length - 1 && (
                  <motion.span
                    variants={cursorVariants}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                )}
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
      </>
    )
}