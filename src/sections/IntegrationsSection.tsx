// src/sections/IntegrationsSection.tsx
// Версия БЕЗ использования файлов логотипов

import React from 'react';
// Удалили Row и Col из импорта, так как они не используются в этой версии
import { Typography, Tag } from 'antd';

const { Title, Paragraph } = Typography;

const CONTENT_MAX_WIDTH = '1140px';

const integrationsNames = [
  'Тинькофф Инвестиции',
  'СберИнвестор',
  'ВТБ Мои Инвестиции',
  'Финам',
  'БКС Мир Инвестиций',
  
];

const IntegrationsSection: React.FC = () => {
  return (
    <div className="section-padding integrations-section" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>
        Импорт в Один Клик
        </Title>
        <Paragraph style={{ textAlign: 'center', color: '#667085', fontSize: '16px', marginBottom: '56px', maxWidth: '700px', margin: '0 auto 56px auto' }}>
          Мы знаем, как важна экономия времени. Поэтому активно работаем над безопасной интеграцией
          для автоматического импорта истории ваших сделок из популярных брокерских платформ.
        </Paragraph>
        <div style={{ textAlign: 'center' }}>
          {integrationsNames.map((name, index) => (
            <Tag
              key={index}
              color="blue"
              style={{
                  fontSize: '14px',
                  padding: '6px 12px',
                  margin: '8px',
                  opacity: 0.8
              }}
            >
              {name} 
            </Tag>
          ))}
           <Tag style={{ fontSize: '14px', padding: '6px 12px', margin: '8px', opacity: 0.6 }}>
                ... и другие
            </Tag>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;