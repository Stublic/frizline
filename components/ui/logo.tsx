import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Cruip">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="30" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#efa9fa" d="M 374.953125 0 L 374.953125 187.492188 L 187.429688 0 Z M 0 0 L 187.429688 187.492188 L 187.429688 0 Z M 374.953125 374.953125 L 374.953125 187.492188 L 187.429688 187.492188 Z M 187.429688 374.953125 L 187.429688 187.492188 L 0 187.492188 Z M 187.429688 374.953125 " fill-opacity="1" fill-rule="nonzero"/></svg>
        <span className='pl-3 text-2xl text-white'>Frizline</span>
    </Link>
  )
}
