// src/sections/ExampleInsightSection.tsx
import React, { useEffect } from 'react';
import { Typography } from 'antd'; // Убрали Card и Divider, будем делать кастомно
import {
    WarningTwoTone,     // Для проблемы (двухцветная для акцента)
    FundProjectionScreenOutlined, // Для анализа (более технологичная)
    BulbTwoTone,          // Для рекомендации (двухцветная)
    ArrowRightOutlined,   // Для пунктов анализа (оставляем)
    FallOutlined,         // Для негативного аспекта (оставляем)
    RiseOutlined          // Для позитивного аспекта в рекомендации
} from '@ant-design/icons';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const { Title, Paragraph, Text } = Typography;

const CONTENT_MAX_WIDTH = '860px'; // Чуть шире для этого блока

// Анимации
const sectionAppearAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.3 } 
  },
};

const itemAppearAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "circOut" } 
  },
};


const ExampleInsightSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const headerIconStyle: React.CSSProperties = { fontSize: '28px', marginRight: '16px' };
  const listItemIconStyle: React.CSSProperties = { fontSize: '18px', marginRight: '10px', marginTop: '5px' };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionAppearAnimation}
      className="section-padding example-insight-section" // Класс для стилизации
      style={{ 
        padding: '100px 0', 
        backgroundColor: '#0D1B2A', // Очень темный синий фон секции
        color: '#E0E6F0', // Светлый текст по умолчанию
      }}
    >
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>
        <motion.div variants={itemAppearAnimation}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '32px', color: '#FFFFFF' }}>
            Превратите Данные в <span style={{color: '#60A5FA'}}>Действие</span> с UniFlow
          </Title>
          <Paragraph style={{ textAlign: 'center', fontSize: '18px', color: '#A0AEC0', marginBottom: '64px', maxWidth: '720px', margin: '0 auto 64px auto' }}>
            Посмотрите, как наш ИИ-анализ помогает выявить скрытые проблемы и найти точки роста на конкретном примере:
          </Paragraph>
        </motion.div>

        {/* Основной контейнер для примера */}
        <motion.div
          variants={itemAppearAnimation}
          className="insight-example-container" // Класс для стилизации
          style={{
            // Стили будут в App.css
          }}
        >
          {/* Блок Проблемы */}
          <div className="insight-block problem-block">
            <div className="insight-block-header">
              <WarningTwoTone twoToneColor="#FBBF24" style={headerIconStyle} />
              <Title level={4} style={{ color: '#FCD34D', margin: 0 }}>Обнаружена Проблема:</Title>
            </div>
            <Paragraph className="insight-block-content" style={{ fontSize: '17px', color: '#CBD5E1' }}>
              <Text strong style={{ color: '#FDE68A' }}>Упущенная Прибыль</Text> — 90% сделок закрывается в безубыток.
            </Paragraph>
          </div>

          <div className="insight-separator"></div> {/* Кастомный разделитель */}

          {/* Блок Анализа */}
          <div className="insight-block analysis-block">
            <div className="insight-block-header">
              <FundProjectionScreenOutlined style={{ ...headerIconStyle, color: '#60A5FA' }} />
              <Title level={4} style={{ color: '#93C5FD', margin: 0 }}>Ключевые Наблюдения UniFlow:</Title>
            </div>
            <ul className="insight-block-content" style={{ listStyle: 'none', paddingLeft: 0, marginTop: '16px' }}>
              <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start' }}>
                <FallOutlined style={{ ...listItemIconStyle, color: '#F87171' /* Красный */ }} />
                <Text style={{ color: '#CBD5E1', fontSize: '16px' }}>
                  <Text strong style={{color: '#FECACA'}}>75%</Text> совершенных сделок показывали в моменте прибыль <Text strong  style={{color: '#BAE6FD'}}>+10-15%</Text>, но в итоге закрывались, откатываясь к стоп-лоссу.
                </Text>
              </li>
              <li style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start' }}>
                <FallOutlined style={{ ...listItemIconStyle, color: '#F87171' }} />
                <Text style={{ color: '#CBD5E1', fontSize: '16px' }}>
                  <Text strong style={{color: '#FECACA'}}>Результат стратегии:</Text> Итоговая просадка <Text strong style={{color: '#FCA5A5'}}>-9%</Text>
                </Text>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <ArrowRightOutlined style={{ ...listItemIconStyle, color: '#60A5FA' }} />
                <Text style={{ color: '#CBD5E1', fontSize: '16px' }}>
                  <Text strong style={{color: '#BAE6FD'}}>Основная причина:</Text> Стратегия была нацелена на поиск очень крупных движений (30-50%), что редко реализовывалось на текущем рынке.
                </Text>
              </li>
            </ul>
          </div>

          <div className="insight-separator"></div>

          {/* Блок Рекомендации */}
          <div className="insight-block recommendation-block">
            <div className="insight-block-header">
              <BulbTwoTone twoToneColor="#86EFAC" style={headerIconStyle} />
              <Title level={4} style={{ color: '#A7F3D0', margin: 0 }}>Персональная Рекомендация ИИ:</Title>
            </div>
            <div 
              className="insight-block-content recommendation-box" // Класс для стилизации бокса
              style={{
                // Стили будут в App.css
              }}
            >
              <Paragraph style={{ fontSize: '17px', lineHeight: '1.8', margin: 0, color: '#D1FAE5' /* Светло-зеленый текст */ }}>
                "При достижении прибыли по сделке в <Text strong style={{ color: '#FFFFFF' }}>+10%</Text>, рекомендуется фиксировать <Text strong style={{ color: '#FFFFFF' }}>50%</Text> позиции, а стоп-лосс по оставшейся части переносить в безубыток.
                Применение этой тактики к вашей истории сделок показало бы <RiseOutlined style={{margin: '0 4px'}} />
                <Text strong style={{ color: '#6EE7B7', fontSize: '18px' }}>прибыль +24%</Text> за последние 6 месяцев вместо текущего убытка <FallOutlined style={{margin: '0 4px'}}/>
                <Text strong style={{ color: '#FDA4AF', fontSize: '18px' }}>-9%</Text>."
              </Paragraph>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExampleInsightSection;