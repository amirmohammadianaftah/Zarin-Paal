import MoveSlider from "../../components/MoveSlider.jsx";
import Header from "../../components/Header.jsx";
import RowBoxes from "../../components/RowBoxes.jsx";
import MiddleWhite from "../../components/MiddleWhite.jsx";
import MiddleBlack from "../../components/MiddleBlack.jsx";
import DownWhiteSection from "../../components/DownWhiteSection.jsx";
import Support from "../../components/Support.jsx";
import Opinion from "../../components/Opinion.jsx";
import Questions from "../../components/Questions.jsx";
import Family from "../../components/Family.jsx";
import BlueBack from "../../components/BlueBack.jsx";

export default function Home() {
  return (
    <main>
      <Header />
      <MoveSlider />
      <RowBoxes />
      <MiddleWhite />
      <MiddleBlack />
      <DownWhiteSection />
      <Opinion />
      <Questions />
      <BlueBack />
      <Family />
      <Support />
    </main>
  );
}
