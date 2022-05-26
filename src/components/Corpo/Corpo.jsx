import React from 'react';
import { useEffect, useState } from "react";
import { Buildings, CloudMoon, SunHorizon ,TreeEvergreen} from "phosphor-react";
import './Corpo.css'


const KWH = 1.57;
function SistemaSolar() {
    const [hour, setHour] = useState(6);
  const [isActive, setIsActive] = useState(false);
  const [energy, setEnergy] = useState(0);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setHour(hour + 1);
    }, 1000);

    if (hour > 23) {
      setHour(0);
    }

    return () => clearInterval(interval);
  }, [hour]);

  useEffect(() => {
    if (hour > 5 && hour < 19) {
      setIsActive(true);
      setEnergy(energy + KWH);
    } else {
      setIsActive(false);
    }

    if (hour === 24) {
      setEnergy(0);
    }
  }, [hour]);

    return (
        <div class="div">
        <h1>GERADOR DE ENERGIA SOLAR </h1>
        <h2>Hora do dia: {hour}h </h2>
        {isActive ? <SunHorizon size={100} height="100px" color="#ffd900" weight="thin" /> : <CloudMoon size={100} color="#0011ff" height="100px" weight="thin" />}
        <div >
          <Buildings size={150} height="100px" color="#000000" weight="thin" />
          <TreeEvergreen class="casa-arvore" size={90} color="#00ff40bc" weight="thin" />
           <p>Quantidade de energia gerada no dia: {energy.toFixed(2)} kw/h</p>
        </div>
      </div>
    );
  }
  
  export default SistemaSolar;
  








// export default function SolarSystem() {
  

//   return (
//     <div>
//       <h1>Geração de Energia Solar </h1>
//       <h2>Hora do dia: {hour}h </h2>
//       {isActive ? <Sun size={32} height="100px" /> : <Moon height="100px" />}
//       <div>
//         <House height="100px" />
//         <p>Quantidade de energia gerada no dia: {energy.toFixed(2)} kw/h</p>
//       </div>
//     </div>
//   );
// }
// function SolarSystem() {
//     return (
//       <div stlye={{ display: "flex" }}>
//       <h1>Geração de Energia Solar </h1>
//       <Sun height="100px" />
//       <div>
//         <House height="100px" />
//       </div>
//     </div>
//     );
//   }
  
//   export default SolarSystem;
