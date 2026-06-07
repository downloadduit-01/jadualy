import Link from 'next/link';
import { 
  MessageSquare, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  Truck,
  Gift,
  Heart,
  Store,
  UserPlus
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-yellow-50 font-sans antialiased">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            🌟 Yuk! di <span className="text-pink-600">Jadualy Online</span> 🌟
          </h1>
          <p className="mb-8 max-w-xl mx-auto text-lg text-gray-600">
            Tempat bertemu penjual dan pembeli dalam satu platform yang menyenangkan, aman, dan mudah digunakan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/daftar" className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full transition-transform transform hover:scale-105">
              Daftar Sekarang
            </Link>
            <Link href="/jelajah" className="border border-pink-600 hover:bg-pink-50 text-pink-600 font-medium py-3 px-8 rounded-full transition-transform transform hover:scale-105">
              Jelajah Produk
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Mengapa Memilih Jadualy Online?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <MessageSquare className="h-10 w-10 text-pink-500 mb-4" />
              <h3 className="mb-3 text-lg font-semibold text-gray-800">Komunikasi Mudah</h3>
              <p className="text-gray-600">
                Chat langsung antara penjual dan pembeli untuk negosiasi yang cepat dan jelas.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="mb-3 text-lg font-semibold text-gray-800">Komunitas Aktif</h3>
              <p className="text-gray-600">
                Bergabung dengan komunitas yang tumbuh setiap hari, siap mendukung bisnis Anda.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <TrendingUp className="h-10 w-10 text-pink-500 mb-4" />
              <h3 className="mb-3 text-lg font-semibold text-gray-800">Analisis Penjualan</h3>
              <p className="text-gray-600">
                Dapatkan wawasan tentang tren penjualan untuk keputusan yang lebih cerdas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-b from-pink-50 to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Cara Kerja Jadualy Online
          </h2>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-500 rounded-full mb-4">
                <Store className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">1. Tambah Produk</h3>
              <p className="text-gray-600">
                Penjual dapat dengan mudah menambahkan produk mereka ke dalam katalog.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-500 rounded-full mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">2. Temukan & Belanja</h3>
              <p className="text-gray-600">
                Pembeli mencari produk yang mereka inginkan dan melakukan pembelian dengan aman.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-500 rounded-full mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">3. Pengiriman & Ulasan</h3>
              <p className="text-gray-600">
                Setelah pembelian, produk dikirim dan pembeli dapat memberi ulasan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Apa yang Mereka Katakan?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-pink-200">
              <p className="mb-4 text-gray-600 italic">
                "Jadualy Online membuat bisnis saya tumbuh lebih cepat! Penggunaannya sangat mudah dan tim support sangat responsif."
              </p>
              <div className="flex items-center">
                <div className="h-8 w-8 bg-pink-200 rounded-full flex items-center justify-center mr-3">
                  <UserPlus className="h-4 w-4 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Siti, Penjaja Aksesoris</h4>
                  <p className="text-sm text-gray-500">Jakarta</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-yellow-200">
              <p className="mb-4 text-gray-600 italic">
                "Saya suka berbelanja di Jadualy Online karena ada banyak pilihan produk unik dan harga yang kompetitif."
              </p>
              <div className="flex items-center">
                <div className="h-8 w-8 bg-yellow-200 rounded-full flex items-center justify-center mr-3">
                  <Heart className="h-4 w-4 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Budi, Pembeli Setia</h4>
                  <p className="text-sm text-gray-500">Bandung</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-pink-200">
              <p className="mb-4 text-gray-600 italic">
                "Platform ini sangat membantu saya menjangkau lebih banyak pelanggan tanpa harus repot-repot buat toko sendiri."
              </p>
              <div className="flex items-center">
                <div className="h-8 w-8 bg-pink-200 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-4 w-4 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Lina, UMKM Fashion</h4>
                  <p className="text-sm text-gray-500">Surabaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-pink-600 to-yellow-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Siap Memulai Perjalanan Anda?
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-lg">
            Bergabung dengan ribuan penjual dan pembeli yang sudah merasakan keuntungan bertransaksi di Jadualy Online.
          </p>
          <Link href="/daftar" className="bg-white hover:bg-gray-50 text-pink-600 font-medium py-3 px-8 rounded-full transition-transform transform hover:scale-105 inline-block">
            Daftar Gratis Sekarang
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Jadualy Online</h3>
              <p className="text-gray-400">
                Tempat bertemu penjual dan pembeli dalam satu platform yang menyenangkan, aman, dan mudah digunakan.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-semibold">Produk</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">Beranda</Link></li>
                <li><Link href="/jelajah" className="hover:text-white">Jelajah Produk</Link></li>
                <li><Link href="/daftar" className="hover:text-white">Daftar Menjual</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-semibold">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/tentang" className="hover:text-white">Tentang Kami</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/kontak" className="hover:text-white">Kontak Kami</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-semibold">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white opacity-75 transition-opacity">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-20.35C1.404 0 0 1.404 0 3.141v17.718C0 21.556 1.404 22.96 3.141 22.96h6.741v-9.294h-3.37v-3.622h3.37V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12v9.294h4.825c1.737 0 3.141-1.404 3.141-3.141V3.141C25.816 1.404 24.412 0 22.675 0z"/></svg>
                </a>
                <a href="#" className="hover:text-white opacity-75 transition-opacity">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.129 1.192A4.916 4.916 0 0 0 18.234 2.11a9.856 9.856 0 0 1-3.111 2.59A4.924 4.924 0 0 0 14.208 1.317a4.927 4.927 0 0 0-1.51 6.531c0 2.551 1.652 4.78 3.945 5.475a4.922 4.922 0 0 1-2.225-.616v.061c0 2.39 1.703 4.47 3.952 4.93A4.924 4.924 0 0 1 9.54 21.98a4.927 4.927 0 0 1-2.412.083A4.92 4.92 0 0 1 7.09 20.54a4.928 4.928 0 0 1 2.04-1.322A4.924 4.924 0 0 0 5.471 14.016a4.926 4.926 0 0 1-.647-.084A4.928 4.928 0 0 0 5 15.387a12.315 12.315 0 0 1-.298 1.255A12.366 12.366 0 0 1 4.78 17.872c-.379.039-.758.061-1.14.061-.28 0-.556-.02-.826-.056a12.37 12.37 0 0 0 12.417-7.218z"/></svg>
                </a>
                <a href="#" className="hover:text-white opacity-75 transition-opacity">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 23c-6.075 0-11-4.925-11-11S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-20c-4.966 0-9 4.034-9 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Jadualy Online. Hak Cipta Dilindungi Undang-Undang.
          </div>
        </div>
      </footer>
    </main>
  );
}// verification comment
