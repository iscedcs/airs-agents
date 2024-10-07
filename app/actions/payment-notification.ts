"use server";

import { db } from "@/lib/db";

export const allPayments = async () => {
     try {
          const paymentNotifications = await db.paymentNotifications.findMany();

          return {
               success: {
                    message: "OKAY",
                    data: paymentNotifications,
               },
          };
     } catch {
          return { error: "Something went wrong!!!" };
     }
};
