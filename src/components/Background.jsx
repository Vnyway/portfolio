import { useEffect, useRef, useState } from "react";

const Background = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(
        window.VANTA.WAVES({
          el: vantaRef.current,
          color: 0x000000,
          waveHeight: 20,
          shininess: 20,
          waveSpeed: 1,
          zoom: 0.75,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="fixed w-screen h-screen flex items-center justify-center -z-10"
    />
  );
};

export default Background;
