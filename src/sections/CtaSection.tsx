// src/sections/CtaSection.tsx (Чистая интеграция с @formspree/react)
import React from 'react';
import { Typography, Button, Input, Radio, Result, Space } from 'antd'; // Убрали Form
import { CheckCircleOutlined, LoadingOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useForm, ValidationError } from '@formspree/react';

const { Title, Paragraph, Text } = Typography;

const CONTENT_MAX_WIDTH = '800px';
const FORM_ID = "mqaprvpr"; // Ваш ID

const CtaSection: React.FC = () => {
    const [state, handleSubmit] = useForm(FORM_ID);

    // --- Отображение успеха ---
    if (state.succeeded) {
        return (
            <div id="cta-form" className="section-padding cta-section" style={{ padding: '100px 0', backgroundColor: '#1890ff', color: '#fff' }}>
                <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
                    <Result
                      icon={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
                      title={<Title level={3} style={{ color: '#fff' }}>Спасибо за ваш интерес!</Title>}
                      subTitle={
                          <Paragraph style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)' }}>
                              Мы получили ваши данные и сообщим вам о запуске UniFlow.<br/>
                              Ориентировочная дата запуска — <Text strong style={{ color: '#fff' }}>6 июля</Text>.
                          </Paragraph>
                      }
                    />
                </div>
            </div>
        );
    }

    // --- Отображение формы ---
    return (
        <div id="cta-form" className="section-padding cta-section" style={{ padding: '100px 0', backgroundColor: '#1890ff', color: '#fff' }}>
          <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
            <Title level={2} style={{ color: '#fff', marginBottom: '20px' }}>Готовы улучшить свою торговлю?</Title>
            <Paragraph style={{ fontSize: '18px', marginBottom: '40px', color: 'rgba(255, 255, 255, 0.9)' }}>
              Оставьте свои данные, чтобы получить уведомление о запуске UniFlow одним из первых и <Text strong style={{ color: '#fff' }}>специальную скидку 30%</Text> на подписку!
            </Paragraph>

            {/* Используем обычный тег <form> с onSubmit от Formspree */}
            <form onSubmit={handleSubmit} style={{ maxWidth: '550px', margin: '0 auto' }}>

              {/* Поле Имя (Используем Input от AntD) */}
              <div style={{ marginBottom: '16px' }}>
                <Input
                  id="cta-name" // Добавляем id для label (если бы он был)
                  name="name"   // Имя поля для Formspree
                  size="large"
                  placeholder="Ваше Имя"
                  required // Базовая HTML5 валидация
                  style={{ textAlign: 'center', height: '48px', fontSize: '16px', width: '100%' }}
                />
                 {/* Ошибка для поля name от Formspree */}
                 <ValidationError prefix="Name" field="name" errors={state.errors} style={{ color: '#ff4d4f', textAlign: 'left', marginTop: '4px', display: 'block' }}/>
              </div>

              {/* Поле Email (Используем Input от AntD) */}
              <div style={{ marginBottom: '16px' }}>
                <Input
                  id="cta-email"
                  type="email" // HTML5 валидация типа email
                  name="email"
                  size="large"
                  placeholder="Ваш E-mail"
                  required
                  style={{ textAlign: 'center', height: '48px', fontSize: '16px', width: '100%' }}
                />
                 {/* Ошибка для поля email от Formspree */}
                <ValidationError prefix="Email" field="email" errors={state.errors} style={{ color: '#ff4d4f', textAlign: 'left', marginTop: '4px', display: 'block' }}/>
              </div>

              {/* Выбор Трейдер/Инвестор (Используем Radio.Group от AntD) */}
              <div style={{ marginBottom: '24px' }}>
                 {/* Добавляем label вручную */}
                 <label htmlFor="user_type_radio_group" style={{ display: 'block', marginBottom: '8px', color: 'rgba(255, 255, 255, 0.8)' }}>Кто вы?</label>
                 {/* Оборачиваем Radio.Group, чтобы применить id */}
                 <div id="user_type_radio_group">
                    <Radio.Group
                        name="user_type" // Имя поля для Formspree
                        optionType="button"
                        buttonStyle="solid"
                        // required // Для Radio.Group required не работает стандартно, валидация будет на сервере
                    >
                      <Radio value="Trader" style={{ color: '#333' }}>Трейдер</Radio>
                      <Radio value="Investor" style={{ color: '#333' }}>Инвестор</Radio>
                    </Radio.Group>
                 </div>
                 {/* Ошибка для поля user_type от Formspree */}
                 <ValidationError prefix="User Type" field="user_type" errors={state.errors} style={{ color: '#ff4d4f', textAlign: 'left', marginTop: '4px', display: 'block' }}/>
              </div>

              {/* Кнопка отправки (Используем Button от AntD) */}
              <div style={{ marginBottom: '16px' }}>
                <Button
                  type="primary"
                  danger
                  htmlType="submit" // Отправляет форму, вызывает onSubmit={handleSubmit}
                  size="large"
                  block
                  disabled={state.submitting}
                  icon={state.submitting ? <LoadingOutlined /> : null}
                  style={{ height: '48px', fontSize: '16px' }}
                >
                  {state.submitting ? 'Отправка...' : 'Хочу Ранний Доступ!'}
                </Button>
              </div>

              {/* Общая ошибка формы от Formspree */}
              {state.errors && state.errors.getFormErrors().length > 0 && (
                 <div style={{ color: '#ff4d4f', textAlign: 'left', marginTop: '8px' }}>
                   <Space><CloseCircleOutlined /> Ошибка отправки:</Space> {state.errors.getFormErrors().map(e => e.message).join(', ')}
                 </div>
              )}
            </form>

            <Paragraph style={{ marginTop: '20px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)' }}>
                Никакого спама, только уведомление о запуске и полезные материалы.
            </Paragraph>
          </div>
        </div>
    );
};

export default CtaSection;