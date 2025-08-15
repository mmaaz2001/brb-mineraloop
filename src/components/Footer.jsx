import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 via-yellow-500 to-teal-500 rounded-sm mr-1"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 rounded-sm mr-1"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 rounded-sm"></div>
              </div>
            </div>
            <div className="text-lg font-bold text-gray-900">BRB GROUP</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 bg-[#50A783] bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-gray-900 transition-colors">
                  ESG Sustainability
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* About BRB */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 bg-[#50A783] bg-clip-text text-transparent">
              About BRB
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="/about" className="hover:text-gray-900 transition-colors">
                  Who are we?
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Business Units
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Communities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-900 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
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
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-gray-600" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-gray-600" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Twitter className="w-4 h-4 text-gray-600" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Youtube className="w-4 h-4 text-gray-600" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
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
