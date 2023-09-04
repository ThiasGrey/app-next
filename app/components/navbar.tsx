import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="max-w-[1440px] bg-[#F5F5F5] flex justify-center items-center px-8 py-4 mx-auto">
        <Link href="/" className=""> 
            Home
        </Link>
        <Link href='/dashboard'>
            Dashboard
        </Link>
        </nav>
    );
}

export default Navbar;