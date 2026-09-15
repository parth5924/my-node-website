import { Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const address = "Ganga Heights, 107, complex, Tragad Rd, near KB ROYAL PHOENIX, Chandkheda, Ahmedabad, Gujarat 382424";
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Ganga+Heights%2C+107%2C+complex%2C+Tragad+Rd%2C+near+KB+ROYAL+PHOENIX%2C+Chandkheda%2C+Ahmedabad%2C+Gujarat+382424";
  const logoUrl =
    "https://scontent-bom5-2.cdninstagram.com/v/t51.82787-19/552971430_17842265736587626_7114327637964217142_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=100&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy41NjcuQzMifQ%3D%3D&_nc_ohc=iQB5RMiuHz4Q7kNvwE3nT1c&_nc_oc=AdoZIgRhzAxzZV55w-nUJObikx4_OyKd1hlWNr7j0xp-C3I0PBIOL5d-rjwHeLAn1EI&_nc_zt=24&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=Hf1lLVBaAwSWrA8zRD7DDw&_nc_ss=79689&oh=00_AQKEu7x4w1cHHTrq2ChKE9HCYOUUqX-Mk_vYi8cub_P1OQ&oe=6AAF25FA";

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logoUrl} alt="Anshchildcare logo" className="w-9 h-9 rounded-lg object-cover" />
              <span className="text-lg font-bold">Anshchildcare</span>
            </div>
            <p className="text-gray-400">
              Compassionate child healthcare with pediatric and neonatal expertise for babies, children, and families.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2 text-gray-400">
              <div>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </div>
              <div>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </div>
              <div>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <div className="space-y-2 text-gray-400">
              <div>Pediatric OPD</div>
              <div>Neonatal Care</div>
              <div>Vaccination</div>
              <div>Growth Monitoring</div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 8200635101</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  View clinic location
                </a>
              </div>
              <p className="text-sm leading-6 text-gray-400">{address}</p>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Appointments available</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Anshchildcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
