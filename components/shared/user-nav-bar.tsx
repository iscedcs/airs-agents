"use client";
import { Skeleton } from "@/components/ui/skeleton";
import {
     MANAGE_SIDEBAR_LINKS,
     SIDEBAR_LINKS,
     SIDEBAR_LINKS_AGENT,
} from "@/lib/const";
import { getInitials } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../dark-mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuGroup,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuShortcut,
     DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function UserNav() {
     const session = useSession();
     const pathName = usePathname();

     if (session.status === "loading") {
          return (
               <Skeleton className="h-10 w-36 animate-pulse rounded bg-primary/30 text-primary-foreground" />
          );
     }

     if (!session.data || !session.data.user) {
          return (
               <Button asChild>
                    <Link href="/sign-in">Login</Link>
               </Button>
          );
     }

     const user = session.data.user;

     return (
          <DropdownMenu>
               <DropdownMenuTrigger asChild>
                    <div className="flex cursor-pointer gap-3">
                         <Button
                              variant="link"
                              className="relative h-8 w-8 rounded-full"
                         >
                              <Avatar className="h-9 w-9">
                                   <AvatarImage
                                        src={"/anambara.png"}
                                        alt={user.name || "Default User"}
                                   />
                                   <AvatarFallback>
                                        {getInitials(user.name || "Agent User")}
                                   </AvatarFallback>
                              </Avatar>
                         </Button>
                         <div className="hidden w-32 flex-col md:flex">
                              <div className="text-xs font-bold">
                                   {user.name || "Agent User"}
                              </div>
                              <div className="text-xs capitalize text-primary">
                                   {user.role}
                              </div>
                         </div>
                    </div>
               </DropdownMenuTrigger>
               <DropdownMenuContent className="w-60" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                         <div className="flex items-center gap-4 rounded-xl bg-secondary p-2">
                              <div className="">
                                   <Avatar className="h-14 w-14">
                                        <AvatarImage
                                             src={"/anambara.png"}
                                             alt={user.name || "Agent User"}
                                        />
                                        <AvatarFallback>
                                             {getInitials(
                                                  user.name || "Agent User",
                                             )}
                                        </AvatarFallback>
                                   </Avatar>
                              </div>
                              <div
                                   // href='/manage/profile'
                                   className="flex flex-col space-y-1"
                              >
                                   <p className="text-sm font-medium leading-none">
                                        {user.name || "Agent User"}
                                   </p>
                                   <p className="text-xs leading-none text-muted-foreground">
                                        {user.email}
                                   </p>
                              </div>
                         </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                         {pathName.startsWith("/manage")
                              ? MANAGE_SIDEBAR_LINKS.map((link, k) => (
                                     <DropdownMenuItem
                                          className="md:hidden"
                                          asChild
                                          key={k}
                                     >
                                          <Link href={link.href}>
                                               {link.name}
                                               <DropdownMenuShortcut className="h-4 w-4">
                                                    {link.icon}
                                               </DropdownMenuShortcut>
                                          </Link>
                                     </DropdownMenuItem>
                                ))
                              : (user.role.toLowerCase() === "agent"
                                     ? SIDEBAR_LINKS_AGENT
                                     : SIDEBAR_LINKS
                                ).map((link, k) => (
                                     <DropdownMenuItem
                                          className="md:hidden"
                                          asChild
                                          key={k}
                                     >
                                          <Link href={link.href}>
                                               {link.title}
                                               <DropdownMenuShortcut className="h-4 w-4">
                                                    {link.icon}
                                               </DropdownMenuShortcut>
                                          </Link>
                                     </DropdownMenuItem>
                                ))}
                         <DropdownMenuItem asChild>
                              <Link href="/manage">
                                   Manage My Account
                                   <DropdownMenuShortcut className="h-4 w-4"></DropdownMenuShortcut>
                              </Link>
                         </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>
                         Log out
                    </DropdownMenuItem>
                    <div className="md:hidden">
                         <DropdownMenuSeparator />
                         <ModeToggle />
                    </div>
                    <DropdownMenuSeparator />
                    <div className="flex items-center justify-between gap-3 px-2 text-xs">
                         <Link href="/privacy">Privacy Policy</Link>
                         <Link href="/terms">Terms of Service</Link>
                    </div>
               </DropdownMenuContent>
          </DropdownMenu>
     );
}
