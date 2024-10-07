import ScanToAddSticker from "@/components/pages/agents/scan-to-add-sticker";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
     Dialog,
     DialogContent,
     DialogDescription,
     DialogHeader,
     DialogTitle,
     DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function BarcodeAdder({
     image,
     name,
     description,
     number,
     icon,
     id,
     t_code,
}: {
     image?: string;
     name: string;
     description: string;
     number?: string;
     icon?: string;
     id: string;
     t_code: string;
}) {
     return (
          <>
               <Dialog>
                    <DialogTrigger asChild>
                         <div className="h-[300px] w-full p-1.5 md:p-2.5">
                              <Card className="h-full overflow-hidden bg-secondary shadow-md transition-all hover:shadow-xl">
                                   <CardHeader className="h-[160px] w-full overflow-hidden p-0">
                                        <Image
                                             src={image || "/tricycle.jpg"}
                                             alt={name}
                                             height={140}
                                             width={278}
                                             className="h-full w-full object-cover object-center"
                                        />
                                   </CardHeader>
                                   <CardContent className="p-3">
                                        <div className="flex flex-col gap-1.5">
                                             <div className="text-bodyBold uppercase">
                                                  {name}
                                             </div>
                                             <div className="text-captionBold md:text-bodyBold">
                                                  {description}
                                             </div>
                                        </div>
                                   </CardContent>
                              </Card>
                         </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                         <DialogHeader>
                              <DialogTitle>Scan Sticker Barcode</DialogTitle>
                              <DialogDescription>
                                   Point your camera to the sticker barcode to
                                   scan and add.
                              </DialogDescription>
                         </DialogHeader>
                         <div className="grid gap-4 py-4">
                              <div className="grid items-center gap-4">
                                   <ScanToAddSticker t_code={t_code} id={id} />
                              </div>
                         </div>
                    </DialogContent>
               </Dialog>
          </>
     );
}
