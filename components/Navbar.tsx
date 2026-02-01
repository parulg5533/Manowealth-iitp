// src/components/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      {/* Left: IIT Patna Logo */}
      <div className="flex items-center">
        <Link href="/">
          {/* We will add the logo image file in Step 2 */}
          <div className="relative w-64 h-16 cursor-pointer">
             {/* If you don't have the image yet, this text will show instead */}
          
             {/* Uncomment the Image tag below once you have the logo file */}
             { <Image 
               src="/iitp-logo-v2.png" 
               alt="IIT Patna Logo" 
               fill
               className="object-contain"
               priority
             />
             }
          </div>
        </Link>
      </div>

      {/* Right: Buttons */}
      <div className="flex gap-4">
        <Link href="/">
          <button className="px-6 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
            Home
          </button>
        </Link>
        
        <Link href="/admin/login">
          <button className="px-6 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
            Admin
          </button>
        </Link>
      </div>
    </nav>
  );
}