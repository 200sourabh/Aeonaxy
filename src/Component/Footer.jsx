import React from "react";

const Footer = () => {
  return (
    <>
      <div className="md:mt-[50px] mt-[25px] px-4">
        <img src="image/paypal.png" className="h-[130px] w-[200px]" />
        <div className="flex flex-wrap gap-4 text-blue-900 font-bold border-b pb-2 px-2">
          <p>Help</p>
          <p>Contact</p>
          <p>Fees</p>
          <p>Security</p>
          <p>Apps</p>
          <p>Shops</p>
          <p>Enterprise</p>
          <p>Partners</p>
        </div>

        <div className="flex flex-wrap md:justify-between gap-4 text-blue-900 font-bold border-b -2 md:border-b-0 pt-2 px-2">
          <div className="flex flex-wrap gap-4">
            <p>About</p>
            <p>Newsrooms</p>
            <p>Jobs</p>
            <p>Investor Relations</p>
            <p>Value in Action</p>
            <p>Public Policy</p>
            <p>Sitemap</p>
          </div>
          <div class="flex flex-wrap gap-4">
            <p class="text-gray-400 font-normal">1999-2022</p>
            <p>Acessibility</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Legal</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
