export const load = async (LoadEvent) =>{
    const {fetch} = LoadEvent;
    const mostactive = await fetch ('http://localhost:4000/most-active-stock');
    const topgaining = await fetch ('http://localhost:4000/top-gaining-stock');
    const toplosing = await fetch ('http://localhost:4000/top-losing-stock');

    const most = await mostactive.json();
    const gain = await topgaining.json();
    const lose = await toplosing.json();

    return {
        most ,//: mostactive.json() ,
        gain ,//: topgaining.json() ,
        lose //: toplosing.json()
    };
    
};