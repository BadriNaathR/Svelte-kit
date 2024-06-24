export const load = async(serverLoadEvent) => {
    const title = "List of the avaiable products";
    const {fetch} = serverLoadEvent;
    const response = await fetch("http://localhost:4000/products")
    const products = await response.json();
    const notify = "End of season sale!"
    return {
        title,
        products,
        notify
    };
}