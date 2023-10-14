import * as React from "react"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const MobileNavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 w-full items-center justify-start",
      className
    )}
    {...props}>
    {children}
    <MobileNavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
MobileNavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const MobileNavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex list-none items-center justify-center w-full flex-col mt-2",
      className
    )}
    {...props} />
))
MobileNavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const MobileNavigationMenuItem = NavigationMenuPrimitive.Item

const mobileNavigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-full items-center justify-start rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const MobileNavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(mobileNavigationMenuTriggerStyle(), "group", className)}
    {...props}>
    {children}{" "}
    <ChevronDownIcon
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true" />
  </NavigationMenuPrimitive.Trigger>
))
MobileNavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const MobileNavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props} />
))
MobileNavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const MobileNavigationMenuLink = NavigationMenuPrimitive.Link

const MobileNavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props} />
  </div>
))
MobileNavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const MobileNavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}>
    <div
      className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
MobileNavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  mobileNavigationMenuTriggerStyle,
  MobileNavigationMenu,
  MobileNavigationMenuList,
  MobileNavigationMenuItem,
  MobileNavigationMenuContent,
  MobileNavigationMenuTrigger,
  MobileNavigationMenuLink,
  MobileNavigationMenuIndicator,
  MobileNavigationMenuViewport,
}
