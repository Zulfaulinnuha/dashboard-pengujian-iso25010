/**
 * Maps evaluation categories automatically to theme colors and Tailwind classes.
 * @param {string} category 
 * @returns {object} Object containing text class, bg class, border class, and hex color code.
 */
export function getCategoryColor(category) {
  const cat = (category || '').toLowerCase().trim();
  
  if (cat === 'very good' || cat === 'sangat baik') {
    return {
      text: 'text-emerald-700',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      hex: '#52B766' // Green
    };
  }
  
  if (cat === 'good' || cat === 'baik') {
    return {
      text: 'text-blue-700',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      hex: '#3B82F6' // Blue
    };
  }
  
  if (cat === 'fair' || cat === 'cukup' || cat.includes('acceptable') || cat.includes('ok')) {
    return {
      text: 'text-orange-700',
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      hex: '#FB923C' // Orange
    };
  }
  
  if (cat === 'needs improvement' || cat === 'perlu perbaikan') {
    return {
      text: 'text-red-700',
      bg: 'bg-red-50',
      border: 'border-red-200',
      hex: '#EF4444' // Red
    };
  }
  
  if (cat === 'poor' || cat === 'buruk') {
    return {
      text: 'text-red-700',
      bg: 'bg-red-50',
      border: 'border-red-200',
      hex: '#EF4444' // Red
    };
  }
  
  if (cat === 'critical') {
    return {
      text: 'text-red-950',
      bg: 'bg-red-100',
      border: 'border-red-300',
      hex: '#7F1D1D' // Dark Red
    };
  }
  
  // Default fallback
  return {
    text: 'text-slate-600',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    hex: '#94A3B8'
  };
}
