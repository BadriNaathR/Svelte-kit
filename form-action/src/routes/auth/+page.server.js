import { redirect } from '@sveltejs/kit';
import { url } from 'inspector';

export const actions = {
    login : async ({request , cookies, url })=>{
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        if(!username || !password){
            return {
                message : "Missing username or password"
            };
        }
        cookies.set('username',username , {path : '/'});
        throw redirect(303,url.searchParams.get('redirectTo') || '/');
    },
    register : async ({request , cookies })=>{
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        if(!username || !password){
            return {
                message : "Missing username or password"
            };
        }
        cookies.set('username',username , {path : '/'});
        return {message : 'Register successfull'}
    }
}