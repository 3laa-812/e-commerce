import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='flex justify-end'>
        <nav className='flex gap-3 w-full mt-2'>
            <Link href={'/sign-in'} className='header-button'>
              <UserIcon className='h-5 w-5'/>
              <span>Sign In</span>
            </Link>

            <Link href={'/cart'} className='header-button'>
              <ShoppingCartIcon className='h-5 w-5'/>
              <span>Cart</span>
            </Link>
        </nav>
    </div>
  )
}

export default Menu