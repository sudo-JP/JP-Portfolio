import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import portrait from '../../assets/jason-hero.jpg';
import beachBanner from '../../assets/banners/beach.jpg';
import buildingsBanner from '../../assets/banners/buildings.png';
import cloudBanner from '../../assets/banners/cloud.jpg';
import minWindowBanner from '../../assets/banners/min_window.jpg';
import { selectBanner } from './selectBanner';
import '../../index.css';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/sudo-JP',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/phanductuan/',
    icon: FaLinkedin,
  },
  {
    label: 'Email Jason',
    href: 'mailto:jase.phan@mail.utoronto.ca',
    icon: FaEnvelope,
  },
];

const daytimeBanners = [cloudBanner, beachBanner] as const;
const nighttimeBanners = [minWindowBanner, buildingsBanner] as const;

function Hero() {
  const [banner] = useState(() =>
    selectBanner(
      new Date().getHours(),
      Math.random(),
      daytimeBanners,
      nighttimeBanners,
    ),
  );
  return (
    <section id="jp" className="scroll-mt-16 pt-16">
      <div className="mx-auto max-w-6xl px-4 pt-5 sm:px-6 sm:pt-8">
        <div className="flex h-40 items-center justify-center overflow-hidden border border-line bg-[#ddd6cd] sm:h-56 md:h-64">
          <img src={banner} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="grid grid-cols-[6.5rem_1fr] items-end gap-x-5 px-2 pb-16 sm:grid-cols-[8rem_1fr_auto] sm:gap-x-7 sm:px-6">
          <div className="-mt-12 sm:-mt-16">
            <div className="border-[5px] border-cream bg-cream shadow-sm">
              <img
                src={portrait}
                alt="Jason Phan"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="pt-5 sm:pt-7">
            <h1 className="font-display text-3xl tracking-[-0.035em] sm:text-5xl">
              hey, i&apos;m jason.
            </h1>
            <p className="mt-2 max-w-2xl font-display text-sm leading-6 text-muted sm:text-base sm:leading-7">
              CS student at UTM, currently interning at ModiFace, and a systems
              tinkerer—usually somewhere between compilers, low-level Rust, and
              whatever rabbit hole came up this week.
            </p>
          </div>

          <div className="col-span-2 mt-5 flex gap-2 sm:col-span-1 sm:mt-0">
            {socialLinks.map(({ label, href, icon: Icon }) => {
              const isExternal = href.startsWith('http');

              return (
                <a
                  key={label}
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="grid size-11 place-items-center border border-line text-muted transition-colors hover:border-pine hover:text-pine"
                >
                  <Icon aria-hidden="true" size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
