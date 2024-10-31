const Hero = () => {
  return (
    <div className="Beranda w-full h-screen flex flex-col items-center justify-start">
      <div className="hero-container w-full h-screen flex p-24">
        <div className="hero-title w-2/3 flex mt-24 flex-col">
          <h1 className="text-8xl font-bold text-accent">
            Selamat Datang Di
            <br /> Pejantara!
          </h1>
          <p className="text-3xl w-3/4 mt-24 text-balance text-accent">
            Terima kasih telah bergabung dan menjadi bagian dari gerakan peduli
            lingkungan di Kota Batam. Setiap langkah kecil yang Anda ambil akan
            membantu menjaga kebersihan kota dan berkontribusi pada masa depan
            yang lebih hijau.
          </p>
        </div>
        <img src="Image 3.png" alt="hero" className="w-2/6" />
      </div>
      <div className="w-full h-14 bg-gradient-to-t from-background absolute bottom-[-1.3%]"></div>
    </div>
  );
};

export default Hero;
