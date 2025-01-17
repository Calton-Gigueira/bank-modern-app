import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="object-contain w-[266px] h-[72px]"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payment easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row flex-wrap justify-between md:mt-0 mt-10">
          {footerLinks.map((footerLink, i) => (
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]" key={i}>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, j) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-6 text-dimWhite hover:text-secondary cursor-pointer ${
                      j !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-center text-white text-[18px] leading-[27px]">
          &copy; 2021 HooBank. All Rights reserved
        </p>

        <div className="flex flex-row md:t-0 mt-6">
          {socialMedia.map((social, i) => (
            <img
              src={social.icon}
              alt={social.id}
              key={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                i !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
