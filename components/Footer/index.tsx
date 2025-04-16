"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-blacksection text-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-5 lg:py-5">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="flex flex-col items-center">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <a href="/" className="relative">
                    <Image
                      width={110}
                      height={80}
                      src="/images/logo/Sharpsys - Logo - Footer.png"
                      alt="Logo"
                      className="dark:block"
                    />
                  </a>
                  <h1 className="text-4xl dark:text-white mb-5 mt-5">
                    Subscribe to the newsletter
                  </h1>

                  <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
                    <button
                      className="!absolute right-1 top-1 z-10 select-none rounded buttoncolor-bg py-2 px-1 text-center align-middle text-xs uppercase text-white transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Subscribe
                    </button>
                    <input
                      type="email"
                      className="peer h-full w-full rounded-[7px] border border-buttoncolor-bg bg-transparent px-3 py-2.5 pr-20 text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-buttoncolor-bg placeholder-shown:border-t-buttoncolor-bg focus:border-2 focus:buttoncolor-bg focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:buttoncolor-bg"
                      placeholder=" "
                      required
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-white">
                      Email Address
                    </label>
                  </div>



                  <div className="w-full h-auto pt-8 flex gap-2 flex-wrap justify-center">
                    <a href="https://x.com/sharpsys38391" target="_blank"
                      className="bg-white p-2 rounded-3xl flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 72 72" fill="none">
                        <path
                          d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
                          fill="#000" />
                      </svg></a>
                    {/* <a href="https://www.w3schools.com" target="_blank"
                      className="bg-white p-2 rounded-3xl flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 71 72" fill="none">
                        <path
                          d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z"
                          fill="#000" />
                      </svg>
                    </a> */}
                    <a href="https://www.instagram.com/sharpsyssoft/" target="_blank"
                      className="bg-white p-2 rounded-3xl flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 71 72" fill="none">
                        <path
                          d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808ZM46.0648 22.4346C46.0646 23.0279 46.2404 23.608 46.5701 24.1015C46.8997 24.595 47.3684 24.9797 47.9168 25.2069C48.4652 25.4342 49.0688 25.4939 49.6511 25.3784C50.2334 25.2628 50.7684 24.9773 51.1884 24.5579C51.6084 24.1385 51.8945 23.6041 52.0105 23.0222C52.1266 22.4403 52.0674 21.8371 51.8404 21.2888C51.6134 20.7406 51.2289 20.2719 50.7354 19.942C50.2418 19.6122 49.6615 19.436 49.0679 19.4358H49.0667C48.2708 19.4361 47.5077 19.7522 46.9449 20.3144C46.3821 20.8767 46.0655 21.6392 46.0648 22.4346ZM25.6072 56.1302C23.1683 56.0192 21.8427 55.6132 20.9618 55.2702C19.7939 54.8158 18.9606 54.2746 18.0845 53.4002C17.2083 52.5258 16.666 51.6938 16.2133 50.5266C15.8699 49.6466 15.4637 48.3214 15.3528 45.884C15.2316 43.2488 15.2073 42.4572 15.2073 35.781C15.2073 29.1048 15.2336 28.3154 15.3528 25.678C15.4639 23.2406 15.8731 21.918 16.2133 21.0354C16.668 19.8682 17.2095 19.0354 18.0845 18.1598C18.9594 17.2842 19.7919 16.7422 20.9618 16.2898C21.8423 15.9466 23.1683 15.5406 25.6072 15.4298C28.244 15.3086 29.036 15.2844 35.7132 15.2844C42.3904 15.2844 43.1833 15.3106 45.8223 15.4298C48.2612 15.5408 49.5846 15.9498 50.4677 16.2898C51.6356 16.7422 52.4689 17.2854 53.345 18.1598C54.2211 19.0342 54.7615 19.8682 55.2161 21.0354C55.5595 21.9154 55.9658 23.2406 56.0767 25.678C56.1979 28.3154 56.2221 29.1048 56.2221 35.781C56.2221 42.4572 56.1979 43.2466 56.0767 45.884C55.9656 48.3214 55.5573 49.6462 55.2161 50.5266C54.7615 51.6938 54.2199 52.5266 53.345 53.4002C52.4701 54.2738 51.6356 54.8158 50.4677 55.2702C49.5872 55.6134 48.2612 56.0194 45.8223 56.1302C43.1855 56.2514 42.3934 56.2756 35.7132 56.2756C29.033 56.2756 28.2432 56.2514 25.6072 56.1302ZM25.4001 10.9322C22.7371 11.0534 20.9174 11.4754 19.3282 12.0934C17.6824 12.7316 16.2892 13.5878 14.897 14.977C13.5047 16.3662 12.6502 17.7608 12.0116 19.4056C11.3933 20.9948 10.971 22.8124 10.8497 25.4738C10.7265 28.1394 10.6982 28.9916 10.6982 35.7808C10.6982 42.57 10.7265 43.4222 10.8497 46.0878C10.971 48.7494 11.3933 50.5668 12.0116 52.156C12.6502 53.7998 13.5049 55.196 14.897 56.5846C16.289 57.9732 17.6824 58.8282 19.3282 59.4682C20.9204 60.0862 22.7371 60.5082 25.4001 60.6294C28.0687 60.7506 28.92 60.7808 35.7132 60.7808C42.5065 60.7808 43.3592 60.7526 46.0264 60.6294C48.6896 60.5082 50.5081 60.0862 52.0983 59.4682C53.7431 58.8282 55.1373 57.9738 56.5295 56.5846C57.9218 55.1954 58.7745 53.7998 59.4149 52.156C60.0332 50.5668 60.4575 48.7492 60.5768 46.0878C60.698 43.4202 60.7262 42.57 60.7262 35.7808C60.7262 28.9916 60.698 28.1394 60.5768 25.4738C60.4555 22.8122 60.0332 20.9938 59.4149 19.4056C58.7745 17.7618 57.9196 16.3684 56.5295 14.977C55.1395 13.5856 53.7431 12.7316 52.1003 12.0934C50.5081 11.4754 48.6894 11.0514 46.0284 10.9322C43.3612 10.811 42.5085 10.7808 35.7152 10.7808C28.922 10.7808 28.0687 10.809 25.4001 10.9322Z"
                          fill="#000" />
                      </svg></a>
                    <a href="https://www.youtube.com/@sharpsys3669" target="_blank"
                      className="bg-white p-2 rounded-3xl flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 71 71" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M56.5615 18.2428C58.8115 18.8504 60.58 20.6234 61.1778 22.8708C62.2654 26.9495 62.2654 35.4647 62.2654 35.4647C62.2654 35.4647 62.2654 43.98 61.1778 48.0586C60.5717 50.3144 58.8032 52.0873 56.5615 52.6866C52.4932 53.7771 36.1703 53.7771 36.1703 53.7771C36.1703 53.7771 19.8557 53.7771 15.7791 52.6866C13.5291 52.079 11.7606 50.306 11.1628 48.0586C10.0752 43.98 10.0752 35.4647 10.0752 35.4647C10.0752 35.4647 10.0752 26.9495 11.1628 22.8708C11.7689 20.615 13.5374 18.8421 15.7791 18.2428C19.8557 17.1523 36.1703 17.1523 36.1703 17.1523C36.1703 17.1523 52.4932 17.1523 56.5615 18.2428ZM44.5142 35.4647L30.9561 43.314V27.6154L44.5142 35.4647Z"
                          fill="#000" />
                      </svg></a>
                    <a href="https://linkedin.com/company/sharpsys-software-solutions-india-pvt-ltd" target="_blank"
                      className="bg-white p-2 rounded-3xl flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 72 72" fill="none">
                        <path
                          d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                          fill="#000" />
                      </svg></a>



                  </div>
                </motion.div>
              </div>
              <div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                > <div className="space-y-3">
                  <h4 className="mb-2 text-xl dark:text-white">
                    Home
                  </h4>

                  <ul>
                    <li>
                      <Link href="/#our-clients" className="mb-3 text-sm inline-block hover:text-primary">
                        Our Clients
                      </Link>
                    </li>
                    <li>
                      <Link href="/#why-sharpsys" className="mb-3 text-sm inline-block hover:text-primary">
                        Why Sharpsys?
                      </Link>
                    </li>
                    <li>
                      <a href="/ourproducts" className="mb-3 text-sm inline-block hover:text-primary">
                        Our Products
                      </a>
                    </li>
                    <li>
                      <a href="/ourservices" className="mb-3 text-sm inline-block hover:text-primary">
                        Our Services
                      </a>
                    </li>
                    <li>
                      <Link href="/#testimonials" className="mb-3 text-sm inline-block hover:text-primary">
                        Testimonials
                      </Link>
                    </li>
                  </ul>
                  </div>
                </motion.div>
              </div>

              <div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                   <div className="space-y-4">
                  <h5 className="mb-2 text-xl dark:text-white">
                    Our Services
                  </h5>

                  <ul>
                    <li>
                      <Link href="/ourservices#enterprise-solutions" className="mb-3 text-sm inline-block hover:text-primary">
                        Enterprise Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/ourservices#services-crm" className="mb-3 text-sm inline-block hover:text-primary">
                        CRM
                      </Link>
                    </li>
                    <li>
                      <a href="/ourservices#advanced-analytics" className="mb-3 text-sm inline-block hover:text-primary">
                        Advanced Analytics
                      </a>
                    </li>
                    <li>
                      <a href="/ourservices#business-intelligence" className="mb-3 text-sm inline-block hover:text-primary">
                        Business Intelligence
                      </a>
                    </li>
                    <li>
                      <a href="/ourservices#staff-augmentation" className="mb-3 text-sm inline-block hover:text-primary">
                        Staff Augmentation
                      </a>
                    </li>
                  </ul>
                  </div>
                </motion.div>
              </div>

              <div >
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                   <div className="space-y-4">
                  <h4 className="mb-2 text-xl dark:text-white">
                    Our Products
                  </h4>

                  <ul>
                    <li>
                      <Link href="ourproducts#drag-drop" className="mb-3 text-sm inline-block hover:text-primary">
                        Drag & Drop
                      </Link>
                    </li>
                    <li>
                      <Link href="ourproducts#e-invoice" className="mb-3 text-sm inline-block hover:text-primary">
                        E-Invoice Integration
                      </Link>
                    </li>
                    <li>
                      <Link href="ourproducts#e-invoice" className="mb-3 text-sm inline-block hover:text-primary">
                        Quote Engine
                      </Link>
                    </li>
                  </ul>
                  </div>
                </motion.div>
              </div>

              <div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                   <div className="space-y-4">
                  <h4 className="mb-2 text-xl dark:text-white">
                    Company
                  </h4>

                  <ul>
                    <li>
                      <a href="/aboutus" className="mb-3 text-sm inline-block hover:text-primary">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="/contactus" className="mb-3 text-sm inline-block hover:text-primary">
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a href="/careers" className="mb-3 text-sm inline-block hover:text-primary">
                        Career
                      </a>
                    </li>
                  </ul>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col text-center flex-wrap border-t border-stroke pt-2 pb-3 dark:border-strokedark">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <span>
                &copy; - 2025 Sharpsys Software Solutions [l] Pvt. Ltd., | All rights reserved
              </span>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
