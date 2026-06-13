import { useState } from 'react';
import { getKatalogDetails } from '../lib/utils';

interface KatalogItem {
  id: string;
  service: string;
  ext?: string; // Default to 'jpg' if not specified
}

interface KatalogGalleryProps {
  items: KatalogItem[];
  password: string;
}

export default function KatalogGallery({ items, password }: KatalogGalleryProps) {
  const [activeFilter, setActiveFilter] = useState('semua');
  const [selectedItem, setSelectedItem] = useState<{
    code: string;
    title: string;
    serviceLabel: string;
    image: string;
    ext: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const filters = [
    'semua',
    'pagar',
    'kanopi',
    'partisi',
    'railing',
    'fasad',
    'plat-nama',
  ];

  const filteredItems = items.filter((item) => {
    if (activeFilter === 'semua') return true;
    return item.service === activeFilter;
  });

  const handleItemClick = (item: KatalogItem) => {
    const { code, title, serviceLabel } = getKatalogDetails(item.id, item.service);
    setSelectedItem({
      code,
      title,
      serviceLabel,
      image: `/img/katalog/${code}.webp`,
      ext: item.ext || 'jpg', // Gunakan ekstensi dari data, default ke jpg
    });
    setShowPasswordForm(false);
    setInputPassword('');
    setPasswordError('');
    setIsModalOpen(true);
  };

  const handleDownload = () => {
    if (inputPassword !== password) {
      setPasswordError('Password salah. Coba lagi.');
      return;
    }
    if (selectedItem) {
      const downloadUrl = `/img/katalog/${selectedItem.code}.${selectedItem.ext}`;
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${selectedItem.code}.${selectedItem.ext}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsModalOpen(false);
      setInputPassword('');
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-brand-primary text-white'
                  : 'bg-brand-surface-alt text-zinc-400 hover:bg-zinc-800'
              }`}
            >
              {filter === 'semua' ? 'Semua' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => {
            const { code, title } = getKatalogDetails(item.id, item.service);
            return (
              <div
                key={code}
                onClick={() => handleItemClick(item)}
                className="group block bg-brand-surface-alt rounded-xl border border-zinc-800 overflow-hidden hover:border-brand-primary/30 hover:shadow-md transition-all no-underline cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`/img/katalog/${code}.webp`}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-center">
                  <h4 className="text-sm font-semibold text-white">{title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setIsModalOpen(false)}>
          <div
            className="bg-brand-surface-alt rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">{selectedItem.title}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-zinc-400">Kode Desain</span>
                <span className="font-mono text-white">{selectedItem.code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Jenis Desain</span>
                <span className="text-white">{selectedItem.serviceLabel}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800 min-h-[140px]">
              {!showPasswordForm ? (
                <button
                  onClick={() => setShowPasswordForm(true)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-zinc-800 text-white font-semibold hover:bg-zinc-700 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Unduh File Produksi
                </button>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Password Produksi</label>
                    <input
                      type="password"
                      autoFocus
                      value={inputPassword}
                      onChange={(e) => {
                        setInputPassword(e.target.value);
                        setPasswordError('');
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleDownload();
                        }
                      }}
                      className="w-full px-4 py-3 rounded-lg bg-brand-surface border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      placeholder="Masukkan password..."
                    />
                    {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowPasswordForm(false)}
                      className="px-4 py-3 rounded-lg bg-zinc-800 text-zinc-400 text-sm hover:text-white transition-colors"
                    >
                      Batal
                    </button>
                    <button
                      onClick={handleDownload}
                      className="flex-1 px-6 py-3 rounded-lg bg-brand-primary text-white font-semibold hover:bg-brand-primary/90 transition-colors"
                    >
                      Konfirmasi & Unduh
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}