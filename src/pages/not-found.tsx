import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="text-center mt-40">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound