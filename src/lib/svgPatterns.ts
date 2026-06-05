const VW = 450
const VH = 800
const CX = VW / 2
const CY = VH / 2

function r(n: number): string { return n.toFixed(1) }

function seedRand(seed: number): number {
  let s = Math.abs(seed * 9301 + 49297) % 233280
  return s / 233280
}

interface VariantSet {
  name: string
  svg: string
}

/* ─── GEOMETRIS MINIMALIS ─── */
function geometrisVariant(v: number): string {
  const seeds = [
    // V1: Grid kotak besar
    () => { let p = ''; for (let x=30; x<VW-20; x+=85) for (let y=30; y<VH-20; y+=85) { const s=55; p+=`<rect x="${r(x)}" y="${r(y)}" width="${r(s)}" height="${r(s)}" fill="none" stroke="#18181b" stroke-width="2.5" rx="3"/>`; if(seedRand(x*y)>0.55) p+=`<rect x="${r(x+8)}" y="${r(y+8)}" width="${r(s-16)}" height="${r(s-16)}" fill="none" stroke="#18181b" stroke-width="1"/>`; } return p; },
    // V2: Segitiga bergantian
    () => { let p = ''; for (let x=20; x<VW-10; x+=70) for (let y=20; y<VH-10; y+=70) if((Math.floor(x/70)+Math.floor(y/70))%2===0) p+=`<polygon points="${r(x+35)},${r(y+5)} ${r(x+65)},${r(y+65)} ${r(x+5)},${r(y+65)}" fill="none" stroke="#18181b" stroke-width="2.5"/>`; else p+=`<rect x="${r(x+5)}" y="${r(y+5)}" width="${r(60)}" height="${r(60)}" fill="none" stroke="#18181b" stroke-width="2.5" rx="4"/>`; return p; },
    // V3: Diamond grid
    () => { let p = ''; for (let x=0; x<VW+40; x+=80) for (let y=0; y<VH+40; y+=80) { const ox=x+(y/80%2===0?0:40); p+=`<polygon points="${r(ox+40)},${r(y+5)} ${r(ox+75)},${r(y+40)} ${r(ox+40)},${r(y+75)} ${r(ox+5)},${r(y+40)}" fill="none" stroke="#18181b" stroke-width="2.5"/>`; p+=`<polygon points="${r(ox+40)},${r(y+15)} ${r(ox+65)},${r(y+40)} ${r(ox+40)},${r(y+65)} ${r(ox+15)},${r(y+40)}" fill="none" stroke="#18181b" stroke-width="1"/>`; } return p; },
    // V4: Rectangle weave
    () => { let p = ''; for (let x=15; x<VW-5; x+=55) for (let y=15; y<VH-5; y+=55) { const w=40, h=seedRand(x*y+1)>0.5?25:40; p+=`<rect x="${r(x)}" y="${r(y)}" width="${r(w)}" height="${r(h)}" fill="none" stroke="#18181b" stroke-width="2" rx="2"/>`; } return p; },
    // V5: Concentric circles in grid
    () => { let p = ''; for (let x=0; x<VW+30; x+=75) for (let y=0; y<VH+30; y+=75) { const cx=x+37.5, cy=y+37.5; for(let ri=3;ri>0;ri--) p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="${r(ri*12)}" fill="none" stroke="#18181b" stroke-width="${r(ri===1?1.5:2)}"/>`; } return p; },
  ]
  return seeds[v]()
}

/* ─── FLORAL MODERN ─── */
function floralVariant(v: number): string {
  const ss = [
    // V1: Bunga 6 kelopak grid
    () => { let p = ''; for (let x=50; x<VW-20; x+=100) for (let y=50; y<VH-20; y+=100) { const cx=x, cy=y, r2=30; for(let a=0;a<6;a++){const ang=a*Math.PI/3; p+=`<path d="M${r(cx)} ${r(cy)} Q${r(cx+Math.cos(ang-0.4)*r2)} ${r(cy+Math.sin(ang-0.4)*r2)} ${r(cx+Math.cos(ang)*r2*1.6)} ${r(cy+Math.sin(ang)*r2*1.6)} Q${r(cx+Math.cos(ang+0.4)*r2)} ${r(cy+Math.sin(ang+0.4)*r2)} ${r(cx)} ${r(cy)}" fill="none" stroke="#18181b" stroke-width="2"/>`;} p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="8" fill="#18181b"/>`; } return p; },
    // V2: Daun menjalar vertikal
    () => { let p = ''; for (let y=40; y<VH-20; y+=70) { const sway=Math.sin(y*0.03)*40; for(let side=-1;side<=1;side+=2){ const lx=CX+sway+side*seedRand(y)*30; const ly=y; p+=`<path d="M${r(lx)} ${r(ly)} Q${r(lx+side*25)} ${r(ly-15)} ${r(lx+side*40)} ${r(ly-5)}" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<path d="M${r(lx)} ${r(ly)} Q${r(lx+side*20)} ${r(ly+10)} ${r(lx+side*35)} ${r(ly+20)}" fill="none" stroke="#18181b" stroke-width="2"/>`; } } return p; },
    // V3: Bunga matahari besar
    () => { let p = ''; const cx=CX, cy=CY, r2=120; for(let a=0;a<16;a++){const ang=a*Math.PI/8; const px=cx+Math.cos(ang)*r2*0.3, py=cy+Math.sin(ang)*r2*0.3; const ex=cx+Math.cos(ang)*r2, ey=cy+Math.sin(ang)*r2; p+=`<line x1="${r(px)}" y1="${r(py)}" x2="${r(ex)}" y2="${r(ey)}" stroke="#18181b" stroke-width="1.5"/>`; } p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="40" fill="none" stroke="#18181b" stroke-width="3"/>`; p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="15" fill="#18181b"/>`; for(let x=60;x<VW-30;x+=80) for(let y=60;y<VH-30;y+=80) if(Math.abs(x-cx)>50||Math.abs(y-cy)>50) p+=`<circle cx="${r(x)}" cy="${r(y)}" r="${r(8+seedRand(x*y)*12)}" fill="none" stroke="#18181b" stroke-width="1.5"/>`; return p; },
    // V4: Bunga kecil cluster
    () => { let p = ''; for(let i=0;i<12;i++){ const bx=seedRand(i*7)*VW*0.7+VW*0.15, by=seedRand(i*11)*VH*0.7+VH*0.15; const pr=12+seedRand(i*13)*20; for(let a=0;a<5;a++){const ang=a*Math.PI*2/5; p+=`<path d="M${r(bx)} ${r(by)} Q${r(bx+Math.cos(ang-0.3)*pr)} ${r(by+Math.sin(ang-0.3)*pr)} ${r(bx+Math.cos(ang)*pr*1.4)} ${r(by+Math.sin(ang)*pr*1.4)} Q${r(bx+Math.cos(ang+0.3)*pr)} ${r(by+Math.sin(ang+0.3)*pr)} ${r(bx)} ${r(by)}" fill="none" stroke="#18181b" stroke-width="1.8"/>`;} p+=`<circle cx="${r(bx)}" cy="${r(by)}" r="4" fill="#18181b"/>`; } return p; },
    // V5: Tangkai melengkung
    () => { let p = ''; for(let i=0;i<6;i++){ const sx=seedRand(i*3)*VW*0.6+VW*0.2, sy=VH*0.9-i*VH*0.13; p+=`<path d="M${r(sx)} ${r(VH-20)} Q${r(sx+seedRand(i*5)*40-20)} ${r(sy+60)} ${r(sx)} ${r(sy)}" fill="none" stroke="#18181b" stroke-width="2.5"/>`; const lx=sx+seedRand(i*7)*30-15, ly=sy-20; p+=`<ellipse cx="${r(lx)}" cy="${r(ly)}" rx="${r(12+seedRand(i*9)*8)}" ry="6" fill="none" stroke="#18181b" stroke-width="1.5" transform="rotate(${r(seedRand(i*11)*60-30)} ${r(lx)} ${r(ly)})"/>`; } return p; },
  ]
  return ss[v]()
}

