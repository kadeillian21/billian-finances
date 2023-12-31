"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { Dialog } from '@headlessui/react'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs"
import React from "react"
import Image from 'next/image'
import Link from "next/link"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Cost of Living', href: '/cost-of-living' },
    { name: 'Investments', href: '/investments' },
    { name: 'Housing', href: '/housing' },
  ]

  return (
    <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10 bg-navy_blue-1">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Image src="/favicon.ico" alt="Favicon" height={50} width={50} />
          </Link>
          <div className="flex flex-1 items-center gap-x-6">
            <button type="button" className="-m-3 p-3 md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} className="h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gold-1 flex-1 justify-center">
            {navigation.map((item, itemIdx) => (
              <a key={itemIdx} href={item.href}>
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="-ml-0.5 flex h-16 items-center gap-x-6">
              <button type="button" className="-m-2.5 p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <FontAwesomeIcon icon={faX} className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="-ml-0.5">
                <a href="#" className="-m-1.5 block p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                    height={20}
                    width={20}
                  />
                </a>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
        <div className="flex flex-1 items-center justify-end gap-x-8">
        <SignedIn>
          <div className="mr-5">
            {/* @ts-ignore */}
            <UserButton className="bg-gold-1 text-navy_blue-1 px-3 py-1 rounded-lg"/>
          </div>
        </SignedIn>
        <SignedOut>
          <div className="mr-5">
            {/* @ts-ignore */}
            <SignInButton className="bg-gold-1 text-navy_blue-1 px-3 py-1 rounded-lg" />
          </div>
        </SignedOut>
      </div>
      </header>
  )
}