import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Search, Plus } from 'lucide-react';
import { MapView } from '../components/MapView';
import { PlaceDetails } from '../components/PlaceDetails';
import { RatingDialog } from '../components/RatingDialog';
import { AddPlaceDialog } from '../components/AddPlaceDialog';
import { categories, mockPlaces, mockRatings, Place } from '../data/mockData';
import { toast } from 'sonner';
import { COLORS } from '../constants/colors';

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find((c) => c.id === categoryId);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showRatingDialog, setShowRatingDialog] = useState(false);
  const [showAddPlaceDialog, setShowAddPlaceDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Category not found</h1>
          <Link to="/" className="text-blue-500 hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const places = mockPlaces.filter((p) => p.category === categoryId);
  const filteredPlaces = places.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlaceClick = (place: Place) => {
    setSelectedPlace(place);
  };

  const handleAddRating = () => {
    setShowRatingDialog(true);
  };

  const handleRatingSubmit = (rating: any) => {
    toast.success('Hodnocení odesláno! 🎉', {
      description: 'Děkujeme! Vaše hodnocení bude zkontrolováno a brzy zveřejněno.',
    });
  };

  const handleAddPlaceSubmit = (placeData: any) => {
    toast.success('Místo odesláno ke kontrole! 📍', {
      description: 'Zkontrolujeme údaje a ozveme se vám emailem. Děkujeme!',
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: `${category.color}10` }}>
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              to="/"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="text-5xl">{category.icon}</div>
              <div>
                <h1 className="text-3xl" style={{ color: category.color }}>
                  {category.name}
                </h1>
                <p className="text-gray-600">
                  {places.length} míst pro praxi
                </p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="flex gap-3 items-center">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Hledat podle jména nebo adresy..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-current focus:outline-none transition-colors"
                style={{
                  borderColor: searchQuery ? category.color : undefined,
                }}
              />
            </div>
            <button
              onClick={() => setShowAddPlaceDialog(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-white hover:shadow-lg transition-shadow whitespace-nowrap"
              style={{ backgroundColor: category.color }}
            >
              <Plus className="w-5 h-5" />
              Přidat místo
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-250px)]">
          {/* Map */}
          <div className="lg:col-span-2 h-full">
            <MapView
              places={filteredPlaces}
              onPlaceClick={handlePlaceClick}
              categoryColor={category.color}
            />
          </div>

          {/* Sidebar */}
          <div className="h-full">
            {selectedPlace ? (
              <PlaceDetails
                place={selectedPlace}
                ratings={mockRatings}
                category={category}
                onClose={() => setSelectedPlace(null)}
                onAddRating={handleAddRating}
              />
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-6 h-full">
                <h2 className="text-2xl mb-4">Seznam míst</h2>
                <div className="space-y-3 overflow-y-auto max-h-[calc(100%-60px)]">
                  {filteredPlaces.map((place) => (
                    <button
                      key={place.id}
                      onClick={() => handlePlaceClick(place)}
                      className="w-full text-left p-4 border-2 rounded-xl hover:shadow-md transition-all"
                      style={{
                        borderColor: `${category.color}30`,
                      }}
                    >
                      <h3 className="font-semibold mb-1">{place.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{place.address}</p>
                      <div className="flex items-center gap-2">
                        <div
                          className="px-2 py-1 rounded text-sm text-white"
                          style={{ backgroundColor: category.color }}
                        >
                          ⭐ {place.averageRating.toFixed(1)}
                        </div>
                        <span className="text-sm text-gray-500">
                          {place.totalRatings} hodnocení
                        </span>
                      </div>
                    </button>
                  ))}
                  {filteredPlaces.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      Žádná místa nenalezena.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Rating Dialog */}
      {selectedPlace && (
        <RatingDialog
          open={showRatingDialog}
          onOpenChange={setShowRatingDialog}
          place={selectedPlace}
          category={category}
          onSubmit={handleRatingSubmit}
        />
      )}

      {/* Add Place Dialog */}
      <AddPlaceDialog
        open={showAddPlaceDialog}
        onOpenChange={setShowAddPlaceDialog}
        category={category}
        onSubmit={handleAddPlaceSubmit}
      />
    </div>
  );
}