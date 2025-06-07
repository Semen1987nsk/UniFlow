// src/sections/HeaderSection.tsx
import React, { useState } from 'react';
import { Layout, Button, Space, Modal, Form, Input, message } from 'antd'; // Добавили message для уведомлений

const { Header } = Layout;
const CONTENT_MAX_WIDTH = '1140px';

const HeaderSection: React.FC = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [form] = Form.useForm(); // Для управления формой в модальном окне

  const showLoginModal = () => {
    setIsLoginModalVisible(true);
  };

  const handleLoginAttempt = async () => {
    try {
      // Валидируем поля формы
      await form.validateFields();
      // Если валидация прошла, показываем сообщение "Неверный логин или пароль"
      message.error('Неверный логин или пароль. Попробуйте еще раз.'); // Используем Ant Design message
      // Опционально: можно сбросить только поле пароля для удобства пользователя
      // form.resetFields(['password']);
      // Мы не закрываем модальное окно, чтобы пользователь мог "попробовать еще раз"
    } catch (errorInfo) {
      console.log('Ошибка валидации:', errorInfo);
      // Ошибки валидации будут показаны под полями благодаря Form.Item
    }
  };

  const handleLoginCancel = () => {
    setIsLoginModalVisible(false);
    form.resetFields(); // Сбрасываем поля при закрытии
  };

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
      padding: '0',
    }}>
       <div className="header-content-wrapper" style={{
           display: 'flex',
           width: '100%',
           maxWidth: CONTENT_MAX_WIDTH,
           margin: '0 auto',
           padding: '0 20px',
       }}>
          <div className="logo" style={{ color: '#1890ff', fontWeight: 'bold', fontSize: '22px', fontFamily: "'Poppins', sans-serif"}}>UniFlow</div>
          <Space className="header-actions">
            <Button type="default" onClick={showLoginModal}>
              Войти
            </Button>
            <Button type="primary" href="#cta-form">
              Зарегистрироваться
            </Button>
          </Space>
      </div>

      <Modal
        title="Вход в UniFlow"
        open={isLoginModalVisible}
        onOk={handleLoginAttempt} // При нажатии "ОК" (Войти) вызываем handleLoginAttempt
        onCancel={handleLoginCancel}
        okText="Войти"
        cancelText="Отмена"
        centered
        // Добавим data-testid для возможности тестирования, если потребуется
        // data-testid="login-modal"
      >
        <Form form={form} layout="vertical" name="login_form_modal" onFinish={handleLoginAttempt}>
          {/* Можно убрать это сообщение, если хотим полной имитации */}
          {/* <p style={{marginBottom: '16px', color: 'rgba(0,0,0,0.65)'}}>
            Пожалуйста, введите ваши учетные данные.
          </p> */}
          <Form.Item
            name="email"
            label="E-mail (логин)"
            rules={[
                { required: true, message: 'Пожалуйста, введите ваш e-mail!' },
                { type: 'email', message: 'Введите корректный e-mail!' }
            ]}
            // data-testid="email-input"
          >
            <Input placeholder="example@mail.com" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Пароль"
            rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
            // data-testid="password-input"
          >
            <Input.Password placeholder="••••••••" />
          </Form.Item>
           {/* Заглушка для "Забыли пароль?" */}
           <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                message.info('Функция восстановления пароля будет доступна позже.');
              }}
              style={{fontSize: '13px'}}
            >
              Забыли пароль?
            </a>
          </div>
          {/* Кнопка "Войти" из футера модального окна будет вызывать onOk (handleLoginAttempt) */}
          {/* Если бы мы хотели кастомную кнопку внутри формы:
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Войти
            </Button>
          </Form.Item>
          */}
        </Form>
      </Modal>
    </Header>
  );
};

export default HeaderSection;