import Link from "next/link";

const Navbar = () => {
  const menuLinks = [
    { title: "Product", path: "/" },
    { title: "Pricing", path: "/" },
    { title: "Industry", path: "/" },
    { title: "Customer Stories", path: "/" },
    { title: "About", path: "/" },
    { title: "Blog", path: "/" },
  ];

  return (
    <nav className="w-full ">
      <div className="w-[90%] mx-auto py-3 flex justify-around items-center">
        <div className="">CleverBooks</div>
        <ul className="flex justify-center gap-4 items-center">
          {menuLinks.map((menu) => (
            <li key={menu.title}>
              <Link
                href={menu.path}
                className="text-[#111]  hover:text-red-400 "
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-around items-center gap-6">
          <div className="div">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </div>

          <div className="">
            <button className="bg-primary-gradient text-white font-bold py-2 px-4 rounded-xl outline-none  hover:text-black   hover:from-[#9333EA] hover:to-[#EC4899] transition-all ">
              Talk to Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
