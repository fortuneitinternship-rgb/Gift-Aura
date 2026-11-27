export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

export const calculateDiscount = (original, current) => {
  if (!original || original <= current) return 0;
  return Math.round(((original - current) / original) * 100);
};