import { createClient } from 'next-sanity';
import { config } from './config';

export const sanityClient = createClient(config)

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: 'skVCdBkxcmDLHSeLrE2BIHj82p46quj23RY3waVBeudTZxk42cqkriYVtbtZZKN8Y52JCRwNRrCQ5zrCfEbZQPxWvqeRyYhIFHdJ3ffvIsQyyPVDt6S8DsfKIq7mrqq36I3nLqEzfcXlglPz7P4mKOvxnBCyaqOMlSDBCD4OcAkHFIEXL84J'
})

export const getClient = ( usePreview ) => usePreview ? previewClient : sanityClient