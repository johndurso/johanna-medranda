import { motion } from 'framer-motion';
import InstagramIcon from './icons/InstagramIcon';
import YouTubeIcon from './icons/YouTubeIcon';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" style={{
      background: '#111111',
      padding: '5rem 2rem 6rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            color: 'var(--beige-light)',
            lineHeight: 1.05,
            marginBottom: '2rem',
          }}
        >
          Contact or Book Johanna
        </motion.h2>

        <motion.a
          href="mailto:johannamedranda.comedy@gmail.com"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          whileHover={{ color: '#ffffff' }}
          style={{
            display: 'inline-block',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.7)',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            marginBottom: '2.5rem',
          }}
        >
          johannamedranda.comedy@gmail.com
        </motion.a>

        {/* Social icons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '1rem',
          }}
        >
          <motion.a
            href="https://www.instagram.com/johanna.medranda"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@johanna.medranda"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <YouTubeIcon />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}