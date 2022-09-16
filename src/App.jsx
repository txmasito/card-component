import "./App.css";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Information from "./components/Information";

function App() {
  return (
    <main className="max-w-[580px] min-w-[350px] flex flex-row maxResp:flex maxResp:flex-wrap rounded-xl bg-White overflow-hidden justify-center">
      <Image />
      <Information />
      <Footer />
    </main>
  );
}

export default App;
