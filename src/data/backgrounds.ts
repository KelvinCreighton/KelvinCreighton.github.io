
export interface Blob {
  top: string;
  left: string;
  size: string;
  color: string;
}

export interface BackgroundConfig {
  bg: string;
  viscosity: number;
  sharpness: number;
  density: number;
  masterOpacity: number;
  blobs: Blob[];
}

// User-provided design for the home page (and as a template for others)
export const HOME_BACKGROUND: BackgroundConfig = {
  bg: '#000000',
  viscosity: 57,
  sharpness: 2,
  density: 100,
  masterOpacity: 0.37,
  blobs: [
    { top: '-4%', left: '5%', size: '20vw', color: '#6366f1' },
    { top: '70%', left: '89%', size: '19vw', color: '#3b82f6' },
    { top: '29%', left: '14%', size: '16vw', color: '#3b82f6' },
    { top: '-9%', left: '43%', size: '18vw', color: '#a855f7' },
    { top: '81%', left: '78%', size: '18vw', color: '#06b6d4' },
    { top: '39%', left: '51%', size: '20vw', color: '#8b5cf6' },
    { top: '93%', left: '33%', size: '10vw', color: '#3b82f6' },
    { top: '15%', left: '-8%', size: '16vw', color: '#6366f1' },
    { top: '3%', left: '56%', size: '17vw', color: '#06b6d4' },
    { top: '25%', left: '-4%', size: '14vw', color: '#3b82f6' },
    { top: '15%', left: '40%', size: '16vw', color: '#8b5cf6' },
    { top: '96%', left: '93%', size: '12vw', color: '#6366f1' },
    { top: '59%', left: '11%', size: '13vw', color: '#06b6d4' },
    { top: '3%', left: '9%', size: '18vw', color: '#8b5cf6' },
    { top: '33%', left: '-11%', size: '19vw', color: '#8b5cf6' },
    { top: '45%', left: '78%', size: '12vw', color: '#a855f7' },
    { top: '91%', left: '-12%', size: '16vw', color: '#a855f7' },
    { top: '22%', left: '11%', size: '17vw', color: '#6366f1' },
    { top: '37%', left: '76%', size: '15vw', color: '#8b5cf6' },
    { top: '47%', left: '88%', size: '14vw', color: '#06b6d4' },
    { top: '40%', left: '76%', size: '13vw', color: '#3b82f6' },
    { top: '27%', left: '4%', size: '18vw', color: '#3b82f6' },
    { top: '44%', left: '45%', size: '19vw', color: '#8b5cf6' },
    { top: '11%', left: '42%', size: '16vw', color: '#6366f1' },
    { top: '51%', left: '62%', size: '20vw', color: '#8b5cf6' },
    { top: '24%', left: '17%', size: '12vw', color: '#6366f1' },
    { top: '-3%', left: '92%', size: '16vw', color: '#6366f1' },
    { top: '61%', left: '26%', size: '17vw', color: '#06b6d4' },
    { top: '24%', left: '41%', size: '10vw', color: '#06b6d4' },
    { top: '-13%', left: '40%', size: '20vw', color: '#3b82f6' },
    { top: '-9%', left: '40%', size: '17vw', color: '#6366f1' },
    { top: '73%', left: '71%', size: '20vw', color: '#06b6d4' },
    { top: '54%', left: '79%', size: '13vw', color: '#a855f7' },
    { top: '74%', left: '16%', size: '17vw', color: '#8b5cf6' },
    { top: '37%', left: '77%', size: '10vw', color: '#8b5cf6' },
    { top: '89%', left: '82%', size: '19vw', color: '#06b6d4' },
    { top: '67%', left: '20%', size: '19vw', color: '#06b6d4' },
    { top: '44%', left: '62%', size: '13vw', color: '#8b5cf6' },
    { top: '-10%', left: '25%', size: '19vw', color: '#a855f7' },
    { top: '87%', left: '57%', size: '20vw', color: '#a855f7' },
    { top: '66%', left: '15%', size: '17vw', color: '#a855f7' },
    { top: '33%', left: '57%', size: '14vw', color: '#06b6d4' },
    { top: '77%', left: '7%', size: '19vw', color: '#3b82f6' },
    { top: '81%', left: '2%', size: '17vw', color: '#a855f7' },
    { top: '76%', left: '34%', size: '11vw', color: '#a855f7' },
    { top: '63%', left: '15%', size: '14vw', color: '#06b6d4' },
    { top: '54%', left: '93%', size: '18vw', color: '#a855f7' },
    { top: '36%', left: '85%', size: '16vw', color: '#6366f1' },
    { top: '-11%', left: '2%', size: '17vw', color: '#6366f1' },
    { top: '36%', left: '-1%', size: '21vw', color: '#6366f1' },
    { top: '33%', left: '45%', size: '11vw', color: '#a855f7' },
    { top: '61%', left: '86%', size: '18vw', color: '#3b82f6' },
    { top: '14%', left: '47%', size: '18vw', color: '#8b5cf6' },
    { top: '81%', left: '79%', size: '16vw', color: '#a855f7' },
    { top: '-8%', left: '48%', size: '18vw', color: '#3b82f6' },
    { top: '3%', left: '69%', size: '14vw', color: '#8b5cf6' },
    { top: '77%', left: '72%', size: '13vw', color: '#8b5cf6' },
    { top: '88%', left: '53%', size: '21vw', color: '#a855f7' },
    { top: '53%', left: '20%', size: '18vw', color: '#8b5cf6' },
    { top: '83%', left: '11%', size: '16vw', color: '#3b82f6' },
    { top: '11%', left: '28%', size: '11vw', color: '#06b6d4' },
    { top: '63%', left: '6%', size: '17vw', color: '#a855f7' },
    { top: '67%', left: '90%', size: '19vw', color: '#6366f1' },
    { top: '93%', left: '90%', size: '15vw', color: '#6366f1' },
    { top: '52%', left: '87%', size: '11vw', color: '#06b6d4' },
    { top: '85%', left: '93%', size: '13vw', color: '#6366f1' },
    { top: '66%', left: '42%', size: '16vw', color: '#06b6d4' },
    { top: '79%', left: '54%', size: '13vw', color: '#6366f1' },
    { top: '4%', left: '37%', size: '17vw', color: '#06b6d4' },
    { top: '82%', left: '46%', size: '16vw', color: '#06b6d4' },
    { top: '43%', left: '30%', size: '10vw', color: '#3b82f6' },
    { top: '2%', left: '45%', size: '14vw', color: '#06b6d4' },
    { top: '79%', left: '36%', size: '11vw', color: '#6366f1' },
    { top: '4%', left: '57%', size: '15vw', color: '#6366f1' },
    { top: '91%', left: '43%', size: '16vw', color: '#8b5cf6' },
    { top: '18%', left: '75%', size: '10vw', color: '#a855f7' },
    { top: '12%', left: '38%', size: '10vw', color: '#3b82f6' },
    { top: '16%', left: '76%', size: '11vw', color: '#6366f1' },
    { top: '-12%', left: '1%', size: '18vw', color: '#3b82f6' },
    { top: '90%', left: '79%', size: '16vw', color: '#a855f7' },
    { top: '74%', left: '25%', size: '10vw', color: '#06b6d4' },
    { top: '85%', left: '0%', size: '13vw', color: '#3b82f6' },
    { top: '59%', left: '62%', size: '14vw', color: '#6366f1' },
    { top: '50%', left: '8%', size: '15vw', color: '#3b82f6' },
    { top: '80%', left: '90%', size: '16vw', color: '#8b5cf6' },
    { top: '89%', left: '47%', size: '13vw', color: '#3b82f6' },
    { top: '87%', left: '30%', size: '17vw', color: '#8b5cf6' },
    { top: '-5%', left: '64%', size: '14vw', color: '#8b5cf6' },
    { top: '47%', left: '11%', size: '13vw', color: '#06b6d4' },
    { top: '57%', left: '20%', size: '17vw', color: '#8b5cf6' },
    { top: '44%', left: '54%', size: '10vw', color: '#06b6d4' },
    { top: '38%', left: '54%', size: '14vw', color: '#6366f1' },
    { top: '-10%', left: '-7%', size: '13vw', color: '#3b82f6' },
    { top: '56%', left: '37%', size: '19vw', color: '#3b82f6' },
    { top: '95%', left: '86%', size: '16vw', color: '#3b82f6' },
    { top: '34%', left: '12%', size: '15vw', color: '#a855f7' },
    { top: '8%', left: '76%', size: '17vw', color: '#06b6d4' },
    { top: '-6%', left: '-12%', size: '16vw', color: '#3b82f6' },
    { top: '21%', left: '86%', size: '16vw', color: '#6366f1' },
    { top: '-10%', left: '93%', size: '18vw', color: '#06b6d4' }
  ]
}

// Simplified generator for 'fallback' or 'automated' page logic (Private to this file or as a separate utility)
function generateLayout(seed: string): Blob[] {
  // We can include a very simple, fast pseudo-random logic here 
  // if we want new pages to have SOMETHING without manual intervention.
  // But for now, we'll just return a variation of the home one or a small set.
  return HOME_BACKGROUND.blobs; 
}

export const PAGE_BACKGROUNDS: Record<string, BackgroundConfig> = {
  '/': HOME_BACKGROUND,
  '/projects': { ...HOME_BACKGROUND, masterOpacity: 0.4 }, // Example variation
  '/resume': { ...HOME_BACKGROUND, masterOpacity: 0.3 },
};

export const getBackgroundConfig = (pathname: string): BackgroundConfig => {
  return PAGE_BACKGROUNDS[pathname] || PAGE_BACKGROUNDS['/'] || HOME_BACKGROUND;
};