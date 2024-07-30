// import Header from "../../components/header/Header.components";
import { Footer } from "~/components/footer/Footer.component";
import { Header } from "~/components/header/Header.components";
import {  JoinWaitlist, Session2 } from "./components";
import { CommonQuestions } from "./components/CommonQuestions.component";
import { Session1 } from "./components/Session1.components";
import { JoinWaitlist01 } from "./components/JoinWaitlist01.components";
import { StayConnected } from "./components/StayConnected.component";
import { UnlockExclusiveBenefits } from "./components/UnlockExclusiveBenefits.component";
import { TheNortechEcosystem } from "./components/TheNortechEcosysten.components";


export const Home = () => {
  return (
    <div className="w-full relative ">
      <Header />
      <Session1 />
      <Session2 />
      <JoinWaitlist01 />
      <TheNortechEcosystem />
      <UnlockExclusiveBenefits />
      <StayConnected />
      <JoinWaitlist />
      <CommonQuestions />
      <Footer />
    </div>
  );
};
