import React from 'react';
import DesireSection from './Desire/Desire';
import Fraud from './Fraud/Fraud';
import Introduction from './Introduction/Introduction';
import { ChoiceSection } from './Choice/Choice';
import PropertyServicesSection from './Property/PropertyServicesSection';
import GeneralPartner from './GeneralPartner/GeneralPartner';
import Faq from './Faq/Faq';

const Main = () => {
  return (
    <main>
      <DesireSection />
      <Fraud />
      <Introduction />
      <ChoiceSection />
      <PropertyServicesSection />
      <GeneralPartner />
      <Faq />
    </main>
  );
};

export default Main;
