// src/sections/ExampleInsightSection.tsx (Стильный текстовый вариант)
import React from 'react';
import {  Typography, Card, Divider } from 'antd';
import {
    WarningFilled, // Для проблемы
    BarChartOutlined, // Для анализа
    BulbFilled, // Для рекомендации
    ArrowRightOutlined, // Для пунктов анализа    
    FallOutlined // Для негативного аспекта
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const CONTENT_MAX_WIDTH = '800px'; // Оставляем немного уже для лучшей читаемости текста

const headerIconStyle: React.CSSProperties = { fontSize: '24px', marginRight: '12px' };
const listItemIconStyle: React.CSSProperties = { fontSize: '16px', color: '#1890ff', marginRight: '8px' };

const ExampleInsightSection: React.FC = () => {
  return (
    <div className="section-padding example-insight-section" style={{ padding: '80px 0', backgroundColor: '#f0f2f5' /* Очень светлый фон */ }}>
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '32px' }}>
          Превратите Данные в Действие с UniFlow
        </Title>
        <Paragraph style={{ textAlign: 'center', fontSize: '16px', color: '#595959', marginBottom: '56px', maxWidth: '700px', margin: '0 auto 56px auto' }}>
          Посмотрите, как наш ИИ-анализ помогает выявить скрытые проблемы и найти точки роста на конкретном примере:
        </Paragraph>

        <Card
          bordered={false}
          style={{
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
            padding: '32px', // Внутренний паддинг карты
          }}
        >
          {/* Блок Проблемы */}
          <div style={{ marginBottom: '24px' }}>
            <Title level={4} style={{ display: 'flex', alignItems: 'center', color: '#d46b08' /* Темно-оранжевый */ }}>
              <WarningFilled style={{ ...headerIconStyle, color: '#faad14' }} />
              Обнаружена Проблема:
            </Title>
            <Paragraph style={{ fontSize: '16px', marginLeft: '36px', color: '#595959' }}>
              <Text strong>Упущенная Прибыль</Text> — 90% сделок закрывается в безубыток.
            </Paragraph>
          </div>

          <Divider style={{ margin: '28px 0' }} />

          {/* Блок Анализа */}
          <div style={{ marginBottom: '28px' }}>
            <Title level={4} style={{ display: 'flex', alignItems: 'center', color: '#0958d9' /* Темно-синий */ }}>
              <BarChartOutlined style={{ ...headerIconStyle, color: '#1890ff' }} />
              Ключевые Наблюдения UniFlow:
            </Title>
            <ul style={{ listStyle: 'none', paddingLeft: '36px', marginTop: '16px' }}>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                <FallOutlined style={{ ...listItemIconStyle, color: '#cf1322' /* Красный */, marginTop: '4px' }} />
                <Text style={{ color: '#595959' }}>
                  <Text strong>: 75% </Text>  совершенных сделок показывали в моменте прибыль <Text strong>+10-15%,</Text> но в итоге закрывались, откатываясь к стоп-лоссу.
                </Text>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                <FallOutlined style={{ ...listItemIconStyle, color: '#cf1322', marginTop: '4px' }} />
                <Text style={{ color: '#595959' }}>
                  <Text strong>Результат стратегии:</Text> Итоговая просадка <Text strong>-9%</Text>
                </Text>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                <ArrowRightOutlined style={{ ...listItemIconStyle, marginTop: '4px' }} />
                <Text style={{ color: '#595959' }}>
                  <Text strong>Основная причина:</Text> Стратегия была нацелена на поиск очень крупных движений (30-50%), что редко реализовывалось на текущем рынке.
                </Text>
              </li>
            </ul>
          </div>

          <Divider style={{ margin: '28px 0' }} />

          {/* Блок Рекомендации */}
          <div>
            <Title level={4} style={{ display: 'flex', alignItems: 'center', color: '#08979c' /* Бирюзовый */ }}>
              <BulbFilled style={{ ...headerIconStyle, color: '#13c2c2' }} />
              Персональная Рекомендация ИИ:
            </Title>
            <div style={{
              background: 'linear-gradient(135deg, #e6fffb 0%, #f6ffed 100%)', // Светло-зелено-бирюзовый градиент
              borderLeft: '5px solid #52c41a', // Зеленая полоска
              padding: '20px',
              borderRadius: '8px',
              marginTop: '16px',
              marginLeft: '36px'
            }}>
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', margin: 0, color: '#237804' /* Темно-зеленый текст */ }}>
                "При достижении прибыли по сделке в <Text strong>+10%</Text>, рекомендуется фиксировать <Text strong>50%</Text> позиции, а стоп-лосс по оставшейся части переносить в безубыток.
                Применение этой тактики к вашей истории сделок показало бы <Text strong style={{ color: '#389e0d' }}>прибыль +24%</Text> за последние 6 месяцев вместо текущего убытка <Text strong style={{ color: '#a8071a' }}>-9%</Text>."
              </Paragraph>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ExampleInsightSection;