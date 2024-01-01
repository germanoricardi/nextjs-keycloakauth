import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
          <Link href={'/'} className="navbar-brand">KC Auth</Link>
          
          <div className="d-flex">
            <button className="btn btn-outline-success btn-sm" type="submit">Login</button>
          </div>
        </div>
    </nav>
  )
}