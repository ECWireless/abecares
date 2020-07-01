export default async function getStaticProps() {
    return await process.env.SANITY_TOKEN
}