/* ─── KALIGRAFI / ISLAMI ─── */
function islamicVariant(v: number): string {
  const ss = [
    // V1: Kubah & arch
    () => { let p = ''; for(let x=20;x<VW-15;x+=80){ const top=150; p+=`<path d="M${r(x+5)} ${r(top+120)} L${r(x+5)} ${r(top)} Q${r(x+40)} ${r(top-60)} ${r(x+75)} ${r(top)} L${r(x+75)} ${r(top+120)}" fill="none" stroke="#18181b" stroke-width="2.5"/>`; p+=`<line x1="${r(x+5)}" y1="${r(top+60)}" x2="${r(x+75)}" y2="${r(top+60)}" stroke="#18181b" stroke-width="1.5"/>`; } return p; },
    // V2: Bintang 8
    () => { let p = ''; for(let x=40;x<VW-20;x+=90) for(let y=40;y<VH-20;y+=90){ const cx=x+45, cy=y+45, s=30; const pts=[0,1,2,3,4,5,6,7].map(i=>{const a=i*Math.PI/4-Math.PI/8; return `${r(cx+Math.cos(a)*s)},${r(cy+Math.sin(a)*s)}`}).join(' '); p+=`<polygon points="${pts}" fill="none" stroke="#18181b" stroke-width="2"/>`; const pts2=[0,2,4,6].map(i=>{const a=i*Math.PI/4; return `${r(cx+Math.cos(a)*s*0.5)},${r(cy+Math.sin(a)*s*0.5)}`}).join(' '); p+=`<polygon points="${pts2}" fill="none" stroke="#18181b" stroke-width="1.5"/>`; } return p; },
    // V3: Arabesque berulang
    () => { let p = ''; for(let x=0;x<VW+30;x+=80) for(let y=0;y<VH+30;y+=80){ const cx=x+40, cy=y+40; p+=`<path d="M${r(cx-25)} ${r(cy)} C${r(cx-25)} ${r(cy-30)} ${r(cx+25)} ${r(cy-30)} ${r(cx+25)} ${r(cy)} C${r(cx+25)} ${r(cy+30)} ${r(cx-25)} ${r(cy+30)} ${r(cx-25)} ${r(cy)}" fill="none" stroke="#18181b" stroke-width="2"/>`; } return p; },
    // V4: Motif mihrab
    () => { let p = ''; const cols=4; const gw=VW/cols; for(let i=0;i<cols;i++){ const x=i*gw+10; p+=`<path d="M${r(x+5)} ${r(VH-20)} L${r(x+5)} ${r(200)} Q${r(x+gw/2)} ${r(120)} ${r(x+gw-5)} ${r(200)} L${r(x+gw-5)} ${r(VH-20)}" fill="none" stroke="#18181b" stroke-width="2.5"/>`; p+=`<line x1="${r(x+gw/2)}" y1="120" x2="${r(x+gw/2)}" y2="${r(200)}" stroke="#18181b" stroke-width="1.5"/>`; p+=`<circle cx="${r(x+gw/2)}" cy="160" r="15" fill="none" stroke="#18181b" stroke-width="1"/>`; } return p; },
    // V5: Girih/polygon islamic
    () => { let p = ''; for(let x=0;x<VW+50;x+=90) for(let y=0;y<VH+50;y+=80){const ox=x+(y/80%2===0?0:45); const pts=[0,1,2,3,4,5].map(i=>{const a=i*Math.PI/3-Math.PI/6; return `${r(ox+30+Math.cos(a)*25)},${r(y+30+Math.sin(a)*25)}`}).join(' '); p+=`<polygon points="${pts}" fill="none" stroke="#18181b" stroke-width="1.8"/>`; } return p; },
  ]
  return ss[v]()
}

/* ─── HEXAGON ─── */
function hexagonVariant(v: number): string {
  const ss = [
    () => { let p=''; const s=55, h=s*0.866; for(let r=0;r<VH/h+2;r++) for(let c=0;c<VW/(s*1.5)+2;c++){const cx=c*s*1.5+(r%2===0?0:s*0.75), cy=r*h; const pts=[0,1,2,3,4,5].map(i=>{const a=Math.PI/3*i-Math.PI/6; return `${r(cx+Math.cos(a)*s*0.45)},${r(cy+Math.sin(a)*s*0.45)}`}).join(' '); p+=`<polygon points="${pts}" fill="none" stroke="#18181b" stroke-width="2.5"/>`; } return p; },
    () => { let p=''; const s=45, h=s*0.866; for(let r=0;r<VH/h+2;r++) for(let c=0;c<VW/(s*1.5)+2;c++){const cx=c*s*1.5+(r%2===0?0:s*0.75), cy=r*h; const pts=[0,1,2,3,4,5].map(i=>{const a=Math.PI/3*i-Math.PI/6; return `${r(cx+Math.cos(a)*s*0.45)},${r(cy+Math.sin(a)*s*0.45)}`}).join(' '); p+=`<polygon points="${pts}" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<polygon points="${[0,2,4].map(i=>{const a=Math.PI/3*i-Math.PI/6; return `${r(cx+Math.cos(a)*s*0.25)},${r(cy+Math.sin(a)*s*0.25)}`}).join(' ')}" fill="none" stroke="#18181b" stroke-width="1"/>`; } return p; },
    () => { let p=''; const s=65, h=s*0.866; for(let r=0;r<VH/h+2;r++) for(let c=0;c<VW/(s*1.5)+2;c++){const cx=c*s*1.5+(r%2===0?0:s*0.75), cy=r*h; for(let i=0;i<6;i++){const a=Math.PI/3*i, a2=Math.PI/3*(i+1); p+=`<line x1="${r(cx+Math.cos(a)*s*0.2)}" y1="${r(cy+Math.sin(a)*s*0.2)}" x2="${r(cx+Math.cos(a2)*s*0.45)}" y2="${r(cy+Math.sin(a2)*s*0.45)}" stroke="#18181b" stroke-width="1.5"/>`;} } return p; },
    () => { let p=''; const s=50, h=s*0.866; for(let r=0;r<VH/h+2;r++) for(let c=0;c<VW/(s*1.5)+2;c++){const cx=c*s*1.5+(r%2===0?0:s*0.75), cy=r*h; const pts=[0,1,2,3,4,5].map(i=>{const a=Math.PI/3*i-Math.PI/6; return `${r(cx+Math.cos(a)*s*0.45)},${r(cy+Math.sin(a)*s*0.45)}`}).join(' '); p+=`<polygon points="${pts}" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="${r(s*0.12)}" fill="#18181b"/>`; } return p; },
    () => { let p=''; const s=70, h=s*0.866; for(let r=0;r<VH/h+2;r++) for(let c=0;c<VW/(s*1.5)+2;c++){const cx=c*s*1.5+(r%2===0?0:s*0.75), cy=r*h; for(let ri=2;ri>0;ri--){const pts=[0,1,2,3,4,5].map(i=>{const a=Math.PI/3*i-Math.PI/6; return `${r(cx+Math.cos(a)*s*0.45*ri/2)},${r(cy+Math.sin(a)*s*0.45*ri/2)}`}).join(' '); p+=`<polygon points="${pts}" fill="none" stroke="#18181b" stroke-width="${r(ri===1?1:2)}"/>`;} } return p; },
  ]
  return ss[v]()
}

