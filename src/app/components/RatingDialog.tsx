import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Star } from 'lucide-react';
import { Place, Category } from '../data/mockData';

interface RatingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  place: Place;
  category: Category;
  onSubmit: (rating: any) => void;
}

export function RatingDialog({ open, onOpenChange, place, category, onSubmit }: RatingDialogProps) {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});
  const [comment, setComment] = useState('');
  const [studentName, setStudentName] = useState('');

  const handleRatingChange = (question: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [question]: rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const responses = category.questions.map((q) => ({
      question: q,
      rating: ratings[q] || 0,
    }));
    
    onSubmit({
      placeId: place.id,
      studentName,
      date: new Date().toISOString().split('T')[0],
      responses,
      comment,
    });
    
    // Reset form
    setRatings({});
    setComment('');
    setStudentName('');
    onOpenChange(false);
  };

  const isFormValid = studentName.trim() !== '' && 
    category.questions.every((q) => ratings[q] && ratings[q] > 0);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" style={{ zIndex: 9999 }} />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto" style={{ zIndex: 10000 }}>
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-3xl">
              Hodnotit {place.name}
            </Dialog.Title>
            <Dialog.Close className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Student Name */}
            <div className="mb-6">
              <label className="block text-lg mb-2">Vaše jméno (Jméno a iniciála příjmení)</label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="např. Anna K."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-current focus:outline-none transition-colors"
                style={{ borderColor: ratings[category.questions[0]] ? category.color : undefined }}
                required
              />
            </div>

            {/* Rating Questions */}
            <div className="space-y-6 mb-6">
              {category.questions.map((question, index) => (
                <div key={index}>
                  <label className="block text-lg mb-3">{question}</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => handleRatingChange(question, rating)}
                        className="flex-1 p-4 rounded-xl border-2 transition-all hover:scale-105"
                        style={{
                          backgroundColor: ratings[question] === rating ? category.color : 'white',
                          borderColor: ratings[question] === rating ? category.color : '#e5e7eb',
                          color: ratings[question] === rating ? 'white' : '#6b7280',
                        }}
                      >
                        <Star
                          className="w-6 h-6 mx-auto mb-1"
                          fill={ratings[question] === rating ? 'white' : 'none'}
                        />
                        <div className="text-sm">{rating}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Comment */}
            <div className="mb-6">
              <label className="block text-lg mb-2">Další komentář (Nepovinné)</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Sdílejte svou zkušenost..."
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-current focus:outline-none transition-colors resize-none"
                style={{ borderColor: comment ? category.color : undefined }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className="w-full py-4 rounded-xl text-white text-lg transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: category.color }}
            >
              Odeslat hodnocení
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}