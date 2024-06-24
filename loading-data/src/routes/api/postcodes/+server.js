export async function GET(){
    const response = await fetch('http://localhost:4000/postcodes')
    const postcodes = await response.json();
    const appPost = postcodes.map((postcodes) => {
        return {
            buildingname : postcodes.building_name,
            line1 : postcodes.line_1,
            town : postcodes.post_town,
            postcode : postcodes.postcode,
            Country : postcodes.postcountry
        };
    });
    return new Response(JSON.stringify(appPost),{
        headers : {
            'Content-Type' : 'application/json'
        }
    })
}