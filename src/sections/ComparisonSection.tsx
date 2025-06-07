// src/sections/ComparisonSection.tsx
import React, { useEffect } from 'react';
import { Typography } from 'antd';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const { Title, Paragraph } = Typography;

const CONTENT_MAX_WIDTH = '1024px';

const comparisonData = [
    {
        key: '1',
        feature: 'ИИ-Анализ паттернов',
        productDesc: 'Автоматически выявляет неочевидные связи и скрытые закономерности.',
        excelDesc: 'Требует сложных ручных вычислений и глубоких статистических знаний.',
    },
    {
        key: '2',
        feature: 'Персональные рекомендации',
        productDesc: 'Предоставляет советы, основанные на вашей уникальной истории и психологии.',
        excelDesc: 'Отсутствуют или требуют дорогостоящей консультации эксперта.',
    },
    {
        key: '3',
        feature: 'Временные затраты',
        productDesc: 'Минуты на получение глубокого анализа и действенных инсайтов.',
        excelDesc: 'Часы на базовую аналитику, дни на более глубокий анализ.',
    },
    {
        key: '4',
        feature: 'Анализ эмоциональных факторов',
        productDesc: 'Помогает объективно определить влияние эмоций на ваши торговые решения.',
        excelDesc: 'Субъективная самооценка, склонная к искажениям и самообману.',
    },
    {
        key: '5',
        feature: 'Удобство и доступность',
        productDesc: 'Интуитивно понятный интерфейс, доступный с любого устройства.',
        excelDesc: 'Громоздкие таблицы, сложные формулы, ограниченная мобильность.',
    },
    {
        key: '6',
        feature: 'Прогнозирование и моделирование',
        productDesc: 'Моделирование сценариев «что если» для оценки потенциальных изменений.',
        excelDesc: 'Ограниченные и трудоемкие возможности для точного прогнозирования.',
    },
];

// Анимация для всей секции (просто появление)
const sectionVisibilityAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

// Анимация для блока заголовка (появление с небольшим сдвигом и задержкой)
const titleBlockAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.1 }, // Небольшая задержка после появления секции
  },
};

// Анимация для контейнера таблицы (управляет задержкой и последовательностью дочерних элементов)
const tableStaggerAnimation: Variants = {
  hidden: {}, // Сам контейнер не анимирует видимость, это делают дочерние элементы
  visible: {
    transition: {
      delayChildren: 0.3, // Общая задержка перед началом анимации дочерних элементов
      staggerChildren: 0.07, // Задержка между анимациями каждого дочернего элемента
    },
  },
};

// Анимация для каждого элемента таблицы (заголовки колонок, ячейки)
const tableItemAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};
//

const ComparisonSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); // Порог 10%

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
      variants={sectionVisibilityAnimation} // Анимация для всей секции
      className="section-padding comparison-section-restyle"
    >
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        <motion.div variants={titleBlockAnimation}> {/* Анимация для блока заголовка */}
          <Title level={2} className="comparison-main-title-restyle">
            <span className="comparison-title-highlight">UniFlow</span>
            <span className="comparison-vs-restyle"> vs </span>
            <span className="comparison-title-highlight-alt">Ручной Анализ</span>
          </Title>
          <Paragraph className="comparison-subtitle-restyle">
            Ключевые преимущества UniFlow по сравнению с традиционными методами анализа.
          </Paragraph>
        </motion.div>

        <motion.div
          className="comparison-table-restyle"
          variants={tableStaggerAnimation} // Анимация для контейнера таблицы (управляет дочерними)
          // initial="hidden" и animate={controls} наследуются от родительского motion.div
        >
          {/* Шапка таблицы для десктопа */}
          <motion.div variants={tableItemAnimation} className="comparison-table-header-restyle empty-header-restyle"></motion.div>
          <motion.div variants={tableItemAnimation} className="comparison-table-header-restyle uniflow-header-restyle">UniFlow</motion.div>
          <motion.div variants={tableItemAnimation} className="comparison-table-header-restyle excel-header-restyle">Ручной Анализ / Excel</motion.div>

          {/* Строки данных */}
          {comparisonData.map((item) => ( // Убрали неиспользуемый index из map
            <React.Fragment key={item.key}>
              <motion.div
                variants={tableItemAnimation}
                className="comparison-table-cell-restyle feature-cell-restyle"
              >
                <Title level={5} style={{ margin: 0, color: 'inherit' }}>{item.feature}</Title>
              </motion.div>

              <motion.div
                variants={tableItemAnimation}
                className="comparison-table-cell-restyle product-desc-cell-restyle"
                data-label="UniFlow:"
              >
                <Paragraph style={{ margin: 0 }}>{item.productDesc}</Paragraph>
              </motion.div>

              <motion.div
                variants={tableItemAnimation}
                className="comparison-table-cell-restyle excel-desc-cell-restyle"
                data-label="Ручной Анализ / Excel:"
              >
                <Paragraph style={{ margin: 0 }}>{item.excelDesc}</Paragraph>
              </motion.div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ComparisonSection;