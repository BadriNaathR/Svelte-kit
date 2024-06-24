export const load = async ({fetch}) =>{
    const response = await fetch("/api/current-time");
    const time = await response.text()
    return {time};
}