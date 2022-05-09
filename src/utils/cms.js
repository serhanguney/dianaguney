import {createClient} from "contentful";

export const createContentfulClient = () => {
    const contentfulClientParams = {
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN,
        environment: 'master',
    };
    return createClient(contentfulClientParams)
}

export const getAllAssets = async () => {
    return await createContentfulClient().getAssets({limit: 500});
}
export const getAllEntriesByType = async (contentType,options ={}) => {
    return await createContentfulClient().getEntries({content_type: contentType,...options})
}
export const getFormattedImages = (projectIndex,assets)=> {
    const images = assets.items.map(item => item.fields.file).filter(item => item.fileName.includes(projectIndex));
    return sortImagesByName(images);
}

const sortImagesByName= (images)=> {
    return images.sort((a,b)=> {
        const aName = a.fileName.split('.')[0].split('_')[1];
        const bName= b.fileName.split('.')[0].split('_')[1];
        return aName - bName;
    })
}
