import {redirect} from '@sveltejs/kit';
export const load = ({cookies , url}) =>{

    if(!cookies.get("username")){
        throw redirect(307,`/auth?redirectTo=${url.pathname}`);
    }
    const APIKEY = 'YOUR_NEWS_API_KEY'
   
    const news = [
        {id :1 , title : 'News 1'},
        {id :2, title : 'News 2'},
        {id: 3, title : 'News 3'}
    ];
    return {news};
}

export const actions = {
    default : async({request}) => {
        const formData = await request.formData()
        console.log(formData);
    }
}