// src/App.tsx

import { Layout } from 'antd';
import './App.css';

// Импортируем все компоненты секций
import HeaderSection from './sections/HeaderSection.tsx';
import HeroSection from './sections/HeroSection.tsx';
import SynergySection from './sections/SynergySection.tsx'; // <-- Добавлен импорт
import HowItWorksSection from './sections/HowItWorksSection.tsx';
import ProblemSection from './sections/ProblemSection.tsx';
import SolutionSection from './sections/SolutionSection.tsx';
import ExampleInsightSection from './sections/ExampleInsightSection.tsx';  // Тестовый комментарий для Git
import FeaturesSection from './sections/FeaturesSection.tsx';
import ComparisonSection from './sections/ComparisonSection.tsx';
import SocialProofSection from './sections/SocialProofSection.tsx';
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
        <SynergySection /> {/* <-- Добавлен рендеринг компонента */}
        <HowItWorksSection />
        <ProblemSection />
        <SolutionSection />
        <ExampleInsightSection />
        <FeaturesSection />
        <ComparisonSection />
        <SocialProofSection />
        <IntegrationsSection />
        <FaqSection />
        <CtaSection />
      </Content>
      <FooterSection />
    </Layout>
  );
}

export default App;