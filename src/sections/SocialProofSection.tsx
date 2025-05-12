// src/sections/SocialProofSection.tsx
import React from 'react';
import { Row, Col, Card, Typography, Divider } from 'antd'; // Добавляем Divider
import { CommentOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const CONTENT_MAX_WIDTH = '1140px'; // Используем новую ширину

// Данные для цитат (оставляем только цитату, автора и роль)
const quotesData = [
  {
    key: '1',
    author: 'Александр Элдер',
    role: 'Автор "Как играть и выигрывать на бирже"',
    quote: 'Хороший трейдер знает, что деньги делаются не на количестве сделок, а на качестве анализа. Систематический анализ собственных сделок - это то, что отличает профессионалов от любителей.',
  },
  {
    key: '2',
    author: 'Марк Дуглас',
    role: 'Автор "Дисциплинированный трейдер"',
    quote: 'Большинство трейдеров терпят неудачу не из-за плохих стратегий, а из-за плохого самопознания. Только через анализ своих действий и реакций можно построить психологическую дисциплину, необходимую для стабильной прибыли.',
  },
  {
    key: '3',
    author: 'Бретт Стинбарджер',
    role: 'Торговый психолог, автор "Психология Трейдинга"',
    quote: 'Данные не лгут. Каждый трейдер должен превратиться в ученого, исследующего собственное поведение на рынке. Без этого все стратегии в мире не помогут достичь стабильного успеха.',
  },
];

// Стиль для карточки цитаты
const quoteCardStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    borderRadius: '12px',
    // Убираем тень и рамку, делаем акцент на тексте
    boxShadow: 'none',
    border: 'none',
    // borderLeft: '4px solid #e6f7ff', // Можно добавить легкую полоску слева
    background: 'transparent', // Прозрачный фон
    padding: '16px 0', // Вертикальные отступы
    display: 'flex',
    flexDirection: 'column',
};

const SocialProofSection: React.FC = () => {
  return (
    // Секция с белым фоном
    <div className="section-padding social-proof-section" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>

        {/* Вводный текст */}
        <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>
          Что Объединяет Лучших Трейдеров?
        </Title>
        <Paragraph style={{ textAlign: 'center', fontSize: '18px', color: '#475467', maxWidth: '800px', margin: '0 auto 40px auto' }}>
          Да, все они дисциплинированы и последовательны, но есть один элемент, который объединяет многих из них — это привычка вести <Text strong>ТОРГОВЫЙ ДНЕВНИК</Text>.
        </Paragraph>

        <Divider /> {/* Разделитель */}

        {/* Блок с цитатами */}
        <Row gutter={[48, 32]} justify="center" style={{ marginTop: '40px' }}>
          {quotesData.map((quoteItem) => (
            <Col key={quoteItem.key} xs={24} md={8} style={{ display: 'flex' }}>
              <Card style={quoteCardStyle}>
                <Paragraph style={{ fontStyle: 'italic', fontSize: '16px', marginBottom: '20px', flexGrow: 1, position: 'relative', paddingLeft: '35px', color: '#344054' }}>
                  <CommentOutlined style={{ position: 'absolute', left: 0, top: '4px', fontSize: '24px', color: '#d9d9d9' }} />
                  {quoteItem.quote}
                </Paragraph>
                <div style={{ textAlign: 'right', marginTop: 'auto' }}>
                  <Text strong>{quoteItem.author}</Text><br/>
                  <Text type="secondary" style={{ fontSize: '13px' }}>{quoteItem.role}</Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Divider style={{ marginTop: '40px' }}/> {/* Разделитель */}

        {/* Заключительный текст */}
        <Paragraph style={{ textAlign: 'center', marginTop: '40px', fontSize: '18px', fontWeight: 500, maxWidth: '800px', margin: '40px auto 0 auto' }}>
          <span style={{ color: '#1890ff' }}>UniFlow</span> воплощает эти принципы в жизнь с помощью современных технологий искусственного интеллекта.
        </Paragraph>

      </div>
    </div>
  );
};

export default SocialProofSection;