// src/App.tsx

import { Layout } from 'antd';
import './App.css';

// Импортируем все компоненты секций
import HeaderSection from './sections/HeaderSection.tsx';
import HeroSection from './sections/HeroSection.tsx';
import SocialProofSection from './sections/SocialProofSection.tsx';
import SynergySection from './sections/SynergySection.tsx'; 
import ExampleInsightSection from './sections/ExampleInsightSection.tsx'; 
import HowItWorksSection from './sections/HowItWorksSection.tsx';
import FeaturesSection from './sections/FeaturesSection.tsx';
import PricingSection from './sections/PricingSection.tsx';
import ComparisonSection from './sections/ComparisonSection.tsx';
import IntegrationsSection from './sections/IntegrationsSection.tsx';
import CtaSection from './sections/CtaSection.tsx';
import FooterSection from './sections/FooterSection.tsx';

const { Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <HeaderSection />
      <Content>
        <HeroSection />
        <SocialProofSection />
        <SynergySection /> 
        <ExampleInsightSection />
        <HowItWorksSection />
        {/* <ProblemSection /> */} {/* <<< УДАЛЕНО */}      
        <FeaturesSection />
        <PricingSection />
        <ComparisonSection />       
        <IntegrationsSection />
        <CtaSection />
      </Content>
      <FooterSection />
    </Layout>
  );
}

export default App;