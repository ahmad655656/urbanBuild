import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="">
        <Image src="/assets (1)/assets/logo.svg" width={250} height={40} alt="" />
    </Link>
  )
}

export default Logo