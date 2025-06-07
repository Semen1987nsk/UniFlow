// src/sections/HeroSection.tsx
import React, { useEffect } from 'react';
import { Row, Col, Typography, Button, Space } from 'antd'; // Добавим Space для возможного использования
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography; // Используем Paragraph для подзаголовка

const CONTENT_MAX_WIDTH = '1024px'; // Максимальная ширина контента остается

const sectionVariantsV4: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const contentItemVariantsV4: Variants = {
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
    threshold: 0.05,
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
      className="section-padding hero-section-v4" // Убедимся, что padding корректный
      style={{
        paddingTop: 'clamp(80px, 15vh, 140px)',    // Адаптивный верхний отступ
        paddingBottom: 'clamp(70px, 12vh, 120px)', // Адаптивный нижний отступ
        // Остальные стили (backgroundColor, position, overflow, color) остаются в App.css или здесь
      }}
    >
      <div className="hero-aurora-bg">
        <div className="aurora-shape shape1"></div>
        <div className="aurora-shape shape2"></div>
        <div className="aurora-shape shape3"></div>
      </div>

      <div
        className="hero-content-v4"
        style={{
          maxWidth: CONTENT_MAX_WIDTH,
          margin: '0 auto',
          padding: '0 20px', // Боковые отступы для контента
          position: 'relative',
          zIndex: 1,
          display: 'flex', // Добавляем flex для лучшего контроля выравнивания
          flexDirection: 'column',
          alignItems: 'center', // Центрируем все дочерние элементы по горизонтали
          textAlign: 'center',  // Центрируем текст внутри дочерних элементов
        }}
      >
        {/* Мы уберем Row/Col, так как hero-content-v4 теперь сам flex-контейнер */}
        <motion.div variants={contentItemVariantsV4} style={{ width: '100%' }}>
          <Title
            level={1}
            className="hero-main-title-v4"
            style={{
              marginBottom: '24px', // Стандартный отступ
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', // Чуть уменьшил максимальный размер для баланса
              lineHeight: 1.15, // Хорошая плотность для заголовка
              // color и fontWeight уже в CSS
            }}
          >
            Ты можешь управлять только тем, что <span className="hero-title-highlight-v4">измеряешь</span>
          </Title>
        </motion.div>

        <motion.div variants={contentItemVariantsV4} style={{ width: '100%', maxWidth: '720px' /* Ограничиваем ширину подзаголовка */ }}>
          <Paragraph // Используем Paragraph для лучшей семантики и контроля стилей
            className="hero-subtitle-v4" // Используем этот класс для стилей из App.css
            style={{
              // fontWeight, color уже в CSS
              marginBottom: '48px', // Увеличил отступ до кнопки
              fontSize: 'clamp(1.05rem, 2.2vw, 1.4rem)', // Адаптивный размер
              lineHeight: 1.65,
              // maxWidth уже установлен на родительском div
              // margin: '0 auto 48px auto', // margin auto теперь не нужен, т.к. родитель flex
            }}
          >
            UniFlow — ваш интеллектуальный ТОРГОВЫЙ ДНЕВНИК. Анализируйте сделки, находите скрытые ошибки, улучшайте стратегию и торгуйте увереннее с помощью ИИ.
          </Paragraph>
        </motion.div>

        <motion.div variants={contentItemVariantsV4}>
          <Button
            type="primary"
            size="large"
            href="#cta-form"
            className="hero-cta-button-v4" // Стили для кнопки в App.css
            icon={<ArrowRightOutlined />}
            style={{
              padding: '0 40px', // Горизонтальные отступы
              height: '60px',    // Высота кнопки
              fontSize: '18px',  // Размер шрифта
              letterSpacing: '0.5px', // Небольшой интервал между буквами
              // Остальные стили (borderRadius, fontWeight, textTransform, background, boxShadow, transition) в App.css
            }}
          >
            Начать Анализ Сделок
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;