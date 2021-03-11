import Link from 'next/link'

const Navbar = ()=>{
    return(
        <div>
          <Link href="/about"><a>About Page</a></Link>
          <Link href="/contact"><a>contact Page</a></Link>

        </div>
     
    )

}

export default Navbar