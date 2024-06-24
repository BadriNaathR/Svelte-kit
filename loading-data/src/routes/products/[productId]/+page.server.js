import {redirect} from '@sveltejs/kit';
export const load = async(serverLoadEvent) => {
    const title = "Prodcut Details";
    const {fetch , params} = serverLoadEvent;
    const {productId} = params;
    const notify = "End of season sale! 25% off"
    if(productId>3){
        throw redirect(307, '/products');
    }
    const response = await fetch('http://localhost:4000/products?id=1');
    //console.log(response.json());
    const product = await response.json();
    //console.log(product);
    return {
        title,
        product,
        notify
    };
}