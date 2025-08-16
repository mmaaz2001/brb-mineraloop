import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Two columns instead of four */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/Companies Logo FINAL-10.png"
                className="w-18 h-18 object-contain"
                alt="BRB Group Logo"
              />
            </div>
            <div className="text-lg font-bold text-gray-900">BRB GROUP</div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 bg-[#50A783] bg-clip-text text-transparent">
              Contact us
            </h3>
            <div className="space-y-3 text-gray-600">
              <p>+92 21 111 272 111</p>
              <p>+92 21 348 37014-17</p>
              <p className="text-blue-600">info@brbgroup.pk</p>
              <p className="text-sm leading-relaxed">
                Head Office C-42, Block-8,Opposite Hakeem Saeed Park, Gulshan-e-Iqbal, P.O.Box No.75300, Pakistan.
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-3 pt-4">
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Facebook className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Instagram className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Twitter className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Youtube className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <MessageCircle className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BRB Mineraloop (Pvt) Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
