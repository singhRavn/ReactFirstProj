import axios from 'axios';

const searchImages = async () =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID SKq8PLGfcn5CC3GXjj2WMhRLntdyD-m30QVOrMGDwvU'
        },
        params:{
            query: 'oceans'
        }
    });
    
    return response.data.results;
};

export default searchImages;