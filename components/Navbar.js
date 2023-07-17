import React from 'react'

const Navbar = () => {
    return (
        <>
            <div class="w-full z-50 top-0 py-3 sm:py-5  bg-[#372f90ed] ">
                <div class="container flex items-center justify-between">
                    <div>
                        <a href="/">
                            <img src="/assets/img/logo.svg" class="w-24 lg:w-48" alt="logo image" />
                        </a>
                    </div>
                    <div class=" lg:block">
                        <ul class="flex items-center">

                            <li class="group pl-6  ">

                                <a
                                    href="/#about"
                                    class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white "
                                >About</a
                                >

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                            <li class="group pl-6">

                                <a
                                    href="/#services"
                                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                                >Services</a
                                >

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                            <li class="group pl-6">

                                <a
                                    href="/#portfolio"
                                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                                >Portfolio</a
                                >

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                            <li class="group pl-6">

                                <a
                                    href="/#clients"
                                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                                >Clients</a
                                >

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                            <li class="group pl-6">

                                <a
                                    href="/#work"
                                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                                >Work</a
                                >

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                            <li class="group pl-6">

                                <a
                                    href="/#statistics"
                                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                                >Statistics</a
                                >

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                            <li class="group pl-6">

                                <a
                                    href="/#blog"
                                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                                >Blog</a
                                >

                                <span
                                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"
                                ></span>
                            </li>

                            <li class="group pl-6">

                                <a
                                    href="/#contact"
                                    class="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                                >Contact</a
                                >

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

                            <a
                                href="/#about"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >About</a
                            >

                        </li>

                        <li class="py-2">

                            <a
                                href="/#services"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >Services</a
                            >

                        </li>

                        <li class="py-2">

                            <a
                                href="/#portfolio"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >Portfolio</a
                            >

                        </li>

                        <li class="py-2">

                            <a
                                href="/#clients"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >Clients</a
                            >

                        </li>

                        <li class="py-2">

                            <a
                                href="/#work"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >Work</a
                            >

                        </li>

                        <li class="py-2">

                            <a
                                href="/#statistics"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >Statistics</a
                            >

                        </li>

                        <li class="py-2">

                            <a
                                href="/#blog"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >Blog</a
                            >

                        </li>

                        <li class="py-2">

                            <a
                                href="/#contact"
                                class="pt-0.5 font-header font-semibold uppercase text-white"
                            >Contact</a
                            >

                        </li>

                    </ul>
                </div >
            </div >
        </>
    )
}

export default Navbar