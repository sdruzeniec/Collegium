import { Place, Rating, Category } from '../data/mockData';
import { Star, MapPin, Calendar, User, X } from 'lucide-react';

interface PlaceDetailsProps {
  place: Place;
  ratings: Rating[];
  category: Category;
  onClose: () => void;
  onAddRating: () => void;
}

export function PlaceDetails({ place, ratings, category, onClose, onAddRating }: PlaceDetailsProps) {
  const placeRatings = ratings.filter((r) => r.placeId === place.id);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 h-full overflow-y-auto">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-3xl mb-2">{place.name}</h2>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>{place.address}</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Overall Rating */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="text-6xl" style={{ color: category.color }}>
            {place.averageRating.toFixed(1)}
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-6 h-6 text-yellow-400"
                  fill={star <= Math.round(place.averageRating) ? '#FACC15' : 'none'}
                />
              ))}
            </div>
            <div className="text-gray-600">
              Na základě {place.totalRatings} hodnocení studentů
            </div>
          </div>
        </div>
      </div>

      {/* Add Rating Button */}
      <button
        onClick={onAddRating}
        className="w-full py-4 rounded-xl text-white text-lg mb-6 hover:shadow-lg transition-shadow"
        style={{ backgroundColor: category.color }}
      >
        ⭐ Přidat hodnocení
      </button>

      {/* Reviews List */}
      <div>
        <h3 className="text-2xl mb-4">Hodnocení studentů</h3>
        {placeRatings.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Star className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>Zatím žádná hodnocení. Buďte první!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {placeRatings.map((rating) => (
              <div
                key={rating.id}
                className="border-2 rounded-xl p-4"
                style={{ borderColor: `${category.color}30` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: category.color }}
                    >
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div>{rating.studentName}</div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {new Date(rating.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">
                      {(
                        rating.responses.reduce((sum, r) => sum + r.rating, 0) /
                        rating.responses.length
                      ).toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* Individual Question Ratings */}
                <div className="space-y-2 mb-3">
                  {rating.responses.map((response, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{response.question}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3"
                            fill={i < response.rating ? category.color : 'none'}
                            style={{ color: category.color }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comment */}
                {rating.comment && (
                  <div className="bg-gray-50 rounded-lg p-3 text-gray-700">
                    "{rating.comment}"
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}