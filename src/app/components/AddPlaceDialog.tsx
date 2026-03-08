import { useState } from 'react';
import { X, MapPin } from 'lucide-react';
import { Category } from '../data/mockData';

interface AddPlaceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: Category;
  onSubmit: (placeData: any) => void;
}

export function AddPlaceDialog({ open, onOpenChange, category, onSubmit }: AddPlaceDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    description: '',
    contactPerson: '',
    contactEmail: '',
  });

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onOpenChange(false);
    // Reset form
    setFormData({
      name: '',
      address: '',
      city: '',
      description: '',
      contactPerson: '',
      contactEmail: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4" style={{ zIndex: 9999 }}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div
          className="p-6 border-b flex items-center justify-between flex-shrink-0"
          style={{ backgroundColor: `${category.color}15` }}
        >
          <div className="flex items-center gap-3">
            <div className="text-3xl">{category.icon}</div>
            <div>
              <h2 className="text-2xl" style={{ color: category.color }}>
                Přidat nové místo
              </h2>
              <p className="text-gray-600">
                {category.name}
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 overflow-y-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-blue-900">
                  <strong>Informace:</strong> Všechna nová místa procházejí kontrolou před zveřejněním. 
                  Ozveme se vám emailem s potvrzením.
                </p>
              </div>
            </div>
          </div>

          {/* Název místa */}
          <div>
            <label className="block text-lg mb-2">
              Název zařízení <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="např. Mateřská škola Sluníčko"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-current focus:outline-none transition-colors"
              style={{ borderColor: formData.name ? category.color : undefined }}
            />
          </div>

          {/* Adresa */}
          <div>
            <label className="block text-lg mb-2">
              Ulice a číslo popisné <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="např. Hlavní 123"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-current focus:outline-none transition-colors"
              style={{ borderColor: formData.address ? category.color : undefined }}
            />
          </div>

          {/* Město */}
          <div>
            <label className="block text-lg mb-2">
              Město <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="např. Praha"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-current focus:outline-none transition-colors"
              style={{ borderColor: formData.city ? category.color : undefined }}
            />
          </div>

          {/* Popis */}
          <div>
            <label className="block text-lg mb-2">
              Popis místa (volitelné)
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Krátký popis zařízení, co nabízí, kolik studentů mohou přijmout..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-current focus:outline-none transition-colors resize-none"
              style={{ borderColor: formData.description ? category.color : undefined }}
            />
          </div>

          {/* Kontaktní osoba */}
          <div>
            <label className="block text-lg mb-2">
              Kontaktní osoba (volitelné)
            </label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="např. Jan Novák"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-current focus:outline-none transition-colors"
              style={{ borderColor: formData.contactPerson ? category.color : undefined }}
            />
          </div>

          {/* Kontaktní email */}
          <div>
            <label className="block text-lg mb-2">
              Váš email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              required
              placeholder="vas.email@example.com"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-current focus:outline-none transition-colors"
              style={{ borderColor: formData.contactEmail ? category.color : undefined }}
            />
            <p className="text-sm text-gray-600 mt-1">
              Použijeme pro potvrzení o přijetí vaší žádosti
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors text-lg"
            >
              Zrušit
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 rounded-xl text-white hover:shadow-lg transition-shadow text-lg"
              style={{ backgroundColor: category.color }}
            >
              Odeslat ke kontrole
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}