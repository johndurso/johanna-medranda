import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function EventButton({ status, link }) {
  const s = status?.trim().toLowerCase();

  const base = {
    display: 'inline-block',
    padding: '0.5rem 1.5rem',
    fontSize: '0.7rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    border: '2px solid',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  };

  if (s === 'buy') {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{
          ...base,
          background: '#111',
          borderColor: '#111',
          color: '#fff',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#333';
          e.currentTarget.style.borderColor = '#333';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = '#111';
          e.currentTarget.style.borderColor = '#111';
        }}
      >
        Buy Now
      </motion.a>
    );
  }

  if (s === 'free') {
    return (
      <span style={{
        ...base,
        background: 'transparent',
        borderColor: 'rgba(0,0,0,0.2)',
        color: 'rgba(0,0,0,0.35)',
        cursor: 'default',
      }}>
        Free Entry
      </span>
    );
  }

  if (s === 'unavailable') {
    return (
      <span style={{
        ...base,
        background: 'transparent',
        borderColor: 'rgba(0,0,0,0.15)',
        color: 'rgba(0,0,0,0.25)',
        cursor: 'default',
      }}>
        Available Soon
      </span>
    );
  }

  return null;
}

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/events')
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error);
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Wave into events */}
      <div style={{ background: '#111', lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '80px' }}>
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="#e8d5c8"
          />
        </svg>
      </div>

      <section id="events" style={{
        background: '#e8d5c8',
        padding: '3rem 2rem 5rem',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              color: '#111',
              marginBottom: '0.5rem',
            }}
          >
            Upcoming Shows
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            style={{
              width: '50px',
              height: '3px',
              background: '#111',
              margin: '0 auto 3rem',
            }}
          />

          <AnimatePresence mode="wait">
            {loading && (
              <motion.p
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ textAlign: 'center', color: 'rgba(0,0,0,0.5)', fontSize: '0.85rem', letterSpacing: '0.1em' }}
              >
                Loading shows...
              </motion.p>
            )}

            {error && (
              <motion.p
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ textAlign: 'center', color: '#c0392b', fontSize: '0.85rem' }}
              >
                Error: {error}
              </motion.p>
            )}

            {!loading && !error && events.length === 0 && (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ textAlign: 'center', color: 'rgba(0,0,0,0.5)', fontSize: '0.85rem' }}
              >
                No upcoming shows at this time. Check back soon!
              </motion.p>
            )}

            {!loading && !error && events.length > 0 && (
              <motion.div
                key="events"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
              >
                {events.map((event, i) => {
                  const keys = Object.keys(event);
                  const title       = event[keys[0]] || '';
                  const date        = event[keys[1]] || '';
                  const location    = event[keys[2]] || '';
                  const description = event[keys[3]] || '';
                  const link        = event[keys[keys.length - 2]] || '#';
                  const status      = event[keys[keys.length - 1]] || '';

                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
                      whileHover={{ backgroundColor: 'rgba(0,0,0,0.04)' }}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1.5rem',
                        padding: '1.5rem',
                        borderBottom: '1px solid rgba(0,0,0,0.12)',
                        flexWrap: 'wrap',
                      }}
                    >
                      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', flex: 1 }}>
                        {/* Date */}
                        {date && (
                          <div style={{
                            minWidth: '250px',
                            flexShrink: 0,
                            color: '#111',
                          }}>
                            <div style={{
                              fontFamily: 'Anton, sans-serif',
                              fontSize: '1.3rem',
                              lineHeight: 1,
                            }}>
                              {date}
                            </div>
                          </div>
                        )}

                        {/* Info */}
                        <div>
                          <h3 style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '1rem',
                            color: '#111',
                            marginBottom: '0.2rem',
                            letterSpacing: '0.03em',
                            textTransform: 'uppercase',
                          }}>
                            {title}
                          </h3>
                          {location && (
                            <p style={{ fontSize: '1rem', color: 'rgba(0,0,0,0.55)', marginBottom: description ? '0.2rem' : 0 }}>
                              {location}
                            </p>
                          )}
                          {description && (
                            <p style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.55)', maxWidth: '400px', lineHeight: 1.6 }}>
                              {description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Button */}
                      <div style={{ flexShrink: 0 }}>
                        <EventButton status={status} link={link} />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* Wave out of events */}
      <div style={{ background: '#e8d5c8', lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '80px' }}>
          <path
            d="M0,40 C180,0 360,80 540,40 C720,0 900,80 1080,40 C1260,0 1380,60 1440,40 L1440,80 L0,80 Z"
            fill="#111111"
          />
        </svg>
      </div>
    </>
  );
}