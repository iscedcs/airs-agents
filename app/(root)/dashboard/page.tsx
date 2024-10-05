import { options } from "@/app/api/auth/options";
import DashboardAgent from "@/components/role/agent/dashboard";
import { getUser } from "@/lib/controllers/users.controller";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
     const session = await getServerSession(options);
     
     if(!session || !session.user) {
          redirect("/login");
     }

     
     const ROLE = session.user.role;
     if (ROLE?.toLowerCase() === "greenengine_agent") redirect("/green-engine");

     const user = await getUser(session.user.id);
     
     return (
          <div className="flex w-full flex-col gap-5 p-3 md:p-5">
               <div className="text-title2Bold md:text-h5Bold">
                    Welcome Back, {user?.name ?? "User"}
               </div>
               <div className="w-full">
                    {ROLE?.toLowerCase() === "agent" ? 
                      (
                         <DashboardAgent />
                    ): '' }
               </div>
          </div>
     );
}
