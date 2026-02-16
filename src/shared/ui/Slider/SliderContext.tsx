import { createContext, useContext } from 'react';
import { useSlider } from './useSlider';

interface SliderContextProps {
    refs: ReturnType<typeof useSlider>['refs'];
    state: ReturnType<typeof useSlider>['state'];
    handlers: ReturnType<typeof useSlider>['handlers'];
}

export const SliderContext = createContext<SliderContextProps | null>(null);

export const useSliderContext = () => {
    const context = useContext(SliderContext);
    if (!context) {
        throw new Error('useSliderContext must be used within a Slider');
    }
    return context;
};
