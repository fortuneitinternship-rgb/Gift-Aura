const Rating = ({ value = 0, reviews, showCount = true }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div style={styles.container}>
      <div style={styles.stars}>
        {stars.map((star) => (
          <span key={star} style={{ color: star <= Math.round(value) ? '#ffc107' : '#e0e0e0', fontSize: '0.9rem' }}>
            ★
          </span>
        ))}
      </div>
      <span style={styles.value}>{value.toFixed(1)}</span>
      {showCount && reviews !== undefined && <span style={styles.reviews}>({reviews})</span>}
    </div>
  );
};

const styles = {
  container: { display: 'flex', alignItems: 'center', gap: '0.25rem' },
  stars: { display: 'flex', gap: '1px' },
  value: { fontSize: 'var(--fs-sm)', fontWeight: 600, color: 'var(--text-primary)' },
  reviews: { fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)' },
};

export default Rating;