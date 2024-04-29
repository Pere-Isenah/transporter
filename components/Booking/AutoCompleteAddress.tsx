import React, { useState } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';

const AutoCompleteAddress = () => {
  const MAP_KEY = import.meta.env.VITE_MAP_BOX_TOKEN_KEY
  const [address, setAddress] = useState('');

  const handleSelect = (selected) => {
    setAddress(selected.place_name);
  };

  return (
    <>
      <div className=' w-full py-3 px-2'>
        <label className="text-sm">Where from?</label>
        <AddressAutofill accessToken={MAP_KEY} onSelect={handleSelect}>
          <input
            className='border rounded-md outline-none p-3 w-full text-black shadow focus:border-black border text-sm'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            autoComplete="address-line1"
          />
        </AddressAutofill>
      </div>
      <div className=' w-full py-3 px-2'>
        <label className="text-sm">Where To?</label>
        <input
          className='border rounded-md outline-none p-3 w-full text-black shadow focus:border-black border text-sm'
        />
      </div>
    </>
  );
};

export default AutoCompleteAddress;