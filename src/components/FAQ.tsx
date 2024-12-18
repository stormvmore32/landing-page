import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const qNa = [
  {
    question: "Что такое Legacy Keeper?",
    answer: [
      "Legacy Keeper - это защищенное хранилище для ваших важных данных с функцией передачи доверенным лицам. Представьте его как цифровое завещание, которое передаст важную информацию вашим близким, когда это будет необходимо.",
    ],
    panel: "panel1",
  },
  {
    question: "Чем Legacy Keeper отличается от обычного облачного хранилища?",
    answer: [
      "Шифрование на стороне клиента - даже мы не имеем доступа к вашим данным",
      "Система автоматической передачи данным доверенным лицам",
      "Специализированные инструкции для получателей",
      "Гарантированная доставка разными способами",
      "Фокус на безопасности и конфиденциальности",
    ],
    panel: "panel2",
  },
  {
    question: "Как это работает?",
    answer: [
      "Загружаете важные файлы",
      "Указываете получателей",
      "Настраиваете условия передачи",
      "Создаете инструкции для получателей",
      "Всё! Система автоматически позаботится о передаче данных, когда это потребуется.",
    ],
    panel: "panel3",
  },
  {
    question: "Как передаются пароли получателям?",
    answer: [
      "Пароль нужно передать через выбранный вами независимый канал. Это гарантирует, что только законный получатель сможет получить доступ к данным.",
    ],
    panel: "panel4",
  },
  {
    question: "Какие гарантии безопасности вы предоставляете?",
    answer: [
      "Шифрование происходит по AES 256 непосредственно на вашем компьютере, что предотвращает утечку данных",
      "Данные хранятся в зашифрованном в виде на распределенных хранилищах",
      "Множественное резервное копирование",
      "Соответствие GDPR и другим стандартам защиты данных",
      "Регулярный аудит безопасности",
    ],
    panel: "panel5",
  },
  {
    question: "Что если я забуду свой пароль?",
    answer: [
      "В целях безопасности мы не храним ваши пароли. Рекомендуем тщательно сохранить пароль после регистрации.",
    ],
    panel: "panel6",
  },
  {
    question: "Как проверяется моя активность в базовом варианте?",
    answer: [
      "Система отправляет вам ссылку-подтверждение с определенной регулярностью. Если вы не подтверждение аккаунт в течении определенного времени, ваши файлы отправятся получателям.",
    ],
    panel: "panel7",
  },
  {
    question: "Что если я хочу изменить получателей или данные?",
    answer: [
      "Вы можете в любой момент:",
      "Добавить или удалить получателей",
      "Изменить загруженные файлы",
      "Обновить инструкции",
      "Настроить условия передачи",
    ],
    panel: "panel8",
  },
  {
    question: "Как получатели узнают о наличии данных для них?",
    answer: [
      "Система автоматически уведомит их выбранным способом (email, SMS, мессенджеры или даже личная встреча и консультации по телефону).",
    ],
    panel: "panel9",
  },
  {
    question: "Почему стоит использовать Legacy Kepeer?",
    answer: [
      "Защита важных данных",
      "Спокойствие за будущее близких",
      "Гарантированная передача информации",
      "Простота использования",
      "Максимальная безопасность",
    ],
    panel: "panel10",
  },
  {
    question: "Как начать пользоваться сервисом?",
    answer: [
      "Зарегистрируйтесь",
      "Выберите тарифный план",
      "Загрузите данные",
      "Настройте получателей",
    ],
    panel: "panel11",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel)
      );
    };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 2, sm: 4 },
        pb: { xs: 2, sm: 4 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: "text.primary",
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        Вопросы и ответы
      </Typography>
      <Box sx={{ width: "100%" }}>
      {qNa.map((item, index) => (
        <Accordion 
          key={index} 
          expanded={expanded.includes(item.panel)} 
          onChange={handleChange(item.panel)}
        >
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />} 
            aria-controls={`${item.panel}-content`} 
            id={`${item.panel}-header`}
          >
            <Typography component="h3" variant="subtitle2">
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              {item.answer.map((ans, i) => (
                <div key={i}>{ans}</div>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>

    </Container>
  );
}
