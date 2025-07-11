import React, { useEffect, useState } from 'react';

const Loader = ({ onFinish }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onFinish(); // tell App.jsx that loading is done
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 15); // speed of counter (15ms per step)

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="flex justify-center items-center h-screen bg-[#11111b] text-white text-4xl font-bold">
      <span>{percentage}%</span>
    </div>
  );
};

export default Loader;
