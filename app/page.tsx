// Inside src/app/page.tsx
import Navbar from '@/components/Navbar';
import ResourcesSection from '@/components/ResourcesSection';
import AppointmentForm from '@/components/AppointmentForm'; // Import the form

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Modified Hero Section with Form */}
      <div className="min-h-[90vh] bg-blue-50 flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
              YOUR MENTAL <br /> WEALTH MATTERS.
            </h1>
            <p className="text-gray-700 text-lg">
              The Dean of Student Affairs and the Counseling Unit are here to support you.
            </p>
          </div>

          {/* Right Side: The Form */}
          <div className="flex justify-center w-full">
            <AppointmentForm />
          </div>
          
        </div>
      </div>

      <ResourcesSection />
    </main>
  );
}