import { Navbar } from "../components/nav/navbar";

export default function AuthLayout({ children }: { children: React.ReactNode}) {
  return (
    <section>
      <nav>RESTRITO</nav>
      <Navbar />
 
      {children}
    </section>
  )
}