import {Notifyer} from './Notifyer.js';
import {Timer} from './Timer.js';

const App = {
     async start(){
      try{
    //    await  Notifyer.init()
    //    Notifyer.notify({
    //        title:"Hora do descanso",
    //        body:"Em 5 minutos INSTA POST REMINDER"
    //    })
    const time = 25 * 60
           Timer.init(time)
     }  catch(err){
         console.log(err.message);
     }
     }
} 
export {App}