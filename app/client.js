// client.js
import sanityClient from '@sanity/client'

export const client = (props) => (
    sanityClient({
        projectId: 'alezxehy', // you can find this in sanity.json
        dataset: 'production', // or the name you chose in step 1
        useCdn: false, // `false` if you want to ensure fresh data'
        token: props.getToken
        
    })
)

export async function getStaticProps(context) {
    return {
      props: {
          getToken = await process.env.SANITY_TOKEN
      },
    }
}