// src/sections/SocialProofSection.tsx
import React, { useEffect } from 'react';
import { Typography, Card, Row, Col } from 'antd'; // Добавили Row, Col
import { CommentOutlined, BookOutlined, GlobalOutlined, UserOutlined } from '@ant-design/icons';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const { Title, Paragraph, Text } = Typography;

const CONTENT_MAX_WIDTH = '1140px';

const quotesData = [
  {
    key: '1',
    author: 'Александр Элдер',
    role: 'Автор "Как играть и выигрывать на бирже"',
    quote: 'Хороший трейдер знает, что деньги делаются не на количестве сделок, а на качестве анализа. Систематический анализ собственных сделок - это то, что отличает профессионалов от любителей.',
    icon: <UserOutlined style={{ marginRight: '8px' }} />, // Небольшой отступ для иконки
  },
  {
    key: '2',
    author: 'Марк Дуглас',
    role: 'Автор "Дисциплинированный трейдер"',
    quote: 'Большинство трейдеров терпят неудачу не из-за плохих стратегий, а из-за плохого самопознания. Только через анализ своих действий и реакций можно построить психологическую дисциплину, необходимую для стабильной прибыли.',
    icon: <UserOutlined style={{ marginRight: '8px' }} />,
  },
  {
    key: '3',
    author: 'Бретт Стинбарджер',
    role: 'Торговый психолог, автор "Психология Трейдинга"',
    quote: 'Данные не лгут. Каждый трейдер должен превратиться в ученого, исследующего собственное поведение на рынке. Без этого все стратегии в мире не помогут достичь стабильного успеха.',
    icon: <UserOutlined style={{ marginRight: '8px' }} />,
  },
];

// Анимационные варианты для Framer Motion
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren", // Анимация дочерних элементов начнется после родительской
      staggerChildren: 0.15,  // Задержка между анимациями каждого дочернего элемента (заголовка, сетки, нижнего параграфа)
    },
  },
};

const titleItemVariants: Variants = { // Для заголовка и параграфов вне сетки
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
}

const gridContainerVariants: Variants = { // Для контейнера сетки (Row)
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Задержка между анимациями карточек
        },
    },
};

const cardItemVariants: Variants = { // Для каждой карточки в сетке
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  },
};


const textHighlightStyleDarkBg: React.CSSProperties = {
    color: '#61DAFB',
    fontWeight: 700,
    padding: '3px 7px',
    backgroundColor: 'rgba(97, 218, 251, 0.15)',
    borderRadius: '4px',
};


const SocialProofSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Секция видна на 10%
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
      variants={sectionVariants} // Анимация для всей секции
      className="section-padding social-proof-section"
      style={{
        //padding: '100px 0',
        backgroundColor: '#0A192F', // Темный фон
        overflow: 'hidden', // Предотвращаем появление полос прокрутки от анимаций
      }}
    >
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>
        <motion.div variants={titleItemVariants}> {/* Анимация для блока заголовка */}
          <Title level={2} style={{ textAlign: 'center', marginBottom: '24px', color: '#FFFFFF' }}>
            Что Объединяет Лучших Трейдеров?
          </Title>
          <Paragraph
            style={{
              textAlign: 'center',
              fontSize: '18px',
              color: '#B0BAC9',
              maxWidth: '800px',
              margin: '0 auto 48px auto',
              lineHeight: '1.7',
            }}
          >
            Да, все они дисциплинированы и последовательны, но есть один элемент, который объединяет многих из них — это привычка вести <span style={textHighlightStyleDarkBg}>ТОРГОВЫЙ ДНЕВНИК</span>.
            <BookOutlined style={{ marginLeft: '10px', fontSize: '22px', color: '#61DAFB', verticalAlign: 'middle' }}/>
          </Paragraph>
        </motion.div>

        {/* Новый блок для цитат в виде грида */}
        <motion.div
          variants={gridContainerVariants} // Анимация для контейнера грида (управляет дочерними)
          // initial и animate наследуются от родительской секции или их можно задать явно
          style={{ marginTop: '60px', marginBottom: '60px' }}
        >
          <Row gutter={[24, 24]} justify="center" align="stretch"> {/* align="stretch" чтобы карточки в ряду были одной высоты */}
            {quotesData.map((quoteItem) => (
              <Col key={quoteItem.key} xs={24} sm={12} md={8} style={{ display: 'flex' }}> {/* Адаптивная сетка */}
                <motion.div
                  variants={cardItemVariants} // Анимация для каждой карточки
                  style={{ width: '100%', display: 'flex' }} // display: 'flex' для растягивания Card
                >
                  <Card
                    bordered={false}
                    className="quote-card-grid-item" // Новый класс для стилизации карточек в гриде
                    style={{
                      width: '100%',
                      height: '100%', // Растягиваем карточку на всю высоту ячейки Col
                      borderRadius: '12px',
                      backgroundColor: 'rgba(17, 24, 39, 0.85)', // Темно-серый, полупрозрачный
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(56, 189, 248, 0.15)',
                      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
                      padding: '28px 24px',
                      display: 'flex',
                      flexDirection: 'column', // Важно для flexGrow и marginTop: 'auto'
                      transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                    }}
                    // Для hover эффекта можно использовать whileHover от Framer Motion или CSS
                    // whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.35)' }}
                  >
                    <CommentOutlined style={{ fontSize: '28px', color: '#61DAFB', marginBottom: '18px', alignSelf: 'flex-start' }} />
                    <Paragraph style={{
                        fontStyle: 'italic',
                        fontSize: '15px',
                        marginBottom: '20px',
                        flexGrow: 1, // Занимает доступное пространство, чтобы подвал был внизу
                        color: '#D1D5DB', // Светлый текст
                        lineHeight: '1.65'
                    }}>
                      {quoteItem.quote}
                    </Paragraph>
                    <div style={{ textAlign: 'right', marginTop: 'auto' }}> {/* marginTop: 'auto' прижимает к низу */}
                      <Text strong style={{
                          color: '#E5E7EB',
                          display: 'inline-flex',
                          alignItems: 'center',
                          fontSize: '14px'
                      }}>
                          {quoteItem.icon} {quoteItem.author}
                      </Text><br/>
                      <Text style={{
                          fontSize: '12px',
                          color: '#9CA3AF'
                      }}>
                          {quoteItem.role}
                      </Text>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div variants={titleItemVariants}> {/* Анимация для заключительного параграфа */}
          <Paragraph style={{ textAlign: 'center', marginTop: '48px', fontSize: '18px', fontWeight: 500, maxWidth: '800px', margin: '48px auto 0 auto', color: '#B0BAC9' }}>
            <span style={{ color: '#61DAFB' }}>UniFlow</span> воплощает эти принципы в жизнь с помощью современных технологий искусственного интеллекта.
            <GlobalOutlined style={{ marginLeft: '10px', fontSize: '20px', color: '#61DAFB', verticalAlign: 'middle' }}/>
          </Paragraph>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SocialProofSection;