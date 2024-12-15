import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Accordion
          expanded={expanded.includes("panel1")}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Что такое Legacy Keeper?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Legacy Keeper - это защищенное хранилище для ваших важных данных с
              функцией передачи доверенным лицам. Представьте его как цифровое
              завещание, которое передаст важную информацию вашим близким, когда
              это будет необходимо.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel2")}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Чем Legacy Keeper отличается от обычного облачного хранилища?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              <ul style={{ marginTop: "0px" }}>
                <li>
                  Шифрование на стороне клиента - даже мы не имеем доступа к
                  вашим данным
                </li>
                <li>Система автоматической передачи данным доверенным лицам</li>
                <li>Специализированные инструкции для получателей</li>
                <li>Гарантированная доставка разными способами</li>
                <li>Фокус на безопасности и конфиденциальности</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel3")}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Как это работает?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              <ol style={{ marginTop: "0px" }}>
                <li>Загружаете важные файлы</li>
                <li>Указываете получателей</li>
                <li>Настраиваете условия передачи</li>
                <li>Создаете инструкции для получателей</li>
              </ol>
              Всё! Система автоматически позаботится о передаче данных, когда
              это потребуется.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel4")}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Как передаются пароли получателям?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Пароль нужно передать через выбранный вами независимый канал. Это
              гарантирует, что только законный получатель сможет получить доступ
              к данным.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel5")}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Какие гарантии безопасности вы предоставляете?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              <ul style={{ marginTop: "0px" }}>
                <li>Шифрование AES-256</li>
                <li>Данные хранятся в зашифрованном виде</li>
                <li>Множественное резервное копирование</li>
                <li>Соответствие GDPR и другим стандартам защиты данных</li>
                <li>Регулярный аудит безопасности</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel6")}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Что если я забуду свой пароль?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              В целях безопасности мы не храним ваши пароли. Рекомендуем
              тщательно сохранить пароль после регистрации.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel7")}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Как проверяется моя активность?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Система отправляет вам ссылку-подтверждение с определенной
              регулярностью. Если вы не подтверждение аккаунт в течении
              определенного времени, ваши файлы отправятся получателям.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel8")}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Как получатели узнают о наличии данных для них?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Система автоматически уведомит их выбранным способом (email, SMS,
              мессенджеры или даже личная встреча и консультации по телефону).
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
