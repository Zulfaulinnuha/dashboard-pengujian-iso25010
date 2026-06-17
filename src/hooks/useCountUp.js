import { useState, useEffect } from 'react';

/**
 * Animates a numeric value counting up from 0 to the target number.
 * @param {number|string} endValue The target value to count up to.
 * @param {number} duration The duration of the animation in milliseconds.
 * @returns {number|string} The animated current value.
 */
export function useCountUp(endValue, duration = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(endValue, 10);
    if (isNaN(end)) {
      setCount(endValue);
      return;
    }
    if (end === 0) {
      setCount(0);
      return;
    }

    let startTimestamp = null;
    let timerId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        timerId = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    timerId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(timerId);
  }, [endValue, duration]);

  return count;
}
