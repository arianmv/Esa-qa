// src/components/Footer.tsx

import { Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full max-w-5xl p-4 text-white mt-auto">
            <div className="text-center text-sm text-white/70 space-y-2">
                <p className="flex items-center justify-center gap-2">
                    <MapPin size={16} />
                    <span>اهواز، کیانپارس، خیابان ۱۲ غربی، فاز ۳، پلاک ۱۱۰</span>
                </p>
                <div className="flex items-center justify-center gap-6">
                    <a href="tel:+986133919529" className="flex items-center gap-2 hover:text-white">
                        <Phone size={16} />
                        <span>۰۶۱۳۳۹۱۹۵۲۹</span>
                    </a>
                    <a href="https://www.instagram.com/elmosanatearia.official/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                        <Instagram size={16} />
                        <span>elmosanatearia.official</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;