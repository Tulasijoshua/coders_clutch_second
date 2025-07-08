"use client"
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
    Navbar as NavbarComponent,
    NavbarLeft,
    NavbarRight,
} from "@/components/ui/navbar";
import { ArrowRight, Globe, Menu } from "lucide-react";
import Link from "next/link";
import codersLogo from "@/public/assets/images/coders_logo.png"
import Image from "next/image";
import { NavigationMenuLink } from "../ui/navigation-menu";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { languages } from "@/constant";
import Typography from "./typography";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useRouter } from "next/navigation";


export default function Navbar() {
    const [position, setPosition] = React.useState("EN")
    const router = useRouter()

    useEffect(() => {
        const addScript = () => {
          const script = document.createElement("script");
          script.src =
            "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
          script.async = true;
          document.body.appendChild(script);
        };
    
        // Global init function for Google Translate
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,es,fr,de,ja,nl",
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element"
          );
        };
    
        addScript();
    
        return () => {
            const scripts = document.querySelectorAll(
              'script[src*="translate.google.com"]'
            );
            scripts.forEach((script) => script.remove());
            window.googleTranslateElementInit = undefined;
        };
      }, []);

      const handleLanguageChange = (val: string) => {
        setPosition(val);
      
        const selectedLang = languages.find((l) => l.label === val);
        if (!selectedLang) return;
      
        const langCode = selectedLang.code;
      
        // Set cookie manually to change language
        document.cookie = `googtrans=/en/${langCode};path=/`;
      
        // Reload the page to apply the language change
        window.location.reload();
      };
    

    return (
        <header className="sticky top-0 z-50 px-4 py-2 border-b border-gray-300 bg-white">
            <div className="fade-bottom absolute left-0 w-full bg-background/15 backdrop-blur-lg"></div>
            <div className="max-container relative 2xl:w-[85%] w-[95%] mx-auto">
                
                <NavbarComponent>
                    <NavbarLeft>
                        <div id="google_translate_element" className="hidden"></div>
                        <Link
                            href="/"
                            className="sm:w-36 xs:w-28 w-24 h-fit flex items-center gap-2 text-xl font-bold"
                        >
                            <Image 
                                src={codersLogo}
                                alt="Coders Clutch"
                                className="w-full h-full object-cover"
                            />
                        </Link>
                    </NavbarLeft>
                    <div>
                        <Navigation />
                    </div>
                    <NavbarRight>
                        <Button
                            variant="primary"
                            onClick={() => router.push("/contact-us")}
                            className="sm:block hidden"
                        >
                            Get In Touch
                        </Button>
                        
                        <Button
                            variant="outline"
                            className="sm:flex hidden items-center gap-1"
                            onClick={() => router.push("/login")}
                        >
                            <ArrowRight />
                            Login
                        </Button>
                        <div className="">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            <div className="flex items-center cursor-pointer">
                                <Globe size={18} color="#6B6B6D" />
                                <Button variant="default" className="w-fit px-2 text-[#6B6B6D]">
                                {position}
                                </Button>
                            </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-fit">
                            <DropdownMenuRadioGroup
                                value={position}
                                onValueChange={handleLanguageChange}
                                className="p-4 grid grid-cols-2 gap-8"
                            >
                                {languages.map((lang) => (
                                <DropdownMenuRadioItem
                                    key={lang.id}
                                    value={lang.label}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-8 h-full">
                                    <Image
                                        src={lang.flag}
                                        alt={lang.name}
                                        className="w-full h-full"
                                    />
                                    </div>
                                    <Typography>{lang.name}</Typography>
                                </DropdownMenuRadioItem>
                                ))}
                            </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </div>      
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="shrink-0 xl:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <nav className="grid gap-6 text-lg font-medium">
                                    <Link
                                        href="/"
                                        className="w-36 h-fit flex items-center gap-2 text-xl font-bold"
                                    >
                                        <Image 
                                            src={codersLogo}
                                            alt="Coders Clutch"
                                            className="w-full h-full object-cover"
                                        />
                                    </Link>
                                    <Link
                                        href="/"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Getting Started
                                    </Link>
                                    <Link
                                        href="/insight"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Career
                                    </Link>
                                    <Link
                                        href="/contact-us"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Contact Us
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </NavbarRight>
                </NavbarComponent>
            </div>
        </header>
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
            "block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";