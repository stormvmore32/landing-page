import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../components/shared-theme/shared-theme/AppTheme';
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Highlights from '../components/Highlights';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';


export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <Divider />
      <div>
        <Highlights />
        <Divider />
        <Features />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        {/* <Footer /> */}
      </div>
    </AppTheme>
  );
}
