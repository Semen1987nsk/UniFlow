// src/sections/HeroSection.tsx
import React from 'react';
import { Row, Col, Typography, Button } from 'antd';

const { Title } = Typography;

const CONTENT_MAX_WIDTH = '1140px';

const HeroSection: React.FC = () => {
  return (
    <div className="section-padding hero-section" style={{ padding: '100px 0 80px 0', backgroundColor: '#fff', textAlign: 'center' }}>
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>
        <Row justify="center">
          <Col xs={24} md={22}>
            <Title level={1} style={{ marginBottom: '24px', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}>
              Прекратите терять деньги на эмоциях и догадках
            </Title>
            <Title level={3} style={{ color: '#475467', fontWeight: '400', marginBottom: '40px', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', lineHeight: '1.5' }}>
              UniFlow — ваш удобный ТОРГОВЫЙ ДНЕВНИК сделок. Найдите скрытые ошибки, улучшите стратегию и торгуйте увереннее.
            </Title>
            <Button type="primary" size="large" href="#cta-form" style={{ padding: '0 32px', height: '48px', fontSize: '16px' }}>
              Получить ранний доступ 
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroSection;