import { useEffect, useState } from 'react';
import './style.scss'

function PopContainer({ children, visible, timeout = 0 }) {

  const [cssVisible, setCssVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      const timeoutId = setTimeout(() => {
        setCssVisible(true);
      }, timeout);
      return () => clearTimeout(timeoutId);
    } else {
      setCssVisible(false);
    }
  }, [visible])

  return <div
    className={`
      PopContainer
      ${cssVisible ? '' : 'hidden'}
    ` }>
    {children}
  </div>;
}

export default PopContainer;