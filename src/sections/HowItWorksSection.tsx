// src/sections/HowItWorksSection.tsx
import React from 'react';
import { Row, Col, Card, Typography} from 'antd';
// Убрали BulbOutlined, так как он не используется
//import { CheckCircleTwoTone } from '@ant-design/icons'; // Оставляем только нужные

const { Title, Paragraph, Text } = Typography;

const CONTENT_MAX_WIDTH = '1140px';

const stepCardStyleMinimal: React.CSSProperties = {
    width: '100%',
    height: '100%',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f0f0f0',
    padding: '32px 28px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    background: '#fff',
};

const stepNumberLargeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    left: '28px',
    fontSize: '64px',
    fontWeight: 700,
    color: '#1890ff',
    lineHeight: 1,
    zIndex: 1,
    opacity: 0.9,
};

// УДАЛЕНА КОНСТАНТА insightIconStyle, так как она не используется

// Данные шагов
const stepsData = [
    {
      key: '1',
      title: 'Записывайте сделки в журнал', // Ваш новый заголовок
      content: (
        <Paragraph type="secondary" style={{ textAlign: 'left' }}>
          Просто введите данные о сделке. UniFlow автоматически выявит скрытые закономерности, определит лучшие настройки риск-менеджмента, оптимальное время удержания и самые прибыльные для <Text strong>вас</Text> стратегии.
        </Paragraph>
      )
    },
    {
      key: '2',
      title: 'Персональные Рекомендации',
      content: (
        <>
          <Paragraph type="secondary" style={{ textAlign: 'left', marginBottom: '16px' }}>
            Получайте конкретные советы, основанные на <Text strong>вашем</Text> уникальном стиле.
          </Paragraph>
         
        </>
      )
    },
    {
      key: '3',
      title: 'Контроль Эмоций',
      content: (
         <Paragraph type="secondary" style={{ textAlign: 'left' }}>
           UniFlow выявляет влияние эмоциональных триггеров на ваши решения. Анализ комментариев и результатов поможет трансформировать деструктивные паттерны в осознанную, дисциплинированную торговлю.
        </Paragraph>
      )
    }
];


const HowItWorksSection: React.FC = () => {
  return (
    <div className="section-padding how-it-works-section" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '64px' }}>
          Как UniFlow Превращает Данные в Прибыль?
        </Title>
        <Row gutter={[32, 32]} justify="center" align="stretch">
          {stepsData.map((step, index) => (
            <Col key={step.key} xs={24} sm={12} md={8} style={{ display: 'flex' }}>
              <Card style={stepCardStyleMinimal}>
                 <div style={stepNumberLargeStyle}>0{index + 1}</div>
                 <div style={{ paddingTop: '60px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Title level={4} style={{ marginBottom: '16px', textAlign: 'left' }}>{step.title}</Title>
                    <div style={{ flexGrow: 1 }}>
                         {step.content}
                    </div>
                 </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HowItWorksSection;