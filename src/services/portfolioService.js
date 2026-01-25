import { CV } from '@/database/cv';

export async function getPortfolioData() {
    // Simulating an async operation (e.g., database fetch)
    // This helps when swapping to a real API or CMS later.
    return new Promise((resolve) => {
        resolve(CV);
    });
}
