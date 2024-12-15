import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ShieldIcon from "@mui/icons-material/Shield";
import PeopleIcon from "@mui/icons-material/People";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";

// const items = [
//   {
//     icon: <SettingsSuggestRoundedIcon />,
//     title: "Сквозное шифрование данных",
//     description:
//       "Все данные шифруются на стороне клиента, что гарантирует, что их сможет получить только предполагаемый получатель",
//   },
//   {
//     icon: <ShieldIcon />,
//     title: "Нулевое разглашение",
//     description:
//       "Сервер не имеет доступа к содержимому ваших данных, что делает невозможным их расшифровку кем-либо другим.",
//   },
//   {
//     icon: <ThumbUpAltRoundedIcon />,
//     title: "Удаление данных",
//     description:
//       "При необходимости пользователь может удалить данные с сервера.",
//   },
//   {
//     icon: <ThumbUpAltRoundedIcon />,
//     title: "Добавил на подумать",
//     description: "Здесь будет текст",
//   },
//   {
//     icon: <ThumbUpAltRoundedIcon />,
//     title: "Добавил на подумать",
//     description: "Здесь будет текст",
//   },
// ];
const items = [
  {
    icon: <ShieldIcon />,
    title: "Максимальная защита ваших данных",
    description:
      "Все материалы шифруются непосредственно на вашем устройстве. Даже мы не имеем доступа к вашей личной информации.",
  },
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Доступен каждому",
    description:
      "Сервис всегда останется бесплатным. Мы верим, что сохранение цифрового наследия должно быть доступно каждому.",
  },
  {
    icon: <PeopleIcon />,
    title: "Возможность доставки данных",
    description:
      "Назначайте доверенных людей, которые получат доступ к вашему цифровому наследию в нужный момент.",
  },
  {
    icon: <LaptopChromebookIcon />,
    title: "Простота использования",
    description:
      "Интуитивно понятный интерфейс позволит настроить передачу цифрового наследия за несколько минут.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Контроль над своими данными",
    description:
      "Вы всегда можете изменить или удалить любую информацию в вашем хранилище.",
  },
];
export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "black",
        bgcolor: "white",
      }}
    >
      <Container
        sx={{
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
          <Typography component="h2" variant="h4" gutterBottom>
            Возможности сервиса
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: "inherit",
                  p: 3,
                  height: "100%",
                  borderColor: "hsla(220, 25%, 25%, 0.3)",
                  backgroundColor: "hsla(206 63% 54% / 0.5)",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography
                    gutterBottom
                    sx={{ fontWeight: "medium", color: "black" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.900" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
