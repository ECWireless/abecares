// client.js
import sanityClient from '@sanity/client'
import myToken from './config'

export default sanityClient({
    projectId: 'alezxehy', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: false, // `false` if you want to ensure fresh data'
    token: myToken()
})