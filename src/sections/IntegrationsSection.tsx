// src/sections/IntegrationsSection.tsx
import React, { useEffect } from 'react';
import { Typography } from 'antd';
import { BankOutlined, ApiOutlined, SafetyCertificateOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const { Title, Paragraph } = Typography;

const CONTENT_MAX_WIDTH = '1140px';

const integrationsData = [
  { name: 'Тинькофф Инвестиции', icon: <BankOutlined />, color: '#FFD700', accentColor: '#FFC400' },
  { name: 'СберИнвестор', icon: <BankOutlined />, color: '#228B22', accentColor: '#32CD32' },
  { name: 'ВТБ Мои Инвестиции', icon: <BankOutlined />, color: '#1E90FF', accentColor: '#4682B4' },
  { name: 'Финам', icon: <ApiOutlined />, color: '#0033A0', accentColor: '#0055D4' },
  { name: 'БКС Мир Инвестиций', icon: <SafetyCertificateOutlined />, color: '#00A99D', accentColor: '#00BFB2' },
  { name: '... и другие', icon: <PlusCircleOutlined />, color: '#6c757d', accentColor: '#868e96', isPlaceholder: true },
];

// Анимации
const sectionAppearAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const titleAnimation: Variants = {
  hidden: { opacity: 0, y: -20 }, // Уменьшил сдвиг для более быстрой анимации
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.15 }, // Небольшая задержка после секции
  },
};

// Анимация для контейнера сетки: сначала появляется сам контейнер, потом его дети
const gridAppearAndStaggerAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,      // Длительность появления самого контейнера сетки
      ease: 'easeOut',
      delay: 0.35,        // Задержка появления контейнера сетки после заголовка
      when: "beforeChildren", // Важно: сначала анимировать родителя
      staggerChildren: 0.08, // Задержка между появлением каждой карточки
    },
  },
};

const tileAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 }, // Начальное состояние карточек
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }, // Плавное появление карточки
  },
};

const IntegrationsSection: React.FC = () => {
  const controls = useAnimation();
  // Используем threshold: 0.05, чтобы анимация началась, даже если только самый верх секции виден
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

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
      variants={sectionAppearAnimation}
      className="section-padding integrations-section-reimagined-v3"
    >
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        {/* Блок с заголовком и подзаголовком */}
        <motion.div variants={titleAnimation}>
          <Title level={2} className="integrations-main-title-reimagined-v3">
            Импорт в Один Клик: <span className="integrations-title-highlight-reimagined-v3">Ваши Данные Под Рукой</span>
          </Title>
          <Paragraph className="integrations-subtitle-reimagined-v3">
            UniFlow стремится к безопасной интеграции с популярными брокерами для автоматического импорта истории ваших сделок.
          </Paragraph>
        </motion.div>

        {/* Контейнер для сетки карточек */}
        <motion.div
          variants={gridAppearAndStaggerAnimation} // Используем новый вариант для контейнера сетки
          className="integrations-grid-reimagined-v3"
          // initial="hidden" и animate={controls} наследуются от родительской секции
        >
          {integrationsData.map((integration) => (
            <motion.div // Каждая карточка анимируется индивидуально
              key={integration.name}
              variants={tileAnimation} // Анимация для отдельной карточки
              className={`integration-tile-reimagined-v3 ${integration.isPlaceholder ? 'placeholder' : ''}`}
              style={{ '--accent-color': integration.accentColor, '--base-color': integration.color } as React.CSSProperties}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <div className="integration-tile-icon-wrapper-reimagined-v3">
                {React.cloneElement(integration.icon, { style: { fontSize: '38px' } })}
              </div>
              <Paragraph className="integration-tile-name-reimagined-v3">{integration.name}</Paragraph>
            </motion.div>
          ))}
        </motion.div>

        {/* Текст "Скоро..." */}
        <motion.div variants={titleAnimation} transition={{delay: 0.6 + (integrationsData.length * 0.08) }}> 
          {/* Рассчитываем задержку так, чтобы текст появился после всех карточек */}
          <Paragraph className="integrations-coming-soon-text-reimagined-v3">
            Мы постоянно работаем над расширением списка поддерживаемых брокеров. Следите за обновлениями!
          </Paragraph>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntegrationsSection;