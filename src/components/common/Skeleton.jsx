const Skeleton = ({ width = '100%', height = '20px', borderRadius = 'var(--radius-sm)', className = '' }) => (
  <div
    className={`skeleton ${className}`}
    style={{ width, height, borderRadius }}
  >
    <style>{`
      .skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
      }
      @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `}</style>
  </div>
);

export const ProductCardSkeleton = () => (
  <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'white', boxShadow: 'var(--shadow-sm)' }}>
    <Skeleton height="220px" borderRadius="0" />
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Skeleton height="16px" width="80%" />
      <Skeleton height="14px" width="50%" />
      <Skeleton height="20px" width="40%" />
    </div>
  </div>
);

export default Skeleton;