// src/sections/FooterSection.tsx
import React from 'react';
import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

const CONTENT_MAX_WIDTH = '1140px';

const FooterSection: React.FC = () => {
    return (
        <Footer style={{ textAlign: 'center', padding: '40px 0', backgroundColor: '#f8f9fa' }}>
             <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>
                <Text style={{ color: '#667085' }}>
                    UniFlow ©{new Date().getFullYear()} | Умный анализ ваших сделок
                </Text>
                <div style={{marginTop: '10px'}}>
                    {/* ИЗМЕНЕНИЕ ЗДЕСЬ: */}
                    <a 
                        href="https://politics2025.tilda.ws/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{margin: '0 10px', color: '#667085'}}
                    >
                        Политика конфиденциальности
                    </a>
                    {/* Если есть страница контактов, ее ссылку тоже можно обновить */}
                    <a href="#" style={{margin: '0 10px', color: '#667085'}}>Контакты</a>
                </div>
             </div>
        </Footer>
    );
};

export default FooterSection;