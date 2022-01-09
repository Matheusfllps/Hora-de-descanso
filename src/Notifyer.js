const Notifyer = {
    async init() { //async de assíncrona pois 
    const permission =  await  Notification.requestPermission()
        if(permission !== "granted"){
            throw new Error('Permissão negada!')
        }
    },
    notify({title, body, icon}) {
      new Notification(title, {
          body
    })

    }

}
export {Notifyer} 