import { motion } from 'framer-motion';
import WaveDivider from './WaveDivider';

const fontSize = '1.1rem';

const photos = [
  { src: '/images/johanna-and-crew_dont-tell-chicago.png', alt: '' },
  { src: '/images/johanna-and-crew_indepdendent-cc.png', alt: '' },
  { src: '/images/johanna-headshot.png', alt: '' },
  { src: '/images/johanna-medranda_sam-tallent_and_kristen-toomey.png', alt: '' },
  { src: '/images/johanna-live-2-2025.png', alt: '' },
  { src: '/images/johanna-hour-mag.png', alt: '' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <>
      <WaveDivider topColor="#111111" bottomColor="#111111" />

      <section id="about" style={{ background: '#111111', padding: '0 0 0 0' }}>

        {/* Big heading */}
        <div style={{
          background: '#111111',
          textAlign: 'center',
          padding: '4rem 2rem 3rem',
        }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
              color: 'var(--beige-light)',
              letterSpacing: '0.04em',
              lineHeight: 1,
            }}
          >
            ABOUT JOHANNA
          </motion.h2>
        </div>

        {/* Content: photo grid + text */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 2rem 5rem',
          alignItems: 'start',
        }}>

          {/* Photo grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
          }}>
            {photos.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
                style={{
                  aspectRatio: '1/1',
                  overflow: 'hidden',
                  background: '#222',
                }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </motion.div>
            ))}
          </div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            style={{ paddingTop: '0.5rem' }}
          >
            <p style={{
              fontSize,
              lineHeight: 1.85,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '1.2rem',
            }}>
              Johanna Medranda is both a finalist of the Gilda Radner LaughFest Roast Battle and a fan favorite of LaughFest's "Dirty Show". She has played for Bricks & Bridges Comedy Festival, StoopFest, The "12 Days of Grizmas" showcase, NPR's WDET "What's So Funny About Detroit?", produced and performed for The Motor City Comedy Festival, and was the first comedian to perform for So Far Sound Detroit.
            </p>
            <p style={{
              fontSize,
              lineHeight: 1.85,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '1.2rem',
            }}>
              Johanna Medranda has performed with comedians such as Sam Tallent, Dave Attell, Brody Stevens, Liza Treyger, Stavros Halkias, Nicole Schreiber, Akaash Singh, Robert Kelly, and Krystyna Hutchinson. She was also set to perform for the infamous Bonnaroo Music and Arts Festival in 2020, which was sadly cancelled due to God hating us all.
            </p>
            <p style={{
              fontSize,
              lineHeight: 1.85,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '1.2rem',
            }}>
              You may have seen Johanna on the{' '}
              <a
                href="https://www.hourdetroit.com/comedy-topics/standout-stand-ups-johanna-medranda-on-building-a-comedy-universe/"
                target="_blank"
                style={{
                  color: '#fff',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                cover of Hour Detroit Magazine
              </a>
              , featuring at The Milwaukee Comedy Festival, Mark Ridley's Comedy Castle, The MadHouse Comedy Club, and Laugh Factory Chicago.
            </p>
            <p style={{
              fontSize,
              lineHeight: 1.85,
              color: 'rgba(255,255,255,0.85)',
            }}>
              Outside of performing stand-up, Johanna is the co-founder of Honorary Mentions Comedy, a producer for The Independent Comedy Club, Don't Tell Comedy Detroit, and the host of Each Other's Mothers podcast.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}