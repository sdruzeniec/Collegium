import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Search, Filter, MapPin } from 'lucide-react';
import { MapView } from '../components/MapView';
import { PlaceDetails } from '../components/PlaceDetails';
import { RatingDialog } from '../components/RatingDialog';
import { categories, mockPlaces, mockRatings, regions, Place } from '../data/mockData';
import { toast } from 'sonner';
import { COLORS } from '../constants/colors';

export default function MapPage() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showRatingDialog, setShowRatingDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categories.map((c) => c.id)
  );
  const [selectedRegions, setSelectedRegions] = useState<string[]>(
    [...regions]
  );

  const filteredPlaces = mockPlaces.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.includes(p.category);
    const matchesRegion = selectedRegions.includes(p.region);
    return matchesSearch && matchesCategory && matchesRegion;
  });

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

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleRegion = (regionId: string) => {
    setSelectedRegions((prev) =>
      prev.includes(regionId)
        ? prev.filter((id) => id !== regionId)
        : [...prev, regionId]
    );
  };

  const selectedCategory = selectedPlace
    ? categories.find((c) => c.id === selectedPlace.category)
    : null;

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.background }}>
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
            <div>
              <h1 className="text-3xl" style={{ color: COLORS.darkBlue }}>Mapa všech praxí</h1>
              <p className="text-gray-600">
                {filteredPlaces.length} míst pro praxi
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-xl mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Hledat podle jména nebo adresy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#5E3BEE] focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 text-gray-700">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filtrovat:</span>
            </div>
            {categories.map((category) => {
              const isSelected = selectedCategories.includes(category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${
                    isSelected
                      ? 'text-white shadow-md'
                      : 'bg-white text-gray-700 hover:shadow-md'
                  }`}
                  style={{
                    backgroundColor: isSelected ? category.color : undefined,
                    borderColor: category.color,
                  }}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className="text-sm">{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Region Filters */}
          <div className="flex flex-wrap gap-3 items-center mt-4">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Okres:</span>
            </div>
            <button
              onClick={() => setSelectedRegions([...regions])}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${
                selectedRegions.length === regions.length
                  ? 'text-white shadow-md'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
              style={{
                backgroundColor: selectedRegions.length === regions.length ? COLORS.teal : undefined,
                borderColor: COLORS.teal,
              }}
            >
              <span className="text-sm">Vše</span>
            </button>
            {regions.map((region) => {
              const isSelected = selectedRegions.includes(region);
              return (
                <button
                  key={region}
                  onClick={() => toggleRegion(region)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${
                    isSelected
                      ? 'text-white shadow-md'
                      : 'bg-white text-gray-700 hover:shadow-md'
                  }`}
                  style={{
                    backgroundColor: isSelected ? COLORS.teal : undefined,
                    borderColor: COLORS.teal,
                  }}
                >
                  <span className="text-sm">{region}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-280px)]">
          {/* Map */}
          <div className="lg:col-span-2 h-full">
            <MapView
              places={filteredPlaces}
              onPlaceClick={handlePlaceClick}
              categoryColor="#5E3BEE"
            />
          </div>

          {/* Sidebar */}
          <div className="h-full">
            {selectedPlace && selectedCategory ? (
              <PlaceDetails
                place={selectedPlace}
                ratings={mockRatings}
                category={selectedCategory}
                onClose={() => setSelectedPlace(null)}
                onAddRating={handleAddRating}
              />
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-6 h-full">
                <h2 className="text-2xl mb-4">Seznam míst</h2>
                <div className="space-y-3 overflow-y-auto max-h-[calc(100%-60px)]">
                  {filteredPlaces.map((place) => {
                    const category = categories.find(
                      (c) => c.id === place.category
                    );
                    return (
                      <button
                        key={place.id}
                        onClick={() => handlePlaceClick(place)}
                        className="w-full text-left p-4 border-2 rounded-xl hover:shadow-md transition-all"
                        style={{
                          borderColor: `${category?.color}30`,
                        }}
                      >
                        <div className="flex items-start gap-3 mb-2">
                          <div className="text-2xl flex-shrink-0">
                            {category?.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold mb-1">{place.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {place.address}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div
                            className="px-2 py-1 rounded text-sm text-white"
                            style={{ backgroundColor: category?.color }}
                          >
                            ⭐ {place.averageRating.toFixed(1)}
                          </div>
                          <span className="text-sm text-gray-500">
                            {place.totalRatings} hodnocení
                          </span>
                        </div>
                      </button>
                    );
                  })}
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
      {selectedPlace && selectedCategory && (
        <RatingDialog
          open={showRatingDialog}
          onOpenChange={setShowRatingDialog}
          place={selectedPlace}
          category={selectedCategory}
          onSubmit={handleRatingSubmit}
        />
      )}
    </div>
  );
}