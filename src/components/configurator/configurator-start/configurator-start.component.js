import React from "react";
import { useSelector } from "react-redux";

import { ConfigContainer, Title } from "./configurator-start.styles";

import AnimationScene from "../../animation-scene/animation-scene.component";
import StepCount from "../../step-count/step-count.compontn";
import Box from "../../../theme/ui-components/box/box.component";
import Step from "./steps/step/step.component";
import Step1 from "./steps/step1/step1.component";
import Step2 from "./steps/step2/step2.component";
import Step3 from "./steps/step3/step3.component";
import Step4 from "./steps/step4/step4.component";
import Step5 from "./steps/step5/step5.component";

const ConfiguratorStart = () => {
  const activeStep = useSelector((state) => state.config.activeStep);

  return (
    <ConfigContainer>
      <Box size="lg">
        <AnimationScene />
        <StepCount />
        <Title>Konfigurator servisa </Title>
        {activeStep === 1 && (
          <Step title="Korak 1. Odaberite proizvođača vašeg vozila">
            <Step1 />
          </Step>
        )}
        {activeStep === 2 && (
          <Step title="Korak 2. Odaberite jednu ili više usluga za koje ste ">
            <Step2 />
          </Step>
        )}
        {activeStep === 3 && (
          <Step title="Korak 3. Vaši kontakt podaci">
            <Step3 />
          </Step>
        )}
        {activeStep === 4 && (
          <Step
            title="Korak 4. Pregled i potvrda vašeg odabira"
            message="Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promijeniti neki od podataka, možete pritisnuti gumb za uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost svojih podataka pritisnite gumb pošalji na dnu, za slanje upita za servis."
          >
            <Step4 />
          </Step>
        )}
        {activeStep === 5 && <Step5 />}
      </Box>
    </ConfigContainer>
  );
};

export default ConfiguratorStart;
