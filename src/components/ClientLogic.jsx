'use client';

import { useEffect } from 'react';
import initializeGA from '@/utilities/gaConfig';
import initializeGTM from '@/utilities/gtmConfig';

export default function ClientLogic() {
    useEffect(() => {
        initializeGA();
        initializeGTM();
    }, []);

    return null; // This component doesn't render anything
}
