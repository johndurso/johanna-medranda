import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WaveDivider from './WaveDivider';

const clips = [
  {
    title: '"Elsa"',
    duration: '34m 4s',
    embedId: '55XHzQ_vG04',
    featured: true,
  },
  {
    title: 'Put it on Tape: Detroit',
    duration: '11m 54s',
    embedId: 'P7GQ8GFXwoc',
    featured: false,
  },
  {
    title: 'Live @ The PUG',
    duration: '7m 51s',
    embedId: 'I3FaLdHgeXk',
    featured: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Clips() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      <section id="clips" style={{
        background: '#111',
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
              marginBottom: '0.6rem',
            }}
          >
            Stand-Up Clips
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            style={{
              textAlign: 'center',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '3rem',
            }}
          >
            Here are some of Johanna's live clips. Follow on{' '}
            <a href="https://www.instagram.com/johanna.medranda" target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'underline', textUnderlineOffset: '3px', color: '#fff' }}>
              Instagram
            </a>{' '}
            or{' '}
            <a href="https://www.youtube.com/@johanna.medranda" target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'underline', textUnderlineOffset: '3px', color: '#fff' }}>
              YouTube
            </a>{' '}
            to see more!
          </motion.p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '3rem',
            alignItems: 'end',
          }}>
            {clips.map((clip, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    background: '#111',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: clip.featured ? 2 : 1,
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${clip.embedId}`}
                    title={clip.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                  />
                </motion.div>
                <p style={{
                  marginTop: '0.8rem',
                  fontSize: '1.2rem',
                  color: 'rgba(0,0,0,0.75)',
                  textAlign: 'center',
                  fontWeight: 500,
                }}>
                  {clip.title}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.5)' }}>
                  ({clip.duration})
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider topColor="#111" bottomColor="#c9a990" />
    </>
  );
}