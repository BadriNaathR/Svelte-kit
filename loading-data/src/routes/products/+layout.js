export const load = async (loadEvent) => {
    const {fetch , parent} = loadEvent
    const parentdata = await parent();
    const {username} = parentdata;
    const title = "Featured Products";
    const response = await fetch("http://localhost:4000/featured-products")
    const featuredProducts = await response.json();
    return {
        title,
        featuredProducts,
        username
    }
}