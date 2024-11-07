import { Helmet } from "react-helmet-async";
import Carousel from "../../components/Carousel";

const TentangKami = () => {
  return (
    <div>
      <Helmet>
        <title>Tentang Kami</title>
      </Helmet>
      <main className="w-full mt-6">
        <section className="bg-white shadow-md rounded-lg overflow-hidden">
          <Carousel />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Mendukung <span className="text-secondary">Kehidupan Sehat,</span>
            </h2>
            <h2 className="text-2xl font-bold text-gray-800">
              Menciptakan <span className="text-secondary">Lingkungan</span> Bersih.
            </h2>
            <p className="mt-4 text-gray-600">
              Pejantara didirikan dengan tujuan untuk membantu pemerintah mengatasi masalah overload sampah, mengembangkan <br/> Program Pengelolaan Sampah yang berbasis pemberdayaan masyarakat dan teknologi serta menjadikan Batam sebagai kota
              yang <br/> bebas sampah dan ramah lingkungan.
            </p>
          </div>
        </section>
        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">Visi Pejantara</h3>
            <p className="mt-4 text-gray-600">Menjadi lembaga yang terdepan dalam pengelolaan sampah terpadu yang berwawasan lingkungan dan berkelanjutan.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">Misi Pejantara</h3>
            <p className="mt-4 text-gray-600">Memberikan edukasi dan informasi yang akurat kepada masyarakat tentang pengelolaan sampah terpadu, serta mendorong partisipasi aktif masyarakat dalam menjaga kebersihan dan kelestarian alam.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src="https://placehold.co/600x400" alt="Person collecting trash in a forest" className="w-full rounded-lg" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">Mengapa Harus Memilih Pejantara</h3>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Edukasi Yang Lengkap</li>
              <li>Peta Lokasi TPA Yang Akurat</li>
              <li>Akses Informasi Terpusat</li>
              <li>Interaktif & Mudah Digunakan</li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src="https://placehold.co/600x400" alt="Young plant growing in soil" className="w-full rounded-lg" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">Tujuan Pejantara</h3>
            <p className="mt-4 text-gray-600">Meningkatkan kesadaran masyarakat melalui edukasi tentang pentingnya pengelolaan sampah yang baik dan benar, serta memberikan solusi yang praktis dan efektif dalam pengelolaan sampah.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src="https://placehold.co/600x400" alt="Trash bins in a scenic location" className="w-full rounded-lg" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800">Tugas Pejantara</h3>
            <p className="mt-4 text-gray-600">
              Memberikan edukasi dan informasi kepada masyarakat tentang cara pengelolaan sampah yang baik dan benar, serta mendorong partisipasi aktif masyarakat dalam menjaga kebersihan dan kelestarian alam.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TentangKami;
