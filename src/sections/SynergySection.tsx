// src/sections/SynergySection.tsx
import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
// Более технологичные иконки + иконка плюса
import {EditOutlined, PlusOutlined, ThunderboltOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const CONTENT_MAX_WIDTH = '1140px'; // Используем новую ширину

// Стили для карточек
const cardStyle: React.CSSProperties = {
    width: '100%',
    height: '100%', // Для выравнивания высоты
    borderRadius: '16px', // Более скругленные углы
    padding: '32px', // Увеличим внутренний отступ
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)', // Чуть заметнее тень
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Центрируем иконку и заголовок
    textAlign: 'center', // Центрируем текст по умолчанию
};

// Стили для иконок в карточках
const cardIconStyle: React.CSSProperties = {
    fontSize: '48px', // Крупнее иконка
    color: '#1890ff',
    marginBottom: '20px',  // Тестовый комментарий для Git
};

const SynergySection: React.FC = () => {
  return (
    // Используем градиентный фон или можно изображение
    <div className="section-padding synergy-section" style={{
        padding: '100px 0', // Увеличим вертикальные отступы
        // Пример градиента (подберите цвета под ваш стиль)
        background: 'linear-gradient(135deg, #f5f7fa 0%, #eef2f7 100%)',
        overflow: 'hidden', // На случай вылезающих элементов
        position: 'relative', // Для позиционирования плюса
    }}>
      {/* Можно добавить абстрактные фоновые элементы для стиля */}
      {/* <div style={{ position: 'absolute', top: '10%', left: '5%', width: '100px', height: '100px', background: 'rgba(24, 144, 255, 0.05)', borderRadius: '50%', filter: 'blur(20px)' }}></div> */}
      {/* <div style={{ position: 'absolute', bottom: '15%', right: '8%', width: '150px', height: '150px', background: 'rgba(82, 196, 26, 0.05)', borderRadius: '50%', filter: 'blur(30px)' }}></div> */}

      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '64px' /* Увеличим отступ */ }}>
          Сила Дневника Сделок + Разум ИИ = Ваше Торговое Преимущество
        </Title>

        {/* Используем Row с align="stretch", чтобы колонки растянулись по высоте */}
        <Row gutter={[40, 40]} justify="center" align="stretch">

          {/* Левая Колонка: Ценность Дневника */}
          <Col xs={24} md={10} style={{ display: 'flex' }}>
            <Card style={cardStyle}>
              <EditOutlined style={cardIconStyle} /> {/* Иконка редактирования/записи */}
              <Title level={4} style={{ marginBottom: '16px' }}>Проверенный Фундамент</Title>
              <Paragraph style={{ color: '#475467', flexGrow: 1 /* Растягиваем параграф */ }}>
                Ведение торгового журнала — золотой стандарт дисциплины. Он помогает отслеживать сделки, анализировать базовые ошибки и формировать системный подход. Но ручной анализ требует времени и часто упускает скрытые детали.
              </Paragraph>
            </Card>
          </Col>

          {/* Иконка Плюса между колонками (видна на md и выше) */}
          <Col xs={0} md={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <PlusOutlined style={{ fontSize: '40px', color: '#bfbfbf' }} />
          </Col>

          {/* Правая Колонка: Мощь ИИ UniFlow */}
          <Col xs={24} md={10} style={{ display: 'flex' }}>
             <Card style={cardStyle}>
               <ThunderboltOutlined style={cardIconStyle} /> {/* Иконка молнии/ускорения/ИИ */}
               <Title level={4} style={{ marginBottom: '16px' }}>Технологический Прорыв</Title>
               <Paragraph style={{ color: '#475467', flexGrow: 1 }}>
                 UniFlow усиливает дневник мощью ИИ. Наш алгоритм проникает глубже цифр, выявляя неочевидные закономерности в ваших действиях, эмоциях и рыночных условиях, которые невозможно заметить вручную.
               </Paragraph>
             </Card>
          </Col>
        </Row>

        {/* Объединяющий Вывод */}
        <Paragraph style={{ textAlign: 'center', marginTop: '64px', fontSize: '18px', fontWeight: 500, maxWidth: '800px', margin: '64px auto 0 auto' }}>
          <span style={{ color: '#1890ff' }}>Результат?</span> Не просто записи, а <span style={{ fontWeight: 600 }}>персональная дорожная карта</span> к стабильной прибыли, основанная на глубоком понимании <span style={{ fontStyle: 'italic' }}>вашего</span> уникального стиля торговли и объективных данных.
        </Paragraph>
      </div>
    </div>
  );
};

export default SynergySection;