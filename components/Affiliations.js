import { motion } from 'framer-motion';
import WaveDivider from './WaveDivider';

const affiliations = [
  {
    name: 'Mayo Packet: A Sandwich Series',
    link: 'https://www.youtube.com/playlist?list=PLq4ynPpQxTsJve0t9v3RMeTX6Q_HUf0s5',
    logo: '/images/affiliations/mayo-packet-youtube-series.png',
    role: 'A weekly YouTube series hosted with Chef Ross Flack',
    bg: '#f5c518',
  },
  {
    name: "Don't Tell Comedy: Detroit",
    link: 'https://www.instagram.com/donttelldetroit',
    logo: '/images/affiliations/dont-tell-comedy-detroit_logo.png',
    role: 'Co-Producer w/ Camila Ballario',
    bg: '#111',
  },
  {
    name: 'Mic Drop: Detroit',
    link: 'https://www.micdropcomedydetroit.com/',
    logo: '/images/affiliations/mic-drop-comedy-detroit.jpg',
    role: 'Booker and Promoter',
    bg: '#111',
  },
  {
    name: "Each Other's Mothers Podcast",
    link: 'https://linktr.ee/eachothersmotherspod',
    logo: '/images/affiliations/each-others-mothers_logo.png',
    role: 'Co-Host w/ Bre Snitchler',
    bg: '#111',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Affiliations() {
  return (
    <>
      <section id="affiliations" style={{
        background: '#111111',
        padding: '4rem 2rem 5rem',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              color: 'var(--beige-light)',
              marginBottom: '3rem',
            }}
          >
            Affiliations
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            justifyItems: 'center',
          }}>
            {affiliations.map((aff, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '1rem',
                }}
              >

                {/* Circle logo */}
                <a href={aff.link} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                      width: '160px',
                      height: '160px',
                      borderRadius: '50%',
                      background: aff.bg,
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '3px solid rgba(255,255,255,0.08)',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={aff.logo}
                      alt={aff.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </motion.div>
                </a>

                {/* Name */}
                <a
                  href={aff.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    color: '#fff',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  {aff.name}
                </a>

                {/* Role */}
                <p style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                }}>
                  {aff.role}
                </p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider topColor="#111111" bottomColor="#111111" />
    </>
  );
}