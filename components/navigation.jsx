"use client"
import { useState } from 'react';

import Link from 'next/link'
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import { ModeToggle } from '@/components/mode-toggle'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    MobileNavigationMenu,
    MobileNavigationMenuContent,
    MobileNavigationMenuIndicator,
    MobileNavigationMenuItem,
    MobileNavigationMenuLink,
    MobileNavigationMenuList,
    MobileNavigationMenuTrigger,
    MobileNavigationMenuViewport,
    mobileNavigationMenuTriggerStyle,
} from "@/components/ui/mobile-navigation-menu"


const components = [
    {
        title: "Home",
        href: "/",
        //   description:
        //     "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Tracks",
        href: "/",
        //   description:
        //     "For sighted users to preview content available behind a link.",
    },
    {
        title: "Albums",
        href: "/",
        //   description:
        //     "For sighted users to preview content available behind a link.",
    },
    {
        title: "Artists",
        href: "/",
        //   description:
        //     "For sighted users to preview content available behind a link.",
    },
]

export function Navigation({ params }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div >
            <div className="flex flex-row justify-between items-start sm:items-center">
                <div className="flex flex-col items-start">
                    <Button onClick={toggleMenu} className="sm:hidden" variant="outline" size="icon">
                        {isOpen ? (
                            <X className="" size={20} strokeWidth={1} />
                        ) : (
                            <Menu className="" size={20} strokeWidth={1} />
                        )}
                        <span className="sr-only">Open main menu</span>
                    </Button>
                    <NavigationMenu className="hidden sm:block">
                        {/* <NavigationMenu className={isOpen ? "w-full" : "hidden sm:block"}> */}
                        <NavigationMenuList className="">
                            {components.map((component) => (
                                <NavigationMenuItem className="" key={component.title}>
                                    <Link className="w-full" href={component.href} legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            {component.title}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    {/* <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> */}
                    {/* <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
                </div>
                <ModeToggle />
            </div>

            {/* mobile menu */}
            <MobileNavigationMenu className={isOpen ? "sm:hidden" : "hidden"}>
                <MobileNavigationMenuList className=" ">
                    {components.map((component) => (
                        <MobileNavigationMenuItem className="w-full" key={component.title}>
                            <Link href={component.href} legacyBehavior passHref>
                                <MobileNavigationMenuLink className={mobileNavigationMenuTriggerStyle()}>
                                    {component.title}
                                </MobileNavigationMenuLink>
                            </Link>
                        </MobileNavigationMenuItem>
                    ))}
                </MobileNavigationMenuList>
            </MobileNavigationMenu>
        </div>
    )
}
