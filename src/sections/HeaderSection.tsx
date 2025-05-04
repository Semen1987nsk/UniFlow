// src/sections/HeaderSection.tsx
import React from 'react';
import { Layout, Button } from 'antd';

const { Header } = Layout;

// Максимальная ширина контента (должна быть согласована с другими секциями)
const CONTENT_MAX_WIDTH = '1140px';

const HeaderSection: React.FC = () => {
  return (
    <Header style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #f0f0f0',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      width: '100%',
    }}>
       <div style={{
           display: 'flex',
           justifyContent: 'space-between',
           alignItems: 'center',
           width: '100%',
           maxWidth: CONTENT_MAX_WIDTH,
           margin: '0 auto',
           padding: '0 20px'
       }}>
          {/* --- ИЗМЕНЕНО НАЗВАНИЕ --- */}
          <div className="logo" style={{ color: '#1890ff', fontWeight: 'bold', fontSize: '22px', fontFamily: "'Poppins', sans-serif"}}>UniFlow</div>
          {/* Ссылка ведет к форме CTA внизу */}
          <Button type="primary" href="#cta-form">
            Получить ранний доступ
          </Button>
      </div>
    </Header>
  );
};

export default HeaderSection;