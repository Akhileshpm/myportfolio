import { useEffect, useRef, useState } from 'react';
import dp from '../img/dp.png';
import '../styles/dpHolder.css';

export function DpHolder() {
  const [isLarge, setIsLarge] = useState(false);
  const dpRef = useRef(null);

  const handleImageClick = () => {
    setIsLarge(!isLarge);
    if (!isLarge) {
      document.body.classList.add('plain-background');
    } else {
      document.body.classList.remove('plain-background');
    }
  };

  const handleClickOutside = (event) => {
    if (dpRef.current && !dpRef.current.contains(event.target)) {
      setIsLarge(false);
      document.body.classList.remove('plain-background');

    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`dp-holder ${isLarge ? 'large' : ''}`}
      ref={dpRef}
      onClick={handleImageClick}
    >
      <img alt='dp' src={dp}></img>
      <div className={`cover-up ${isLarge ? 'rise' : ''}`}>
        <span>Interests: '>' Modeling '>' Wildlife Photography '>' Techpreneur' </span>
        <br />
        <span>
          Hobbies: '>' Playing Sports: Football, Cricket, Badminton, Volleyball
          and the list goes on
          <br/>
          '>' Binge watch '>' Hang out with friends '>' Reading
        </span>
      </div>
    </div>
  );
}
