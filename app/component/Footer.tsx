import Link from "next/link";
import { links } from "../../data/app.ts";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100">
        {links.map((link) => (
          <div key={link.title} className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">{link.title}</h5>
            {link.links.map((item) => (
              <Link href={item} key={item} className="block">
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
