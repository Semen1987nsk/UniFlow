// src/sections/SocialProofSection.tsx
import React, { useEffect } from 'react';
import { Typography, Card } from 'antd';
import { CommentOutlined, BookOutlined, GlobalOutlined, UserOutlined } from '@ant-design/icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Импорт Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Импорт Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const { Title, Paragraph, Text } = Typography;

const CONTENT_MAX_WIDTH = '1140px';

const quotesData = [
  {
    key: '1',
    author: 'Александр Элдер',
    role: 'Автор "Как играть и выигрывать на бирже"',
    quote: 'Хороший трейдер знает, что деньги делаются не на количестве сделок, а на качестве анализа. Систематический анализ собственных сделок - это то, что отличает профессионалов от любителей.',
    icon: <UserOutlined style={{ marginRight: '6px' }} />,
  },
  {
    key: '2',
    author: 'Марк Дуглас',
    role: 'Автор "Дисциплинированный трейдер"',
    quote: 'Большинство трейдеров терпят неудачу не из-за плохих стратегий, а из-за плохого самопознания. Только через анализ своих действий и реакций можно построить психологическую дисциплину, необходимую для стабильной прибыли.',
    icon: <UserOutlined style={{ marginRight: '6px' }} />,
  },
  {
    key: '3',
    author: 'Бретт Стинбарджер',
    role: 'Торговый психолог, автор "Психология Трейдинга"',
    quote: 'Данные не лгут. Каждый трейдер должен превратиться в ученого, исследующего собственное поведение на рынке. Без этого все стратегии в мире не помогут достичь стабильного успеха.',
    icon: <UserOutlined style={{ marginRight: '6px' }} />,
  },
];

// Анимационные варианты для Framer Motion
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
};

// Стиль для подсветки текста "ТОРГОВЫЙ ДНЕВНИК" (на темном фоне секции)
const textHighlightStyleDarkBg: React.CSSProperties = {
    color: '#61DAFB', // Яркий голубой акцент
    fontWeight: 700,
    padding: '3px 7px',
    backgroundColor: 'rgba(97, 218, 251, 0.15)',
    borderRadius: '4px',
};


const SocialProofSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
      variants={sectionVariants}
      className="section-padding social-proof-section" 
      style={{
        padding: '100px 0',
        backgroundColor: '#0A192F', // Темный фон всей секции
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>
        <motion.div variants={itemVariants}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '24px', color: '#FFFFFF' }}>
            Что Объединяет Лучших Трейдеров?
          </Title>
          <Paragraph
            style={{
              textAlign: 'center',
              fontSize: '18px',
              color: '#B0BAC9', // Светло-серый для подзаголовка на темном фоне
              maxWidth: '800px',
              margin: '0 auto 48px auto',
              lineHeight: '1.7',
            }}
          >
            Да, все они дисциплинированы и последовательны, но есть один элемент, который объединяет многих из них — это привычка вести <span style={textHighlightStyleDarkBg}>ТОРГОВЫЙ ДНЕВНИК</span>.
            <BookOutlined style={{ marginLeft: '10px', fontSize: '22px', color: '#61DAFB', verticalAlign: 'middle' }}/>
          </Paragraph>
        </motion.div>

        <motion.div variants={itemVariants} style={{ marginTop: '60px', marginBottom: '60px' }}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'} 
            loop={true}
            autoplay={{
              delay: 9000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true, // Оставляем тени для coverflow эффекта
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="quotes-swiper" 
            style={{ padding: '30px 0' }}
          >
            {quotesData.map((quoteItem) => (
              <SwiperSlide key={quoteItem.key} className="quote-swiper-slide"> 
                <Card
                  bordered={false} // Убираем стандартную рамку AntD
                  style={{
                    width: '100%', 
                    height: '100%',
                    borderRadius: '12px', // Стандартное скругление для светлых карточек
                    backgroundColor: '#FFFFFF', // СВЕТЛЫЙ ФОН КАРТОЧКИ
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)', // Мягкая тень для светлых карточек
                    padding: '30px', 
                    display: 'flex',
                    flexDirection: 'column',
                    // border: '1px solid #E8E8E8', // Можно добавить очень легкую серую рамку, если нужно
                  }}
                >
                  <CommentOutlined style={{ fontSize: '32px', color: '#1890ff', marginBottom: '20px', alignSelf: 'flex-start' }} />
                  <Paragraph style={{ 
                      fontStyle: 'italic', 
                      fontSize: '16px', // Стандартный размер
                      marginBottom: '24px', 
                      flexGrow: 1, 
                      color: '#344054',  // ТЕМНЫЙ ТЕКСТ ЦИТАТЫ
                      lineHeight: '1.65' 
                  }}>
                    {quoteItem.quote}
                  </Paragraph>
                  <div style={{ textAlign: 'right', marginTop: 'auto' }}>
                    <Text strong style={{ 
                        color: '#101828', // ТЕМНЫЙ ТЕКСТ ИМЕНИ АВТОРА
                        display: 'inline-flex', 
                        alignItems: 'center',
                        fontSize: '15px' 
                    }}> 
                        {quoteItem.icon} {quoteItem.author}
                    </Text><br/>
                    <Text style={{ 
                        fontSize: '13px', 
                        color: '#595959'  // СЕРЫЙ ТЕКСТ РОЛИ
                    }}> 
                        {quoteItem.role}
                    </Text>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Paragraph style={{ textAlign: 'center', marginTop: '48px', fontSize: '18px', fontWeight: 500, maxWidth: '800px', margin: '48px auto 0 auto', color: '#B0BAC9' /* Светло-серый на темном фоне секции */ }}>
            <span style={{ color: '#61DAFB' /* Яркий акцент на темном фоне */ }}>UniFlow</span> воплощает эти принципы в жизнь с помощью современных технологий искусственного интеллекта.
            <GlobalOutlined style={{ marginLeft: '10px', fontSize: '20px', color: '#61DAFB', verticalAlign: 'middle' }}/>
          </Paragraph>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SocialProofSection;