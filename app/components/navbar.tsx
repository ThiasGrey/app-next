import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
        <Link href="/" className="flex justify-center items-center"> 
            <a>Home</a>
        </Link>
        </nav>
    );
}