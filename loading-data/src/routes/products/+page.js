import Product from './product.svelte';
export const load = async(LoadEvent) => {
    const title = "List of the avaiable products";
    console.log(title)
    const {fetch ,data} = LoadEvent;
    const response = await fetch("http://localhost:4000/products")
    const products = await response.json();
    return {
        ...data,
        Component : Product 
    };
};
export const ssr = true;
export const csr = true;