/* ─── POHON GUNDUL ─── */
function treeVariant(v: number): string {
  const ss = [
    // V1: Pohon besar di pinggir
    () => { let p = `<path d="M55 ${VH-20} Q65 ${VH*0.45} 75 ${VH*0.15}" fill="none" stroke="#18181b" stroke-width="4"/><path d="M395 ${VH-20} Q385 ${VH*0.35} 375 ${VH*0.1}" fill="none" stroke="#18181b" stroke-width="3.5"/>`; for(let i=0;i<10;i++){const y=VH*0.2+seedRand(i*3)*VH*0.6; const sd=seedRand(i*5)>0.5?1:-1; const fromX=i<5?75:375; const toX=fromX+sd*(30+seedRand(i*7)*60); p+=`<path d="M${r(fromX)} ${r(y)} Q${r(fromX+sd*25)} ${r(y-20)} ${r(toX)} ${r(y-10-seedRand(i*11)*20)}" fill="none" stroke="#18181b" stroke-width="${r(1+seedRand(i*13)*1.5)}"/>`;} return p; },
    // V2: 3 pohon
    () => { let p = ''; [100,225,350].forEach((bx,i)=>{p+=`<path d="M${r(bx)} ${r(VH-20)} Q${r(bx+seedRand(i*3)*20-10)} ${r(VH*0.4)} ${r(bx+seedRand(i*5)*15)} ${r(VH*0.12)}" fill="none" stroke="#18181b" stroke-width="3"/>`; for(let j=0;j<6;j++){const y=VH*0.18+seedRand(i*7+j*11)*VH*0.6; const sd=seedRand(j*13)>0.5?1:-1; p+=`<path d="M${r(bx+seedRand(i*3)*15)} ${r(y)} Q${r(bx+sd*20)} ${r(y-15)} ${r(bx+sd*(30+seedRand(j*17)*25))} ${r(y-8)}" fill="none" stroke="#18181b" stroke-width="${r(1+seedRand(j*19)*1.2)}"/>`;}}); return p; },
    // V3: Akar menjalar
    () => { let p = `<path d="M${CX} ${VH-20} Q${CX+20} ${VH*0.5} ${CX+10} ${VH*0.1}" fill="none" stroke="#18181b" stroke-width="4"/>`; for(let i=0;i<15;i++){const y=VH*0.15+seedRand(i*3)*VH*0.7; const sd=seedRand(i*5)>0.5?1:-1; const lx= CX+sd*seedRand(i*7)*30; p+=`<path d="M${r(lx)} ${r(y)} Q${r(lx+sd*(15+seedRand(i*11)*30))} ${r(y-seedRand(i*13)*25)} ${r(lx+sd*(40+seedRand(i*17)*50))} ${r(y-seedRand(i*19)*15)}" fill="none" stroke="#18181b" stroke-width="${r(1+seedRand(i*23)*1)}"/>`;} return p; },
    // V4: Bonsai style
    () => { let p = `<path d="M${CX-30} ${VH-20} Q${CX-20} ${VH*0.55} ${CX-15} ${VH*0.2}" fill="none" stroke="#18181b" stroke-width="5"/>`; for(let i=0;i<12;i++){const y=VH*0.25+seedRand(i*3)*VH*0.5; const sd=1; const lx=CX-15+seedRand(i*5)*20; const toX=lx+sd*(20+seedRand(i*7)*60); const toY=y-seedRand(i*11)*30; p+=`<path d="M${r(lx)} ${r(y)} Q${r(lx+sd*(10+seedRand(i*13)*20))} ${r(y-(10+seedRand(i*17)*15))} ${r(toX)} ${r(toY)}" fill="none" stroke="#18181b" stroke-width="${r(1+seedRand(i*19)*1)}"/>`;} return p; },
    // V5: Forest edge
    () => { let p = ''; for(let t=0;t<5;t++){const bx=30+seedRand(t*3)*(VW-80); p+=`<path d="M${r(bx)} ${r(VH-20)} Q${r(bx+seedRand(t*5)*20-10)} ${r(VH*0.5)} ${r(bx+seedRand(t*7)*10)} ${r(VH*0.08+seedRand(t*11)*30)}" fill="none" stroke="#18181b" stroke-width="${r(2+seedRand(t*13))}"/>`; for(let j=0;j<4;j++){const y=VH*0.12+seedRand(t*17+j*19)*VH*0.6; const sd=seedRand(t*23+j*29)>0.5?1:-1; p+=`<path d="M${r(bx+seedRand(t*5)*10)} ${r(y)} Q${r(bx+sd*15)} ${r(y-10)} ${r(bx+sd*(20+seedRand(j*31)*25))} ${r(y-seedRand(j*37)*10)}" fill="none" stroke="#18181b" stroke-width="1.2"/>`;}} return p; },
  ]
  return ss[v]()
}

