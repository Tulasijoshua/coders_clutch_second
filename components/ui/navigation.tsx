"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import Typography from "../shared/typography";

const nav_links = [
  {
    id: "1",
    title: "Who we are",
    href: "/we-are",
    contents: [
      {
        id: "1",
        title: "About US",
        subTitle: "Know our story",
        description: "A collective of innovation-driven tech specialists",
      },
      {
        id: "2",
        contents: [
          {
            id: "1",
            title: "Overview",
            description: "Core and supplemental courses for language development",
          },
          {
            id: "2",
            title: "Careers",
            description: "Visually or semantically separates content.",
          },
        ],
      },
      {
        id: "3",
        contents: [
          {
            id: "1",
            title: "The Board",
            description: "For sighted users to preview content available behind a link.",
          },
          {
            id: "2",
            title: "Social Responsibilities",
            description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
          },
        ],
      },
      {
        id: "4",
        contents: [
          {
            id: "1",
            title: "Management",
            description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
          },
          {
            id: "2",
            title: "Global Networks",
            description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          },
        ],
      },
    ]
  },
  {
    id: "2",
    title: "What we do",
    href: "/we-do",
    contents: [
      {
        id: "1",
        title: "Solutions",
        subTitle: "Products by Grade Level",
        description: "Teaching solutions to drive better student outcomes",
      },
      {
        id: "2",
        contents: [
          {
            id: "1",
            title: "Fintech",
            description: "A modal dialog that interrupts the user with important content and expects a response.",
          },
          {
            id: "2",
            title: "Construction",
            description: "Visually or semantically separates content.",
          },
          {
            id: "3",
            title: "Logistics & Transportation",
            description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          },
        ],
      },
      {
        id: "3",
        contents: [
          {
            id: "1",
            title: "Health Care",
            description: "For sighted users to preview content available behind a link.",
          },
          {
            id: "2",
            title: "Energy & Climate",
            description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
          },
          {
            id: "3",
            title: "Travel & Hospitality",
            description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          },
        ],
      },
      {
        id: "4",
        contents: [
          {
            id: "1",
            title: "EdTech",
            description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
          },
          {
            id: "2",
            title: "Insurance & Mortgage",
            description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          },
        ],
      },
    ]
  },
  {
    id: "3",
    title: "Portfolio",
    href: "/portfolio",
    contents: [
      {
        id: "1",
        title: "Portfolio",
        subTitle: "Products by Grade Level",
        description: "Teaching solutions to drive better student outcomes",
      },
      {
        id: "2",
        contents: [
          {
            id: "1",
            title: "Fintech",
            description: "A modal dialog that interrupts the user with important content and expects a response.",
          },
          {
            id: "2",
            title: "Construction",
            description: "Visually or semantically separates content.",
          },
          {
            id: "3",
            title: "Logistics & Transportation",
            description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          },
        ],
      },
      {
        id: "3",
        contents: [
          {
            id: "1",
            title: "Health Care",
            description: "For sighted users to preview content available behind a link.",
          },
          {
            id: "2",
            title: "Energy & Climate",
            description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
          },
          {
            id: "3",
            title: "Travel & Hospitality",
            description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          },
        ],
      },
      {
        id: "4",
        contents: [
          {
            id: "1",
            title: "EdTech",
            description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
          },
          {
            id: "2",
            title: "Insurance & Mortgage",
            description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          },
        ],
      },
    ]
  },
  {
    id: "4",
    title: "Product",
    href: "/product",
    contents: [
      {
        id: "1",
        title: "Product",
        subTitle: "Products by Grade Level",
        description: "Innovative solutions tailored for you",
      },
      {
        id: "2",
        contents: [
          {
            id: "1",
            title: "Overview",
            description: "Core and supplemental courses for language development",
          },
          {
            id: "2",
            title: "Careers",
            description: "Visually or semantically separates content.",
          },
        ],
      },
      {
        id: "3",
        contents: [
          {
            id: "1",
            title: "The Board",
            description: "For sighted users to preview content available behind a link.",
          },
          {
            id: "2",
            title: "Social Responsibilities",
            description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
          },
        ],
      },
      {
        id: "4",
        contents: [
          {
            id: "1",
            title: "Management",
            description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
          },
          {
            id: "2",
            title: "Global Networks",
            description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          },
        ],
      },
    ]
  },
  {
    id: "5",
    title: "Insight",
    href: "/insight",
    contents: [
      {
        id: "1",
        title: "Insight",
        subTitle: "Products by Grade Level",
        description: "Teaching solutions to drive better student outcomes",
      },
      {
        id: "2",
        contents: [
          {
            id: "1",
            title: "Overview",
            description: "Core and supplemental courses for language development",
          },
          {
            id: "2",
            title: "Careers",
            description: "Visually or semantically separates content.",
          },
        ],
      },
      {
        id: "3",
        contents: [
          {
            id: "1",
            title: "The Board",
            description: "For sighted users to preview content available behind a link.",
          },
          {
            id: "2",
            title: "Social Responsibilities",
            description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
          },
        ],
      },
      {
        id: "4",
        contents: [
          {
            id: "1",
            title: "Management",
            description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
          },
          {
            id: "2",
            title: "Global Networks",
            description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          },
        ],
      },
    ]
  },
]


export default function Navigation() {
  return (
    <NavigationMenu className="hidden xl:flex">
      <NavigationMenuList>
        
        {nav_links.map((link) => (
          <NavigationMenuItem key={link.id}>
            <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex  gap-3 p-4 ">
              {link.contents.map((link) => (
                <div key={link.id}>
                  {link.subTitle ? (
                    <li className="w-[220px] min-h-[250px] h-full">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col gap-6 rounded-md p-3 no-underline outline-none focus:shadow-md bg-gray-100"
                          href="/"
                        >
                          <div className="flex flex-col gap-4">
                            <Typography 
                              className="text-blue-900"
                              typo="header-5-semibold"
                            >
                              {link.title}
                            </Typography>
                            <Typography
                              typo="body-medium-regular"
                              className="text-gray-600 leading-normal"
                            >
                              {link.description}
                            </Typography>
                          </div>
                          <Typography
                            typo="body-medium-semibold"
                            className=""
                          >{link.subTitle}</Typography>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ) : (
                    <div className="flex flex-col justify-between gap-3">
                      {link.contents?.map((link) => (
                      <div key={link.id} className="w-[250px] h-full flex gap-16 border-l">
                        <ListItem href="/" title={link.title}>
                          {link.description}
                        </ListItem>
                        
                      </div>
                      ))}
                    
                    </div>
                  )}
                  
                </div>

            ))}
            </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
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
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="pb-2 text-base text-blue-800 font-semibold leading-none">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
