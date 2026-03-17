export default function WaveDivider({ topColor = '#111', bottomColor = '#d4b9a8', flip = false }) {
  return (
    <div style={{
      display: 'block',
      lineHeight: 0,
      transform: flip ? 'scaleY(-1)' : 'none',
      background: topColor,
    }}>
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '80px' }}
      >
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}