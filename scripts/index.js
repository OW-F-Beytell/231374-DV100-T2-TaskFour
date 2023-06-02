let vehicleLog = [];

logVehicle = () => {
    let vehicType = document.getElementById("vehicType").value;
    let vehicMake = document.getElementById("make").value;
    let vehicModel = document.getElementById("model").value;
    let vehicNumber = document.getElementById("registrationNumber").value;
    let vehicCondition = document.getElementById("vehicCondition").value;

    let vehicle = {
        type: vehicType,
        make: vehicMake,
        model: vehicModel,
        regNumber: vehicNumber,
        condition: vehicCondition
    };

    vehicleLog.push(vehicle);
    console.log(vehicleLog[vehicleLog.length-1]);
    console.log(vehicleLog[vehicleLog.length-1].type);
    console.log(vehicleLog[vehicleLog.length-1].make);
    console.log(vehicleLog[vehicleLog.length-1].model);
    console.log(vehicleLog[vehicleLog.length-1].regNumber);
    console.log(vehicleLog[vehicleLog.length-1].condition);

    console.log(vehicleLog);
}