/* ─── MOROCCAN ─── */
function moroccanVariant(v: number): string {
  const ss = [
    () => { let p=''; for(let x=0;x<VW+40;x+=80) for(let y=0;y<VH+40;y+=80){const ox=x+(y/80%2===0?0:40); p+=`<rect x="${r(ox+10)}" y="${r(y+10)}" width="60" height="60" rx="8" fill="none" stroke="#18181b" stroke-width="2.5"/>`; p+=`<line x1="${r(ox+40)}" y1="${r(y+10)}" x2="${r(ox+40)}" y2="${r(y+70)}" stroke="#18181b" stroke-width="1.5"/>`; p+=`<line x1="${r(ox+10)}" y1="${r(y+40)}" x2="${r(ox+70)}" y2="${r(y+40)}" stroke="#18181b" stroke-width="1.5"/>`; p+=`<circle cx="${r(ox+40)}" cy="${r(y+40)}" r="8" fill="#18181b"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+30;x+=70) for(let y=0;y<VH+30;y+=70){const ox=x+(y/70%2===0?0:35); for(let ri=2;ri>0;ri--){const s=ri*20+5; p+=`<rect x="${r(ox+35-s)}" y="${r(y+35-s)}" width="${r(s*2)}" height="${r(s*2)}" rx="${r(s*0.3)}" fill="none" stroke="#18181b" stroke-width="${r(ri===1?1.5:2)}"/>`;}} return p; },
    () => { let p=''; for(let x=0;x<VW+60;x+=90) for(let y=0;y<VH+60;y+=90){const cx=x+45, cy=y+45; for(let a=0;a<4;a++){const ang=a*Math.PI/2; const lx=cx+Math.cos(ang)*25, ly=cy+Math.sin(ang)*25; const ex=cx+Math.cos(ang)*35, ey=cy+Math.sin(ang)*35; p+=`<line x1="${r(lx)}" y1="${r(ly)}" x2="${r(ex)}" y2="${r(ey)}" stroke="#18181b" stroke-width="2"/>`;} p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="10" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="4" fill="#18181b"/>`; } return p; },
    () => { let p=''; for(let x=0;x<VW+40;x+=75) for(let y=0;y<VH+40;y+=75){const ox=x+(y/75%2===0?0:37.5), cx=ox+37.5, cy=y+37.5; p+=`<path d="M${r(cx)} ${r(cy-30)} A30 30 0 1 1 ${r(cx-0.1)} ${r(cy-30)}" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<line x1="${r(cx-25)}" y1="${r(cy)}" x2="${r(cx+25)}" y2="${r(cy)}" stroke="#18181b" stroke-width="1.5"/>`; p+=`<line x1="${r(cx)}" y1="${r(cy-25)}" x2="${r(cx)}" y2="${r(cy+25)}" stroke="#18181b" stroke-width="1.5"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+50;x+=85) for(let y=0;y<VH+50;y+=85){const ox=x+(y/85%2===0?0:42.5); for(let ri=3;ri>0;ri--){const s=ri*10; p+=`<rect x="${r(ox+42.5-s)}" y="${r(y+42.5-s)}" width="${r(s*2)}" height="${r(s*2)}" rx="4" fill="none" stroke="#18181b" stroke-width="${r(ri===1?1:1.5)}"/>`;} } return p; },
  ]
  return ss[v]()
}

/* ─── DAUN TROPIS ─── */
function tropicalVariant(v: number): string {
  const ss = [
    () => { let p=''; for(let i=0;i<8;i++){const lx=seedRand(i*3)*VW*0.7+VW*0.1, ly=seedRand(i*5)*VH*0.7+VH*0.1, len=40+seedRand(i*7)*50, ang=seedRand(i*11)*Math.PI*2; const ex=lx+Math.cos(ang)*len, ey=ly+Math.sin(ang)*len; p+=`<path d="M${r(lx)} ${r(ly)} Q${r(lx+(ex-lx)*0.3+Math.cos(ang+1.2)*len*0.3)} ${r(ly+(ey-ly)*0.3+Math.sin(ang+1.2)*len*0.3)} ${r((lx+ex)/2+Math.cos(ang+1.57)*len*0.25)} ${r((ly+ey)/2+Math.sin(ang+1.57)*len*0.25)} Q${r(lx+(ex-lx)*0.7+Math.cos(ang-1.2)*len*0.3)} ${r(ly+(ey-ly)*0.7+Math.sin(ang-1.2)*len*0.3)} ${r(ex)} ${r(ey)}" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<line x1="${r(lx)}" y1="${r(ly)}" x2="${r(ex)}" y2="${r(ey)}" stroke="#18181b" stroke-width="1.5"/>`;} return p; },
    () => { let p=''; for(let i=0;i<6;i++){const lx=seedRand(i*3)*VW*0.6+VW*0.15, ly=seedRand(i*5)*VH*0.6+VH*0.15, len=60+seedRand(i*7)*60, ang=seedRand(i*11)*Math.PI*2; const ex=lx+Math.cos(ang)*len, ey=ly+Math.sin(ang)*len; const mx=(lx+ex)/2, my=(ly+ey)/2; const pp=lx+Math.cos(ang+1.57)*len*0.3, qp=ly+Math.sin(ang+1.57)*len*0.3; p+=`<path d="M${r(lx)} ${r(ly)} C${r(lx+(ex-lx)*0.25+Math.cos(ang+1.2)*len*0.2)} ${r(ly+(ey-ly)*0.25+Math.sin(ang+1.2)*len*0.2)} ${r(mx+Math.cos(ang+1.57)*len*0.35)} ${r(my+Math.sin(ang+1.57)*len*0.35)} ${r(ex)} ${r(ey)} C${r(mx+Math.cos(ang-1.57)*len*0.35)} ${r(my+Math.sin(ang-1.57)*len*0.35)} ${r(lx+(ex-lx)*0.25+Math.cos(ang-1.2)*len*0.2)} ${r(ly+(ey-ly)*0.25+Math.sin(ang-1.2)*len*0.2)} ${r(lx)} ${r(ly)}" fill="none" stroke="#18181b" stroke-width="1.8"/>`; p+=`<line x1="${r(lx)}" y1="${r(ly)}" x2="${r(ex)}" y2="${r(ey)}" stroke="#18181b" stroke-width="1.2"/>`; for(let s=0;s<5;s++){const t=0.2+s*0.15; const bx=lx+(ex-lx)*t, by=ly+(ey-ly)*t; p+=`<line x1="${r(bx)}" y1="${r(by)}" x2="${r(bx+Math.cos(ang+1.57)*len*0.15)}" y2="${r(by+Math.sin(ang+1.57)*len*0.15)}" stroke="#18181b" stroke-width="${r(0.8)}"/>`;} } return p; },
    () => { let p=''; for(let i=0;i<10;i++){const lx=seedRand(i*3)*VW*0.8+VW*0.05, ly=seedRand(i*5)*VH*0.8+VH*0.05, len=25+seedRand(i*7)*35, ang=seedRand(i*11)*Math.PI*2; const ex=lx+Math.cos(ang)*len, ey=ly+Math.sin(ang)*len; const mx=(lx+ex)/2+Math.cos(ang+1.57)*len*0.2, my=(ly+ey)/2+Math.sin(ang+1.57)*len*0.2; p+=`<path d="M${r(lx)} ${r(ly)} Q${r(mx)} ${r(my)} ${r(ex)} ${r(ey)}" fill="none" stroke="#18181b" stroke-width="2"/>`;} return p; },
    () => { let p=''; for(let i=0;i<5;i++){const lx=seedRand(i*3)*VW*0.5+VW*0.2, ly=seedRand(i*5)*VH*0.5+VH*0.2, len=70+seedRand(i*7)*50, ang=seedRand(i*11)*Math.PI*2; const ex=lx+Math.cos(ang)*len, ey=ly+Math.sin(ang)*len; for(let r=0;r<3;r++){const off=r*len*0.12; const pp=lx+Math.cos(ang+1.57)*off, qp=ly+Math.sin(ang+1.57)*off; const ppx=ex+Math.cos(ang+1.57)*off, qpy=ey+Math.sin(ang+1.57)*off; p+=`<path d="M${r(pp)} ${r(qp)} Q${r((pp+ppx)/2+Math.cos(ang)*len*0.1)} ${r((qp+qpy)/2+Math.sin(ang)*len*0.1)} ${r(ppx)} ${r(qpy)}" fill="none" stroke="#18181b" stroke-width="${r(1.5-r*0.3)}"/>`;}} return p; },
    () => { let p=''; for(let i=0;i<7;i++){const lx=seedRand(i*3)*VW*0.6+VW*0.15, ly=seedRand(i*5)*VH*0.6+VH*0.15, r2=20+seedRand(i*7)*30; for(let a=0;a<8;a++){const ang=a*Math.PI/4; const px=lx+Math.cos(ang)*r2, py=ly+Math.sin(ang)*r2; p+=`<path d="M${r(lx)} ${r(ly)} Q${r((lx+px)/2+Math.cos(ang+1.2)*r2*0.5)} ${r((ly+py)/2+Math.sin(ang+1.2)*r2*0.5)} ${r(px)} ${r(py)}" fill="none" stroke="#18181b" stroke-width="1.5"/>`;}} return p; },
  ]
  return ss[v]()
}

/* ─── GARIS VERTIKAL MIRING ─── */
function lineVariant(v: number): string {
  const ss = [
    () => { let p=''; const gap=20; for(let x=0;x<VW+100;x+=gap) p+=`<line x1="${r(x)}" y1="0" x2="${r(x-80)}" y2="${r(VH)}" stroke="#18181b" stroke-width="2.5"/>`; return p; },
    () => { let p=''; const gap=16; for(let x=0;x<VW+120;x+=gap){const sw=x%(gap*3)===0?3:1.5; p+=`<line x1="${r(x)}" y1="0" x2="${r(x-100)}" y2="${r(VH)}" stroke="#18181b" stroke-width="${r(sw)}"/>`;} return p; },
    () => { let p=''; const gap=25; for(let x=0;x<VW+80;x+=gap){const side=Math.floor(x/gap)%2===0?1:-1; p+=`<line x1="${r(x)}" y1="0" x2="${r(x+side*60)}" y2="${r(VH)}" stroke="#18181b" stroke-width="2"/>`;} return p; },
    () => { let p=''; const gap=30; for(let x=0;x<VW+60;x+=gap) for(let s=0;s<2;s++){const sw=s===0?2.5:1; p+=`<line x1="${r(x+s*8)}" y1="0" x2="${r(x+s*8-80)}" y2="${r(VH)}" stroke="#18181b" stroke-width="${r(sw)}"/>`;} return p; },
    () => { let p=''; const gap=22; for(let x=0;x<VW+90;x+=gap){const tilt=60+Math.sin(x*0.05)*30; p+=`<line x1="${r(x)}" y1="0" x2="${r(x-tilt)}" y2="${r(VH)}" stroke="#18181b" stroke-width="2"/>`;} return p; },
  ]
  return ss[v]()
}

/* ─── MOZAIK LINGKARAN ─── */
function circleVariant(v: number): string {
  const ss = [
    () => { let p=''; for(let x=0;x<VW+40;x+=70) for(let y=0;y<VH+40;y+=70){const ox=x+(y/70%2===0?0:35); const r2=22+seedRand(x*y)*10; p+=`<circle cx="${r(ox+35)}" cy="${r(y+35)}" r="${r(r2)}" fill="none" stroke="#18181b" stroke-width="2.5"/>`; if(seedRand(x*y+1)>0.5) p+=`<circle cx="${r(ox+35)}" cy="${r(y+35)}" r="${r(r2*0.5)}" fill="none" stroke="#18181b" stroke-width="1"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+50;x+=80) for(let y=0;y<VH+50;y+=80){const ox=x+(y/80%2===0?0:40), r2=25+seedRand(x*y)*15; p+=`<circle cx="${r(ox+40)}" cy="${r(y+40)}" r="${r(r2)}" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<circle cx="${r(ox+40)}" cy="${r(y+40)}" r="${r(r2*0.3)}" fill="none" stroke="#18181b" stroke-width="1.5"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+30;x+=60) for(let y=0;y<VH+30;y+=60){const ox=x+(y/60%2===0?0:30), r2=15+seedRand(x*y)*12; p+=`<circle cx="${r(ox+30)}" cy="${r(y+30)}" r="${r(r2)}" fill="none" stroke="#18181b" stroke-width="1.5"/>`; if(seedRand(x*y+1)>0.7) p+=`<circle cx="${r(ox+30)}" cy="${r(y+30)}" r="${r(r2*0.6)}" fill="#18181b" opacity="0.3"/>`;} return p; },
    () => { let p=''; for(let i=0;i<30;i++){const cx=seedRand(i*3)*VW*0.8+VW*0.1, cy=seedRand(i*5)*VH*0.8+VH*0.1, r2=10+seedRand(i*7)*25; p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="${r(r2)}" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="${r(r2*0.3)}" fill="#18181b"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+40;x+=75) for(let y=0;y<VH+40;y+=75){const ox=x+(y/75%2===0?0:37.5), cx=ox+37.5, cy=y+37.5; for(let r2=30;r2>0;r2-=10) p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="${r(r2)}" fill="none" stroke="#18181b" stroke-width="${r(r2>10?2:1.5)}"/>`;} return p; },
  ]
  return ss[v]()
}

