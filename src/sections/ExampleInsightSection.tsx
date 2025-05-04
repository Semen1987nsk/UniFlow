// src/sections/ExampleInsightSection.tsx
import React from 'react';
import { Row, Col, Typography, Space, Divider } from 'antd';
import { CheckCircleFilled, BulbFilled, WarningFilled } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const CONTENT_MAX_WIDTH = '1140px';
const MOCKUP_FILENAME = 'A1.png'; // Убедитесь, что расширение верное

const listItemStyleNew: React.CSSProperties = {
    marginBottom: '10px',
};
const listIconStyleNew: React.CSSProperties = {
    marginRight: '12px',
    fontSize: '16px',
    color: '#1890ff',
    marginTop: '3px',
};

const ExampleInsightSection: React.FC = () => {
  return (
    <div className="section-padding example-insight-section" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '56px' }}>Увидьте Свои Сделки Глазами ИИ</Title>

        {/* Увеличиваем первое значение gutter */}
        {/* Например, с 48 до 80 (даст по 40px отступа с каждой стороны колонки) */}
        {/* Вы можете выбрать другое значение, например 64, 96 и т.д. */}
        <Row gutter={[80, 40]} /* <-- ИЗМЕНЕНО ЗДЕСЬ */ align="middle">

          {/* Левая Колонка: Мокап */}
          <Col xs={24} md={16}>
              <img
                src={`/images/${MOCKUP_FILENAME}`}
                alt="Пример анализа сделки в UniFlow"
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', display: 'block', objectFit: 'cover', aspectRatio: '16 / 9', background: '#fafafa' }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
          </Col>

          {/* Правая Колонка: Текст */}
          <Col xs={24} md={8}>
            <Space direction="vertical" size={20} style={{ width: '100%' }}>
                {/* Блок Проблемы */}
                <div>
                    <Space align="center" style={{ marginBottom: '8px' }}>
                        <WarningFilled style={{ fontSize: '20px', color: '#faad14' }} />
                        <Title level={4} style={{ margin: 0 }}>Проблема:</Title>
                    </Space>
                    <Paragraph type="secondary" style={{ marginBottom: 0, paddingLeft: '32px' }}>
                        Упущенная Прибыль — 90% сделок закрывается в безубыток.
                    </Paragraph>
                </div>
                {/* Тонкий разделитель */}
                <Divider style={{ margin: '8px 0' }}/>
                {/* Блок Анализа */}
                <div>
                    <Title level={5} style={{ marginBottom: '16px', color: '#434343' }}>
                        Анализ UniFlow показал:
                    </Title>
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                        <Space align="start" style={listItemStyleNew}>
                            <CheckCircleFilled style={listIconStyleNew} />
                            <Text>При этом 75% сделок показывали прибыль 10%-15%, но далее цена откатывалась к уровню стоп-лосса.</Text>
                        </Space>
                        <Space align="start" style={listItemStyleNew}>
                            <CheckCircleFilled style={listIconStyleNew} />
                            <Text>В результате стратегия трейдера оказалась убыточной с просадкой в 9%.</Text>
                        </Space>
                        <Space align="start" style={listItemStyleNew}>
                            <CheckCircleFilled style={listIconStyleNew} />
                            <Text>Причина (комментарии): Стратегия трейдера нацелена на поиск крупных ценовых движений в 30%-50%, но на данный момент почти все сделки закрываются в безубыток.</Text>
                        </Space>
                    </Space>
                </div>
                {/* Тонкий разделитель */}
                <Divider style={{ margin: '8px 0' }}/>
                {/* Блок Рекомендации */}
                <div>
                     <Space align="center" style={{ marginBottom: '8px' }}>
                        <BulbFilled style={{ fontSize: '20px', color: '#1890ff' }} />
                        <Title level={5} style={{ margin: 0, color: '#434343' }}>Рекомендация ИИ:</Title>
                    </Space>
                    <Paragraph style={{ margin: 0, fontSize: '15px', lineHeight: '1.7', paddingLeft: '32px' }}>
                         При достижении прибыли по сделке в 10% зафиксировать 50% позиции, а остальные 50% перенести в безубыток. В результате прибыль по стратегии составила бы 24% за последние 6 месяцев (вместо убытка 9%).
                    </Paragraph>
                </div>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ExampleInsightSection;