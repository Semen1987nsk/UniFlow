// src/sections/FeaturesSection.tsx
import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { LineChartOutlined, ExperimentOutlined, SafetyCertificateOutlined, BulbOutlined, SolutionOutlined, BarChartOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

// Максимальная ширина контента
const CONTENT_MAX_WIDTH = '1140px';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const iconColor = '#1890ff';
const iconStyle: React.CSSProperties = { fontSize: '42px', color: iconColor };

const featuresData: Feature[] = [
  { icon: <BarChartOutlined style={iconStyle} />, title: 'Глубокий Анализ Сделок', description: 'Выявляйте скрытые закономерности и понимайте реальные причины ваших прибылей и убытков.' },
  { icon: <ExperimentOutlined style={iconStyle} />, title: 'Оценка Стратегий', description: 'Узнайте, какие торговые сетапы и стратегии действительно работают конкретно для вас.' },
  { icon: <SafetyCertificateOutlined style={iconStyle} />, title: 'Анализ Риск-Менеджмента', description: 'Оптимизируйте размер позиций, стоп-лоссы и соотношение риска к прибыли для стабильного роста.' },
  { icon: <SolutionOutlined style={iconStyle} />, title: 'Поведенческие Паттерны', description: 'Обнаруживайте влияние эмоций (FOMO, FUD) на ваши решения и учитесь их контролировать.' },
  { icon: <BulbOutlined style={iconStyle} />, title: 'Персональные Рекомендации', description: 'Получайте конкретные, основанные на данных советы, адаптированные под ваш уникальный стиль торговли.' },
  { icon: <LineChartOutlined style={iconStyle} />, title: 'Наглядная Статистика', description: 'Отслеживайте свой прогресс с помощью понятных графиков и ключевых метрик эффективности.' },
];

const FeaturesSection: React.FC = () => {
  return (
    // Внешний div
    <div className="section-padding features-section-outer" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
       {/* Внутренний div */}
       <div className="features-section-inner" style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '56px' }}>
          Раскройте Весь Потенциал UniFlow
        </Title>
        <Row gutter={[32, 32]} justify="center">
          {featuresData.map((feature, index) => (
            <Col key={index} xs={24} sm={12} lg={8} style={{ display: 'flex' }}>
              <Card bordered={false} style={{ width: '100%', height: '100%', textAlign: 'center', borderRadius: '12px', boxShadow: '0 5px 20px rgba(16, 24, 40, 0.05)' }} className="feature-card">
                <div className="feature-icon" style={{ marginBottom: '16px' }}>
                  {feature.icon}
                </div>
                <Title level={4} style={{ marginBottom: '8px' }}>{feature.title}</Title>
                <Paragraph style={{color: '#475467'}}>{feature.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FeaturesSection;