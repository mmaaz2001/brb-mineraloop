import React from 'react'
import { COLORS } from '../utils/constant'
import { Phone } from 'lucide-react'
import Mail from './Mail'
const TopBar = () => {
    return (
        <>
            < div style={{ backgroundColor: COLORS.primary }
            } className="w-full text-white text-sm" >
                <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
                    <p className="font-medium tracking-wide">From Raw Potential to Real Power</p>
                    <div className="hidden sm:flex items-center gap-6 opacity-90">
                        <a href="tel:+92111272111" className="inline-flex items-center gap-2 hover:opacity-100 rounded px-1">
                            <Phone className="h-4 w-4" /> 111 272 111
                        </a>
                        <a
                            href="mailto:info@brbgroup.pk"
                            className="inline-flex items-center gap-2 hover:opacity-100 rounded px-1"
                        >
                            <Mail className="h-4 w-4" /> info@brbgroup.pk
                        </a>
                    </div>
                </div>
            </div >
        </>

    )
}

export default TopBar