/* ─── BATIK ─── */
function batikVariant(v: number): string {
  const ss = [
    () => { let p=''; for(let x=0;x<VW+40;x+=80) for(let y=0;y<VH+40;y+=80){const ox=x+(y/80%2===0?0:40), cx=ox+40, cy=y+40; p+=`<rect x="${r(cx-25)}" y="${r(cy-25)}" width="50" height="50" rx="10" fill="none" stroke="#18181b" stroke-width="2.5"/>`; p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="12" fill="none" stroke="#18181b" stroke-width="1.5"/>`; p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="4" fill="#18181b"/>`; for(let a=0;a<4;a++){const ang=a*Math.PI/2+Math.PI/4; p+=`<line x1="${r(cx+Math.cos(ang)*10)}" y1="${r(cy+Math.sin(ang)*10)}" x2="${r(cx+Math.cos(ang)*22)}" y2="${r(cy+Math.sin(ang)*22)}" stroke="#18181b" stroke-width="1.5"/>`;}} return p; },
    () => { let p=''; for(let x=0;x<VW+30;x+=70) for(let y=0;y<VH+30;y+=70){const ox=x+(y/70%2===0?0:35), cx=ox+35, cy=y+35; p+=`<path d="M${r(cx)} ${r(cy-20)} Q${r(cx+15)} ${r(cy-20)} ${r(cx+20)} ${r(cy)} Q${r(cx+15)} ${r(cy+20)} ${r(cx)} ${r(cy+20)} Q${r(cx-15)} ${r(cy+20)} ${r(cx-20)} ${r(cy)} Q${r(cx-15)} ${r(cy-20)} ${r(cx)} ${r(cy-20)}Z" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="6" fill="#18181b"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+50;x+=90) for(let y=0;y<VH+50;y+=90){const ox=x+(y/90%2===0?0:45), cx=ox+45, cy=y+45; p+=`<rect x="${r(cx-30)}" y="${r(cy-30)}" width="60" height="60" rx="15" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<rect x="${r(cx-15)}" y="${r(cy-15)}" width="30" height="30" rx="7" fill="none" stroke="#18181b" stroke-width="1.5"/>`; p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="5" fill="#18181b"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+40;x+=75) for(let y=0;y<VH+40;y+=75){const ox=x+(y/75%2===0?0:37.5), cx=ox+37.5, cy=y+37.5; for(let i=0;i<6;i++){const a=i*Math.PI/3; p+=`<line x1="${r(cx+Math.cos(a)*8)}" y1="${r(cy+Math.sin(a)*8)}" x2="${r(cx+Math.cos(a)*20)}" y2="${r(cy+Math.sin(a)*20)}" stroke="#18181b" stroke-width="1.2"/>`;} p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="8" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="3" fill="#18181b"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+60;x+=100) for(let y=0;y<VH+60;y+=100){const ox=x+(y/100%2===0?0:50), cx=ox+50, cy=y+50; p+=`<polygon points="${r(cx)},${r(cy-35)} ${r(cx+25)},${r(cy-10)} ${r(cx+15)},${r(cy+25)} ${r(cx-15)},${r(cy+25)} ${r(cx-25)},${r(cy-10)}" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<polygon points="${r(cx)},${r(cy-15)} ${r(cx+10)},${r(cy-5)} ${r(cx+5)},${r(cy+10)} ${r(cx-5)},${r(cy+10)} ${r(cx-10)},${r(cy-5)}" fill="none" stroke="#18181b" stroke-width="1"/>`; p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="3" fill="#18181b"/>`;} return p; },
  ]
  return ss[v]()
}

