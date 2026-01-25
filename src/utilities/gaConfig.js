import ReactGA from "react-ga4";
const TRACKING_ID = "G-BXRHRTPZRZ"; // OUR_TRACKING_ID

const initializeGA = () => {
    ReactGA.initialize(TRACKING_ID);
}
export default initializeGA;