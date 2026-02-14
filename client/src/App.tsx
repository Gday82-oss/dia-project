import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Fractal from "./pages/Fractal";
import AgentDetail from "./pages/AgentDetail";
import Canon from "./pages/Canon";

/* Design Philosophy: Cyberpunk Néo-Grec
 * Dark theme with electric cyan/magenta accents
 * Fusion of ancient Greek mythology and futuristic AI technology
 */

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/fractal"} component={Fractal} />
      <Route path="/agent/:code" component={AgentDetail} />
      <Route path="/canon" component={Canon} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
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
