// src/sections/HowItWorksSection.tsx
import React, { useEffect } from 'react';
import { Typography, Row, Col } from 'antd';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const { Title, Paragraph, Text } = Typography;

const CONTENT_MAX_WIDTH = '1140px';

const itemAppearAnimation: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface MetricCardProps {
  title: string;
  valuePrefix?: string;
  value?: number; 
  valueString?: string; 
  valueSuffix?: string;
  decimals?: number;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, valuePrefix = "", value, valueString, valueSuffix = "", decimals = 0, description }) => {
  const cardControls = useAnimation();
  const [countUpRef, countUpInView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.5 
  }); 
  const [motionRef, motionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (motionInView) {
      cardControls.start('visible');
    }
  }, [cardControls, motionInView]);

  return (
    <motion.div
      ref={motionRef}
      initial="hidden"
      animate={cardControls}
      variants={itemAppearAnimation}
      className="metric-card"
      style={{ width: '100%', height: '100%' }}
    >
      <Title level={4} className="metric-card-title">{title}</Title>
      <div className="metric-card-value" ref={countUpRef}> 
        {valuePrefix}
        {value !== undefined && countUpInView ? (
          <CountUp start={0} end={value} duration={2.5} decimals={decimals} separator=" " />
        ) : valueString ? (
          valueString
        ) : value !== undefined ? (
           (0).toFixed(decimals) 
        ) : (
          '-'
        )}
        {valueSuffix}
      </div>
      <Paragraph className="metric-card-description">{description}</Paragraph>
    </motion.div>
  );
};

const metricsData: MetricCardProps[] = [
    {
      title: 'Процент Прибыльных Сделок',
      value: 62,
      valueSuffix: '%',
      description: 'Узнайте, как часто ваши сделки закрываются в плюс. UniFlow поможет выявить закономерности, повышающие этот показатель.',
    },
    {
      title: 'Коэффициент Прибыльности',
      value: 2.15,
      decimals: 2,
      description: 'Оцените эффективность вашей торговли: сколько вы зарабатываете на каждый доллар риска. UniFlow подскажет, как оптимизировать это соотношение.',
    },
    {
      title: 'Коэффициент Шарпа', // Новая метрика
      value: 1.25,              // Пример значения
      decimals: 2,              // Количество знаков после запятой
      description: 'Оцените доходность вашей стратегии с поправкой на риск. Чем выше коэффициент Шарпа, тем лучше ваша отдача на единицу принятого риска. UniFlow поможет отслеживать и улучшать этот показатель.',
    }
];


const HowItWorksSection: React.FC = () => {
  const sectionControls = useAnimation();
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  useEffect(() => {
    if (sectionInView) {
      sectionControls.start('visible');
    } else {
      sectionControls.start('hidden'); 
    }
  }, [sectionControls, sectionInView]);

  return (
    <motion.div 
      ref={sectionRef}
      initial="hidden"
      animate={sectionControls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } } 
      }}
      className="section-padding how-it-works-reimagined-section"
      style={{
        padding: '100px 0',
      }}
    >
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        <motion.div initial="hidden" animate={sectionControls} variants={itemAppearAnimation} transition={{delay: 0.1}}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '24px', color: '#FFFFFF' }}>
            Полезная Статистика Сделок
          </Title>
          <Paragraph style={{ textAlign: 'center', fontSize: '18px', color: '#A0AEC0', marginBottom: '64px', maxWidth: '750px', margin: '0 auto 64px auto' }}>
            UniFlow превращает ваш торговый журнал в мощный инструмент анализа, предоставляя наглядную статистику, которая помогает понять сильные и слабые стороны вашей стратегии.
          </Paragraph>
        </motion.div>

        <Row gutter={[32, 32]} justify="center" align="stretch">
          {metricsData.map((metric, index) => (
            <Col key={index} xs={24} sm={12} md={8} style={{ display: 'flex' }}>
                 <MetricCard {...metric} /> 
            </Col>
          ))}
        </Row>
        
        <motion.div initial="hidden" animate={sectionControls} variants={itemAppearAnimation} transition={{delay: 0.3}}>
            <Paragraph style={{ textAlign: 'center', marginTop: '64px', fontSize: '17px', fontWeight: 400, maxWidth: '750px', margin: '64px auto 0 auto', color: '#CBD5E1' }}>
                Это лишь некоторые из метрик, которые UniFlow анализирует для вас. Начните вести журнал сегодня, чтобы превратить сухие цифры в реальные улучшения и <Text strong style={{color: '#86EFAC'}}>стабильную прибыль!</Text>
            </Paragraph>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HowItWorksSection;