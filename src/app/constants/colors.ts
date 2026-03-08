// Unified Color Palette for Collegium App

export const COLORS = {
  // New Main Palette
  darkBlue: '#264653',        // Dark blue-green
  teal: '#2A9D8F',           // Teal
  gold: '#E9C46A',           // Gold/Yellow
  orange: '#F4A261',         // Orange
  coral: '#E76F51',          // Coral/Red
  
  // Keep existing program colors
  pedagogika: '#84A98C',      // Green - Předškolní a mimoškolní pedagogika
  veterinarstvi: '#669BBC',   // Blue - Veterinářství  
  socialni: '#F4A261',        // Orange - Sociální práce
  
  // Neutral
  background: '#F5F5F5',      // Light gray background
  textDark: '#264653',        // Dark text
  textMuted: '#6B7280',       // Muted text
} as const;

export type ColorKey = keyof typeof COLORS;