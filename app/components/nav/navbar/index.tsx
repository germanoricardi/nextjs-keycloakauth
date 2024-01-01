'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link"

export const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
          <Link href={'/'} className="navbar-brand">KC Auth</Link>
          
          <div className="d-flex">
            {
              (status == 'authenticated')
              ? <>
                  <button className="btn btn-sm btn-link">{session?.user?.name}</button>
                  <button className="btn btn-outline-success btn-sm" type="submit" onClick={() => signOut({ callbackUrl: '/' })}>Logout</button>
                </>
              : <button className="btn btn-outline-success btn-sm" type="submit" onClick={() => signIn()}>Login</button>
            }
          </div>
        </div>
    </nav>
  )
}