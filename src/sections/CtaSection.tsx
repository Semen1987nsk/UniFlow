// src/sections/CtaSection.tsx
import React, { useEffect, useState } from 'react';
import { Typography, Button, Input, Radio, Result, Space, Checkbox } from 'antd';
import { CheckCircleOutlined, LoadingOutlined, CloseCircleOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { useForm, ValidationError } from '@formspree/react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const { Title, Paragraph, Text } = Typography;

const CONTENT_MAX_WIDTH = '700px';
const FORM_ID = "mqaprvpr"; // Ваш ID

// Анимации
const sectionAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 }
  },
};

const itemAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};


const CtaSection: React.FC = () => {
    const [state, handleSubmit] = useForm(FORM_ID);
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    useEffect(() => {
      if (inView) controls.start('visible');
    }, [controls, inView]);

    if (state.succeeded) {
        return (
            <motion.div
              id="cta-form"
              className="section-padding cta-section-v2 success-state"
              initial="hidden"
              animate="visible"
              variants={sectionAnimation}
            >
                <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
                    <Result
                      icon={<CheckCircleOutlined className="cta-success-icon" />}
                      title={<Title level={3} className="cta-success-title">Спасибо за регистрацию!</Title>}
                      subTitle={
                          <Paragraph className="cta-success-subtitle">
                              Мы рады видеть вас в UniFlow. Ожидайте уведомление о запуске и дальнейшие инструкции.
                              Ориентировочная дата запуска — <Text strong style={{ color: 'inherit' }}>6 июля</Text>.
                          </Paragraph>
                      }
                    />
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
          id="cta-form"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={sectionAnimation}
          className="section-padding cta-section-v2"
        >
          <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <motion.div variants={itemAnimation}>
              <Title level={2} className="cta-main-title-v2">
                Начните Трансформировать Свою Торговлю <span className="cta-title-highlight-v2">Уже Сегодня</span>
              </Title>
              <Paragraph className="cta-subtitle-v2">
                Присоединяйтесь к UniFlow и откройте для себя мощь ИИ-аналитики для ваших сделок.
              </Paragraph>
            </motion.div>

            <motion.form
              variants={itemAnimation}
              onSubmit={handleSubmit}
              className="cta-form-v2"
            >
              <motion.div variants={itemAnimation} className="cta-form-item-v2">
                <Input
                  id="cta-name"
                  name="name"
                  size="large"
                  placeholder="Ваше Имя"
                  prefix={<UserOutlined className="cta-input-icon"/>}
                  required
                />
                 <ValidationError prefix="Name" field="name" errors={state.errors} className="cta-validation-error"/>
              </motion.div>

              <motion.div variants={itemAnimation} className="cta-form-item-v2">
                <Input
                  id="cta-email"
                  type="email"
                  name="email"
                  size="large"
                  placeholder="Ваш E-mail"
                  prefix={<MailOutlined className="cta-input-icon"/>}
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="cta-validation-error"/>
              </motion.div>

              <motion.div variants={itemAnimation} className="cta-form-item-v2 user-type-selection">
                 <label htmlFor="user_type_radio_group_v2" className="cta-radio-label">Кто вы?</label>
                 <div id="user_type_radio_group_v2">
                    <Radio.Group name="user_type" optionType="button" buttonStyle="solid" defaultValue="Trader">
                      <Radio value="Trader">Трейдер</Radio>
                      <Radio value="Investor">Инвестор</Radio>
                    </Radio.Group>
                 </div>
                 <ValidationError prefix="User Type" field="user_type" errors={state.errors} className="cta-validation-error"/>
              </motion.div>

              <motion.div variants={itemAnimation} className="cta-form-item-v2 cta-privacy-checkbox-wrapper">
                <Checkbox
                    id="cta-privacy"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                >
                    <Text className="cta-privacy-text">
                        Я даю согласие на обработку моих персональных данных в соответствии с 
                        {/* ИЗМЕНЕНИЕ ЗДЕСЬ: */}
                        <a 
                            href="https://politics2025.tilda.ws/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="cta-privacy-link"
                        >
                            Политикой конфиденциальности
                        </a>.
                    </Text>
                </Checkbox>
              </motion.div>

              <motion.div variants={itemAnimation} className="cta-form-item-v2">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  className="cta-submit-button-v2"
                  disabled={!privacyAccepted || state.submitting}
                  icon={state.submitting ? <LoadingOutlined /> : null}
                >
                  {state.submitting ? 'Отправка...' : 'Зарегистрироваться'}
                </Button>
              </motion.div>

              {state.errors && state.errors.getFormErrors().length > 0 && (
                 <motion.div variants={itemAnimation} className="cta-form-general-error">
                   <Space><CloseCircleOutlined /> Ошибка отправки:</Space> {state.errors.getFormErrors().map(e => e.message).join(', ')}
                 </motion.div>
              )}
            </motion.form>

            <motion.div variants={itemAnimation}>
                <Paragraph className="cta-spam-notice-v2">
                    ПОСЛЕ РЕГИСТРАЦИИ ВАМ БУДЕТ ДОСТУПНО МОБИЛЬНОЕ ПРИЛОЖЕНИЕ И ВЭБ-ВЕРСИЯ СЕРВИСА.
                </Paragraph>
            </motion.div>
          </div>
        </motion.div>
    );
};

export default CtaSection;