// components/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="min-h-[90vh] bg-blue-50 flex items-center justify-center px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Decorative Elements (Optional sparkies) */}
      <div className="absolute top-10 left-10 text-white opacity-50">✨</div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
            YOUR MENTAL <br />
            WEALTH MATTERS. <br />
            LET US HELP! ✨
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-md">
            Enter <span className="font-bold text-blue-600">ManoWealth</span> - A Place Where Your Mental Well-being Finds Support, Comfort, and Strength.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/login">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105">
                LOGIN
              </button>
            </Link>
            <Link href="/events">
              <button className="bg-white hover:bg-gray-50 text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg border border-blue-100 transition-all transform hover:scale-105">
                UPCOMING EVENTS
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image (Meditation Illustration) */}
        <div className="relative h-[400px] w-full flex justify-center items-center">
          {/* Use the actual illustration asset here */}
          <div className="relative w-full h-full">
             <Image 
               src="/meditation-girl.png" // Replace with your asset
               alt="Meditation" 
               fill
               className="object-contain"
             />
          </div>
        </div>
      </div>
      
      {/* Bottom Wave SVG (To create the curved divider) */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,250.7C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}