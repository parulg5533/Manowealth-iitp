// components/ResourcesSection.tsx
import { ArrowRight } from 'lucide-react'; // Try 'npm install lucide-react' for icons

const ResourceCard = ({ title, description, email, phone, link, colorClass, linkText }) => (
  <div className={`${colorClass} p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow`}>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{description}</p>
    
    <div className="space-y-1 text-sm font-medium text-gray-800 mb-6">
      <p>Email: <a href={`mailto:${email}`} className="hover:underline">{email}</a></p>
      <p>Phone: {phone}</p>
    </div>
    
    <a href={link} className="inline-flex items-center text-gray-900 font-semibold border-b-2 border-gray-900 hover:text-gray-700 transition-colors">
      {linkText} <ArrowRight className="ml-2 w-4 h-4" />
    </a>
  </div>
);

export default function ResourcesSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          Important Resources & Links
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pink Card: Counselor Unit */}
          <ResourceCard 
            title="IITP Counselor Unit"
            description="Our counselors assist students in managing academic, personal, and emotional challenges to promote a balanced and fulfilling campus life."
            email="counselor2@iitp.ac.in"
            phone="+91 9721322486"
            link="/counselor"
            linkText="Visit Counselor Unit"
            colorClass="bg-red-100" // Adjust shade to match image (Pink)
          />

          {/* Yellow Card: Gymkhana */}
          <ResourceCard 
            title="IITP Gymkhana"
            description="The Students' Gymkhana at IIT Patna promotes leadership, talent, and co-curricular engagement through sports and cultural events."
            email="vp_gymkhana@iitp.ac.in"
            phone="+91 8340389862"
            link="/gymkhana"
            linkText="Visit Gymkhana"
            colorClass="bg-yellow-100" // Yellow
          />

          {/* Blue Card: HoSCA */}
          <ResourceCard 
            title="IITP HoSCA"
            description="HoSCA at IIT Patna manages cultural activities, including Nebula, Reverberance, and the fest Anwesha."
            email="gensec_cult@iitp.ac.in"
            phone="+91 8860680193"
            link="/hosca"
            linkText="Visit HoSCA"
            colorClass="bg-blue-100" // Blue
          />
        </div>
        
        <div className="mt-16 text-center text-blue-600 text-sm font-medium">
          We value your individuality and confidentiality. Your privacy is safeguarded with the utmost care at every level of the service.
        </div>
      </div>
    </section>
  );
}