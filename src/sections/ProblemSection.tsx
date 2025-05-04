// src/sections/ProblemSection.tsx
import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
// Можно добавить иконки для наглядности, если хотите
// import { MehOutlined, RiseOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

// Максимальная ширина контента
const CONTENT_MAX_WIDTH = '1140px';

const ProblemSection: React.FC = () => {
  return (
    <div className="section-padding problem-section" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '56px' }}>С чем сталкиваются трейдеры?</Title>
        {/* Карточки проблем здесь сделаны без фона и тени через App.css */}
        {/* Убедитесь, что стили для .problem-section .ant-card или .problem-card есть в App.css */}
        <Row gutter={[32, 40]} justify="center" style={{ textAlign: 'center' }}>
          <Col xs={24} sm={12} md={8}>
             <Card bordered={false} className="problem-card">
                {/* <MehOutlined style={{ fontSize: '40px', color: '#faad14', marginBottom: '16px' }} /> */}
                <Title level={4} style={{ marginTop: '16px' }}>Сделки на эмоциях?</Title>
                <Paragraph>Часто входите слишком рано или выходите слишком поздно, поддавшись страху или жадности?</Paragraph>
             </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} className="problem-card">
                {/* <RiseOutlined style={{ fontSize: '40px', color: '#f5222d', marginBottom: '16px' }} /> */}
                <Title level={4} style={{ marginTop: '16px' }}>Стратегия не работает?</Title>
                <Paragraph>Сложно понять, какие именно элементы вашей торговой системы приносят убытки?</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
             <Card bordered={false} className="problem-card">
                {/* <ClockCircleOutlined style={{ fontSize: '40px', color: '#1890ff', marginBottom: '16px' }} /> */}
                <Title level={4} style={{ marginTop: '16px' }}>Не хватает времени на анализ?</Title>
                <Paragraph>Ручной разбор сотен сделок отнимает часы, которые можно потратить на поиск новых возможностей?</Paragraph>
             </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProblemSection;