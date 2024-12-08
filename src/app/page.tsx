import Link from 'next/link'

const Home = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <h1>Click<Link href='/documents/123'><span className='text-[#ff4500]'> here </span></Link> to go to Document Id</h1>
    </div>    
  )
}

export default Home
