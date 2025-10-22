import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <section id="footer" className="bg-[#1a1a1a] pt-16 pb-8 mt-0">
      <footer className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-white">
  
        <div className="w-full mb-8">
          <div className="flex items-center justify-between pb-8 border-b border-white/10">
          <Link href={"/"}>
          
            <Image
              src="/Qiimeetlogo2.png"
              alt="Qiimeet Logo"
              width={140}
              height={45}
              className="max-w-[140px] h-auto"
            />

          </Link>
            
            <div className="flex gap-4">
              <a href="#" className="transition-opacity duration-200 hover:opacity-100 opacity-80">
                <Image src="/fb.png" alt="Facebook" width={28} height={28} />
              </a>
              <a href="#" className="transition-opacity duration-200 hover:opacity-100 opacity-80">
                <Image src="/ig.png" alt="Instagram" width={28} height={28} />
              </a>
              <a href="#" className="transition-opacity duration-200 hover:opacity-100 opacity-80">
                <Image src="/x.png" alt="X (Twitter)" width={28} height={28} />
              </a>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 md:gap-8 py-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wide">
              Download
            </h3>
            <a href="#" className="block mb-3 transition-transform duration-200 hover:scale-105">
              <Image 
                src="/playstore.png" 
                alt="Get it on Google Play" 
                width={140} 
                height={42}
                className="w-[140px] h-auto"
              />
            </a>
            <a href="#" className="block transition-transform duration-200 hover:scale-105">
              <Image 
                src="/appstore.png" 
                alt="Download on App Store" 
                width={140} 
                height={42}
                className="w-[140px] h-auto"
              />
            </a>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 text-[0.95rem] transition-colors duration-200 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[0.95rem] transition-colors duration-200 hover:text-white">
                  Features
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wide">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 text-[0.95rem] transition-colors duration-200 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[0.95rem] transition-colors duration-200 hover:text-white">
                  Terms of Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@qiimeet.com" className="text-white/70 text-[0.95rem] transition-colors duration-200 hover:text-white">
                  support@qiimeet.com
                </a>
              </li>
              <li>
                <a href="tel:+234-QIIMEET" className="text-white/70 text-[0.95rem] transition-colors duration-200 hover:text-white">
                  +234-QIIMEET
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10 text-white/60 text-sm">
          <p>Copyright © 2025 Qiimeet. All rights reserved</p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;