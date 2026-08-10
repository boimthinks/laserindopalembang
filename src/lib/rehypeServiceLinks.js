import { visit } from 'unist-util-visit';

const KEYWORDS = [
  { label: 'pagar', url: '/layanan/pagar' },
  { label: 'kanopi', url: '/layanan/kanopi' },
  { label: 'partisi', url: '/layanan/partisi' },
  { label: 'railing tangga', url: '/layanan/railing' },
  { label: 'fasad bangunan', url: '/layanan/fasad' },
  { label: 'plat nama', url: '/layanan/plat-nama' },
  { label: 'trofi', url: '/layanan/plat-nama' },
];

export default function remarkServiceLinks() { console.error("[PLUGIN CALLED]");
  const used = new Set();

  return (tree) => { console.error("[PLUGIN RUN]", tree.type);
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || parent.type === 'link') return;

      const parts = [];
      let remaining = node.value;
      let modified = false;

      while (remaining.length > 0) {
        const unused = KEYWORDS.filter((k) => !used.has(k.label));
        const pattern = '\\b(' + unused.map((k) => k.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b';
        const re = new RegExp(pattern, 'i');
        const m = re.exec(remaining);

        if (!m) {
          parts.push({ type: 'text', value: remaining });
          break;
        }

        if (m.index > 0) parts.push({ type: 'text', value: remaining.slice(0, m.index) });
        
        const matched = m[0];
        const kw = unused.find((k) => k.label.toLowerCase() === matched.toLowerCase());
        
        parts.push({
          type: 'link',
          url: kw.url,
          data: { hProperties: { class: 'autolink-orange' } },
          children: [{ type: 'text', value: matched }]
        });
        
        used.add(kw.label);
        modified = true;
        remaining = remaining.slice(m.index + matched.length);
      }

      if (modified) {
        parent.children.splice(index, 1, ...parts);
      }
    });
  };
}