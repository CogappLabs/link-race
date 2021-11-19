import data from './20211118-173517-pathnodes.json'

export const fetchMetadata = async (url) => {
    return data[url]
}