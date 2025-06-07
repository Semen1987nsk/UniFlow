// src/sections/SynergySection.tsx
import React, { useEffect } from 'react';
import { Typography, Card } from 'antd';
import { EditOutlined, ThunderboltOutlined, PlusCircleFilled } from '@ant-design/icons';
import { motion, useAnimation, Variants } from 'framer-motion'; // Добавили Variants для типизации
import { useInView } from 'react-intersection-observer';

const { Title, Paragraph } = Typography;

const CONTENT_MAX_WIDTH = '1140px';

// Определяем варианты анимации более явно
const sectionAnimation: Variants = {
  hidden: { opacity: 0, y: 20 }, // Начинаем чуть ниже и невидимо
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren", // Анимация дочерних элементов начнется после родительской
      staggerChildren: 0.2,  // Задержка между анимациями дочерних элементов
    },
  },
};

// Общий вариант для дочерних элементов (карточек, текста)
const itemAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


const SynergySection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Анимация сработает один раз
    threshold: 0.15,   // Секция должна быть видна на 15% для запуска
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // Если нужно, чтобы анимация повторялась при выходе из вида (убрать triggerOnce тогда)
    }
  }, [controls, inView]);

  const cardBackgroundColor = '#1A202C'; 
  const cardTextColor = '#E2E8F0';      
  const cardTitleColor = '#FFFFFF';     
  
  const paragraphFontSize = '16px'; 
  const paragraphLineHeight = '1.75';

  const textShadowStyle: React.CSSProperties = {
    textShadow: '0px 1px 2px rgba(0, 0, 0, 0.6)', // Тень для текста
  };

  return (
    <motion.div // Родительский motion.div для всей секции
      ref={ref}
      initial="hidden"
      animate={controls} // Управляется через useInView
      variants={sectionAnimation} // Используем variants для родителя
      className="section-padding synergy-section"
      style={{
        //padding: '100px 0',
        position: 'relative', 
        overflow: 'hidden',
      }}
    >
      <div className="animated-gradient-bg"></div>

      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        {/* Заголовок секции (дочерний элемент) */}
        <motion.div variants={itemAnimation}> 
          <Title level={2} style={{ textAlign: 'center', marginBottom: '64px', color: cardTitleColor, ...textShadowStyle }}>
            Синергия <span style={{color: '#85d8ff'}}>Дисциплины</span> и <span style={{color: '#c06fff'}}>Интеллекта</span>
          </Title>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
          <div 
            className="synergy-cards-container"
          >
            {/* Карточка 1 (дочерний элемент) */}
            <motion.div variants={itemAnimation} className="synergy-card-wrapper">
              <Card
                bordered={false}
                className="synergy-custom-card" 
                style={{
                  height: '100%',
                  borderRadius: '20px',
                  padding: '35px', 
                  backgroundColor: cardBackgroundColor, 
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)', 
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <EditOutlined style={{ fontSize: '48px', color: '#85d8ff', marginBottom: '20px' }} />
                <Title level={3} style={{ marginBottom: '18px', color: cardTitleColor, ...textShadowStyle }}>
                    Торговый Журнал
                </Title>
                <Paragraph style={{ color: cardTextColor, fontSize: paragraphFontSize, lineHeight: paragraphLineHeight, ...textShadowStyle }}>
                  Основа дисциплины. Помогает отслеживать сделки, выявлять базовые ошибки и формировать системный подход. Но ручной анализ трудоемок и часто упускает неочевидные детали.
                </Paragraph>
              </Card>
            </motion.div>

            {/* Плюс (дочерний элемент) */}
            <motion.div variants={itemAnimation} className="synergy-plus-icon-wrapper">
               <PlusCircleFilled style={{ fontSize: '56px', color: 'rgba(255, 255, 255, 0.85)', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.4))' }} />
            </motion.div>

            {/* Карточка 2 (дочерний элемент) */}
            <motion.div variants={itemAnimation} className="synergy-card-wrapper">
               <Card
                bordered={false}
                className="synergy-custom-card"
                style={{
                  height: '100%',
                  borderRadius: '20px',
                  padding: '35px',
                  backgroundColor: cardBackgroundColor, 
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <ThunderboltOutlined style={{ fontSize: '48px', color: '#c06fff', marginBottom: '20px' }} />
                <Title level={3} style={{ marginBottom: '18px', color: cardTitleColor, ...textShadowStyle }}>
                    Аналитика ИИ
                </Title>
                <Paragraph style={{ color: cardTextColor, fontSize: paragraphFontSize, lineHeight: paragraphLineHeight, ...textShadowStyle }}>
                  Усиливает дневник мощью искусственного интеллекта. Алгоритмы UniFlow проникают глубже цифр, выявляя скрытые закономерности в ваших действиях, эмоциях и рыночных условиях.
                </Paragraph>
              </Card>
            </motion.div>
          </div>
          
          {/* Заключительный текст (дочерний элемент) */}
          <motion.div variants={itemAnimation}> 
            <Paragraph 
              style={{ 
                textAlign: 'center', 
                marginTop: '64px', 
                fontSize: '18px', 
                fontWeight: 500, 
                maxWidth: '800px', 
                margin: '64px auto 0 auto', 
                color: cardTextColor, 
                lineHeight: '1.75',
                ...textShadowStyle
              }}
            >
              <span style={{ 
                  background: 'linear-gradient(90deg, #85d8ff, #c06fff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  fontSize: '20px',
                }}>
                UniFlow Результат:
              </span><br/> Не просто записи, а ваша <strong style={{color: cardTitleColor, fontWeight: 600, ...textShadowStyle}}>персональная дорожная карта</strong> к стабильной прибыли, основанная на глубоком понимании вашего уникального стиля торговли и объективных данных.
            </Paragraph>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SynergySection;