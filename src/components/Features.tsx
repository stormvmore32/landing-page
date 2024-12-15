import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MuiChip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import { List, ListItem } from "@mui/material";

// const items = [
//   {
//     icon: <ViewQuiltRoundedIcon />,
//     title: 'Q1 (Январь - Март):',
//     description:
//       'Возможность отправки данных конечному получателю через определенное время.',
//     imageLight: `url("https://mui.com/static/images/templates/templates-images/dash-light.png")`,
//     imageDark: `url("https://mui.com/static/images/templates/templates-images/dash-dark.png")`,
//   },
//   {
//     icon: <EdgesensorHighRoundedIcon />,
//     title: 'Пример',
//     description:
//       'Здесь будет текст.',
//     imageLight: `url("https://mui.com/static/images/templates/templates-images/mobile-light.png")`,
//     imageDark: `url("https://mui.com/static/images/templates/templates-images/mobile-dark.png")`,
//   },
//   {
//     icon: <DevicesRoundedIcon />,
//     title: 'Пример',
//     description:
//       'Здесь будет текст',
//     imageLight: `url("https://mui.com/static/images/templates/templates-images/devices-light.png")`,
//     imageDark: `url("https://mui.com/static/images/templates/templates-images/devices-dark.png")`,
//   },
// ];
const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: "Q1 (Январь - Март)",
    description: [
      "Возможность отправки данных конечному получателю через определенное время",
      "Отложенная отправка без проверки активности",
      "Гибкие настройки проверки активности пользователя",
      "Базовые шаблоны инструкций для наследников",
    ],
    imageLight: `url("https://mui.com/static/images/templates/templates-images/dash-light.png")`,
    imageDark: `url("https://mui.com/static/images/templates/templates-images/dash-dark.png")`,
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: "Q2 (Апрель - Июнь)",
    description: [
      "Расширение каналов доставки",
      "Продвинутый конструктор инструкций с категориями",
      "Запуск тарифов с расширенными возможностями",
    ],
    imageLight: `url("https://mui.com/static/images/templates/templates-images/mobile-light.png")`,
    imageDark: `url("https://mui.com/static/images/templates/templates-images/mobile-dark.png")`,
  },
  {
    icon: <DevicesRoundedIcon />,
    title: "Q3 (Июль - Сентябрь)",
    description: [
      "Партнёрство с курьерскими службами для физической доставки",
      "Специальные корпоративные тарифы",
      "Внешние интеграции с нотариальными конторами",
    ],
    imageLight: `url("https://mui.com/static/images/templates/templates-images/devices-light.png")`,
    imageDark: `url("https://mui.com/static/images/templates/templates-images/devices-dark.png")`,
  },
  {
    icon: <DevicesRoundedIcon />,
    title: "Q4 (Октябрь - Декабрь)",
    description: [
      "Интеграция с блокчейн для повышенной надёжности хранения",
      "Полностью настраиваемые сценарии доставки",
      "API для корпоративных клиентов",
    ],
    imageLight: `url("https://mui.com/static/images/templates/templates-images/devices-light.png")`,
    imageDark: `url("https://mui.com/static/images/templates/templates-images/devices-dark.png")`,
  },
];
interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          "linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))",
        color: "hsl(0, 0%, 100%)",
        borderColor: (theme || theme).palette.primary.light,
        "& .MuiChip-label": {
          color: "hsl(0, 0%, 100%)",
        },
        ...theme.applyStyles("dark", {
          borderColor: (theme || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}: MobileLayoutProps) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 2, overflow: "auto" }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        {/* <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 280,
            backgroundImage: "var(--items-imageLight)",
            ...theme.applyStyles("dark", {
              backgroundImage: "var(--items-imageDark)",
            }),
          })}
          style={
            items[selectedItemIndex]
              ? ({
                  "--items-imageLight": items[selectedItemIndex].imageLight,
                  "--items-imageDark": items[selectedItemIndex].imageDark,
                } as any)
              : {}
          }
        /> */}
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: "text.primary", fontWeight: "medium" }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: "100%", md: "60%" } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Roadmap 2025 для Legacy Keeper
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 } }}
        >
          Проект находится на стадии активной разработки и вот несколько будущих
          его возможностей.
        </Typography>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: 2,
        }}
      > */}
      <div>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 2,
            height: "100%",
          }}
        >
          {items.map(({ icon, title, description }, index) => (
            <Box
              key={index}
              component={Button}
              onClick={() => handleItemClick(index)}
              sx={[
                (theme) => ({
                  p: 2,
                  height: "100%",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: (theme || theme).palette.action.hover,
                  },
                }),
                selectedItemIndex === index && {
                  backgroundColor: "action.selected",
                },
              ]}
            >
              <Box
                sx={[
                  {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    gap: 1,
                    textAlign: "left",
                    textTransform: "none",
                    color: "text.secondary",
                  },
                  selectedItemIndex === index && {
                    color: "text.primary",
                  },
                ]}
              >
                {icon}

                <Typography variant="h6">{title}</Typography>
                <List sx={{ padding: 0 }}>
                  {description.map((item, idx) => (
                    <ListItem key={idx} sx={{ padding: 0 }}>
                      <Typography
                        variant="body2"
                        component="span"
                        sx={{ marginRight: 1 }}
                      >
                        •
                      </Typography>
                      <Typography variant="body2">{item}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          ))}
        </Box>
        <MobileLayout
          selectedItemIndex={selectedItemIndex}
          handleItemClick={handleItemClick}
          selectedFeature={selectedFeature}
        />
      </div>
      {/* <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            width: { xs: "100%", md: "70%" },
            height: "var(--items-image-height)",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}
          >
            <Box
              sx={(theme) => ({
                m: "auto",
                width: 420,
                height: 500,
                backgroundSize: "contain",
                backgroundImage: "var(--items-imageLight)",
                ...theme.applyStyles("dark", {
                  backgroundImage: "var(--items-imageDark)",
                }),
              })}
              style={
                items[selectedItemIndex]
                  ? ({
                      "--items-imageLight": items[selectedItemIndex].imageLight,
                      "--items-imageDark": items[selectedItemIndex].imageDark,
                    } as any)
                  : {}
              }
            />
          </Card>
        </Box> */}
      {/* </Box> */}
    </Container>
  );
}
