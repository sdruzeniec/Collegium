import { Link } from 'react-router';
import { categories, mockPlaces, mockRatings } from '../data/mockData';
import { MapPin, Star, Users, Calendar, Info, Map } from 'lucide-react';
import { toast } from 'sonner';
import { COLORS } from '../constants/colors';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  // Calculate actual stats from data
  const totalPlaces = mockPlaces.length;
  const totalRatings = mockPlaces.reduce((sum, place) => sum + place.totalRatings, 0);
  const totalStudents = mockRatings.length; // Using number of ratings as proxy for students
  const totalCategories = categories.length;

  const handleAddRating = () => {
    toast.info('Vyberte si obor', {
      description: 'Pro přidání hodnocení nejdřív vyberte obor a pak konkrétní místo praxe.',
    });
    // Scroll to categories section
    const categoriesSection = document.querySelector('.max-w-6xl');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: COLORS.background }}>
      {/* Charcoal Textured Background with Large Spirals */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Charcoal texture overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, ${COLORS.darkBlue}22 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, ${COLORS.teal}22 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, ${COLORS.gold}15 0%, transparent 40%)
            `,
          }}
        />
        
        {/* Large Spiral 1 - Top Left */}
        <svg className="absolute -top-32 -left-32 w-[800px] h-[800px] opacity-15" viewBox="0 0 400 400">
          <path
            d="M200,200 Q200,100 250,100 T300,150 T320,200 T310,260 T270,310 T210,330 T150,310 T100,260 T80,200 T90,140 T130,90 T180,70 T230,75"
            fill="none"
            stroke={COLORS.teal}
            strokeWidth="20"
            strokeLinecap="round"
          />
          <path
            d="M200,200 Q200,120 240,120 T280,160 T295,200 T285,245 T250,285 T205,300 T160,285 T120,245 T105,200 T115,155 T145,115 T185,100"
            fill="none"
            stroke={COLORS.gold}
            strokeWidth="15"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
        
        {/* Large Spiral 2 - Bottom Right */}
        <svg className="absolute -bottom-40 -right-40 w-[900px] h-[900px] opacity-12" viewBox="0 0 400 400">
          <path
            d="M200,200 C200,150 220,130 250,130 S300,150 300,200 S280,270 230,270 S160,250 160,200 S180,130 230,130"
            fill="none"
            stroke={COLORS.coral}
            strokeWidth="25"
            strokeLinecap="round"
          />
          <path
            d="M200,200 C200,160 215,145 240,145 S285,160 285,200 S270,255 235,255 S175,240 175,200 S190,145 230,145"
            fill="none"
            stroke={COLORS.orange}
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
        
        {/* Large Spiral 3 - Center */}
        <svg className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] opacity-10" viewBox="0 0 400 400">
          <path
            d="M200,200 Q200,140 230,130 T270,150 T290,200 T275,250 T240,280 T200,285 T160,270 T130,240 T120,200 T135,160 T170,135 T210,130"
            fill="none"
            stroke={COLORS.darkBlue}
            strokeWidth="22"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Additional texture elements */}
        <svg className="absolute top-20 right-1/4 w-[400px] h-[400px] opacity-8" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke={COLORS.teal} strokeWidth="12"/>
          <circle cx="100" cy="100" r="50" fill="none" stroke={COLORS.gold} strokeWidth="10"/>
        </svg>
        
        <svg className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] opacity-10" viewBox="0 0 200 200">
          <path
            d="M100,20 Q150,50 150,100 T100,180 T50,100 T100,20"
            fill="none"
            stroke={COLORS.coral}
            strokeWidth="15"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 fade-up relative z-10">
        <div className="text-center mb-16 fade-up">
          <h1 className="text-6xl mb-6 font-semibold" style={{ color: COLORS.darkBlue }}>
            Collegium
          </h1>
          <p className="text-2xl max-w-3xl mx-auto mb-8" style={{ color: COLORS.textDark }}>
            Veškeré informace na jednom místě. Sdílejte své zkušenosti, pomozte spolužákům najít tu nejlepší praxi a sledujte školní akce
          </p>
          <Link 
            to="/mapa"
            className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full text-xl hover:shadow-lg transition-all duration-300"
            style={{ backgroundColor: COLORS.teal }}
          >
            <Map className="w-6 h-6" />
            Zobrazit mapu praxí
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center fade-up transition-transform duration-300 hover:scale-105" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: `${COLORS.darkBlue}20` }}>
              <MapPin className="w-6 h-6" style={{ color: COLORS.darkBlue }} />
            </div>
            <div className="text-3xl mb-2" style={{ color: COLORS.darkBlue }}>{totalPlaces}+</div>
            <div className="text-gray-600">Míst pro praxi</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center fade-up transition-transform duration-300 hover:scale-105" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: `${COLORS.teal}20` }}>
              <Star className="w-6 h-6" style={{ color: COLORS.teal }} />
            </div>
            <div className="text-3xl mb-2" style={{ color: COLORS.teal }}>{totalRatings}+</div>
            <div className="text-gray-600">Hodnocení studentů</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center fade-up transition-transform duration-300 hover:scale-105" style={{ animationDelay: '0.6s' }}>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: `${COLORS.gold}20` }}>
              <Users className="w-6 h-6" style={{ color: COLORS.gold }} />
            </div>
            <div className="text-3xl mb-2" style={{ color: COLORS.gold }}>{totalStudents}+</div>
            <div className="text-gray-600">Registrovaných studentů</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center fade-up transition-transform duration-300 hover:scale-105" style={{ animationDelay: '0.8s' }}>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: `${COLORS.coral}20` }}>
              <Info className="w-6 h-6" style={{ color: COLORS.coral }} />
            </div>
            <div className="text-3xl mb-2" style={{ color: COLORS.coral }}>{totalCategories}</div>
            <div className="text-gray-600">Studijní obory</div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-6xl mx-auto mb-16 fade-up">
          <h2 className="text-4xl text-center mb-10" style={{ color: COLORS.darkBlue }}>
            Vyberte svůj obor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group"
              >
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-4 border-transparent hover:border-current"
                  style={{ color: category.color }}
                >
                  <div className="text-6xl mb-4 text-center">{category.icon}</div>
                  <h3 className="text-xl text-center text-gray-800 group-hover:text-current transition-colors leading-snug">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 fade-up">
          <Link to="/kalendar" className="group">
            <div 
              className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-white"
              style={{ backgroundColor: COLORS.teal }}
            >
              <Calendar className="w-12 h-12 mb-4" />
              <h3 className="text-3xl mb-2">Kalendář akcí</h3>
              <p className="text-lg">Nadcházející události a termíny</p>
            </div>
          </Link>
          <Link to="/informace" className="group">
            <div 
              className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-white"
              style={{ backgroundColor: COLORS.coral }}
            >
              <Info className="w-12 h-12 mb-4" />
              <h3 className="text-3xl mb-2">Informace</h3>
              <p className="text-lg">Jak aplikace funguje a kontakt</p>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center fade-up">
          <div className="bg-white rounded-2xl p-10 shadow-xl max-w-3xl mx-auto">
            <h2 className="text-3xl mb-4" style={{ color: COLORS.darkBlue }}>
              Máte zkušenost z praxe?
            </h2>
            <p className="text-xl mb-6" style={{ color: COLORS.textMuted }}>
              Vaše hodnocení pomůže ostatním studentům při výběru praxe. Všechna hodnocení procházejí kontrolou před zveřejněním.
            </p>
            <button 
              className="text-white px-8 py-4 rounded-full text-xl hover:shadow-lg transition-shadow" 
              style={{ backgroundColor: COLORS.orange }}
              onClick={handleAddRating}
            >
              Přidat hodnocení
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind animace */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        
        /* Art Gallery Style Animations */
        @keyframes artFloat {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
            opacity: 0.15;
          }
          50% { 
            transform: translateY(-30px) rotate(3deg);
            opacity: 0.20;
          }
        }
        
        @keyframes artFloatSlow {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.10;
          }
          33% { 
            transform: translate(20px, -20px) rotate(-5deg);
            opacity: 0.12;
          }
          66% { 
            transform: translate(-15px, -35px) rotate(5deg);
            opacity: 0.15;
          }
        }
        
        .art-float {
          animation: artFloat 20s ease-in-out infinite;
        }
        
        .art-float-slow {
          animation: artFloatSlow 25s ease-in-out infinite;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .art-float, .art-float-slow {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}