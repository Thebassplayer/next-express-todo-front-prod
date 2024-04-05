import Image from 'next/image'
import React from 'react'
import twoDoLogo from '../../public/2do.svg'

type thumbNailProps = {
  image?: string
}

const ThumbNail = ({ image }: thumbNailProps) => {
  return (
    <div>
      <Image
        priority
        src={image ? image : twoDoLogo}
        alt="2do Logo"
        width={50}
        height={50}
        className="cursor-pointer rounded-full border-2 border-black delay-150 duration-300 ease-in-out hover:scale-110"
      />
    </div>
  )
}

export default ThumbNail
