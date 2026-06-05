export function waUrl(phone: string, text?: string): string {
  const msg = text || 'Halo%20Cutting%20Laser%20Palembang%2C%20saya%20mau%20tanya...';
  return `https://wa.me/${phone}?text=${msg}`;
}

export function formatPrice(amount: number): string {
  return `Rp${amount.toLocaleString('id-ID')}`;
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}
