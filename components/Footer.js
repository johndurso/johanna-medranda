import { easeOut, motion } from 'framer-motion';
import InstagramIcon from './icons/InstagramIcon';
import YouTubeIcon from './icons/YouTubeIcon';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        background: '#111111',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <div>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.2rem' }}>
          Johanna Medranda Comedy
        </p>
        <a
          href="mailto:johannamedranda.comedy@gmail.com"
          style={{
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.35)',
            textDecoration: 'underline',
            textUnderlineOffset: '2px',
          }}
        >
          johannamedranda.comedy@gmail.com
        </a>
        <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.6rem' }}>
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
        </div>
      </div>

      {/* Sleeping on the Job logo */}
      <motion.a
        href="https://sleepingonthejobmedia.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <motion.img
            src="/images/sotjm-logo_dark-mode.png"
            href="https://sleepingonthejobmedia.com"
            target="_blank"
            alt="Sleeping on the Job Media"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            style={{
            height: '40px',
            width: 'auto',
            opacity: 0.4,
            }}
        />
      </motion.a>

    </motion.footer>
  );
}