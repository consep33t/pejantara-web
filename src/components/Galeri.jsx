const Galeri = () => {
  return (
    <div className="galeri-container w-full h-screen flex flex-col items-center p-24">
      <div className="layanan-title w-full flex items-center flex-col">
        <h1 className="text-6xl font-bold">Galeri Pejantara</h1>
        <p className="text-balance text-center mt-10 text-xl">
          Selamat datang di Galeri Pejantara , tempat kami menampilkan
          momen-momen terbaik dan dokumentasi kegiatan yang telah kami lakukan.
          Lihatlah berbagai pencapaian kami dalam upaya melestarikan budaya,
          lingkungan, dan kemajuan komunitas. Temukan inspirasi dari setiap
          langkah yang kami ambil.
        </p>
      </div>
      <div className="galeri w-full h-full mt-20">
        <div className="grid grid-cols-5 grid-rows-5 gap-4 w-full h-full">
          <div className="col-span-2 row-span-5 bg-slate-500 rounded-xl">
            <img src="" />
          </div>
          <div className="row-span-3 col-start-3 bg-slate-500 rounded-xl">
            2
          </div>
          <div className="row-span-3 col-start-4 bg-slate-500 rounded-xl">
            3
          </div>
          <div className="row-span-5 col-start-5 bg-slate-500 rounded-xl">
            4
          </div>
          <div className="col-span-2 row-span-2 col-start-3 bg-slate-500 rounded-xl row-start-4">
            5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeri;