/* ─── SONGKET ─── */
function songketVariant(v: number): string {
  const ss = [
    () => { let p=''; for(let x=0;x<VW+30;x+=60) for(let y=0;y<VH+30;y+=60){const ox=x+(y/60%2===0?0:30); p+=`<polygon points="${r(ox+30)},${r(y+5)} ${r(ox+55)},${r(y+30)} ${r(ox+30)},${r(y+55)} ${r(ox+5)},${r(y+30)}" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<line x1="${r(ox+20)}" y1="${r(y+30)}" x2="${r(ox+40)}" y2="${r(y+30)}" stroke="#18181b" stroke-width="1.5"/>`; p+=`<line x1="${r(ox+30)}" y1="${r(y+20)}" x2="${r(ox+30)}" y2="${r(y+40)}" stroke="#18181b" stroke-width="1.5"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+40;x+=70) for(let y=0;y<VH+40;y+=70){const ox=x+(y/70%2===0?0:35); p+=`<rect x="${r(ox+10)}" y="${r(y+10)}" width="50" height="50" rx="5" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<line x1="${r(ox+15)}" y1="${r(y+15)}" x2="${r(ox+55)}" y2="${r(y+55)}" stroke="#18181b" stroke-width="1.2"/>`; p+=`<line x1="${r(ox+55)}" y1="${r(y+15)}" x2="${r(ox+15)}" y2="${r(y+55)}" stroke="#18181b" stroke-width="1.2"/>`; p+=`<circle cx="${r(ox+35)}" cy="${r(y+35)}" r="5" fill="#18181b"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+50;x+=80) for(let y=0;y<VH+50;y+=80){const ox=x+(y/80%2===0?0:40), cx=ox+40, cy=y+40; p+=`<polygon points="${r(cx)},${r(cy-20)} ${r(cx+18)},${r(cy-6)} ${r(cx+12)},${r(cy+15)} ${r(cx-12)},${r(cy+15)} ${r(cx-18)},${r(cy-6)}" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<line x1="${r(cx)}" y1="${r(cy-15)}" x2="${r(cx)}" y2="${r(cy+10)}" stroke="#18181b" stroke-width="1"/>`; p+=`<line x1="${r(cx-10)}" y1="${r(cy-2)}" x2="${r(cx+10)}" y2="${r(cy-2)}" stroke="#18181b" stroke-width="1"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+30;x+=65) for(let y=0;y<VH+30;y+=65){const ox=x+(y/65%2===0?0:32.5), cx=ox+32.5, cy=y+32.5; p+=`<rect x="${r(cx-22)}" y="${r(cy-22)}" width="44" height="44" rx="3" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<polygon points="${r(cx)},${r(cy-15)} ${r(cx+12)},${r(cy)} ${r(cx)},${r(cy+15)} ${r(cx-12)},${r(cy)}" fill="none" stroke="#18181b" stroke-width="1.5"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+40;x+=75) for(let y=0;y<VH+40;y+=75){const ox=x+(y/75%2===0?0:37.5), cx=ox+37.5, cy=y+37.5; p+=`<path d="M${r(cx-25)} ${r(cy)} A25 25 0 1 1 ${r(cx+25)} ${r(cy)} A25 25 0 1 1 ${r(cx-25)} ${r(cy)}" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<line x1="${r(cx-8)}" y1="${r(cy-12)}" x2="${r(cx+8)}" y2="${r(cy+12)}" stroke="#18181b" stroke-width="1.5"/>`; p+=`<line x1="${r(cx+8)}" y1="${r(cy-12)}" x2="${r(cx-8)}" y2="${r(cy+12)}" stroke="#18181b" stroke-width="1.5"/>`;} return p; },
  ]
  return ss[v]()
}

/* ─── MANDALA ─── */
function mandalaVariant(v: number): string {
  const ss = [
    () => { let p=`<circle cx="${r(CX)}" cy="${r(CY)}" r="180" fill="none" stroke="#18181b" stroke-width="2"/><circle cx="${r(CX)}" cy="${r(CY)}" r="120" fill="none" stroke="#18181b" stroke-width="1.5"/><circle cx="${r(CX)}" cy="${r(CY)}" r="60" fill="none" stroke="#18181b" stroke-width="1.5"/>`; for(let i=0;i<12;i++){const a=i*Math.PI/6; p+=`<line x1="${r(CX+Math.cos(a)*60)}" y1="${r(CY+Math.sin(a)*60)}" x2="${r(CX+Math.cos(a)*180)}" y2="${r(CY+Math.sin(a)*180)}" stroke="#18181b" stroke-width="1.2"/>`;} p+=`<circle cx="${r(CX)}" cy="${r(CY)}" r="12" fill="#18181b"/>`; return p; },
    () => { let p=''; for(let ri=5;ri>0;ri--){const rv=ri*35; p+=`<circle cx="${r(CX)}" cy="${r(CY)}" r="${r(rv)}" fill="none" stroke="#18181b" stroke-width="${r(ri===1?1.5:2)}"/>`; const n=6+ri*2; for(let i=0;i<n;i++){const a=i*Math.PI*2/n-Math.PI/2; const px=CX+Math.cos(a)*rv, py=CY+Math.sin(a)*rv; if(ri%2===0) p+=`<circle cx="${r(px)}" cy="${r(py)}" r="${r(8+ri*2)}" fill="none" stroke="#18181b" stroke-width="1.2"/>`; else p+=`<line x1="${r(CX+Math.cos(a)*(rv-10))}" y1="${r(CY+Math.sin(a)*(rv-10))}" x2="${r(px)}" y2="${r(py)}" stroke="#18181b" stroke-width="1.5"/>`;}} p+=`<circle cx="${r(CX)}" cy="${r(CY)}" r="8" fill="#18181b"/>`; return p; },
    () => { let p=''; const rings=[180,140,100,60]; rings.forEach((rv,i)=>{p+=`<circle cx="${r(CX)}" cy="${r(CY)}" r="${r(rv)}" fill="none" stroke="#18181b" stroke-width="${r(i===0?2:1.5)}"/>`; const n=8+i*4; for(let j=0;j<n;j++){const a=j*Math.PI*2/n; const px=CX+Math.cos(a)*rv, py=CY+Math.sin(a)*rv; p+=`<path d="M${r(CX+Math.cos(a)*(rv-8))} ${r(CY+Math.sin(a)*(rv-8))} L${r(px+Math.cos(a+0.3)*10)} ${r(py+Math.sin(a+0.3)*10)} L${r(px+Math.cos(a-0.3)*10)} ${r(py+Math.sin(a-0.3)*10)}Z" fill="none" stroke="#18181b" stroke-width="1"/>`;}}); p+=`<circle cx="${r(CX)}" cy="${r(CY)}" r="15" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<circle cx="${r(CX)}" cy="${r(CY)}" r="5" fill="#18181b"/>`; return p; },
    () => { let p=`<circle cx="${r(CX)}" cy="${r(CY)}" r="200" fill="none" stroke="#18181b" stroke-width="2"/><circle cx="${r(CX)}" cy="${r(CY)}" r="40" fill="none" stroke="#18181b" stroke-width="2"/>`; for(let i=0;i<8;i++){const a=i*Math.PI/4; for(let r=50;r<190;r+=30){const px=CX+Math.cos(a)*r, py=CY+Math.sin(a)*r; p+=`<circle cx="${r(px)}" cy="${r(py)}" r="4" fill="#18181b"/>`;}} for(let i=0;i<16;i++){const a=i*Math.PI/8; p+=`<line x1="${r(CX+Math.cos(a)*40)}" y1="${r(CY+Math.sin(a)*40)}" x2="${r(CX+Math.cos(a)*190)}" y2="${r(CY+Math.sin(a)*190)}" stroke="#18181b" stroke-width="1"/>`;} return p; },
    () => { let p=''; for(let ri=3;ri>0;ri--){const rv=ri*60; p+=`<circle cx="${r(CX)}" cy="${r(CY)}" r="${r(rv)}" fill="none" stroke="#18181b" stroke-width="2"/>`; const n=6+ri*3; for(let i=0;i<n;i++){const a=i*Math.PI*2/n-Math.PI/2; const px=CX+Math.cos(a)*rv, py=CY+Math.sin(a)*rv; const off=ri===3?20:ri===2?12:6; p+=`<path d="M${r(CX+Math.cos(a)*(rv-off))} ${r(CY+Math.sin(a)*(rv-off))} L${r(px)} ${r(py)} L${r(CX+Math.cos(a+0.2)*(rv-off))} ${r(CY+Math.sin(a+0.2)*(rv-off))}" fill="none" stroke="#18181b" stroke-width="1.2"/>`;}} p+=`<circle cx="${r(CX)}" cy="${r(CY)}" r="15" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<circle cx="${r(CX)}" cy="${r(CY)}" r="5" fill="#18181b"/>`; return p; },
  ]
  return ss[v]()
}

