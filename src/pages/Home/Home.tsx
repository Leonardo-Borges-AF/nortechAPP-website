import { Footer } from "~/components/footer/Footer.component";

import { JoinWaitlist, Session2 } from "./components";
import { Blog } from "./components/Blog.component";
import { CommonQuestions } from "./components/CommonQuestions.component";
import { JoinWaitlist01 } from "./components/JoinWaitlist01.components";
import { JoinWaitlist02 } from "./components/JoinWaitlist02.components";
import { Session1 } from "./components/Session1.components";
import { StayConnected } from "./components/StayConnected.component";
import { TheNortechEcosystem } from "./components/TheNortechEcosysten.components";
import { UnlockExclusiveBenefits } from "./components/UnlockExclusiveBenefits.component";
import { UnlockRewardsProofStudy } from "./components/UnlockRewardsProofStudy.component";


export const Home = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <Session1 />
      <Session2 />
      <JoinWaitlist01 />
      <TheNortechEcosystem />
      <UnlockRewardsProofStudy />
      <JoinWaitlist02 />
      <UnlockExclusiveBenefits />
      <StayConnected />
      <Blog />
      <JoinWaitlist />
      <CommonQuestions />
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};
