import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InstagramIcon from './icons/InstagramIcon';
import YouTubeIcon from './icons/YouTubeIcon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = ['About', 'Events', 'Clips', 'Affiliations', 'Contact'];

  const iconLinkStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <>
      {/* Navbar slides down on load */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: '0.9rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: scrolled ? 'rgba(17,17,17,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'background 0.3s ease',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        {/* Logo fades in */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
        >
          <div style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: '1.5rem',
            letterSpacing: '0.08em',
            lineHeight: 1.1,
          }}>
            JOHANNA MEDRANDA
          </div>
          <div style={{
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.05em',
          }}>
            Detroit-based Stand-up comedian
          </div>
        </motion.div>

        {/* Desktop links — each staggered in */}
        <ul className="desktop-nav" style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          alignItems: 'center',
        }}>
          {links.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: 'easeOut' }}
            >
              <motion.a
                href={`#${link.toLowerCase()}`}
                style={{
                  fontSize: '1rem',
                  letterSpacing: '0.06em',
                  color: 'rgba(255,255,255,0.75)',
                }}
                whileHover={{ color: '#ffffff', y: -1 }}
                transition={{ duration: 0.15 }}
              >
                {link}
              </motion.a>
            </motion.li>
          ))}

          {/* Instagram */}
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + links.length * 0.08, duration: 0.4, ease: 'easeOut' }}
          >
            <motion.a
              href="https://www.instagram.com/johanna.medranda"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...iconLinkStyle, opacity: 0.75 }}
              whileHover={{ opacity: 1, scale: 1.15 }}
              transition={{ duration: 0.15 }}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </motion.a>
          </motion.li>

          {/* YouTube */}
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + (links.length + 1) * 0.08, duration: 0.4, ease: 'easeOut' }}
          >
            <motion.a
              href="https://www.youtube.com/@johanna.medranda"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...iconLinkStyle, opacity: 0.75 }}
              whileHover={{ opacity: 1, scale: 1.15 }}
              transition={{ duration: 0.15 }}
              aria-label="YouTube"
            >
              <YouTubeIcon />
            </motion.a>
          </motion.li>
        </ul>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 24, height: 2,
              background: '#fff',
              marginBottom: i < 2 ? 5 : 0,
              transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translateY(10px)'
                : i === 2 ? 'rotate(-45deg) translateY(-10px)'
                : 'scaleX(0)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu — AnimatePresence handles mount/unmount */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(17,17,17,0.98)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35, ease: 'easeOut' }}
                whileHover={{ scale: 1.05, color: '#E8D5C8' }}
                style={{
                  fontFamily: 'Anton, sans-serif',
                  fontSize: '2rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {link}
              </motion.a>
            ))}

            {/* Social icons in mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: links.length * 0.07 + 0.1, duration: 0.35 }}
              style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}
            >
              <motion.a
                href="https://www.instagram.com/johanna.medranda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.15, opacity: 1 }}
                style={{ opacity: 0.75 }}
              >
                <InstagramIcon />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@johanna.medranda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                whileHover={{ scale: 1.15, opacity: 1 }}
                style={{ opacity: 0.75 }}
              >
                <YouTubeIcon />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important;}
        }
      `}</style>
    </>
  );
}