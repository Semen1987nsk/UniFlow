// src/sections/ComparisonSection.tsx
import React from 'react';
import { Row, Col, Typography } from 'antd';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';

const { Title, Text } = Typography; // Используем Text для описаний

const CONTENT_MAX_WIDTH = '1140px'; // Используем новую ширину

// Обновленные данные для таблицы сравнения с вашим текстом
const comparisonData = [
    {
        key: '1',
        feature: 'ИИ-Анализ паттернов',
        productDesc: 'Автоматический, выявляет неочевидные связи',
        excelDesc: 'Требует ручных вычислений и статистических знаний',
        iconProduct: <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '18px' }} />, // Чуть увеличим иконку
        iconExcel: <CloseCircleTwoTone twoToneColor="#eb2f96" style={{ fontSize: '18px' }} />
    },
    {
        key: '2',
        feature: 'Персональные рекомендации',
        productDesc: 'Основаны на вашей личной статистике и психологии',
        excelDesc: 'Отсутствуют или требуют консультации эксперта',
        iconProduct: <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '18px' }} />,
        iconExcel: <CloseCircleTwoTone twoToneColor="#eb2f96" style={{ fontSize: '18px' }} />
    },
    {
        key: '3',
        feature: 'Временные затраты',
        productDesc: 'Минуты на получение глубокого анализа',
        excelDesc: 'Часы на базовую аналитику, дни на глубокий анализ',
        iconProduct: <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '18px' }} />,
        iconExcel: <CloseCircleTwoTone twoToneColor="#eb2f96" style={{ fontSize: '18px' }} />
    },
    {
        key: '4',
        feature: 'Анализ эмоциональных факторов',
        productDesc: 'Объективное определение эмоциональных искажений',
        excelDesc: 'Субъективная самооценка, склонная к самообману',
        iconProduct: <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '18px' }} />,
        iconExcel: <CloseCircleTwoTone twoToneColor="#eb2f96" style={{ fontSize: '18px' }} />
    },
    {
        key: '5',
        feature: 'Удобство использования',
        productDesc: 'Интуитивный интерфейс, мобильный доступ',
        excelDesc: 'Сложные формулы, громоздкие таблицы',
        iconProduct: <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '18px' }} />,
        iconExcel: <CloseCircleTwoTone twoToneColor="#eb2f96" style={{ fontSize: '18px' }} />
    },
    {
        key: '6',
        feature: 'Прогнозирование результатов',
        productDesc: 'Моделирование будущих результатов на основе корректировок',
        excelDesc: 'Ограниченные возможности прогнозирования',
        iconProduct: <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '18px' }} />,
        iconExcel: <CloseCircleTwoTone twoToneColor="#eb2f96" style={{ fontSize: '18px' }} />
    },
];

const ComparisonSection: React.FC = () => {
    return (
        <div className="section-padding comparison-section" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '56px' }}>
              UniFlow vs Ручной Анализ: В Чем Разница?
            </Title>

            <div style={{ border: '1px solid #f0f0f0', borderRadius: '12px', overflow: 'hidden', background: '#fff', boxShadow: '0 5px 20px rgba(16, 24, 40, 0.05)' }}>
              {/* Заголовочный ряд */}
              <Row gutter={0} style={{ backgroundColor: '#fafafa', padding: '16px 0', textAlign: 'center', borderBottom: '1px solid #f0f0f0' }}>
                {/* Уменьшаем долю первой колонки, увеличиваем две другие */}
                <Col xs={7} md={6} style={{ fontWeight: 600, padding: '0 10px' }}>Возможность</Col>
                <Col xs={9} md={9} style={{ fontWeight: 600, padding: '0 10px' }}>UniFlow</Col>
                <Col xs={8} md={9} style={{ fontWeight: 600, padding: '0 10px' }}>Excel / Журнал</Col>
              </Row>

              {/* Ряды для каждой фичи */}
              {comparisonData.map((item, index) => (
                <Row
                  key={item.key}
                  gutter={0}
                  align="top" // Выравниваем по верху, т.к. текст может быть разной высоты
                  style={{
                    textAlign: 'left', // Выравниваем текст по левому краю в ячейках
                    borderBottom: index === comparisonData.length - 1 ? 'none' : '1px solid #f0f0f0',
                    padding: '20px 0' // Вертикальные отступы для строк
                  }}
                >
                  {/* Колонка Возможность */}
                  <Col xs={7} md={6} style={{ padding: '0 10px 0 20px', fontWeight: 500 }}>
                    {item.feature}
                  </Col>
                  {/* Колонка UniFlow */}
                  <Col xs={9} md={9} style={{ padding: '0 10px', display: 'flex', alignItems: 'flex-start' }}> {/* Используем flex для иконки и текста */}
                    <span style={{ marginRight: '8px', marginTop: '3px' }}>{item.iconProduct}</span> {/* Иконка */}
                    <Text type="secondary">{item.productDesc}</Text> {/* Описание */}
                  </Col>
                  {/* Колонка Excel / Журнал */}
                  <Col xs={8} md={9} style={{ padding: '0 10px', display: 'flex', alignItems: 'flex-start' }}>
                     <span style={{ marginRight: '8px', marginTop: '3px' }}>{item.iconExcel}</span>
                     <Text type="secondary">{item.excelDesc}</Text>
                  </Col>
                </Row>
              ))}
            </div>
          </div>
        </div>
    );
};

export default ComparisonSection;