import { Link } from 'react-router';
import { ArrowLeft, BookOpen, Users, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COLORS } from '../constants/colors';

export default function InfoPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.background }}>
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-4xl" style={{ color: COLORS.darkBlue }}> Informace</h1>
              <p className="text-gray-600">Důležité informace o hodnocení praxí</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* About Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl">O aplikaci</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Tato aplikace slouží studentům naší školy k hodnocení a sdílení zkušeností z odborných praxí. 
              Pomáhá vám najít vhodná pracoviště pro vaši praxi a dozvědět se více o zkušenostech spolužáků.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Všechna hodnocení procházejí kontrolou před zveřejněním, aby byla zajištěna jejich kvalita a relevance.
            </p>
          </div>

          {/* How it Works */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl mb-6" style={{ color: COLORS.darkBlue }}>Jak to funguje?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 text-white rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: COLORS.teal }}>
                  1
                </div>
                <div>
                  <h3 className="text-xl mb-2">Prozkoumejte mapu</h3>
                  <p className="text-gray-700">
                    Vyberte si své studijní zaměření a prohlédněte si pracoviště na mapě. Kliknutím na značku zobrazíte detaily a hodnocení.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 text-white rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: COLORS.gold }}>
                  2
                </div>
                <div>
                  <h3 className="text-xl mb-2">Přidejte hodnocení</h3>
                  <p className="text-gray-700">
                    Po absolvování praxe můžete přidat své hodnocení. Odpovězte na otázky a sdílejte svou zkušenost.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 text-white rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: COLORS.coral }}>
                  3
                </div>
                <div>
                  <h3 className="text-xl mb-2">Čekejte na schválení</h3>
                  <p className="text-gray-700">
                    Vaše hodnocení bude zkontrolováno a schváleno před zveřejněním. Obvykle do 2-3 pracovních dnů.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ratings Approval Process */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl mb-6" style={{ color: COLORS.darkBlue }}>Schvalování hodnocení</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Všechna odeslaná hodnocení procházejí kontrolou před zveřejněním. Koordinátor praxí zkontroluje 
                obsah a relevanci vašeho hodnocení.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Po schválení se hodnocení zobrazí na mapě a ostatní studenti je budou moci vidět při výběru praxe. 
                Obvykle trvá schválení 2-3 pracovní dny.
              </p>
            </div>
          </div>

          {/* Study Fields */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl">Studijní obory</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl mb-2"> Předškolní a mimoškolní pedagogika</h3>
                <p className="text-gray-700">
                  Praxe v mateřských školách, školních družinách a centrech volného času.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl mb-2"> Veterinářství</h3>
                <p className="text-gray-700">
                  Praxe ve veterinárních klinikách, nemocnicích a specializovaných centrech.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-xl mb-2"> Sociální práce</h3>
                <p className="text-gray-700">
                  Praxe v centrech sociálních služeb, azylových domech a dalších zařízeních.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl mb-6">Kontakt</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <span className="text-lg">sdruzeniec@pilsen.colleges.cz</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-600" />
                <span className="text-lg">Lidická 517/1 301 00 Plzeň 1 – Severní Předměstí</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}