onNet('disky.changelplate', (desiredPlate) => {
    if(desiredPlate.length > 8){
        emitNet('chat:addMessage', source, {
            args: ['Server', `Your provided desired plate text was longer than 8 characters, so it won't show the full thing.\nSuccessfully changed your license plate to: ${desiredPlate}`],
            color: [255, 0, 0]
        })
    }else{
        emitNet('chat:addMessage', source, {
            args: ['Server', `Successfully changed your license plate to: ${desiredPlate}`],
            color: [255, 0, 0]
        })
    }
})