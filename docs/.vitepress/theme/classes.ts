/**
 * The nine classes of the Buff Reminder class pages, in sidebar order.
 * Colours only: names and card texts live in the locale files under
 * `themeConfig.pardona.classes`.
 */

export type ClassId =
  | 'druid'
  | 'hunter'
  | 'mage'
  | 'paladin'
  | 'priest'
  | 'rogue'
  | 'shaman'
  | 'warlock'
  | 'warrior'

export interface WowClass {
  id: ClassId
  /** Class colour, used for accents only (bars, card top edge). */
  color: string
  /** Colour for the class name as text on the dark background. */
  textColor: string
}

export const classes: WowClass[] = [
  { id: 'druid', color: '#FF7C0A', textColor: '#FF7C0A' },
  { id: 'hunter', color: '#AAD372', textColor: '#AAD372' },
  { id: 'mage', color: '#3FC7EB', textColor: '#3FC7EB' },
  { id: 'paladin', color: '#F48CBA', textColor: '#F48CBA' },
  { id: 'priest', color: '#FFFFFF', textColor: '#FFFFFF' },
  { id: 'rogue', color: '#FFF468', textColor: '#FFF468' },
  // #0070DD is too dark for text on the dark violet background.
  { id: 'shaman', color: '#0070DD', textColor: '#4DA3FF' },
  { id: 'warlock', color: '#8788EE', textColor: '#8788EE' },
  { id: 'warrior', color: '#C69B6D', textColor: '#C69B6D' }
]

/** Path of a class page without language prefix and base. */
export function classPath(id: ClassId): string {
  return `/buff-reminder/classes/${id}`
}

export function getClass(id: ClassId): WowClass {
  const cls = classes.find((c) => c.id === id)
  if (!cls) throw new Error(`Unknown class id: ${id}`)
  return cls
}
