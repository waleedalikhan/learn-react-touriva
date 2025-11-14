type Props = {
  title?: string;
  href?: string;
};

const NavLink: React.FC<Props> = ({ title, href }) => {
  return (
    <div className="flex">
      <a
        href={href}
        className="mt-4 gap-2 flex items-center justify-between text-lg leading-[120%] font-semibold text-[#2e2e38] overflow-hidden group hover:text-[#3538cd] transition-all ease-in-out duration-300 cursor-pointer whitespace-nowrap"
      >
        {title}
        <img
          src="/img/icons/link-icon.svg"
          alt="link icon"
          className="-mb-10 transition-all ease-in-out duration-300 group-hover:mb-0"
        />
      </a>
    </div>
  );
};

export default NavLink;
