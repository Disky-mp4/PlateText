RegisterCommand('changeplate', (x, y, msg) => {
    const veh = GetVehiclePedIsIn(GetPlayerPed(-1));
    if(veh){
        const args = msg.slice(12).split(' ');
        const desiredPlate = args[0];
        SetVehicleNumberPlateText(veh, desiredPlate);
        emitNet('disky.changelplate', desiredPlate);
    }else{
        emit('chat:addMessage', {
            args: ['Server', 'You must be in a vehicle to alter the plate text!'],
            color: [255, 0, 0]
        })
    }
})