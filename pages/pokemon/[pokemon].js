import Head from 'next/head'
import styles from './Pokemon.module.css'

const Pokemon = ({ pokemon }) => {
  return (
    <>
      <Head>
        <title>Pokemon: {pokemon?.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        Welcome, {pokemon?.name}!
        <img src={pokemon?.sprites.front_default} />
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const pokemon = await res.json()

  let paths = pokemon.results.map((p) => {
    return `/pokemon/${p.name}`
  })

  return {
    paths,
    fallback: false
  }
}

// runs at build time
export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
  const pokemon = await res.json()

  return {
    props: {
      pokemon
    }
  }
}

export default Pokemon
