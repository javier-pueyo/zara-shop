import { MainRoot } from './MainRoot';
import { MainTopBar } from './TopBar';
import { MainSection } from './Section';
import { MainNavigation } from './Navigation';

type MainComponent = typeof MainRoot & {
  TopBar: typeof MainTopBar;
  Section: typeof MainSection;
  Navigation: typeof MainNavigation;
};

const Main = MainRoot as MainComponent;

Main.TopBar = MainTopBar;
Main.Section = MainSection;
Main.Navigation = MainNavigation;

export { Main };
