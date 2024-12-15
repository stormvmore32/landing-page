import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import LockClockIcon from "@mui/icons-material/LockClock";

const tiers = [
  {
    title: "Free (Бесплатный)",
    price: "0",
    subheader: "unlock",
    description: [
      "До 3 файлов (до 10МБ каждый)",
      "Доставка по email",
      "Базовое шифрование",
      "1 получатель на 1 файл",
      "Базовые шаблоны инструкций",
    ],
    buttonText: "Попробуй бесплатно",
    buttonVariant: "contained",
    buttonColor: "secondary",
  },
  {
    title: "Pro",
    subheader: "lock",
    price: "15",
    description: [
      "До 5 файлов (до 100МБ каждый)",
      "Мультиканальная доставка (Email, WhatsApp, SMS, Telegram)",
      "Продвинутое шифрование",
      "До 3 получателей на один файл",
      "Расширенные шаблоны инструкций",
      "Приоритетная поддержка",
      "Гибкие настройки времени доставки",
    ],
    buttonText: "В разработке",
    buttonVariant: "outlined",
    buttonColor: "secondary",
  },
  {
    title: "Enterprise",
    price: "30",
    subheader: "lock",
    description: [
      "Неограниченное количество файлов",
      "Все каналы доставки + курьерская доставка",
      "Максимальный уровень шифрования",
      "Неограниченное количество получателей",
      "Все шаблоны инструкций",
      "Персональный менеджер",
      "Телефонные консультации получателей",
      "White-label решение",
      "API доступ",
      "SLA гарантии",
    ],
    buttonText: "В разработке",
    buttonVariant: "outlined",
    buttonColor: "secondary",
  },
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
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
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Тарифы
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: "center", justifyContent: "center", width: "100%" }}
      >
        {tiers.map((tier) => (
          <Grid size={{ xs: 12, sm: 12, md: 4 }} key={tier.title}>
            <Card
              sx={[
                {
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                },
              ]}
            >
              <CardContent>
                <Box
                  sx={[
                    {
                      mb: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2,
                    },
                  ]}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.subheader === "lock" && (
                    <Box sx={{ opacity: "50%" }}>
                      <LockClockIcon />
                    </Box>
                  )}
                </Box>
                <Box
                  sx={[
                    {
                      display: "flex",
                      alignItems: "baseline",
                    },
                  ]}
                >
                  <Typography component="h3" variant="h2">
                    {tier.price} рублей
                  </Typography>
                  <Typography component="h3" variant="h6">
                    &nbsp; в месяц
                  </Typography>
                </Box>
                <Divider sx={{ my: 2, opacity: 0.8, borderColor: "divider" }} />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: "flex",
                      gap: 1.5,
                      alignItems: "center",
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={[
                        {
                          width: 20,
                        },
                        tier.title === "Professional"
                          ? { color: "primary.light" }
                          : { color: "primary.main" },
                      ]}
                    />
                    <Typography
                      variant="subtitle2"
                      component={"span"}
                      sx={[
                        tier.title === "Professional"
                          ? { color: "grey.50" }
                          : { color: null },
                      ]}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant as "outlined"}
                  color={tier.buttonColor as "primary"}
                  disabled={tier.title === "Pro" || tier.title === "Enterprise"}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
