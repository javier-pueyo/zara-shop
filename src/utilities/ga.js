import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (category="Website") => {
    const eventTracker = (action = "clickLink", label = "Ver proyectos") => {
      ReactGA.event({category, action, label});
    }
    return eventTracker;
  }
export default useAnalyticsEventTracker;