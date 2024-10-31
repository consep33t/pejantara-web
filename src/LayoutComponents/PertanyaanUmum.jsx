import RadioFaq from "../components/RadioFaq";
import SectionLayout from "./SectionLayout";

const PertanyaanUmum = () => {
  return (
    <SectionLayout
      paragraph="Temukan jawaban untuk pertanyaan umum seputar Pejantara. Kami
          berkomitmen untuk memberikan informasi yang Anda butuhkan untuk
          memulai kehidupan lingkungan yang bersih. Jika Anda tidak menemukan
          jawaban yang diinginkan, silahkan hubungi tim kami!"
      style="radio-container mt-20 w-full space-y-2"
      content={<RadioFaq />}
    >
      Pertanyaan Umum
    </SectionLayout>
  );
};

export default PertanyaanUmum;
