// src/sections/FaqSection.tsx
import React from 'react';
import { Typography, Collapse, Space } from 'antd';
import { LockOutlined, QuestionCircleOutlined, ApiOutlined, BarChartOutlined, ExperimentOutlined, GlobalOutlined /* Добавлена иконка */ } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography; // Добавили Text
const { Panel } = Collapse;

const CONTENT_MAX_WIDTH = '800px'; // Оставляем чуть уже для FAQ

// Обновленные данные для FAQ с вашим текстом
const faqData = [
  {
    key: '1',
    header: 'Насколько безопасны мои торговые данные?',
    icon: <LockOutlined />,
    content: (
      <Paragraph>
        Безопасность - наш абсолютный приоритет. Мы используем шифрование банковского уровня для передачи и хранения всех данных.
        UniFlow никогда не запрашивает доступ к вашим торговым счетам или API-ключам с правами торговли.
        Вы контролируете, какие данные вносить, а интеграции с брокерами проектируются с учетом строгих протоколов безопасности и с доступом <Text strong>только к истории сделок</Text>.
        {/* Добавьте реальную ссылку, когда она будет */}
        {/* Подробнее о мерах безопасности читайте в нашей <a href="#">Политике Конфиденциальности</a>. */}
      </Paragraph>
    ),
  },
  {
    key: '2',
    header: 'Как именно ИИ анализирует мои сделки? Это не "черный ящик"?',
    icon: <ExperimentOutlined />,
    content: (
      <Paragraph>
        UniFlow использует комбинацию алгоритмов машинного обучения и статистического анализа, но с <Text strong>полной прозрачностью</Text>. Для каждой рекомендации система показывает:
        <ol style={{ marginTop: '8px', paddingLeft: '20px' }}> {/* Используем нумерованный список */}
          <li>Какие данные послужили основой.</li>
          <li>Какие закономерности были выявлены.</li>
          <li>Какое улучшение ожидается и почему.</li>
        </ol>
        Вы всегда понимаете логику каждого предложения системы.
      </Paragraph>
    ),
  },
  {
    key: '3',
    header: 'Нужно ли вносить абсолютно все сделки?',
    icon: <BarChartOutlined />,
    content: (
      <Paragraph>
        Для максимальной эффективности рекомендуется вносить все сделки, но система начинает давать полезные инсайты уже после <Text strong>15-20 сделок</Text>.
        Чем больше данных вы предоставите, тем точнее будут рекомендации. При этом даже выборочный анализ определенных стратегий или периодов может дать ценные результаты.
      </Paragraph>
    ),
  },
  // Убрали вопрос про импорт, так как он есть в секции Интеграции
  // {
  //   key: '4',
  //   header: 'Будет ли импорт сделок от брокеров?',
  //   icon: <ApiOutlined />,
  //   content: ( ... )
  // },
  {
    // Меняем key на 4, так как предыдущий удален
    key: '4',
    header: 'Для каких рынков и инструментов подходит UniFlow?',
    icon: <GlobalOutlined />, // Используем иконку глобуса
    content: (
      <Paragraph>
        UniFlow эффективно работает с любыми торгуемыми инструментами: <Text strong>акции, фьючерсы, опционы, криптовалюты, форекс</Text>.
        Система адаптируется к особенностям различных рынков и учитывает их специфику при анализе и рекомендациях.
        Независимо от того, торгуете ли вы на российском рынке, американском или криптовалютных биржах - UniFlow будет полезен для улучшения ваших результатов.
      </Paragraph>
    ),
  },
  // Можно добавить еще вопросы, если нужно
];

const FaqSection: React.FC = () => {
  return (
    // Секция с белым фоном
    <div className="section-padding faq-section" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto', padding: '0 20px' }}>
        {/* Измененный заголовок */}
        <Title level={2} style={{ textAlign: 'center', marginBottom: '56px' }}>
          Ответы на ваши вопросы
        </Title>

        <Collapse accordion defaultActiveKey={['1']} bordered={false} style={{ background: 'transparent' }} /* Убираем рамку и фон у Collapse */ >
          {faqData.map(faqItem => (
            <Panel
              header={
                <Space>
                  {faqItem.icon}
                  {/* Делаем заголовок вопроса жирнее */}
                  <Text strong>{faqItem.header}</Text>
                </Space>
              }
              key={faqItem.key}
              // Добавляем стиль для панели, чтобы убрать фон и рамку панели
              style={{ background: '#fff', borderRadius: '8px', marginBottom: '16px', border: '1px solid #f0f0f0' }}
            >
              {faqItem.content}
            </Panel>
          ))}
        </Collapse>

        <Paragraph style={{ textAlign: 'center', marginTop: '40px', color: '#667085' }}>
          Не нашли ответа на свой вопрос? <a href="#">Свяжитесь с нами!</a> (ссылка будет позже)
        </Paragraph>
      </div>
    </div>
  );
};

export default FaqSection;