import Link from 'next/link'

const CreateForm = ({
  handleSubmit,
  pathname,
}: {
  handleSubmit: (event: any) => void
  pathname: string
}) => {
  return (
    <form onSubmit={handleSubmit} className="w-96 px-6">
      <label htmlFor="username" className="text-lg font-bold uppercase">
        New todo
      </label>
      <input
        type="text"
        name="username"
        id="username"
        className="w-full rounded-sm border-2 border-black p-2"
      />
      <br />
      <div className="mt-4 flex w-full flex-row justify-evenly">
        <button
          type="submit"
          className="rounded-md border-2 border-black bg-black px-10 py-2 font-bold text-white transition-colors hover:border-2 hover:border-black hover:bg-white hover:text-black"
        >
          Submit
        </button>
        <Link
          href={pathname}
          className="rounded-md border-2 border-black bg-black px-10 py-2 font-bold text-white transition-colors hover:border-2 hover:border-black hover:bg-white hover:text-black"
        >
          Cancel
        </Link>
      </div>
    </form>
  )
}

export default CreateForm
