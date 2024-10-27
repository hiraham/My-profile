import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col">
      <header className="bg-gray-900 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <Link href="/" className="text-xl font-semibold">Hira Naz</Link>
          
          <div>
            
            <Link href="./Home" className="ml-4">Home</Link>
            <Link href="./About" className="ml-4">About</Link>
            <Link href="./ProjectCard" className="ml-4">Projects</Link>
            <Link href="./Contact" className="ml-4">Contact</Link>
          
          </div>
        </nav>
      </header>

    </div>
  )
}

export default Header;

