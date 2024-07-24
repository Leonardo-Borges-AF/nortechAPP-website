// import Header from "../../components/header/Header.components";
import { Header } from "~/components/header/Header.components";
import { Community, Blog, Newsletter, Session2 } from "./components";
import { Footer } from "~/components/footer/Footer.component";
import { Session1 } from "./components/Session1.components";
import { Session4 } from "./components/Session4.components";
import { BackgroundDashed } from "~/components/BackgroundDashed.component";

export const Home = () => {
  return (
    <div className="w-full relative ">
      <BackgroundDashed />
      <Header />
      <div className="h-[78px]" />
      <Session1 />
      <Session2 />
      <Session4 />
      <Community />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
};
