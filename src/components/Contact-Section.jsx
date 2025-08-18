import React from "react"
import { COLORS } from "../utils/constant"
import { motion } from "framer-motion"
import {  Globe , Users } from "lucide-react"
import Card from "../components/ui/Card"


export default function Contact() {
const patternStyle = {
    backgroundImage: `
      radial-gradient(circle at 25px 25px, ${COLORS.primary}08 2px, transparent 2px),
      radial-gradient(circle at 75px 75px, ${COLORS.secondary}08 2px, transparent 2px)
    `,
    backgroundSize: "100px 100px",
  }
    return(
<section id="contact" className="py-20 bg-gray-50" style={patternStyle}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to discuss your mineral requirements? Contact our expert team today
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.text }}>
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Users,
                    label: "Phone",
                    value: "+92 111 272 111",
                    gradient: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                  },
                  {
                    icon: Globe,
                    label: "Email",
                    value: "info@brbgroup.pk",
                    gradient: `linear-gradient(135deg, ${COLORS.secondary}, ${COLORS.liberty})`,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r"
                      style={{ background: item.gradient }}
                    >
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card
                className="p-8 bg-gradient-to-br"
                style={{ background: `linear-gradient(135deg, ${COLORS.primary}10, ${COLORS.secondary}10)` }}
              >
                <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.text }}>
                  Send us a message
                </h3>
                <form className="space-y-4">
                  {["Your Name", "Your Email"].map((placeholder, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <input
                        type={placeholder.includes("Email") ? "email" : "text"}
                        placeholder={placeholder}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-300 transform focus:scale-[1.02]"
                        style={{ focusRingColor: COLORS.liberty }}
                      />
                    </motion.div>
                  ))}

                  {/* Message field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-300 transform focus:scale-[1.02]"
                      style={{ focusRingColor: COLORS.liberty }}
                    ></textarea>
                  </motion.div>

                  {/* Button with pulse effect */}
                  <motion.button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
                      boxShadow: `0 4px 15px ${COLORS.liberty}40`,
                    }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

    )
}
