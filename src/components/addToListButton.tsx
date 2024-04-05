import { cx } from '@/app/utils/styles'
import Link from 'next/link'

const AddToListButton = () => {
  return (
    <Link
      className={cx(
        'rounded-md border-2 border-black bg-black px-20 py-2 font-bold text-white transition-colors hover:border-2 hover:border-black hover:bg-white hover:text-black',
      )}
      href="?modalcreate=true"
    >
      Add to List
    </Link>
  )
}

export default AddToListButton
