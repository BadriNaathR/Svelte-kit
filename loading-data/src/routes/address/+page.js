
export const load = async(loadEvent) =>{
    console.log("In load function of page.js") // displays in both the server and clinet(browser) side (Universal load function)
    const {fetch} = loadEvent
    const response = await fetch("api/postcodes")
    const postcodes = await response.json();
    const addressList = postcodes.map((postcode) => {
        return `${postcode.buildingname} , ${postcode.line1} , ${postcode.town} `
    });
    return {addressList};
} 