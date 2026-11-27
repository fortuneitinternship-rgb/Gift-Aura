const Loader = ({ fullScreen = false }) => {
  return (
    <div style={{ ...styles.wrapper, ...(fullScreen ? styles.fullScreen : {}) }}>
      <div style={styles.spinner}></div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' },
  fullScreen: { position: 'fixed', inset: 0, background: 'rgba(255,255,255,0.9)', zIndex: 9999 },
  spinner: {
    width: '40px', height: '40px', border: '4px solid var(--primary-light)',
    borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 0.8s linear infinite',
  },
};

export default Loader;