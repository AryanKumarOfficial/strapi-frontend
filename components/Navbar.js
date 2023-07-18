import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div class="w-full z-50 top-0 py-3 sm:py-5  bg-[#5540af] ">
                <div class="container flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <img src="/assets/img/logo.svg" class="w-24 lg:w-48" alt="logo image" />
                        </Link>
                    </div>
                    <div class=" lg:block">
                        <ul class="flex items-center">

                            <li class="group pl-6  ">

                                <Link
                                    href="/#about"
                                    class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white "
                                >About</Link>

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                            <li class="group pl-6">

                                <Link
                                    href="/#services"
                                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                                >Services</Link>

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                            <li class="group pl-6">

                                <Link
                                    href="/#portfolio"
                                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                                >Portfolio</Link>

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                            <li class="group pl-6">

                                <Link
                                    href="/#clients"
                                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                                >Clients</Link>

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                            <li class="group pl-6">

                                <Link
                                    href="/#work"
                                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                                >Work</Link>

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                            <li class="group pl-6">

                                <Link
                                    href="/#statistics"
                                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                                >Statistics</Link>

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                            <li class="group pl-6">

                                <Link
                                    href="/#blog"
                                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                                >Blog</Link>

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                            <li class="group pl-6">

                                <Link
                                    href="/#contact"
                                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                                >Contact</Link>

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                        </ul>
                    </div>
                    <div class="block ">
                        <i class="bx bx-menu text-4xl text-white"></i>
                    </div>
                </div>
            </div>
            <div
                class="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:
                n"
            >
                <div
                    class="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
                >
                    <button
                        class="absolute top-0 right-0 mt-4 mr-4"
                    >
                        <img src="/assets/img/icon-close.svg" class="h-10 w-auto" alt="" />
                    </button>

                    <ul class="mt-8 flex flex-col">

                        <li class="py-2">

                            <Link
                                href="/#about"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >About
                            </Link>

                        </li>

                        <li class="py-2">

                            <Link
                                href="/#services"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >Services</Link>

                        </li>

                        <li class="py-2">

                            <Link
                                href="/#portfolio"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >Portfolio</Link>

                        </li>

                        <li class="py-2">

                            <Link
                                href="/#clients"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >Clients</Link>

                        </li>

                        <li class="py-2">

                            <Link
                                href="/#work"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >Work</Link>

                        </li>

                        <li class="py-2">

                            <Link
                                href="/#statistics"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >Statistics</Link>

                        </li>

                        <li class="py-2">

                            <Link
                                href="/#blog"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >Blog</Link>

                        </li>

                        <li class="py-2">

                            <Link
                                href="/#contact"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >Contact</Link>

                        </li>

                    </ul>
                </div >
            </div >
        </>
    )
}

export default Navbar