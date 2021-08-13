import Head from 'next/head'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/pokemon')
  }

  return (
    <>
      <Head>
        <title>My Next.js Site!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>Welcome, Explorers hello!</div>
      <button onClick={handleClick}>Click me!</button>
    </>
  )
}

export default Home
