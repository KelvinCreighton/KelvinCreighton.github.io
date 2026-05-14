
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
  viscosity: 119,
  sharpness: 1,
  density: 100,
  masterOpacity: 0.25,
  blobs: [
    { top: '-9%', left: '23%', size: '14vw', color: '#3b82f6' },
    { top: '7%', left: '35%', size: '12vw', color: '#6366f1' },
    { top: '74%', left: '35%', size: '11vw', color: '#6366f1' },
    { top: '57%', left: '26%', size: '15vw', color: '#8b5cf6' },
    { top: '15%', left: '70%', size: '12vw', color: '#6366f1' },
    { top: '21%', left: '16%', size: '24vw', color: '#a855f7' },
    { top: '85%', left: '24%', size: '14vw', color: '#06b6d4' },
    { top: '97%', left: '87%', size: '17vw', color: '#a855f7' },
    { top: '-5%', left: '97%', size: '27vw', color: '#06b6d4' },
    { top: '6%', left: '39%', size: '13vw', color: '#3b82f6' },
    { top: '43%', left: '83%', size: '10vw', color: '#06b6d4' },
    { top: '-2%', left: '36%', size: '20vw', color: '#06b6d4' },
    { top: '77%', left: '84%', size: '12vw', color: '#3b82f6' },
    { top: '4%', left: '84%', size: '22vw', color: '#3b82f6' },
    { top: '9%', left: '59%', size: '19vw', color: '#a855f7' },
    { top: '45%', left: '2%', size: '13vw', color: '#6366f1' },
    { top: '4%', left: '54%', size: '21vw', color: '#3b82f6' },
    { top: '49%', left: '51%', size: '15vw', color: '#a855f7' },
    { top: '33%', left: '18%', size: '33vw', color: '#8b5cf6' },
    { top: '56%', left: '-1%', size: '17vw', color: '#3b82f6' },
    { top: '17%', left: '60%', size: '18vw', color: '#3b82f6' },
    { top: '92%', left: '-7%', size: '10vw', color: '#8b5cf6' },
    { top: '79%', left: '52%', size: '14vw', color: '#a855f7' },
    { top: '39%', left: '51%', size: '13vw', color: '#8b5cf6' },
    { top: '66%', left: '78%', size: '18vw', color: '#6366f1' },
    { top: '11%', left: '4%', size: '13vw', color: '#06b6d4' },
    { top: '69%', left: '8%', size: '11vw', color: '#a855f7' },
    { top: '25%', left: '33%', size: '19vw', color: '#3b82f6' },
    { top: '55%', left: '65%', size: '22vw', color: '#a855f7' },
    { top: '33%', left: '18%', size: '15vw', color: '#8b5cf6' },
    { top: '90%', left: '37%', size: '14vw', color: '#a855f7' },
    { top: '93%', left: '86%', size: '11vw', color: '#6366f1' },
    { top: '60%', left: '78%', size: '39vw', color: '#6366f1' },
    { top: '71%', left: '-20%', size: '23vw', color: '#a855f7' },
    { top: '14%', left: '-16%', size: '31vw', color: '#3b82f6' },
    { top: '-1%', left: '-6%', size: '15vw', color: '#8b5cf6' },
    { top: '6%', left: '-10%', size: '15vw', color: '#06b6d4' },
    { top: '57%', left: '5%', size: '13vw', color: '#8b5cf6' },
    { top: '-12%', left: '15%', size: '19vw', color: '#a855f7' },
    { top: '90%', left: '-4%', size: '14vw', color: '#3b82f6' },
    { top: '18%', left: '-2%', size: '11vw', color: '#06b6d4' },
    { top: '74%', left: '7%', size: '17vw', color: '#06b6d4' },
    { top: '10%', left: '79%', size: '15vw', color: '#06b6d4' },
    { top: '27%', left: '0%', size: '13vw', color: '#a855f7' },
    { top: '-11%', left: '-12%', size: '19vw', color: '#a855f7' },
    { top: '84%', left: '13%', size: '14vw', color: '#8b5cf6' },
    { top: '14%', left: '40%', size: '13vw', color: '#3b82f6' },
    { top: '52%', left: '56%', size: '14vw', color: '#8b5cf6' },
    { top: '83%', left: '76%', size: '12vw', color: '#3b82f6' },
    { top: '4%', left: '31%', size: '17vw', color: '#8b5cf6' },
    { top: '12%', left: '0%', size: '13vw', color: '#a855f7' },
    { top: '25%', left: '-20%', size: '26vw', color: '#3b82f6' },
    { top: '59%', left: '2%', size: '19vw', color: '#6366f1' },
    { top: '75%', left: '75%', size: '15vw', color: '#8b5cf6' },
    { top: '62%', left: '-3%', size: '14vw', color: '#8b5cf6' },
    { top: '51%', left: '44%', size: '12vw', color: '#8b5cf6' },
    { top: '16%', left: '93%', size: '10vw', color: '#8b5cf6' },
    { top: '71%', left: '-4%', size: '14vw', color: '#06b6d4' },
    { top: '14%', left: '13%', size: '16vw', color: '#6366f1' },
    { top: '96%', left: '18%', size: '16vw', color: '#06b6d4' },
    { top: '0%', left: '74%', size: '19vw', color: '#a855f7' },
    { top: '7%', left: '77%', size: '10vw', color: '#06b6d4' },
    { top: '18%', left: '22%', size: '21vw', color: '#6366f1' }
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