import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.133.107:8000',
})

export async function getContent(){
    const { data } = await api.get('/api/content');
    return data;
}