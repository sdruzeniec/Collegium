export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'praxe' | 'akce' | 'deadline';
  color: string;
}

export const mockEvents: Event[] = [
  {
    id: 'e1',
    title: 'Den otevřených dveří - Veterinární klinika',
    date: '2026-03-15',
    time: '10:00 - 16:00',
    location: 'Zvířecí nemocnice Praha',
    description: 'Představení veterinární kliniky pro studenty. Možnost prohlídky a rozhovoru s veterináři.',
    category: 'praxe',
    color: '#E76F51'
  },
  {
    id: 'e2',
    title: 'Seminář: Moderní metody předškolní pedagogiky',
    date: '2026-03-20',
    time: '14:00 - 17:00',
    location: 'Aula školy',
    description: 'Přednáška odborníků z oboru o nejnovějších trendech v předškolní pedagogice.',
    category: 'akce',
    color: '#E9C46A'
  },
  {
    id: 'e3',
    title: 'Deadline: Hodnocení praxí',
    date: '2026-03-25',
    time: '23:59',
    location: 'Online',
    description: 'Poslední den pro odevzdání hodnocení vašich praxí za zimní semestr.',
    category: 'deadline',
    color: '#F4A261'
  },
  {
    id: 'e4',
    title: 'Exkurze do Centra sociálních služeb',
    date: '2026-04-05',
    time: '09:00 - 14:00',
    location: 'Centrum sociálních služeb, Praha 1',
    description: 'Návštěva centra pro studenty sociální práce s workshopem.',
    category: 'praxe',
    color: '#E76F51'
  },
  {
    id: 'e5',
    title: 'Jarní festival studentů',
    date: '2026-04-12',
    time: '15:00 - 21:00',
    location: 'Školní areál',
    description: 'Tradiční studentský festival s vystoupeními, stánky a zábavou.',
    category: 'akce',
    color: '#E9C46A'
  },
  {
    id: 'e6',
    title: 'Workshop: Práce s dětmi se specifickými potřebami',
    date: '2026-04-18',
    time: '13:00 - 16:00',
    location: 'Učebna 201',
    description: 'Praktický workshop zaměřený na práci s dětmi se speciálními vzdělávacími potřebami.',
    category: 'akce',
    color: '#E9C46A'
  },
  {
    id: 'e7',
    title: 'Termín prezentací praxí',
    date: '2026-04-30',
    time: '08:00 - 16:00',
    location: 'Aula školy',
    description: 'Studenti prezentují své zkušenosti z praxí před spolužáky a vyučujícími.',
    category: 'deadline',
    color: '#F4A261'
  },
  {
    id: 'e8',
    title: 'Konference: Budoucnost sociální práce',
    date: '2026-05-08',
    time: '09:00 - 17:00',
    location: 'Kongresové centrum',
    description: 'Celodenní konference s odborníky z oboru sociální práce.',
    category: 'akce',
    color: '#E9C46A'
  }
];