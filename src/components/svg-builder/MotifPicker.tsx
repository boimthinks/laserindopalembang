import { motifCategoryList } from '../../lib/svgPatterns'

interface MotifPickerProps {
  selected: string
  onSelect: (type: string) => void
}

const typeIcons: Record<string, string> = {
  'Geometris Minimalis': '◆',
  'Hexagon / Sarang Lebah': '⬡',
  'Star Diamond': '✦',
  'Garis Vertikal Miring': '📏',
  'Floral Modern': '🌿',
  'Daun Tropis Lebar': '🌴',
  'Pohon Gundul / Ranting': '🌳',
  'Batik Nusantara': '🦚',
  'Songket Palembang': '✨',
  'Anyaman Tradisional': '𓋴',
  'Mandala Geometris': '🔯',
  'Kaligrafi / Islami': '🕌',
  'Moroccan Pattern': '🔶',
  'Mozaik Lingkaran': '◎',
  'Naga & Burung Merak': '🐉',
}

export default function MotifPicker({ selected, onSelect }: MotifPickerProps) {
  return (
    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-zinc-800">Pilih Motif</h3>
      {motifCategoryList.map((cat) => (
        <div key={cat.id}>
          <h4 class="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">{cat.label}</h4>
          <div class="space-y-1">
            {cat.types.map((type) => (
              <button
                key={type}
                onClick={() => onSelect(type)}
                class={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-sm transition-all ${
                  selected === type
                    ? 'bg-brand-primary text-white font-medium shadow-sm'
                    : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100'
                }`}
              >
                <span class="text-base">{typeIcons[type] || '◇'}</span>
                <span>{type}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
