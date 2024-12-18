import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Logo from "../assets/Logowtback.png";
import { Link } from "react-scroll";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <img src={Logo} alt="Logo app" width="75px" height="75px" />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="highlights" smooth={true} duration={500}>
              <Button variant="text" color="info" size="large">
                Возможности сервиса
              </Button>
            </Link>
            <Link to="features" smooth={true} duration={500}>
              <Button variant="text" color="info" size="large">
                Карта будующих возможностей
              </Button>
            </Link>
            <Link to="pricing" smooth={true} duration={500}>
              <Button variant="text" color="info" size="large">
                Тарифы
              </Button>
            </Link>
            <Link to="faq" smooth={true} duration={500}>
              <Button
                variant="text"
                color="info"
                size="large"
                sx={{ minWidth: 0 }}
              >
                Вопросы и ответы
              </Button>
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button color="secondary" variant="contained" size="medium">
              Войти
            </Button>
            <Button color="secondary" variant="contained" size="medium">
              Зарегистрироваться
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Link to="highlights" smooth={true} duration={500}>
                  <MenuItem>Возможности сервиса</MenuItem>
                </Link>
                <Link to="features" smooth={true} duration={500}>
                  <MenuItem>Карта будующих возможностей</MenuItem>
                </Link>
                <Link to="pricing" smooth={true} duration={500}>
                  <MenuItem>Тарифы</MenuItem>
                </Link>
                <Link to="faq" smooth={true} duration={500}>
                  <MenuItem>Вопросы и ответы</MenuItem>
                </Link>
                <MenuItem>
                  <Button color="secondary" variant="contained" fullWidth>
                    Зарегистрироваться
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="secondary" variant="contained" fullWidth>
                    Войти
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
