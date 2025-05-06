// src/sections/HeaderSection.tsx
import React from 'react';
import { Layout, Button } from 'antd';

const { Header } = Layout;

// Используем ту же ширину, что и в других секциях
const CONTENT_MAX_WIDTH = '1140px';

const HeaderSection: React.FC = () => {
  return (
    <Header style={{
      display: 'flex', // Оставляем flex для выравнивания внутреннего div по вертикали
      alignItems: 'center', // Выравниваем внутренний div по центру вертикали
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #f0f0f0',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      width: '100%',
      padding: '0', // Убираем стандартный padding у Header
      // Высота будет управляться через CSS для адаптивности
    }}>
       {/* Добавляем класс header-content-wrapper */}
       <div className="header-content-wrapper" style={{
           display: 'flex',
           // justifyContent и alignItems будут управляться через CSS для адаптивности
           width: '100%',
           maxWidth: CONTENT_MAX_WIDTH,
           margin: '0 auto',
           padding: '0 20px', // Боковые отступы
           // height: '100%', // Управляется через CSS
       }}>
          <div className="logo" style={{ color: '#1890ff', fontWeight: 'bold', fontSize: '22px', fontFamily: "'Poppins', sans-serif"}}>UniFlow</div>
          <Button type="primary" href="#cta-form">
            Получить ранний доступ
          </Button>
      </div>
    </Header>
  );
};

export default HeaderSection;