export const load = async(serverloadEvent) =>{
    console.log("In load function of page.server.js") //only displays in server not in browser (server load function)
    const {fetch} = serverloadEvent
    const response = await fetch("api/postcodes")
    const postcodes = await response.json();
    const addressList = postcodes.map((postcode) => {
        return `${postcode.buildingname} , ${postcode.line1} , ${postcode.town} `
    });
    return {addressList};
} 