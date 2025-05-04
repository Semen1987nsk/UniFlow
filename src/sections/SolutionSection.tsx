// src/sections/SolutionSection.tsx
import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const CONTENT_MAX_WIDTH = '1140px';
const SOLUTION_IMAGE_FILENAME = 'EMBLEMA.png'; // Убедитесь, что имя файла верное

const SolutionSection: React.FC = () => {
  return (
    <div className="section-padding solution-section" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>
        <Row gutter={[64, 40]} align="middle">
          {/* Левая Колонка: Изображение */}
          <Col xs={24} md={12}>
             <img
                src={`/images/${SOLUTION_IMAGE_FILENAME}`}
                alt="Интерфейс UniFlow для анализа сделок"
                style={{
                    // --- ИЗМЕНЕНИЯ ЗДЕСЬ ---
                    maxWidth: '70%', // Ограничиваем максимальную ширину до 70% от родителя (колонки)
                    width: '100%',    // Позволяем ему быть меньше 70% на маленьких экранах, если нужно
                    margin: '0 auto', // Центрируем изображение по горизонтали
                    // --- Остальные стили ---
                    display: 'block',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                }}
                onError={(e) => {
                    console.error("Failed to load solution image:", (e.target as HTMLImageElement).src);
                    (e.target as HTMLImageElement).style.display = 'none';
                }}
             />
          </Col>
          {/* Правая Колонка: Текст */}
          <Col xs={24} md={12}>
            <Title level={2} style={{marginBottom: '24px'}}>UniFlow: Ваш Умный Помощник</Title>
            <Paragraph style={{ fontSize: '17px', marginBottom: '16px' }}>
              Просто ведите дневник сделок, указывая ключевые параметры: точки входа/выхода, стопы, тейки, причины и даже эмоции. UniFlow сделает сложную работу за вас.
            </Paragraph>
             <Paragraph strong style={{ fontSize: '17px', lineHeight: '1.6' }}>
                Наш ИИ проанализирует ваши данные, выявит закономерности, покажет эффективность стратегий и даст <span style={{color: '#1890ff'}}>конкретные рекомендации</span> по улучшению результатов.
             </Paragraph>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SolutionSection;