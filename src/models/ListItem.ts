// src/models/ListItem.ts

// Un item dentro de una lista específica.
// Aquí sí va la cantidad porque es lo que el usuario pidió para ESTA lista.
export interface ListItem {
  id: string;         // id único del item dentro de la lista
  productId: string;  // referencia al Product del catálogo
  quantity: number;   // cuánto quiere el usuario (1, 2, 3kg, etc.)
  bought: boolean;    // si ya lo marcó como comprado
  // opcionalmente: notes?: string;
}