/* ─── NAGA & MERAK ─── */
function dragonVariant(v: number): string {
  const ss = [
    () => { let p=''; const pts=[]; for(let i=0;i<20;i++){const t=i/19; pts.push(`${r(CX-120+t*240+Math.sin(t*Math.PI*4)*30)},${r(100+t*500+Math.cos(t*Math.PI*3)*20)}`);} p+=`<polyline points="${pts.join(' ')}" fill="none" stroke="#18181b" stroke-width="4"/>`; for(let i=0;i<20;i++)if(i%3===0){const t=i/19; const bx=CX-120+t*240+Math.sin(t*Math.PI*4)*30, by=100+t*500+Math.cos(t*Math.PI*3)*20; const sd=(i%2===0?1:-1); p+=`<path d="M${r(bx)} ${r(by)} Q${r(bx+sd*30)} ${r(by-25)} ${r(bx+sd*50)} ${r(by-8)}" fill="none" stroke="#18181b" stroke-width="1.5"/>`;} return p; },
    () => { let p=''; for(let i=0;i<6;i++){const cx=seedRand(i*3)*VW*0.6+VW*0.2, cy=seedRand(i*5)*VH*0.6+VH*0.2, r2=20+seedRand(i*7)*25; for(let a=0;a<12;a++){const ang=a*Math.PI/6; const ex=cx+Math.cos(ang)*r2, ey=cy+Math.sin(ang)*r2; const mx=cx+Math.cos(ang)*r2*0.5+Math.cos(ang+1.2)*r2*0.3, my=cy+Math.sin(ang)*r2*0.5+Math.sin(ang+1.2)*r2*0.3; p+=`<path d="M${r(cx)} ${r(cy)} Q${r(mx)} ${r(my)} ${r(ex)} ${r(ey)}" fill="none" stroke="#18181b" stroke-width="1.5"/>`;} p+=`<circle cx="${r(cx)}" cy="${r(cy)}" r="4" fill="#18181b"/>`;} return p; },
    () => { let p=''; for(let r=0;r<4;r++){const y=100+r*160; const cx=CX+Math.sin(r*1.5)*40; p+=`<ellipse cx="${r(cx)}" cy="${r(y)}" rx="${r(80-r*10)}" ry="35" fill="none" stroke="#18181b" stroke-width="2"/>`; for(let a=0;a<8;a++){const ang=a*Math.PI/4; p+=`<path d="M${r(cx+Math.cos(ang)*(70-r*10))} ${r(y+Math.sin(ang)*30)} Q${r(cx+Math.cos(ang)*(90-r*10))} ${r(y+Math.sin(ang)*40-20)} ${r(cx+Math.cos(ang)*(100-r*10))} ${r(y+Math.sin(ang)*40)}" fill="none" stroke="#18181b" stroke-width="1.2"/>`;}} return p; },
    () => { let p=''; for(let i=0;i<8;i++){const bx=seedRand(i*3)*VW*0.6+VW*0.2, by=seedRand(i*5)*VH*0.6+VH*0.2; p+=`<path d="M${r(bx)} ${r(by)} Q${r(bx+seedRand(i*7)*30-15)} ${r(by-40)} ${r(bx+seedRand(i*11)*40-20)} ${r(by-15)}" fill="none" stroke="#18181b" stroke-width="2"/>`; const ex=bx+seedRand(i*13)*40-20; const ey=by-15; p+=`<circle cx="${r(ex)}" cy="${r(ey)}" r="4" fill="#18181b"/>`; for(let j=0;j<4;j++){const a=j*Math.PI/2; p+=`<line x1="${r(ex+Math.cos(a)*5)}" y1="${r(ey+Math.sin(a)*5)}" x2="${r(ex+Math.cos(a)*12)}" y2="${r(ey+Math.sin(a)*12)}" stroke="#18181b" stroke-width="1"/>`;}} return p; },
    () => { let p=''; const cx=CX, cy=200, r2=140; p+=`<ellipse cx="${r(cx)}" cy="${r(cy)}" rx="80" ry="${r(r2)}" fill="none" stroke="#18181b" stroke-width="2.5"/>`; for(let a=0;a<20;a++){const ang=a*Math.PI/10-Math.PI/2; const px=cx+Math.cos(ang)*80, py=cy+Math.sin(ang)*r2; const ex=cx+Math.cos(ang)*(90+seedRand(a)*30), ey=py-Math.sin(ang)*12; p+=`<line x1="${r(px)}" y1="${r(py)}" x2="${r(ex)}" y2="${r(ey)}" stroke="#18181b" stroke-width="1.2"/>`; p+=`<circle cx="${r(ex)}" cy="${r(ey)}" r="3" fill="none" stroke="#18181b" stroke-width="1"/>`;} return p; },
  ]
  return ss[v]()
}

/* ─── ANYAMAN ─── */
function weaveVariant(v: number): string {
  const ss = [
    () => { let p=''; const gap=30; for(let x=0;x<VW+gap;x+=gap) for(let y=0;y<VH+gap;y+=gap){if((Math.floor(x/gap)+Math.floor(y/gap))%2===0) p+=`<line x1="${r(x)}" y1="${r(y)}" x2="${r(x+gap)}" y2="${r(y+gap)}" stroke="#18181b" stroke-width="2"/>`; else p+=`<line x1="${r(x+gap)}" y1="${r(y)}" x2="${r(x)}" y2="${r(y+gap)}" stroke="#18181b" stroke-width="2"/>`;} return p; },
    () => { let p=''; const gap=25; for(let x=0;x<VW+gap;x+=gap) for(let y=0;y<VH+gap;y+=gap){const pat=(Math.floor(x/gap)+Math.floor(y/gap))%3; if(pat===0)p+=`<line x1="${r(x)}" y1="${r(y)}" x2="${r(x+gap)}" y2="${r(y+gap)}" stroke="#18181b" stroke-width="2.5"/>`; else if(pat===1)p+=`<line x1="${r(x+gap)}" y1="${r(y)}" x2="${r(x)}" y2="${r(y+gap)}" stroke="#18181b" stroke-width="1.5"/>`; else p+=`<rect x="${r(x+3)}" y="${r(y+3)}" width="${r(gap-6)}" height="${r(gap-6)}" fill="none" stroke="#18181b" stroke-width="1"/>`;} return p; },
    () => { let p=''; const gap=35; for(let x=0;x<VW+gap;x+=gap) for(let y=0;y<VH+gap;y+=gap){const ox=x+(y/gap%2===0?0:gap/2); const pat=Math.floor(x/gap)%2; if(pat===0)p+=`<line x1="${r(ox)}" y1="${r(y)}" x2="${r(ox+gap)}" y2="${r(y+gap)}" stroke="#18181b" stroke-width="2.5"/>`; else p+=`<line x1="${r(ox+gap)}" y1="${r(y)}" x2="${r(ox)}" y2="${r(y+gap)}" stroke="#18181b" stroke-width="2"/>`;} return p; },
    () => { let p=''; const gap=20; for(let x=0;x<VW+gap;x+=gap) for(let y=0;y<VH+gap;y+=gap){const ang=(Math.floor(x/gap)+Math.floor(y/gap))%2===0?1:-1; const hw=gap*0.5*ang, hh=gap*0.3; p+=`<path d="M${r(x)} ${r(y+hh)} Q${r(x+gap*0.5)} ${r(y+hh-hw)} ${r(x+gap)} ${r(y+hh)}" fill="none" stroke="#18181b" stroke-width="1.5"/>`; p+=`<path d="M${r(x)} ${r(y+gap-hh)} Q${r(x+gap*0.5)} ${r(y+gap-hh+hw)} ${r(x+gap)} ${r(y+gap-hh)}" fill="none" stroke="#18181b" stroke-width="1.5"/>`;} return p; },
    () => { let p=''; const gap=28; for(let x=0;x<VW+gap;x+=gap) for(let y=0;y<VH+gap;y+=gap){const pat=(Math.floor(x/gap)*3+Math.floor(y/gap)*7)%5; if(pat<2)p+=`<line x1="${r(x)}" y1="${r(y)}" x2="${r(x+gap)}" y2="${r(y+gap)}" stroke="#18181b" stroke-width="2.5"/>`; else if(pat<4)p+=`<line x1="${r(x+gap)}" y1="${r(y)}" x2="${r(x)}" y2="${r(y+gap)}" stroke="#18181b" stroke-width="2"/>`; else p+=`<circle cx="${r(x+gap/2)}" cy="${r(y+gap/2)}" r="4" fill="#18181b"/>`;} return p; },
  ]
  return ss[v]()
}

