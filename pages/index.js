import Image from 'next/image'
import { Inter } from 'next/font/google'
import { createClient } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import ImageUrlBuilder from '@sanity/image-url'
import { useEffect } from 'react'
import profile from '../profile.json'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

const Home = ({ blogs }) => {
  const router = useRouter()
  const client = createClient({
    projectId: 'ybwz3gr5',
    dataset: 'production',
    useCdn: false,
  })

  const builder = ImageUrlBuilder(client)

  return (
    <>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>{profile?.title} | Developer | Programmer</title>

        <meta property="og:title" content="Homepage | Atom Template" />

        <meta property="og:locale" content="en_US" />

        <link
          rel="canonical"
          href="//"
        />

        <meta
          property="og:url"
          content="//"
        />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>


      </Head>
      <Script src="../assets/js/main.js"></Script>
      <main>
        <div id="main" className="relative">
          <div
            x-data="{
    triggerNavItem(id) {
        $scroll(id)
    },
    triggerMobileNavItem(id) {
        mobileMenu = false;
        this.triggerNavItem(id)
    }
}"
          >
            <div className="w-full z-50 top-0 py-3 sm:py-5  absolute
  ">
              <div className="container flex items-center justify-between">
                <div>
                  <Link href="/">
                    <h2 className="text-white text-3xl font-bold">WorkWithAryan</h2>
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <ul className="flex items-center">

                    <li className="group pl-6">
                      <Link href="#about">
                        <span
                          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                        >
                          About
                        </span>
                      </Link>
                      <span
                        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                      ></span>
                    </li>

                    <li className="group pl-6">

                      <Link href="#services">
                        <span
                          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                        >
                          Services
                        </span>
                      </Link>


                      <span
                        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                      ></span>
                    </li>

                    <li className="group pl-6">

                      <Link href="#portfolio">
                        <span
                          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                        >
                          Portfolio
                        </span>
                      </Link>


                      <span
                        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                      ></span>
                    </li>

                    <li className="group pl-6">

                      <Link href="#clients">
                        <span
                          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                        >
                          Clients
                        </span>
                      </Link>


                      <span
                        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                      ></span>
                    </li>

                    <li className="group pl-6">

                      <Link href="#work">
                        <span
                          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                        >
                          Work
                        </span>
                      </Link>


                      <span
                        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                      ></span>
                    </li>

                    <li className="group pl-6">

                      <Link href="#statistics">
                        <span
                          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                        >
                          Statistics
                        </span>
                      </Link>


                      <span
                        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                      ></span>
                    </li>

                    <li className="group pl-6">

                      <Link href="#blog">
                        <span
                          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                        >
                          Blog
                        </span>
                      </Link>


                      <span
                        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                      ></span>
                    </li>

                    <li className="group pl-6">

                      <Link href="#contact">
                        <span
                          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                        >Contact</span>
                        <span
                          className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                        ></span>
                      </Link>
                    </li>

                  </ul >
                </div >
                <div className="block lg:hidden">
                  <button onClick={() => mobileMenu = true}>
                    <i className="bx bx-menu text-4xl text-white"></i>
                  </button>

                </div >
              </div >
            </div >

            {/* <div
              className={`md:pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 md:opacity-0 transition-opacity opacity-100 pointer-events-auto}`}
            ></div> */}

            {/* <div
              className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
            >
              <button
                className="absolute top-0 right-0 mt-4 mr-4"
                onClick={() => mobileMenu = false}
              >
                <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
              </button>


              <ul className="mt-8 flex flex-col">

                <li className="py-2">

                  <Link href="">
                    <span
                      onClick={() => triggerMobileNavItem('#about')}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      About
                    </span>
                  </Link>


                </li>

                <li className="py-2">

                  <Link href="">
                    <span
                      onClick={() => triggerMobileNavItem('#services')}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Services
                    </span>
                  </Link>


                </li >

                <li className="py-2">

                  <Link href="">
                    <span
                      onClick={() => triggerMobileNavItem('#portfolio')}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Portfolio
                    </span>
                  </Link>


                </li >

                <li className="py-2">

                  <Link href="">
                    <span
                      onClick={() => triggerMobileNavItem('#clients')}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Clients
                    </span>
                  </Link>


                </li >

                <li className="py-2">

                  <Link href="">
                    <span
                      onClick={() => triggerMobileNavItem('#work')}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Work
                    </span>
                  </Link>


                </li >

                <li className="py-2">

                  <Link href="">
                    <span
                      onClick={() => triggerMobileNavItem('#statistics')}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Statistics
                    </span>
                  </Link>


                </li >

                <li className="py-2">

                  <Link href="">
                    <span
                      onClick={() => triggerMobileNavItem('#blog')}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Blog
                    </span>
                  </Link>


                </li >

                <li className="py-2">

                  <Link href="">
                    <span
                      onClick={() => triggerMobileNavItem('#contact')}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Contact
                    </span>
                  </Link>


                </li >

              </ul >
            </div > */}
          </div >


          <><div><div
            className="relative bg-cover bg-center bg-no-repeat py-8"
            style={{ backgroundImage: "url('/assets/img/hero-bg.jpg')" }}
          >
            <div
              className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"
            ></div>

            <div
              className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48"
            >
              <div className="flex flex-col items-center justify-center lg:flex-row">
                <div className="rounded-full border-8 border-primary shadow-xl">
                  <img
                    src={profile?.image}
                    className="h-48 rounded-full sm:h-56"
                    alt="author" />
                </div>
                <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                  <h1
                    className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl"
                  >
                    Hello I&apos;m {profile?.name}!
                  </h1>
                  <div
                    className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start"
                  >
                    <div
                      className="flex items-center justify-center pl-0 sm:justify-start md:pl-1"
                    >
                      <p className="font-body text-lg uppercase text-white">Let&apos;s connect</p>
                      <div className="hidden sm:block">
                        <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                      </div>
                    </div>
                    <div
                      className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
                    >
                      <Link
                        href={profile?.facebook}
                        target="_blank"
                      >
                        <i
                          className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"
                        ></i>
                      </Link>

                      <Link href={profile?.twitter} target="_blank" className="pl-4">
                        <i
                          className="bx bxl-twitter text-2xl text-white hover:text-yellow"
                        ></i>
                      </Link>
                      <Link
                        href={profile?.github}
                        target="_blank"
                        className="pl-4">
                        <i
                          className="bx bxl-github text-2xl text-white hover:text-yellow"
                        ></i>
                      </Link>
                      <Link
                        href={profile?.linkedin}
                        target="_blank"
                        className="pl-4">
                        <i
                          className="bx bxl-linkedin text-2xl text-white hover:text-yellow"
                        ></i>
                      </Link>
                      <Link
                        href={profile?.instagram}
                        target="_blank"
                        className="pl-4">
                        <i
                          className="bx bxl-instagram text-2xl text-white hover:text-yellow"
                        ></i>
                      </Link>
                    </div>
                    <div className="flex absolute bottom-52 left-[30rem]">
                      <Button
                        color="gradient"
                        flat
                        rounded
                        auto
                        onClick={() => {
                          router.push('/blogs')
                        }}
                      >
                       Browse Blogs
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="bg-grey-50" id="about">
              <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
                <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                  <h2
                    className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
                  >
                    Who am I?
                  </h2>
                  <h4
                    className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
                  >
                    I&apos;m Christy Smith, a Web Designer & Photographer
                  </h4>
                  <p className="pt-6 font-body leading-relaxed text-grey-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </p>
                  <div
                    className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start"
                  >
                    <div className="flex items-center justify-center sm:justify-start">
                      <p className="font-body text-lg font-semibold uppercase text-grey-20">
                        Connect with me
                      </p>
                      <div className="hidden sm:block">
                        <i className="bx bx-chevron-right text-2xl text-primary"></i>
                      </div>
                    </div>
                    <div
                      className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
                    >
                      <Link href="/">
                        <i
                          className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"
                        ></i>
                      </Link>
                      <Link href="/" className="pl-4">
                        <i
                          className="bx bxl-twitter text-2xl text-primary hover:text-yellow"
                        ></i>
                      </Link>
                      <Link href="/" className="pl-4">
                        <i
                          className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"
                        ></i>
                      </Link>
                      <Link href="/" className="pl-4">
                        <i
                          className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"
                        ></i>
                      </Link>
                      <Link href="/" className="pl-4">
                        <i
                          className="bx bxl-instagram text-2xl text-primary hover:text-yellow"
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                  <div>
                    <div className="flex items-end justify-between">
                      <h4 className="font-body font-semibold uppercase text-black">
                        HTML & CSS
                      </h4>
                      <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                      <div className="h-3 rounded-full bg-primary" style={{ width: 85 + "%" }}></div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flex items-end justify-between">
                      <h4 className="font-body font-semibold uppercase text-black">Python</h4>
                      <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                      <div className="h-3 rounded-full bg-primary" style={{ width: 70 + "%" }}></div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flex items-end justify-between">
                      <h4 className="font-body font-semibold uppercase text-black">
                        Javascript
                      </h4>
                      <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                      <div className="h-3 rounded-full bg-primary" style={{ width: 98 + "%" }}></div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flex items-end justify-between">
                      <h4 className="font-body font-semibold uppercase text-black">Figma</h4>
                      <h3 className="font-body text-3xl font-bold text-primary">91%</h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                      <div className="h-3 rounded-full bg-primary" style={{ width: 91 + "%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container py-16 md:py-20" id="services">
              <h2
                className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
              >
                Here&apos;s what I&apos;m good at
              </h2>
              <h3
                className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
              >
                These are the services Ioffer
              </h3>

              <div
                className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
              >
                <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                  <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div className="hidden group-hover:block">
                      <img
                        src="/assets/img/icon-development-white.svg"
                        alt="development icon" />
                    </div>
                    <div className="block group-hover:hidden">
                      <img
                        src="/assets/img/icon-development-black.svg"
                        alt="development icon" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3
                      className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
                    >
                      WEB DEVELOPMENT
                    </h3>
                    <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                  <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div className="hidden group-hover:block">
                      <img
                        src="/assets/img/icon-content-white.svg"
                        alt="content marketing icon" />
                    </div>
                    <div className="block group-hover:hidden">
                      <img
                        src="/assets/img/icon-content-black.svg"
                        alt="content marketing icon" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3
                      className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
                    >
                      Technical Writing
                    </h3>
                    <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                  <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div className="hidden group-hover:block">
                      <img
                        src="/assets/img/icon-mobile-white.svg"
                        alt="Mobile Application icon" />
                    </div>
                    <div className="block group-hover:hidden">
                      <img
                        src="/assets/img/icon-mobile-black.svg"
                        alt="Mobile Application icon" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3
                      className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
                    >
                      Mobile Development
                    </h3>
                    <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                  <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div className="hidden group-hover:block">
                      <img
                        src="/assets/img/icon-email-white.svg"
                        alt="Email Marketing icon" />
                    </div>
                    <div className="block group-hover:hidden">
                      <img
                        src="/assets/img/icon-email-black.svg"
                        alt="Email Marketing icon" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3
                      className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
                    >
                      Email Development
                    </h3>
                    <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                  <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div className="hidden group-hover:block">
                      <img
                        src="/assets/img/icon-design-white.svg"
                        alt="Theme Design icon" />
                    </div>
                    <div className="block group-hover:hidden">
                      <img
                        src="/assets/img/icon-design-black.svg"
                        alt="Theme Design icon" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3
                      className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
                    >
                      Graphic Design
                    </h3>
                    <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                  <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div className="hidden group-hover:block">
                      <img
                        src="/assets/img/icon-graphics-white.svg"
                        alt="Graphic Design icon" />
                    </div>
                    <div className="block group-hover:hidden">
                      <img
                        src="/assets/img/icon-graphics-black.svg"
                        alt="Graphic Design icon" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3
                      className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
                    >
                      Web Design
                    </h3>
                    <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container py-16 md:py-20" id="portfolio">
              <h2
                className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
              >
                Check out my Portfolio
              </h2>
              <h3
                className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
              >
                Here&apos;s what I have done with the past
              </h3>

              <div
                className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"
              >
                <Link
                  href="/"
                  className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                >
                  <img
                    src="/assets/img/portfolio-apple.jpeg"
                    className="w-full shadow"
                    alt="portfolio image" />
                </Link>
                <Link
                  href="/"
                  className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                >
                  <img
                    src="/assets/img/portfolio-stripe.jpeg"
                    className="w-full shadow"
                    alt="portfolio image" />
                </Link>
                <Link
                  href="/"
                  className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                >
                  <img
                    src="/assets/img/portfolio-fedex.jpeg"
                    className="w-full shadow"
                    alt="portfolio image" />
                </Link>
                <Link
                  href="/"
                  className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                >
                  <img
                    src="/assets/img/portfolio-microsoft.jpeg"
                    className="w-full shadow"
                    alt="portfolio image" />
                </Link>
              </div>
            </div>

            <div className="bg-grey-50" id="clients">
              <div className="container py-16 md:py-20">
                <div className="mx-auto w-full sm:w-3/4 lg:w-full">
                  <h2
                    className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
                  >
                    My latest clients
                  </h2>
                  <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
                    <span className="m-8 block">
                      <img
                        src="/assets/img/logo-coca-cola.svg"
                        alt="client logo"
                        className="mx-auto block h-12 w-auto" />
                    </span>
                    <span className="m-8 block">
                      <img
                        src="/assets/img/logo-apple.svg"
                        alt="client logo"
                        className="mx-auto block h-12 w-auto" />
                    </span>

                    <span className="m-8 block">
                      <img
                        src="/assets/img/logo-netflix.svg"
                        alt="client logo"
                        className="mx-auto block h-12 w-auto" />
                    </span>

                    <span className="m-8 block">
                      <img
                        src="/assets/img/logo-amazon.svg"
                        alt="client logo"
                        className="mx-auto block h-12 w-auto" />
                    </span>

                    <span className="m-8 block">
                      <img
                        src="/assets/img/logo-stripe.svg"
                        alt="client logo"
                        className="mx-auto block h-12 w-auto" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="container py-16 md:py-20" id="work">
              <h2
                className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
              >
                My work experience
              </h2>
              <h3
                className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
              >
                Here&apos;s what I did before freelancing
              </h3>

              <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
                <span
                  className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"
                ></span>

                <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                  <div className="md:w-2/5">
                    <div className="flex justify-center md:justify-start">
                      <span className="shrink-0">
                        <img
                          src="/assets/img/logo-spotify.svg"
                          className="h-auto w-32"
                          alt="company logo" />
                      </span>
                      <div className="relative ml-3 hidden w-full md:block">
                        <span
                          className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5">
                    <div className="relative flex md:pl-18">
                      <span
                        className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                      ></span>

                      <div className="mt-1 flex">
                        <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                        <div className="md:-mt-1 md:pl-8">
                          <span className="block font-body font-bold text-grey-40"
                          >Apr 2015 - Mar 2018</span>
                          <span
                            className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                          >Frontend Developer</span>
                          <div className="pt-2">
                            <span className="block font-body text-black"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                              venenatis enim.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                  <div className="md:w-2/5">
                    <div className="flex justify-center md:justify-start">
                      <span className="shrink-0">
                        <img
                          src="/assets/img/logo-microsoft.svg"
                          className="h-auto w-32"
                          alt="company logo" />
                      </span>
                      <div className="relative ml-3 hidden w-full md:block">
                        <span
                          className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5">
                    <div className="relative flex md:pl-18">
                      <span
                        className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                      ></span>

                      <div className="mt-1 flex">
                        <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                        <div className="md:-mt-1 md:pl-8">
                          <span className="block font-body font-bold text-grey-40"
                          >Mar 2018 - September 2019</span>
                          <span
                            className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                          >Software Engineer</span>
                          <div className="pt-2">
                            <span className="block font-body text-black"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                              venenatis enim.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                  <div className="md:w-2/5">
                    <div className="flex justify-center md:justify-start">
                      <span className="shrink-0">
                        <img
                          src="/assets/img/logo-fedex.svg"
                          className="h-auto w-32"
                          alt="company logo" />
                      </span>
                      <div className="relative ml-3 hidden w-full md:block">
                        <span
                          className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5">
                    <div className="relative flex md:pl-18">
                      <span
                        className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                      ></span>

                      <div className="mt-1 flex">
                        <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                        <div className="md:-mt-1 md:pl-8">
                          <span className="block font-body font-bold text-grey-40"
                          >October 2019 - Feb 2021</span>
                          <span
                            className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                          >DevOps Engineer</span>
                          <div className="pt-2">
                            <span className="block font-body text-black"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                              venenatis enim.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
              style={{ backgroundImage: "url('/assets/img/bg-statistics.svg')" }}
              id="statistics"
            >
              <div className="container">
                <div
                  className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full"
                >
                  <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                    <div
                      className="flex flex-col items-center justify-center text-center md:flex-row md:text-left"
                    >
                      <div>
                        <img
                          src="/assets/img/icon-project.svg"
                          className="mx-auto h-12 w-auto md:h-20"
                          alt="icon project" />
                      </div>
                      <div className="pt-5 md:pl-5 md:pt-0">
                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                          12
                        </h1>
                        <h4
                          className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
                        >
                          Finished Projects
                        </h4>
                      </div>
                    </div>

                    <div
                      className="flex flex-col items-center justify-center text-center md:flex-row md:text-left"
                    >
                      <div>
                        <img
                          src="/assets/img/icon-award.svg"
                          className="mx-auto h-12 w-auto md:h-20"
                          alt="icon award" />
                      </div>
                      <div className="pt-5 md:pl-5 md:pt-0">
                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                          3
                        </h1>
                        <h4
                          className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
                        >
                          Awards Won
                        </h4>
                      </div>
                    </div>

                    <div
                      className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0"
                    >
                      <div>
                        <img
                          src="/assets/img/icon-happy.svg"
                          className="mx-auto h-12 w-auto md:h-20"
                          alt="icon happy clients" />
                      </div>
                      <div className="pt-5 md:pl-5 md:pt-0">
                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                          8
                        </h1>
                        <h4
                          className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
                        >
                          Happy Clients
                        </h4>
                      </div>
                    </div>

                    <div
                      className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0"
                    >
                      <div>
                        <img
                          src="/assets/img/icon-puzzle.svg"
                          className="mx-auto h-12 w-auto md:h-20"
                          alt="icon puzzle" />
                      </div>
                      <div className="pt-5 md:pl-5 md:pt-0">
                        <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                          99
                        </h1>
                        <h4
                          className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
                        >
                          Bugs Fixed
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-grey-50" id="blog">
              <div className="container py-16 md:py-20">
                <h2
                  className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
                >
                  I also like to write
                </h2>
                <h4
                  className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
                >
                  Check out my latest posts!
                </h4>
                <div
                  className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"
                >
                  {blogs.map((blog) => (
                    <Link key={blog.slug.current} href={`/blog/${blog.slug.current}`} className="shadow">
                      <div
                        style={{ backgroundImage: `url(${builder.image(blog.blogImage).width(200).url()} ) ` }}
                        className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                      >
                        <span
                          className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
                        ></span>
                        <span
                          className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base"
                        >
                          Read More
                        </span>
                      </div>
                      <div className="bg-white py-6 px-5 xl:py-8">
                        <span className="block font-body text-lg font-semibold text-black">
                          {blog.title}
                        </span>
                        <span className="block pt-2 font-body text-grey-20">
                          {blog.metaDescription.substring(0, 500)}...
                        </span>
                      </div>
                    </Link>
                  ))}


                  {/* <Link href="/post" className="shadow">
                    <div
                      style={{ backgroundImage: "url(/assets/img/post-02.png)" }}
                      className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                    >
                      <span
                        className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
                      ></span>
                      <span
                        className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base"
                      >Read More</span>
                    </div>
                    <div className="bg-white py-6 px-5 xl:py-8">
                      <span className="block font-body text-lg font-semibold text-black"
                      >My personal productivity system</span>
                      <span className="block pt-2 font-body text-grey-20"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </div>
                  </Link> */}
                  {/* <Link href="/post" className="shadow">
                    <div
                      style={{ backgroundImage: "url(/assets/img/post-03.png)" }}
                      className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                    >
                      <span
                        className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
                      ></span>
                      <span
                        className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base"
                      >Read More</span>
                    </div>
                    <div className="bg-white py-6 px-5 xl:py-8">
                      <span className="block font-body text-lg font-semibold text-black"
                      >My year in review 2020</span>
                      <span className="block pt-2 font-body text-grey-20"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </div>
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="container py-16 md:py-20" id="contact">
              <h2
                className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
              >
                Here&apos;s a contact form
              </h2>
              <h4
                className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
              >
                Have Any Questions?
              </h4>
              <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
                <p className="font-body text-grey-10">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                  condimentum turpis nisl sem, viverra habitasse urna ante lobortis
                  fermentum accumsan. Viverra habitasse urna ante lobortis fermentum
                  accumsan.
                </p>
              </div>
              <form className="mx-auto w-full pt-10 sm:w-3/4">
                <div className="flex flex-col md:flex-row">
                  <input
                    className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                    placeholder="Name"
                    type="text"
                    id="name" />
                  <input
                    className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                    placeholder="Email"
                    type="text"
                    id="email" />
                </div>
                <textarea
                  className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
                  placeholder="Message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
                <button
                  className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
                >
                  Send
                  <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
                </button>
              </form>
              <div className="flex flex-col pt-16 lg:flex-row">
                <div
                  className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3"
                >
                  <div className="flex items-center">
                    <i className="bx bx-phone text-2xl text-grey-40"></i>
                    <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                      My Phone
                    </p>
                  </div>
                  <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                    (+881) 111 222 333
                  </p>
                </div>
                <div
                  className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
                >
                  <div className="flex items-center">
                    <i className="bx bx-envelope text-2xl text-grey-40"></i>
                    <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                      My Email
                    </p>
                  </div>
                  <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                    name@mydomain.com
                  </p>
                </div>
                <div
                  className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
                >
                  <div className="flex items-center">
                    <i className="bx bx-map text-2xl text-grey-40"></i>
                    <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                      My Address
                    </p>
                  </div>
                  <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                    123 New York D Block 1100, 2011 USA
                  </p>
                </div>
              </div>
            </div>

            <div
              className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
              style={{ backgroundImage: "url(/assets/img/map.png)" }}
            ></div>

            <div
              className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
              style={{ backgroundImage: "url(/assets/img/bg-cta.jpg)" }}
            >
              <div className="container relative z-30">
                <h3
                  className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl"
                >
                  Keep <span className="font-bold">up-to-date</span> <br />
                  with what I&apos;m up to
                </h3>
                <form className="mt-6 flex flex-col justify-center sm:flex-row">
                  <input
                    className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3"
                    type="text"
                    id="email"
                    placeholder="Give me your Email" />
                  <button
                    className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg"
                  >
                    Join the club
                  </button>
                </form>
              </div>
            </div>
          </div><div className="bg-primary">
              <div className="container flex flex-col justify-between py-6 sm:flex-row">
                <p className="text-center font-body text-white md:text-left">
                  © Copyright 2022. All right reserved, ATOM.
                </p>
                <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                  <Link href="/">
                    <i
                      className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"
                    ></i>
                  </Link>
                  <Link href="/" className="pl-4">
                    <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                  </Link>
                  <Link href="/" className="pl-4">
                    <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
                  </Link>
                  <Link href="/" className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                  </Link>
                  <Link href="/" className="pl-4">
                    <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                  </Link>
                </div>
              </div>
            </div></>

        </div >
      </main >

      {/* <div className="home">
        <div className="nav bg-gray-400">
          I am nav
        </div>
        <h2>{blogs[0].title}</h2>
        <div className="">
          <PortableText
            value={blogs[0].content}
            projectId="ybwz3gr5"
            dataset="production"
            serializers={{
              h1: (props) => <h1 className="text-red-500" {...props} />,
              img: ({ node }) => <Image src={asset.url} width={asset.metadata.dimensions.width} height={node.asset.metadata.dimensions.height} />,
              li: ({ children }) => <li className="text-red-500">{children}</li>,
            }}
          />
        </div>
      </div> */}
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const client = createClient({
    projectId: 'ybwz3gr5',
    dataset: 'production',
    useCdn: false
  })

  const blogs = await client.fetch(`*[_type == "blog"][0...3]
  `)
  return {
    props: {
      blogs
    }
  }
}
// {title, body, mainImage, slug}