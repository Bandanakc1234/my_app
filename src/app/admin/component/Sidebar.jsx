import { useState } from 'react';
import { BiSolidDashboard, BiDetail, BiSolidBriefcase, BiTask, BiUser } from "react-icons/bi";
import { BsPersonPlus } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { FiLogIn } from "react-icons/fi";
import Link from 'next/link';

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: BiSolidDashboard
  },
  {
    name: "Project",
    href: "/admin/projects",
    icon: BiDetail,
    subItems: [
      {
        name: "All",
        href: "/admin/projects"
      },
      {
        name: "New",
        href: "/admin/projects/new"
      }
    ]
  },
  {
    name: "Career",
    href: "/admin/careers",
    icon: BiSolidBriefcase,
    subItems: [
      {
        name: "All",
        href: "/admin/careers"
      },
      {
        name: "New",
        href: "/admin/careers/new"
      }
    ]
  },
  {
    name: "My Task",
    href: "/mytask",
    icon: BiTask
  },
  {
    name: "Profile",
    href: "/profile",
    icon: BiUser
  },
  {
    name: "Register",
    href: "/register",
    icon: BsPersonPlus
  },
  {
    name: "Login",
    href: "/login",
    icon: FiLogIn
  },
]

const Sidebar = ({ isMenuOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathName = usePathname();

  const handleDropdown = (index) => {
    setOpenDropdown(index === openDropdown 
      ? null 
      : index);
  };

  return (
    <aside className={`fixed h-screen bg-black ${isMenuOpen ? 'w-64' : 'w-20'} mt-14 p-3 overflow-auto`}>
      <ul className="text-gray-200">
        {sidebarItems.map(({ name, href, icon: Icon, subItems }, index) => (
          <li key={name}>
            <Link href={href}
              className={`flex h-full items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer ${pathName === href ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
              onClick={() => subItems && handleDropdown(index)}
            >
              <span>
                <Icon size={24} />
              </span>
              <span className={` ml-3 ${!isMenuOpen ? 'hidden' : 'block'}`}>{name}</span>
            </Link>
            {subItems && openDropdown === index && (
              <ul>
                {subItems.map(({ name: subName, href: subHref }) => (
                  <li key={subName} className='py-1'>
                    <Link href={subHref}  className={`block text-center py-2 px-3 font-medium rounded-md cursor-pointer ${ subHref === pathName ? 'bg-gray-700' : 'hover:bg-gray-700'
                    }`}>

                      <span className=''>{subName}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
