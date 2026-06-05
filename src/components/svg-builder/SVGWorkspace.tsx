import { useState, useMemo } from 'react'
import { getMotifContent, VW, VH } from '../../lib/svgPatterns'
import MotifPicker from './MotifPicker'
import Controls from './Controls'

export default function SVGWorkspace() {
  const [motifType, setMotifType] = useState('Geometris Minimalis')
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)
  const [variant, setVariant] = useState(0)
  const [material, setMaterial] = useState('besi')
  const [repeatX, setRepeatX] = useState(1)
  const [repeatY, setRepeatY] = useState(1)

  const content = useMemo(() => {
    return getMotifContent(motifType, variant)
  }, [motifType, variant])

  const singleSvg = useMemo(() => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${VW}" height="${VH}" viewBox="0 0 ${VW} ${VH}">
      <rect width="${VW}" height="${VH}" fill="#fafafa"/>
      <g stroke-linecap="round" stroke-linejoin="round">${content}</g>
    </svg>`
  }, [content])

  const tiledSvg = useMemo(() => {
    const cols = 2, rows = 2
    const totalW = VW * cols
    const totalH = VH * rows
    let tiles = ''
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        tiles += `<g transform="translate(${c * VW}, ${r * VH})">${content}</g>`
      }
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalW}" height="${totalH}" viewBox="0 0 ${totalW} ${totalH}">
      <rect width="${totalW}" height="${totalH}" fill="#fafafa"/>
      ${tiles}
    </svg>`
  }, [content])

  const handleDownload = () => {
    const scale = 10
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width * scale}" height="${height * scale}" viewBox="0 0 ${VW} ${VH}">
      <rect width="${VW}" height="${VH}" fill="#fafafa"/>
      <g stroke-linecap="round" stroke-linejoin="round">${content}</g>
    </svg>`
    const blob = new Blob([svg], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `cutting-${motifType.toLowerCase().replace(/\s+/g, '-')}-v${variant + 1}.svg`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleWhatsApp = () => {
    const area = (width / 100) * (height / 100) * repeatX * repeatY
    const basePrices: Record<string, number> = { besi: 200000, stainless: 400000, akrilik: 300000 }
    const base = basePrices[material] || 200000
    const cost = Math.round(area * base * (1 + variant * 0.1))
    const msg = encodeURIComponent(
      `Halo Cutting Laser Palembang, saya tertarik dengan motif "${motifType}" (V${variant + 1}).\n\n` +
      `Ukuran: ${width}cm x ${height}cm x ${repeatX * repeatY} panel\n` +
      `Material: ${material}\n` +
      `Estimasi harga: Rp ${cost.toLocaleString('id-ID')}\n\n` +
      `Mohon info lebih lanjut.`
    )
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank')
  }

  return (
    <div class="flex flex-col lg:flex-row gap-0 min-h-[100dvh]">
      {/* Sidebar */}
      <div class="lg:w-72 shrink-0 border-b lg:border-b-0 lg:border-r border-zinc-200 bg-white overflow-y-auto">
        <div class="p-4 space-y-6">
          <MotifPicker selected={motifType} onSelect={setMotifType} />
          <Controls
            width={width} height={height} variant={variant} material={material}
            repeatX={repeatX} repeatY={repeatY}
            onWidthChange={setWidth} onHeightChange={setHeight}
            onVariantChange={setVariant} onMaterialChange={setMaterial}
            onRepeatXChange={setRepeatX} onRepeatYChange={setRepeatY}
          />
        </div>
      </div>

      {/* Preview */}
      <div class="flex-1 flex flex-col bg-zinc-50">
        <div class="flex items-center justify-between px-4 py-3 border-b border-zinc-200 bg-white">
          <div>
            <h2 class="text-sm font-semibold text-zinc-800">{motifType}</h2>
            <p class="text-xs text-zinc-400">Variant V{variant + 1} &bull; Material: {material}</p>
          </div>
          <span class="text-xs text-zinc-400 bg-zinc-100 px-2 py-1 rounded">
            {motifType.toLowerCase().replace(/\s+/g, '-')}-v{variant + 1}
          </span>
        </div>

        <div class="flex-1 flex flex-col lg:flex-row gap-6 p-6 overflow-auto items-start">
          {/* Single panel */}
          <div class="flex-1 flex flex-col items-center gap-2 min-w-0">
            <span class="text-xs text-zinc-400 font-medium">Single Panel (9:16)</span>
            <div class="bg-white rounded-xl shadow-sm border border-zinc-200 p-2">
              <div style={{ width: '169px', height: '300px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ maxWidth: '100%', maxHeight: '100%' }} dangerouslySetInnerHTML={{ __html: singleSvg }} />
              </div>
            </div>
          </div>

          {/* 2×2 Tiled */}
          <div class="flex-1 flex flex-col items-center gap-2 min-w-0">
            <span class="text-xs text-zinc-400 font-medium">2&times;2 Tiled Preview</span>
            <div class="bg-white rounded-xl shadow-sm border border-zinc-200 p-2">
              <div style={{ width: '338px', height: '300px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ maxWidth: '100%', maxHeight: '100%' }} dangerouslySetInnerHTML={{ __html: tiledSvg }} />
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-zinc-200 bg-white px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-4 text-sm text-zinc-500">
            <span>Motif: <strong class="text-zinc-800">{motifType}</strong></span>
            <span>Variant: <strong class="text-zinc-800">V{variant + 1}</strong></span>
            <span>Material: <strong class="text-zinc-800">{material}</strong></span>
            <span>Ukuran: <strong class="text-zinc-800">{width}&times;{height} cm &times; {repeatX * repeatY}</strong></span>
          </div>
          <div class="flex items-center gap-2">
            <button onClick={handleDownload}
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-200 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Download SVG
            </button>
            <button onClick={handleWhatsApp}
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-accent text-white text-sm font-medium hover:bg-brand-accent-light transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              Pesan via WA
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
