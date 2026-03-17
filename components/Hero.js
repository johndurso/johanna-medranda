import WaveDivider from './WaveDivider';

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative',
      width: '100%',
      height: '60vh',
      minHeight: '500px',
      overflow: 'hidden',
      background: '#111',
    }}>
      <img
        src="/images/johanna-live-2025.png"
        alt="Johanna Medranda performing on stage"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center left',
          opacity: 0.75,
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 60%, rgba(17,17,17,0.85) 100%)',
      }} />

      {/* Bottom wave */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        lineHeight: 0,
      }}>
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '80px' }}
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="#111111"
          />
        </svg>
      </div>
    </section>
  );
}