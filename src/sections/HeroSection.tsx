// src/sections/HeroSection.tsx
import React, { useEffect } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title } = Typography;

const CONTENT_MAX_WIDTH = '1024px';

// Упрощенные анимации для V4
const sectionVariantsV4: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2, delayChildren: 0.1 }, // Уменьшил задержки
  },
};

const contentItemVariantsV4: Variants = { // Общий вариант для текстовых блоков и кнопки
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05, // Очень низкий порог для срабатывания
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
      variants={sectionVariantsV4}
      className="section-padding hero-section-v4"
    >
      <div className="hero-aurora-bg">
        <div className="aurora-shape shape1"></div>
        <div className="aurora-shape shape2"></div>
        <div className="aurora-shape shape3"></div>
      </div>

      <div className="hero-content-v4" style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        <Row justify="center">
          <Col xs={24} md={22} lg={20} style={{ textAlign: 'center' }}>
            <motion.div variants={contentItemVariantsV4}> {/* Используем общий вариант */}
              <Title
                level={1}
                className="hero-main-title-v4"
                style={{
                    marginBottom: '24px',
                    fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                    lineHeight: '1.15',
                }}
              >
                Ты можешь управлять только тем, что <span className="hero-title-highlight-v4">измеряешь</span>
              </Title>
            </motion.div>

            <motion.div variants={contentItemVariantsV4}> {/* Используем общий вариант */}
              <Title
                level={3}
                className="hero-subtitle-v4"
                style={{
                    fontWeight: 400,
                    marginBottom: '40px',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                    lineHeight: '1.65',
                    maxWidth: '700px',
                    margin: '0 auto 48px auto',
                }}
              >
                UniFlow — ваш интеллектуальный ТОРГОВЫЙ ДНЕВНИК. Анализируйте сделки, находите скрытые ошибки, улучшайте стратегию и торгуйте увереннее с помощью ИИ.
              </Title>
            </motion.div>

            <motion.div variants={contentItemVariantsV4}> {/* Используем общий вариант */}
              <Button
                type="primary"
                size="large"
                href="#cta-form"
                className="hero-cta-button-v4"
                icon={<ArrowRightOutlined />}
                style={{
                    padding: '0 40px',
                    height: '60px',
                    fontSize: '18px',
                    letterSpacing: '0.5px',
                }}
              >
                Начать Анализ Сделок
              </Button>
            </motion.div>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default HeroSection;