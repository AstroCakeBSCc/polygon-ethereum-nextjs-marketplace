import '../styles/globals.css'
import Link from 'next/link'

function Marketplace({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">NFTCreate</p>
        <a className="mr-6 text-blue-500"/>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-red-500">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-blue-500">
              Sell NFT's
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-blue-500">
              My Collectibles
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-purple-500">
            <button>Minter Hub</button>
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace