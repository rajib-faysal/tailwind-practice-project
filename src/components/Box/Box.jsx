import { useState } from 'react';

const Box = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => setIsActive(!isActive);

  return (
    <div
      onClick={toggleIsActive}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: isActive ? 'red' : 'black',
        cursor: 'pointer',
        margin: '10px',
      }}
    ></div>
  );
};

export default Box;
