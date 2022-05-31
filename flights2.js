let flightData = {
    destination: ['London','Berlin','Tokyo'],
    airline: [ ['Delta','Air France','American'], ['British Airways','Delta','Tap Air'], ['Delta','Qatar']],
    ticketAvailability: [ [true, false, false], [true, false, true], [true, true] ],
    ticketPrice: [ [850, 800, 900], [500, 600, 700], [750, 1000]],
    bookedTickets: [[],[],[]]
}
function destinationInfo(destinationInput){
    for (let i = 0; i < flightData.destination.length; i++) {
        if(destinationInput == flightData.destination[i]){
            console.log(`The following airlines have tickets available for flights to ${destinationInput}:`)
            for (let j=0; j<flightData.airline[i].length; j++) {
                if (flightData.ticketAvailability[i][j] == true){
                    console.log(`${flightData.airline[i][j]} $${flightData.ticketPrice[i][j]}`)
                }
            }
        }
    }
}
function bookFlight(destinationInput, airlineInput){
    for (let i = 0; i < flightData.destination.length; i++) {
        for (let j = 0; j < flightData.airline[i].length; j++) {
            if (destinationInput == flightData.destination[i] && airlineInput == flightData.airline[i][j]) {
                if (flightData.ticketAvailability[i][j] == true){
                console.log(`Your flight to ${flightData.destination[i]} with ${flightData.airline[i][j]} is booked for $${flightData.ticketPrice[i][j]}`)
                flightData.ticketAvailability[i][j]= false
            }
                else {console.log(`Your flight to ${flightData.destination[i]} with ${flightData.airline[i][j]} is unavailable`)}
                console.log(flightData.ticketAvailability[i][j])
            }
        }
    }
}
//destinationInfo('London')
bookFlight('Tokyo','Qatar')

