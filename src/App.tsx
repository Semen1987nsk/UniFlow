// src/App.tsx

import { Layout } from 'antd';
import './App.css';

// Импортируем все компоненты секций
import HeaderSection from './sections/HeaderSection.tsx';
import HeroSection from './sections/HeroSection.tsx';
import SocialProofSection from './sections/SocialProofSection.tsx';
import SynergySection from './sections/SynergySection.tsx'; // <-- Добавлен импорт
import ExampleInsightSection from './sections/ExampleInsightSection.tsx';  // Тестовый комментарий для Git
import HowItWorksSection from './sections/HowItWorksSection.tsx';
import ProblemSection from './sections/ProblemSection.tsx';
//import SolutionSection from './sections/SolutionSection.tsx';

import FeaturesSection from './sections/FeaturesSection.tsx';
import ComparisonSection from './sections/ComparisonSection.tsx';

import IntegrationsSection from './sections/IntegrationsSection.tsx';
import FaqSection from './sections/FaqSection.tsx';
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
        <SynergySection /> {/* <-- Добавлен рендеринг компонента */}
        <ExampleInsightSection />
        <HowItWorksSection />
        <ProblemSection />       
        <FeaturesSection />
        <ComparisonSection />       
        <IntegrationsSection />
        <FaqSection />
        <CtaSection />
      </Content>
      <FooterSection />
    </Layout>
  );
}

export default App;