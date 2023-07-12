import React from 'react';
import Bus from '../Bus/Bus';

const buses = (props) => {
  console.log('[Buses.js] rendering...');
  return props.buses.map((bus, index) => {
    console.log(bus.num);

    return <Bus key={index} num={bus.num} name={bus.name} />;
  });
};
export default buses;
