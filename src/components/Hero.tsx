import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// const StyledBox = styled("div")(({ theme }) => ({
//   alignSelf: "center",
//   width: "100%",
//   height: 400,
//   marginTop: theme.spacing(8),
//   borderRadius: (theme || theme).shape.borderRadius,
//   outline: "6px solid",
//   outlineColor: "hsla(220, 25%, 80%, 0.2)",
//   border: "1px solid",
//   borderColor: (theme || theme).palette.grey[200],
//   boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
//   backgroundImage: `url("/Logo_3.jpg")`,
//   backgroundSize: "contain",
//   backgroundRepeat: 'no-repeat',
//   [theme.breakpoints.up("sm")]: {
//     marginTop: theme.spacing(10),
//     height: 400,
//   },
//   ...theme.applyStyles("dark", {
//     boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
//     backgroundImage: `url("/Logo_3.jpg")`,
//     borderColor: (theme || theme).palette.grey[700],
//   }),
// }));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        backgroundRepeat: "no-repeat",

        // backgroundImage:
        //   "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        // ...theme.applyStyles("dark", {
        //   backgroundImage:
        //     "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        // }),
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
        </Stack>
      </Container>
    </Box>
  );
}
