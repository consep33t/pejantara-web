const PertanyaanUmum = () => {
  return (
    <div className="layanan-container w-full flex flex-col items-center p-24">
      <div className="layanan-title w-full flex items-center flex-col">
        <h1 className="text-6xl font-bold text-accent">Pertanyaan Umum</h1>
        <p className="text-balance text-center mt-10 text-xl text-accent">
          Temukan jawaban untuk pertanyaan umum seputar Pejantara. Kami
          berkomitmen untuk memberikan informasi yang Anda butuhkan untuk
          memulai kehidupan lingkungan yang bersih. Jika Anda tidak menemukan
          jawaban yang diinginkan, silahkan hubungi tim kami!
        </p>
      </div>
      <div className="radio-container mt-20 w-full space-y-2">
        <div className="collapse collapse-arrow bg-white shadow-md">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PertanyaanUmum;