/* ─── STAR DIAMOND ─── */
function starVariant(v: number): string {
  const ss = [
    () => { let p=''; for(let x=0;x<VW+40;x+=75) for(let y=0;y<VH+40;y+=75){const ox=x+(y/75%2===0?0:37.5), cx=ox+37.5, cy=y+37.5, s=25; p+=`<polygon points="${r(cx)},${r(cy-s)} ${r(cx+s*0.4)},${r(cy-s*0.35)} ${r(cx+s)},${r(cy)} ${r(cx+s*0.4)},${r(cy+s*0.35)} ${r(cx)},${r(cy+s)} ${r(cx-s*0.4)},${r(cy+s*0.35)} ${r(cx-s)},${r(cy)} ${r(cx-s*0.4)},${r(cy-s*0.35)}" fill="none" stroke="#18181b" stroke-width="2"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+40;x+=70) for(let y=0;y<VH+40;y+=70){const ox=x+(y/70%2===0?0:35), cx=ox+35, cy=y+35, s=20; p+=`<polygon points="${r(cx)},${r(cy-s)} ${r(cx+s*0.4)},${r(cy-s*0.35)} ${r(cx+s)},${r(cy)} ${r(cx+s*0.4)},${r(cy+s*0.35)} ${r(cx)},${r(cy+s)} ${r(cx-s*0.4)},${r(cy+s*0.35)} ${r(cx-s)},${r(cy)} ${r(cx-s*0.4)},${r(cy-s*0.35)}" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<polygon points="${r(cx)},${r(cy-s*0.5)} ${r(cx+s*0.2)},${r(cy-s*0.2)} ${r(cx+s*0.5)},${r(cy)} ${r(cx+s*0.2)},${r(cy+s*0.2)} ${r(cx)},${r(cy+s*0.5)} ${r(cx-s*0.2)},${r(cy+s*0.2)} ${r(cx-s*0.5)},${r(cy)} ${r(cx-s*0.2)},${r(cy-s*0.2)}" fill="none" stroke="#18181b" stroke-width="1"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+50;x+=85) for(let y=0;y<VH+50;y+=85){const ox=x+(y/85%2===0?0:42.5), cx=ox+42.5, cy=y+42.5, s=30; p+=`<polygon points="${r(cx)},${r(cy-s)} ${r(cx+s*0.3)},${r(cy-s*0.5)} ${r(cx+s*0.8)},${r(cy-s*0.2)} ${r(cx+s*0.5)},${r(cy+s*0.1)} ${r(cx+s*0.8)},${r(cy+s*0.5)} ${r(cx+s*0.3)},${r(cy+s*0.4)} ${r(cx)},${r(cy+s)} ${r(cx-s*0.3)},${r(cy+s*0.4)} ${r(cx-s*0.8)},${r(cy+s*0.5)} ${r(cx-s*0.5)},${r(cy+s*0.1)} ${r(cx-s*0.8)},${r(cy-s*0.2)} ${r(cx-s*0.3)},${r(cy-s*0.5)}" fill="none" stroke="#18181b" stroke-width="1.8"/>`;} return p; },
    () => { let p=''; for(let x=0;x<VW+30;x+=65) for(let y=0;y<VH+30;y+=65){const ox=x+(y/65%2===0?0:32.5), cx=ox+32.5, cy=y+32.5, s=22; for(let ri=3;ri>0;ri--){const si=s*ri/3; p+=`<polygon points="${r(cx)},${r(cy-si)} ${r(cx+si*0.4)},${r(cy-si*0.35)} ${r(cx+si)},${r(cy)} ${r(cx+si*0.4)},${r(cy+si*0.35)} ${r(cx)},${r(cy+si)} ${r(cx-si*0.4)},${r(cy+si*0.35)} ${r(cx-si)},${r(cy)} ${r(cx-si*0.4)},${r(cy-si*0.35)}" fill="none" stroke="#18181b" stroke-width="${r(ri===1?1:1.8)}"/>`;}} return p; },
    () => { let p=''; for(let x=0;x<VW+40;x+=80) for(let y=0;y<VH+40;y+=80){const ox=x+(y/80%2===0?0:40), cx=ox+40, cy=y+40; p+=`<polygon points="${r(cx)},${r(cy-28)} ${r(cx+20)},${r(cy-12)} ${r(cx+28)},${r(cy)} ${r(cx+20)},${r(cy+12)} ${r(cx)},${r(cy+28)} ${r(cx-20)},${r(cy+12)} ${r(cx-28)},${r(cy)} ${r(cx-20)},${r(cy-12)}" fill="none" stroke="#18181b" stroke-width="2"/>`; p+=`<polygon points="${r(cx-8)},${r(cy)} ${r(cx)},${r(cy-12)} ${r(cx+8)},${r(cy)} ${r(cx)},${r(cy+12)}" fill="#18181b"/>`;} return p; },
  ]
  return ss[v]()
}

/* ─── DISPATCH ─── */
interface GenParams {
  width: number
  height: number
  variant: number
  material: string
}

function getMotifContent(type: string, variant: number): string {
  switch (type) {
    case 'Geometris Minimalis': return geometrisVariant(variant)
    case 'Floral Modern':       return floralVariant(variant)
    case 'Kaligrafi / Islami':  return islamicVariant(variant)
    case 'Hexagon / Sarang Lebah': return hexagonVariant(variant)
    case 'Pohon Gundul / Ranting': return treeVariant(variant)
    case 'Moroccan Pattern':    return moroccanVariant(variant)
    case 'Daun Tropis Lebar':   return tropicalVariant(variant)
    case 'Garis Vertikal Miring': return lineVariant(variant)
    case 'Mozaik Lingkaran':    return circleVariant(variant)
    case 'Batik Nusantara':     return batikVariant(variant)
    case 'Songket Palembang':   return songketVariant(variant)
    case 'Mandala Geometris':   return mandalaVariant(variant)
    case 'Naga & Burung Merak': return dragonVariant(variant)
    case 'Anyaman Tradisional': return weaveVariant(variant)
    case 'Star Diamond':        return starVariant(variant)
    default: return geometrisVariant(variant)
  }
}

export function generatePattern(type: string, params: GenParams): string {
  const { width, height, variant } = params
  const content = getMotifContent(type, variant)

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${VW} ${VH}">
  <rect width="${VW}" height="${VH}" fill="#fafafa"/>
  <g stroke-linecap="round" stroke-linejoin="round">
    ${content}
  </g>
</svg>`
}

export { getMotifContent, VW, VH }

export const motifCategoryList = [
  { id: 'geometris', label: 'Geometris', types: ['Geometris Minimalis', 'Hexagon / Sarang Lebah', 'Star Diamond', 'Garis Vertikal Miring'] },
  { id: 'natural', label: 'Natural', types: ['Floral Modern', 'Daun Tropis Lebar', 'Pohon Gundul / Ranting'] },
  { id: 'etnik', label: 'Etnik', types: ['Batik Nusantara', 'Songket Palembang', 'Anyaman Tradisional', 'Mandala Geometris'] },
  { id: 'mewah', label: 'Mewah', types: ['Kaligrafi / Islami', 'Moroccan Pattern', 'Mozaik Lingkaran', 'Naga & Burung Merak'] },
]
