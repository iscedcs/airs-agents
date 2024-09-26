import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import CarouselContainer from "@/components/pages/home/carousel";
import { UserNav } from "@/components/shared/user-nav-bar";
import { Button } from "@/components/ui/button";
import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";
import { HOW_IT_WORKS, LANDING_CARD_CONTENTS } from "@/lib/const";
import { getUser } from "@/lib/controllers/users.controller";
import { NigeriaIcon } from "@/lib/icons";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { options } from "./api/auth/options";

export default async function Home() {
     const session = await getServerSession(options);
     const user = await getUser(session?.user.id!);

     return (
          <main className="">
               <div className="fixed z-50 mx-auto h-20 w-full shrink-0 bg-white/50 backdrop-blur">
                    <MaxWidthWrapper className="flex h-full w-full items-center justify-between gap-1 px-2 xl:px-0">
                         <Link
                              href={"/"}
                              className="w-32 shrink-0 px-5 md:w-52"
                         >
                              <Image
                                   src={"/logo.png"}
                                   height={30}
                                   width={150}
                                   className="shrink-0"
                                   alt="Transpay Logo"
                              />
                         </Link>
                         <div className="flex h-full w-full items-center justify-end gap-3 xl:w-0">
                              <Button
                                   asChild
                                   className="w-10 items-center rounded-lg bg-transparent md:w-32"
                                   variant={"outline"}
                              >
                                   <Link href={"/scan"}>Scan</Link>
                              </Button>
                              <div className="flex items-center justify-center gap-3 text-primary-700">
                                   {user ? (
                                        <>
                                             <Button
                                                  asChild
                                                  className="w-full rounded-lg lg:w-32"
                                             >
                                                  <Link href={"/dashboard"}>
                                                       Dashboard
                                                  </Link>
                                             </Button>
                                             {user && <UserNav />}
                                        </>
                                   ) : (
                                        <Button
                                             asChild
                                             className="w-full rounded-lg lg:w-32"
                                        >
                                             <Link href="/sign-in">Login</Link>
                                        </Button>
                                   )}
                              </div>
                         </div>
                    </MaxWidthWrapper>
               </div>

               <div className="relative flex h-[100svh] flex-col items-start justify-between gap-10 pt-24">
                    <NigeriaIcon className="absolute top-0 h-full w-[50svw] object-contain" />
                    <div className="relative mx-auto flex w-full max-w-lg flex-col items-center gap-10 px-5 pt-5 lg:max-w-3xl lg:px-20">
                         <div className="flex shrink-0 flex-col items-center gap-2 lg:gap-5">
                              <div className="flex flex-col items-center">
                                   <div className="text-2xl font-bold lg:text-5xl">
                                        Simplifying Levy Collection
                                   </div>
                                   <div className="text-2xl font-bold lg:text-5xl">
                                        for Commercial Vehicles
                                   </div>
                              </div>
                              <p className="text-center text-sm">
                                   {`Ensuring safe and easy collection of levies using simple and secure payment systems`}
                              </p>
                         </div>
                    </div>
                    <div className="relative flex h-[60svh] w-full gap-3">
                         <CarouselContainer />
                    </div>
               </div>

               <div className="relative mt-10 flex h-full flex-col items-start justify-between gap-10 px-4 py-24 md:px-4">
                    <NigeriaIcon className="absolute left-1/2 top-0 -z-30 h-full w-[50svw] -translate-x-1/2 object-contain" />
                    <div className="mx-auto space-y-10">
                         <h2 className="text-4xl font-extrabold">{`Why Transpay?`}</h2>
                         <div className="mx-auto grid grid-cols-1 gap-2 md:max-w-7xl md:grid-cols-3 xl:grid-cols-4">
                              {LANDING_CARD_CONTENTS.map((card, i) => (
                                   <Card
                                        className="rounded-xl bg-[#B9AB05] p-6 pt-10 md:p-0"
                                        key={i}
                                   >
                                        <CardHeader>
                                             <CardTitle className="text-background">
                                                  {card.title}
                                             </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                             <CardDescription className="text-background">
                                                  {card.description}
                                             </CardDescription>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>
                    </div>
               </div>
               <div className="relative mt-10 flex h-full flex-col items-start justify-between gap-10 bg-primary pt-24 md:h-[50svh] xl:h-[70svh]">
                    <div className="mx-auto space-y-10 px-4 md:px-4">
                         <h2 className="text-4xl font-extrabold text-background">{`How it works`}</h2>
                         <div className="mx-auto grid w-full grid-cols-1 gap-8 md:max-w-7xl md:grid-cols-3">
                              {HOW_IT_WORKS.map((card, i) => (
                                   <div
                                        className="border-t-2 border-background py-6 pt-10 text-start"
                                        key={i}
                                   >
                                        <div className="flex flex-col space-y-1.5 py-6 text-2xl font-semibold leading-none tracking-tight text-background">
                                             {card.title}
                                        </div>

                                        <div className="py-6 pt-0 text-sm text-background">
                                             {card.description}
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>

               <div className="relative bottom-0 h-full w-full shrink-0 bg-secondary">
                    <div className="flex h-10 w-full items-center justify-between bg-primary/20 px-3 lg:px-9">
                         <div className="font-bold">Contact Us</div>
                         <div className="font-bold">Get Started Today!</div>
                    </div>
                    <div className="flex w-full flex-col items-center px-4 md:flex-row md:justify-center xl:justify-between">
                         <div className="my-3 flex flex-col">
                              <p className="text-md w-full md:w-full xl:w-96">
                                   {`For more information or to schedule a demo, please contact us at
			          support@transpaytms.com or call us at (+234) 816 345 3826.`}
                              </p>
                         </div>

                         <div className="my-3 flex flex-col">
                              <p className="w-full text-start text-base font-bold md:w-96 md:text-end xl:font-normal">{`Powered By ISCE Digital Concept`}</p>
                         </div>
                    </div>
               </div>
          </main>
     );
}
