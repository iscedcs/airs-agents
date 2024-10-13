"use server";

import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

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

export type PaymentNotificationFilter = {
     startDate?: Date;
     endDate?: Date;
     search?: string;
     tcode?: string;
     revenueCode?: string;
};

export async function getPaymentNotifications(
     page: number = 1,
     pageSize: number = 10,
     filter: PaymentNotificationFilter = {},
) {
     const where: Prisma.PaymentNotificationsWhereInput = {};

     if (filter.startDate && filter.endDate) {
          where.payment_date = {
               gte: filter.startDate,
               lte: filter.endDate,
          };
     }

     if (filter.search) {
          where.OR = [
               {
                    payment_reference: {
                         contains: filter.search,
                         mode: "insensitive",
                    },
               },
               {
                    customer_name: {
                         contains: filter.search,
                         mode: "insensitive",
                    },
               },
               { tcode: { contains: filter.search, mode: "insensitive" } },
          ];
     }

     if (filter.tcode) {
          where.tcode = filter.tcode;
     }

     if (filter.revenueCode) {
          where.revenue_code = filter.revenueCode;
     }

     const [notifications, totalCount] = await db.$transaction([
          db.paymentNotifications.findMany({
               where,
               select: {
                    id: true,
                    payment_reference: true,
                    customer_name: true,
                    payment_date: true,
                    amount: true,
                    tcode: true,
                    revenue_name: true,
                    revenue_code: true,
               },
               skip: (page - 1) * pageSize,
               take: pageSize,
               orderBy: { payment_date: "desc" },
          }),
          db.paymentNotifications.count({ where }),
     ]);

     return {
          notifications,
          pagination: {
               page,
               pageSize,
               totalCount,
               totalPages: Math.ceil(totalCount / pageSize),
          },
     };
}

export async function getPaymentNotificationsByTcode(
     tcode: string,
     page: number = 1,
     pageSize: number = 10,
) {
     const [notifications, totalCount] = await db.$transaction([
          db.paymentNotifications.findMany({
               where: { tcode },
               select: {
                    id: true,
                    payment_reference: true,
                    customer_name: true,
                    payment_date: true,
                    amount: true,
                    tcode: true,
                    revenue_name: true,
                    revenue_code: true,
               },
               skip: (page - 1) * pageSize,
               take: pageSize,
               orderBy: { payment_date: "desc" },
          }),
          db.paymentNotifications.count({ where: { tcode } }),
     ]);

     return {
          notifications,
          pagination: {
               page,
               pageSize,
               totalCount,
               totalPages: Math.ceil(totalCount / pageSize),
          },
     };
}

export async function getPaymentNotificationByReference(
     paymentReference: string,
) {
     return db.paymentNotifications.findFirst({
          where: { payment_reference: paymentReference },
          include: {
               vehicles: true,
          },
     });
}

export async function getPaymentNotificationsByRevenueCode(
     revenueCode: string,
     page: number = 1,
     pageSize: number = 10,
) {
     const [notifications, totalCount] = await db.$transaction([
          db.paymentNotifications.findMany({
               where: { revenue_code: revenueCode },
               select: {
                    id: true,
                    payment_reference: true,
                    customer_name: true,
                    payment_date: true,
                    amount: true,
                    tcode: true,
                    revenue_name: true,
                    revenue_code: true,
               },
               skip: (page - 1) * pageSize,
               take: pageSize,
               orderBy: { payment_date: "desc" },
          }),
          db.paymentNotifications.count({
               where: { revenue_code: revenueCode },
          }),
     ]);

     return {
          notifications,
          pagination: {
               page,
               pageSize,
               totalCount,
               totalPages: Math.ceil(totalCount / pageSize),
          },
     };
}

// export async function getPaymentNotificationsGroupedByTcode(
//      startDate?: Date,
//      endDate?: Date,
//      page: number = 1,
//      pageSize: number = 10,
// ) {
//      const where: Prisma.PaymentNotificationsWhereInput = {};

//      if (startDate && endDate) {
//           where.payment_date = {
//                gte: startDate,
//                lte: endDate,
//           };
//      }

//      const [groupedNotifications, totalCount] = await db.$transaction([
//           db.paymentNotifications.groupBy({
//                by: ["tcode"],
//                _sum: {
//                     amount: true,
//                },
//                _count: {
//                     payment_reference: true,
//                },
//                where,
//                skip: (page - 1) * pageSize,
//                take: pageSize,
//                orderBy: {
//                     tcode: "asc",
//                },
//           }),
//           db.paymentNotifications
//                .groupBy({
//                     by: ["tcode"],
//                     where,
//                     _count: true,
//                })
//                .then((result) => result.length),
//      ]);

//      const formattedGroupedNotifications = groupedNotifications.map(
//           (group) => ({
//                tcode: group.tcode,
//                totalAmount: group._sum.amount,
//                transactionCount: group._count.payment_reference,
//           }),
//      );

//      return {
//           groupedNotifications: formattedGroupedNotifications,
//           pagination: {
//                page,
//                pageSize,
//                totalCount,
//                totalPages: Math.ceil(totalCount / pageSize),
//           },
//      };
// }

export async function getPaymentNotificationById(id: string) {
     return db.paymentNotifications.findUnique({
          where: { id },
          include: {
               vehicles: true,
          },
     });
}
