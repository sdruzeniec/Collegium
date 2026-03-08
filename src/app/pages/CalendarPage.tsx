import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Calendar as CalendarIcon, MapPin, Clock, Filter } from 'lucide-react';
import { mockEvents } from '../data/eventsData';
import { COLORS } from '../constants/colors';

export default function CalendarPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Vše', color: COLORS.teal },
    { id: 'praxe', name: 'Praxe', color: COLORS.coral },
    { id: 'akce', name: 'Školní akce', color: COLORS.gold },
    { id: 'deadline', name: 'Termíny', color: COLORS.orange }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? mockEvents 
    : mockEvents.filter(e => e.category === selectedCategory);

  // Sort events by date
  const sortedEvents = [...filteredEvents].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Group events by month
  const groupedEvents = sortedEvents.reduce((acc, event) => {
    const date = new Date(event.date);
    const monthYear = date.toLocaleDateString('cs-CZ', { month: 'long', year: 'numeric' });
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(event);
    return acc;
  }, {} as Record<string, typeof mockEvents>);

  const getCategoryBadge = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? { name: category.name, color: category.color } : { name: '', color: '' };
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.background }}>
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link
              to="/"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-4xl">Kalendář akcí</h1>
              <p className="text-gray-600">Všechny nadcházející události a termíny</p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all"
                style={{
                  backgroundColor: selectedCategory === category.id ? category.color : 'white',
                  color: selectedCategory === category.id ? 'white' : '#4B5563',
                  border: `2px solid ${selectedCategory === category.id ? category.color : '#E5E7EB'}`
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {Object.entries(groupedEvents).map(([monthYear, events]) => (
            <div key={monthYear}>
              <h2 className="text-2xl mb-4 capitalize">{monthYear}</h2>
              <div className="space-y-4">
                {events.map(event => {
                  const badge = getCategoryBadge(event.category);
                  const eventDate = new Date(event.date);
                  const dayOfWeek = eventDate.toLocaleDateString('cs-CZ', { weekday: 'long' });
                  const day = eventDate.getDate();

                  return (
                    <div
                      key={event.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <div className="flex">
                        {/* Date Box */}
                        <div
                          className="flex-shrink-0 w-24 flex flex-col items-center justify-center text-white p-4"
                          style={{ backgroundColor: event.color }}
                        >
                          <div className="text-sm uppercase">{dayOfWeek.slice(0, 3)}</div>
                          <div className="text-4xl">{day}</div>
                        </div>

                        {/* Event Details */}
                        <div className="flex-1 p-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-2xl pr-4">{event.title}</h3>
                            <span
                              className="px-3 py-1 rounded-full text-sm text-white flex-shrink-0"
                              style={{ backgroundColor: badge.color }}
                            >
                              {badge.name}
                            </span>
                          </div>

                          <div className="space-y-2 mb-3">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>

                          <p className="text-gray-700 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <CalendarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500">Žádné události v této kategorii</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}