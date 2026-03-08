import { COLORS } from '../constants/colors';

export interface Place {
  id: string;
  name: string;
  category: string;
  address: string;
  region: string;
  lat: number;
  lng: number;
  averageRating: number;
  totalRatings: number;
}

export interface Rating {
  id: string;
  placeId: string;
  studentName: string;
  date: string;
  responses: {
    question: string;
    rating: number;
  }[];
  comment?: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
  questions: string[];
}

export const categories: Category[] = [
  {
    id: 'predskolni',
    name: 'Předškolní a mimoškolní pedagogika',
    color: COLORS.pedagogika,
    icon: '🎨',
    questions: [
      'Jak vstřícný byl personál?',
      'Kvalita mentoringu',
      'Příležitosti k učení',
      'Pracovní prostředí a vybavení',
      'Doporučili byste toto místo?'
    ]
  },
  {
    id: 'veterinarstvi',
    name: 'Veterinářství',
    color: COLORS.veterinarstvi,
    icon: '🐾',
    questions: [
      'Rozmanitost případů',
      'Kvalita vedení a supervize',
      'Praktické zkušenosti',
      'Vybavení kliniky',
      'Doporučili byste toto místo?'
    ]
  },
  {
    id: 'socialni',
    name: 'Sociální práce',
    color: COLORS.socialni,
    icon: '🤝',
    questions: [
      'Práce s klienty',
      'Kvalita supervize',
      'Podpora od týmu',
      'Prostředí pracoviště',
      'Doporučili byste toto místo?'
    ]
  }
];

export const regions = ['Plzeň-město', 'Plzeň-sever', 'Plzeň-jih', 'Rokycany', 'Klatovy'] as const;

export const mockPlaces: Place[] = [
  // Předškolní pedagogika
  {
    id: '1',
    name: 'Mateřská škola Sluníčko',
    category: 'predskolni',
    address: 'Hlavní 123, Plzeň',
    region: 'Plzeň-město',
    lat: 49.7384,
    lng: 13.3736,
    averageRating: 4.5,
    totalRatings: 12
  },
  {
    id: '2',
    name: 'MŠ Malé hvězdičky',
    category: 'predskolni',
    address: 'Květná 456, Plzeň',
    region: 'Plzeň-město',
    lat: 49.7477,
    lng: 13.3775,
    averageRating: 4.8,
    totalRatings: 8
  },
  {
    id: '3',
    name: 'Školní družina U Parku',
    category: 'predskolni',
    address: 'Zahradní 789, Nýřany',
    region: 'Plzeň-sever',
    lat: 49.7199,
    lng: 13.2128,
    averageRating: 4.2,
    totalRatings: 15
  },
  {
    id: '4',
    name: 'Kreativní klub Dětský svět',
    category: 'predskolni',
    address: 'Tyršova 234, Dobřany',
    region: 'Plzeň-jih',
    lat: 49.6636,
    lng: 13.2917,
    averageRating: 4.6,
    totalRatings: 10
  },
  // Veterinářství
  {
    id: '5',
    name: 'Veterinární klinika Městská',
    category: 'veterinarstvi',
    address: 'Zlíchov 321, Plzeň',
    region: 'Plzeň-město',
    lat: 49.7312,
    lng: 13.3902,
    averageRating: 4.6,
    totalRatings: 20
  },
  {
    id: '6',
    name: 'Zvířecí nemocnice Plzeň',
    category: 'veterinarstvi',
    address: 'Pražská 654, Plzeň',
    region: 'Plzeň-město',
    lat: 49.7521,
    lng: 13.3845,
    averageRating: 4.9,
    totalRatings: 18
  },
  {
    id: '7',
    name: 'Veterina U Lesa',
    category: 'veterinarstvi',
    address: 'Lesní 987, Rokycany',
    region: 'Rokycany',
    lat: 49.7428,
    lng: 13.5946,
    averageRating: 4.3,
    totalRatings: 14
  },
  {
    id: '8',
    name: 'Veterinární centrum Kralovice',
    category: 'veterinarstvi',
    address: 'Slovanská 111, Kralovice',
    region: 'Plzeň-sever',
    lat: 50.0831,
    lng: 13.4761,
    averageRating: 4.7,
    totalRatings: 16
  },
  // Sociální práce
  {
    id: '9',
    name: 'Centrum sociálních služeb',
    category: 'socialni',
    address: 'Karlova 111, Plzeň',
    region: 'Plzeň-město',
    lat: 49.7465,
    lng: 13.3738,
    averageRating: 4.4,
    totalRatings: 25
  },
  {
    id: '10',
    name: 'Dům pro seniory Harmonie',
    category: 'socialni',
    address: 'Zahradní 222, Plzeň',
    region: 'Plzeň-město',
    lat: 49.7582,
    lng: 13.3676,
    averageRating: 4.7,
    totalRatings: 22
  },
  {
    id: '11',
    name: 'Azylový dům Naděje',
    category: 'socialni',
    address: 'Masarykova 333, Klatovy',
    region: 'Klatovy',
    lat: 49.3959,
    lng: 13.2951,
    averageRating: 4.5,
    totalRatings: 19
  },
  {
    id: '12',
    name: 'Středisko pomoci rodinám',
    category: 'socialni',
    address: 'Riegrova 444, Rokycany',
    region: 'Rokycany',
    lat: 49.7398,
    lng: 13.5986,
    averageRating: 4.6,
    totalRatings: 17
  }
];

export const mockRatings: Rating[] = [
  {
    id: 'r1',
    placeId: '1',
    studentName: 'Emma S.',
    date: '2026-01-15',
    responses: [
      { question: 'Jak vstřícný byl personál?', rating: 5 },
      { question: 'Kvalita mentoringu', rating: 4 },
      { question: 'Příležitosti k učení', rating: 5 },
      { question: 'Pracovní prostředí a vybavení', rating: 4 },
      { question: 'Doporučili byste toto místo?', rating: 5 }
    ],
    comment: 'Úžasná zkušenost! Personál byl velmi vstřícný a naučila jsem se toho hodně.'
  },
  {
    id: 'r2',
    placeId: '1',
    studentName: 'Lukáš P.',
    date: '2025-11-20',
    responses: [
      { question: 'Jak vstřícný byl personál?', rating: 4 },
      { question: 'Kvalita mentoringu', rating: 4 },
      { question: 'Příležitosti k učení', rating: 4 },
      { question: 'Pracovní prostředí a vybavení', rating: 5 },
      { question: 'Doporučili byste toto místo?', rating: 4 }
    ],
    comment: 'Skvělé vybavení a přátelské prostředí.'
  }
];