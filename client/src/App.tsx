import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Intro from "./pages/Intro";
import Fractal from "./pages/Fractal";
import AgentDetail from "./pages/AgentDetail";
import Canon from "./pages/Canon";
import AgentsDashboard from "./pages/AgentsDashboard";

/* Design Philosophy: Cyberpunk Néo-Grec
 * Dark theme with electric cyan/magenta accents
 * Fusion of ancient Greek mythology and futuristic AI technology
 */
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <Breadcrumbs />
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/services"} component={Services} />
          <Route path={"/intro"} component={Intro} />
          <Route path={"/fractal"} component={Fractal} />
          <Route path="/agent/:code" component={AgentDetail} />
          <Route path="/canon" component={Canon} />
          <Route path="/dashboard" component={AgentsDashboard} />
          <Route path={"/404"} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
