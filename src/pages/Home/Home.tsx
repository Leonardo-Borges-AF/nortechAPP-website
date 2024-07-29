// import Header from "../../components/header/Header.components";
import { Footer } from "~/components/footer/Footer.component";
import { Header } from "~/components/header/Header.components";
import { Blog, Community, JoinWaitlist, Session2 } from "./components";
import { CommonQuestions } from "./components/CommonQuestions.component";
import { Session1 } from "./components/Session1.components";
import { Session4 } from "./components/Session4.components";
import { StayConnected } from "./components/StayConnected.component";
import { UnlockExclusiveBenefits } from "./components/UnlockExclusiveBenefits.component";


export const Home = () => {
  return (
    <div className="w-full relative ">
      <Header />
      <Session1 />
      <Session2 />
      <Session4 />
      <Community />
      <Blog />
      <UnlockExclusiveBenefits />
      <StayConnected />
      <JoinWaitlist />
      <CommonQuestions />
      <Footer />
    </div>
  );
};
