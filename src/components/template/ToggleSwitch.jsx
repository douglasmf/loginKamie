import React, { useState } from 'react';
import "../../assets/sass/ToggleSwitch.sass";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input
        type='checkbox'
        className='chk'
        name='chk'
        id='chk'
        checked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor="chk" className={`switch ${isChecked ? 'checked' : ''}`}>
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
