import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Place, categories } from '../data/mockData';
import { Star } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapViewProps {
  places: Place[];
  onPlaceClick: (place: Place) => void;
  categoryColor: string;
}

export function MapView({ places, onPlaceClick, categoryColor }: MapViewProps) {
  // Calculate center based on places
  const center: [number, number] = places.length > 0
    ? [
        places.reduce((sum, p) => sum + p.lat, 0) / places.length,
        places.reduce((sum, p) => sum + p.lng, 0) / places.length
      ]
    : [49.7384, 13.3736]; // Plzeň, Czech Republic

  // Create custom marker icon with category color
  const createCustomIcon = (color: string) => {
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: ${color}; width: 32px; height: 32px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });
  };

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={center}
        zoom={places.length > 0 ? 10 : 9}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        key={`map-${center[0]}-${center[1]}`}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.map((place) => {
          const category = categories.find((c) => c.id === place.category);
          const markerColor = category?.color || categoryColor;
          
          return (
            <Marker
              key={place.id}
              position={[place.lat, place.lng]}
              icon={createCustomIcon(markerColor)}
              eventHandlers={{
                click: () => onPlaceClick(place),
              }}
            >
              <Popup>
                <div className="p-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{category?.icon}</span>
                    <h3 className="font-semibold text-lg">{place.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{place.address}</p>
                  <p className="text-xs text-gray-500 mb-2">📍 {place.region}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{place.averageRating.toFixed(1)}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({place.totalRatings} reviews)
                    </span>
                  </div>
                  <button
                    onClick={() => onPlaceClick(place)}
                    className="mt-3 w-full px-4 py-2 rounded-lg text-white text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: markerColor }}
                  >
                    Zobrazit detaily
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}