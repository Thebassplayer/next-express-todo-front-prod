function transformDateFormat(dateString: string) {
  const date = new Date(dateString)

  const day = date.getUTCDate().toString().padStart(2, '0')
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0') // Adding 1 as month is zero-based
  const year = date.getUTCFullYear()

  return `${day}/${month}/${year}`
}

export default transformDateFormat
