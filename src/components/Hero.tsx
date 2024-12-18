import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import scheme from '../assets/scheme_work.png'

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "100%" } }}
        >
          <Typography
            variant="h1"
            sx={(theme) => ({
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
              color: "primary.main",
              ...theme.applyStyles("dark", { color: "primary.light" }),
            })}
          >
            Legacy Keeper
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Cохраните самое важное для тех, кто важнее всего.
          </Typography>
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px", 
              overflow: "hidden",
            }}
          >
            <img 
              src={scheme}
              alt="Принцип работы приложения"
              style={{
                width: "100%",
                height: "auto", 
                borderRadius: "8px", 
              }} 
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
