// src/sections/PricingSection.tsx
import React, { useEffect } from 'react';
import { Typography, Button, List } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const { Title, Paragraph, Text } = Typography;

const CONTENT_MAX_WIDTH = '960px'; // Можно сделать чуть уже для фокуса

// Анимации
const sectionAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 }
  },
};

const itemAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } // Custom cubic-bezier
  },
};

const includedFeatures = [
  'Полный 7-дневный бесплатный доступ',
  'Неограниченный анализ ваших сделок',
  'Персональные ИИ-рекомендации',
  'Отслеживание всех ключевых метрик',
  'Безопасное хранение данных',
  'Регулярные обновления и новые функции',
];

const PricingSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionAnimation}
      className="section-padding pricing-section" // Класс для стилизации
    >
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
        <motion.div variants={itemAnimation}>
          <Title level={2} style={{ marginBottom: '20px', color: '#1D2939' }}>
            Начните Улучшать Свою Торговлю <span className="pricing-title-highlight">Уже Сегодня!</span>
          </Title>
          <Paragraph style={{ fontSize: '18px', color: '#475467', marginBottom: '56px', maxWidth: '700px', margin: '0 auto 56px auto' }}>
            UniFlow предлагает единый, прозрачный тариф со всеми возможностями.
            Попробуйте все функции абсолютно бесплатно в течение 7 дней!
          </Paragraph>
        </motion.div>

        <motion.div
          variants={itemAnimation}
          className="pricing-card-container"
        >
          <div className="pricing-card-main">
            <div className="pricing-card-header">
              <Title level={3} style={{ color: '#101828', marginBottom: '8px' }}>Полный Доступ</Title>
              <Paragraph style={{ color: '#475467', fontSize: '16px' }}>Все функции UniFlow без ограничений.</Paragraph>
            </div>

            <div className="pricing-card-price-wrapper">
              <span className="pricing-card-price">199 ₽</span>
              <span className="pricing-card-period">/ месяц</span>
            </div>
            <Paragraph className="pricing-card-trial-text">
              Первые <Text strong style={{ color: '#177245' }}>7 дней — бесплатно!</Text>
            </Paragraph>

            <Button 
              type="primary" 
              size="large" 
              className="pricing-cta-button"
              href="#cta-form" // Ссылка на секцию CTA или на страницу регистрации
            >
              Попробовать 7 Дней Бесплатно
            </Button>

            <div className="pricing-features-list">
              <List
                dataSource={includedFeatures}
                renderItem={(item) => (
                  <List.Item style={{ borderBottom: 'none', padding: '6px 0' }}>
                    <CheckCircleTwoTone twoToneColor="#34D399" style={{ marginRight: '10px', fontSize: '18px' }} />
                    <Text style={{ color: '#344054' }}>{item}</Text>
                  </List.Item>
                )}
              />
            </div>
             <Paragraph style={{ fontSize: '13px', color: '#667085', marginTop: '24px' }}>
                Отмена подписки в любой момент. Никаких скрытых платежей.
            </Paragraph>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PricingSection;