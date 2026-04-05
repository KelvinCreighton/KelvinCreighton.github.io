import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const alt = 'Kelvin Creighton | Cybersecurity & Software Engineering Portfolio';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
        }}
      >
        <div 
          style={{ 
            display: 'flex', 
            fontSize: 48, 
            marginBottom: 20, 
            color: '#64748b',
            letterSpacing: '-0.02em'
          }}
        >
          kelvincreighton.ca
        </div>
        <div 
          style={{ 
            display: 'flex', 
            fontWeight: 800,
            fontSize: 96,
            letterSpacing: '-0.04em'
          }}
        >
          Kelvin Creighton
        </div>
        <div 
          style={{ 
            display: 'flex', 
            fontSize: 38, 
            marginTop: 40, 
            color: '#2563eb',
            fontWeight: 500
          }}
        >
          Cybersecurity • Software Engineering • Game Dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
