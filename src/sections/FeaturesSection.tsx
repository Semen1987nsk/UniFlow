// src/sections/FeaturesSection.tsx
import React, { useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
import { 
    LineChartOutlined, 
    ExperimentOutlined, 
    SafetyCertificateOutlined, 
    BulbOutlined, 
    SolutionOutlined, 
    BarChartOutlined 
} from '@ant-design/icons';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const { Title, Paragraph } = Typography;

const CONTENT_MAX_WIDTH = '1140px';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Иконки будут стилизоваться через CSS классы или более сложные inline-стили внутри map
const baseIconStyle: React.CSSProperties = { fontSize: '48px' }; // Базовый размер

const featuresData: Feature[] = [
  { icon: <BarChartOutlined style={baseIconStyle} />, title: 'Глубокий Анализ Сделок', description: 'Выявляйте скрытые закономерности и понимайте реальные причины ваших прибылей и убытков.' },
  { icon: <ExperimentOutlined style={baseIconStyle} />, title: 'Оценка Стратегий', description: 'Узнайте, какие торговые сетапы и стратегии действительно работают конкретно для вас.' },
  { icon: <SafetyCertificateOutlined style={baseIconStyle} />, title: 'Анализ Риск-Менеджмента', description: 'Оптимизируйте размер позиций, стоп-лоссы и соотношение риска к прибыли для стабильного роста.' },
  { icon: <SolutionOutlined style={baseIconStyle} />, title: 'Поведенческие Паттерны', description: 'Обнаруживайте влияние эмоций (FOMO, FUD) на ваши решения и учитесь их контролировать.' },
  { icon: <BulbOutlined style={baseIconStyle} />, title: 'Персональные Рекомендации', description: 'Получайте конкретные, основанные на данных советы, адаптированные под ваш уникальный стиль торговли.' },
  { icon: <LineChartOutlined style={baseIconStyle} />, title: 'Наглядная Статистика', description: 'Отслеживайте свой прогресс с помощью понятных графиков и ключевых метрик эффективности.' },
];

// Анимации Framer Motion
const sectionAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.15 } 
  },
};

const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } // Более "упругий" ease
  },
};

const FeaturesSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // 10% секции видно для старта анимации
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
      className="section-padding features-section-reimagined" // Новый класс для секции
      // Стиль фона будет в App.css
    >
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        <motion.div variants={cardAnimation}> {/* Анимация для заголовка */}
          <Title level={2} style={{ textAlign: 'center', marginBottom: '64px', color: '#FFFFFF' }}>
            Раскройте Весь Потенциал <span className="features-title-highlight">UniFlow</span>
          </Title>
        </motion.div>

        <Row gutter={[36, 36]} justify="center"> {/* Увеличил gutter */}
          {featuresData.map((feature, index) => (
            <Col key={index} xs={24} sm={12} lg={8} style={{ display: 'flex' }}>
              <motion.div
                variants={cardAnimation}
                className="feature-card-reimagined" // Класс для новой карточки
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  boxShadow: "0px 20px 40px rgba(56, 189, 248, 0.25), 0px 0px 100px rgba(56, 189, 248, 0.1)", // Усиленное свечение
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="feature-card-icon-container">
                  {feature.icon}
                </div>
                <Title level={4} className="feature-card-title">{feature.title}</Title>
                <Paragraph className="feature-card-description">{feature.description}</Paragraph>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;