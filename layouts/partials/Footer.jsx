import ArrowButton from "@components/ArrowButton";
import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import settings from "@config/settings.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { logo } = config.site;
  const { social_media } = config;
  const { footer_copy, copyright, header_cta_link } = settings;
  return (
    <footer className="bg-dark-secondary pt-14 md:pt-24">
      <div className="container">
        <div className="row">
          <div className="md:col-6">
            <div data-aos="fade-up-sm">
              <Logo src={logo} />
            </div>
            <div data-aos="fade-up-sm" data-aos-delay="100">
              {markdownify(footer_copy, "p", "text-[#8E8E8E] mt-8 max-w-[360px] font-medium")}
            </div>
          </div>
          <div className="mt-12 md:col-3 md:mt-0">
            <div className="flex space-x-16">
              <ul data-aos="fade-up-sm" data-aos-delay="100">
                <li className="mb-6 font-medium text-2xl">Company</li>
                {menu.company.map((menu) => (
                  <li className="mb-2" key={menu.name}>
                    <Link href={menu.url} className="text-white transition-all hover:underline hover:opacity-75">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 md:col-3 md:mt-0" data-aos="fade-up-sm" data-aos-delay="100">
            <ArrowButton
              link={header_cta_link}
              label={"Book Barry"}
              target={"_blank"}
              className={"bg-transparent border border-secondary-600 text-secondary-600 px-5 py-2.5 rounded-xl mb-4"}
            />
            <div className="flex flex-wrap gap-4 my-4">
              {social_media.map((social) => (
                <a href={social.url} target="_blank" key={social.name} aria-label={social.name}>
                  <img src={social.icon} alt={social.name} className="size-6" />
                </a>
              ))}
            </div>
            {markdownify(copyright, "p", "text-[#8E8E8E] text-sm mb-4")}
          </div>
        </div>
      </div>
      <div className="mt-5 h-2 bg-gradient-line md:mt-24"></div>
    </footer>
  );
};

export default Footer;
