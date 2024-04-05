import Image from 'next/image'
import Twodo from '../../public/2do.svg'
import { cx } from '@/app/utils/styles'

type TwoDoLogoProps = {
  className?: string
}

const TwoDoLogo = ({ className }: TwoDoLogoProps) => (
  <div className={cx(className)}>
    <Image priority src={Twodo} alt="2do Logo" />
  </div>
)

export default TwoDoLogo
