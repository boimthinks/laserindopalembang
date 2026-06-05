interface ControlsProps {
  width: number
  height: number
  variant: number
  material: string
  repeatX: number
  repeatY: number
  onWidthChange: (v: number) => void
  onHeightChange: (v: number) => void
  onVariantChange: (v: number) => void
  onMaterialChange: (v: string) => void
  onRepeatXChange: (v: number) => void
  onRepeatYChange: (v: number) => void
}

const materials = [
  { id: 'besi', label: 'Besi Plat', desc: '0.8-2mm, kuat & ekonomis' },
  { id: 'stainless', label: 'Stainless Steel', desc: '0.6-1.5mm, anti karat' },
  { id: 'akrilik', label: 'Akrilik', desc: '2-10mm, ringan & transparan' },
]

const variantLabels = ['V1 Simpel', 'V2 Ringan', 'V3 Sedang', 'V4 Rumit', 'V5 Ekstra']

export default function Controls({
  width, height, variant, material, repeatX, repeatY,
  onWidthChange, onHeightChange, onVariantChange,
  onMaterialChange, onRepeatXChange, onRepeatYChange,
}: ControlsProps) {
  const estimatePrice = () => {
    const area = (width / 100) * (height / 100) * repeatX * repeatY
    const basePrices: Record<string, number> = { besi: 200000, stainless: 400000, akrilik: 300000 }
    const base = basePrices[material] || 200000
    const variantMultiplier = 1 + variant * 0.1
    return Math.round(area * base * variantMultiplier)
  }

  return (
    <div class="space-y-5">
      <div>
        <h3 class="text-sm font-semibold text-zinc-800 mb-3">Material</h3>
        <div class="space-y-2">
          {materials.map((m) => (
            <label
              key={m.id}
              class={`flex items-center gap-3 px-3 py-2.5 rounded-lg border cursor-pointer transition-all ${
                material === m.id
                  ? 'border-brand-primary bg-brand-primary/5 ring-1 ring-brand-primary/20'
                  : 'border-zinc-200 hover:border-zinc-300'
              }`}
            >
              <input type="radio" name="material" value={m.id} checked={material === m.id} onChange={(e) => onMaterialChange(e.target.value)} class="accent-brand-primary" />
              <div>
                <div class="text-sm font-medium text-zinc-800">{m.label}</div>
                <div class="text-xs text-zinc-400">{m.desc}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-zinc-800 mb-3">Variant Motif</h3>
        <div class="grid grid-cols-5 gap-1.5">
          {[0, 1, 2, 3, 4].map((v) => (
            <button
              key={v}
              onClick={() => onVariantChange(v)}
              class={`px-2 py-2 rounded-lg text-xs font-medium border transition-all ${
                variant === v
                  ? 'border-brand-primary bg-brand-primary/5 text-brand-primary ring-1 ring-brand-primary/20'
                  : 'border-zinc-200 text-zinc-600 hover:border-zinc-300'
              }`}
              title={variantLabels[v]}
            >
              V{v + 1}
            </button>
          ))}
        </div>
        <div class="flex justify-between text-xs text-zinc-400 mt-1">
          <span>Simpel</span>
          <span>Ekstra</span>
        </div>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-zinc-800 mb-3">Ukuran Panel</h3>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs text-zinc-500 mb-1 block">Lebar (cm)</label>
            <input type="range" min="30" max="200" value={width} onChange={(e) => onWidthChange(Number(e.target.value))} class="w-full accent-brand-primary" />
            <span class="text-xs text-zinc-600 font-medium">{width} cm</span>
          </div>
          <div>
            <label class="text-xs text-zinc-500 mb-1 block">Tinggi (cm)</label>
            <input type="range" min="30" max="200" value={height} onChange={(e) => onHeightChange(Number(e.target.value))} class="w-full accent-brand-primary" />
            <span class="text-xs text-zinc-600 font-medium">{height} cm</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-zinc-800 mb-3">Pengulangan</h3>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs text-zinc-500 mb-1 block">Horizontal</label>
            <select value={repeatX} onChange={(e) => onRepeatXChange(Number(e.target.value))} class="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm bg-white">
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n}x</option>
              ))}
            </select>
          </div>
          <div>
            <label class="text-xs text-zinc-500 mb-1 block">Vertikal</label>
            <select value={repeatY} onChange={(e) => onRepeatYChange(Number(e.target.value))} class="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm bg-white">
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n}x</option>
              ))}
            </select>
          </div>
        </div>
        <p class="text-xs text-zinc-400 mt-2">Total: {width * repeatX} cm × {height * repeatY} cm &bull; {repeatX * repeatY} panel</p>
      </div>

      <div class="bg-zinc-50 rounded-lg p-4 border border-zinc-100">
        <div class="text-xs text-zinc-500 mb-1">Estimasi Harga</div>
        <div class="text-lg font-bold text-brand-primary">
          Rp{estimatePrice().toLocaleString('id-ID')}
        </div>
        <div class="text-xs text-zinc-400 mt-1">* Harga estimasi, belum termasuk pemasangan</div>
      </div>
    </div>
  )
}
