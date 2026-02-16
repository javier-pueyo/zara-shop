import { SliderRoot } from './SliderRoot';
import { SliderContent } from './SliderContent';
import { SliderBar } from './SliderBar';
import { SliderItem } from './SliderItem';

export const Slider = Object.assign(SliderRoot, {
  Item: SliderItem,
  Content: SliderContent,
  Bar: SliderBar,
});
