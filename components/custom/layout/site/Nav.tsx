"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "@/lib/router-events";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Startup Landscape",
    href: "/docs/startups/landscape",
    description: "Overview of the startup ecosystem in the country.",
  },
  {
    title: "Startup Data",
    href: "/docs/startups/data",
    description: "Access data and insights about startups.",
  },
  {
    title: "Success Stories",
    href: "/docs/startups/success-stories",
    description: "Case studies and profiles of successful startups.",
  },
  {
    title: "Funding Opportunities",
    href: "/docs/startups/funding",
    description: "Information on funding options available for startups.",
  },
];

export function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Public Data</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/open-data"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Open Data
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explore open data sources and the data marketplace
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="API Documentation">
                Learn how to integrate with our APIs and SDKs
              </ListItem>
              <ListItem
                href="/policies"
                title="Data Governance"
              >
                Learn about data policies, access controls, and collaboration
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Startups</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
