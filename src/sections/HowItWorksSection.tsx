// src/sections/HowItWorksSection.tsx
import React from 'react';
import { Row, Col, Card, Typography,} from 'antd';
// Убираем CheckCircleTwoTone, добавляем BulbOutlined
import { BulbOutlined } from '@ant-design/icons';

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

// Стиль для иконки инсайта в списке
const insightIconStyle: React.CSSProperties = {
    color: '#1890ff', // Синий цвет
    marginRight: '10px',
    fontSize: '16px', // Чуть крупнее маркера
    verticalAlign: 'middle', // Выравнивание по центру строки
};

// Данные шагов
const stepsData = [
    {
      key: '1',
      title: 'Умный Анализ Данных',
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
            Получайте конкретные советы, основанные на <Text strong>вашем</Text> уникальном стиле:
          </Paragraph>
          {/* Используем неупорядоченный список ul/li для семантики */}
          <ul style={{ listStyle: 'none', paddingLeft: 0, textAlign: 'left' }}>
              <li style={{ marginBottom: '10px' }}>
                  <BulbOutlined style={insightIconStyle} />
                  <Text>
                      "Увеличьте TP на <Text strong>25%</Text> для 'Пробоя уровня' (упущено <Text strong>68%</Text> прибыли)."
                  </Text>
              </li>
              <li style={{ marginBottom: '10px' }}>
                  <BulbOutlined style={insightIconStyle} />
                  <Text>
                      "Сократите объем в <Text strong>14:00-15:30 МСК</Text> (<Text strong>83%</Text> убытков в это время)."
                  </Text>
              </li>
              <li style={{ marginBottom: '10px' }}>
                  <BulbOutlined style={insightIconStyle} />
                  <Text>
                      "Следуйте правилам 'Отбоя от EMA' (<Text strong>+37%</Text> к винрейту)."
                  </Text>
              </li>
          </ul>
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