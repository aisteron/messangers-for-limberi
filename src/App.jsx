import viber from '../static/img/viber.webp'
import wa from '../static/img/wa.webp'
import inst from '../static/img/inst.webp'

import './App.sass'

const App = () => {
  let host = window.location.host
  
  let obj = {
    limberi:{
      phone: '375291366666',
      inst: 'limberi.by'
    },
    minsk_bus:{
      phone: '375293910606',
      inst:'minsk_bus.by'
    }
  }

  let res = host == 'limberi.by' ? obj.limberi : obj.minsk_bus


  return (
    <div className={`cnt soc ${host == 'minsk-bus.by' ? 'mb': ''}`}>

      <a href={`viber://chat?number=%2B${res.phone}`} target="_blank">
        <img src={viber} width="45" height="45" />
      </a>
      
      <a href={`https://api.whatsapp.com/send?phone=${res.phone}`} target="_blank">
        <img src={wa} width="45" height="45" />
      </a>

      <a href={`https://www.instagram.com/${res.inst}`} target="_blank">
        <img src={inst} width="45" height="45" />
      </a>

    </div>
  );
};

export default App;
