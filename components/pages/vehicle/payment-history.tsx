
import { PaymentNotificationFilter, getPaymentNotifications } from "@/app/actions/payment-notification";
import { Button } from "@/components/ui/button";
import {
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
} from "@/components/ui/table";
import { FNTC } from "@/lib/const";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight, Link } from "lucide-react";

export default async function PaymentHistory({
     page = 1,
     pageSize = 10,
     filter = {},
     hasPagination = false,
}: {
     filter?: PaymentNotificationFilter;
     page?: number;
     pageSize?: number;
     hasPagination?: boolean;
}) {
     const { notifications, pagination } = await getPaymentNotifications(
          page,
          pageSize,
          filter,
     );
     const isFirstPage = pagination.page === 1;
     const isLastPage = pagination.page === pagination.totalPages;
     return (
          <div className="space-y-2">
               {/* <form
                    onSubmit={handleSearch}
                    className="mb-4 flex items-center space-x-2"
               >
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <Input
                         type="text"
                         placeholder="Search by reference or name"
                         value={searchTerm}
                         onChange={(e) => setSearchTerm(e.target.value)}
                         className="flex-grow"
                    />
                    <Button type="submit">Search</Button>
               </form> */}
               <Table className="rounded-lg">
                    <TableHeader>
                         <TableRow>
                              <TableHead>Date</TableHead>
                              {/* <TableHead>Reference</TableHead> */}
                              <TableHead>Amount</TableHead>
                              {/* <TableHead>Revenue Name</TableHead> */}
                         </TableRow>
                    </TableHeader>
                    <TableBody>
                         {notifications && notifications.length > 0 ? (
                              notifications.map((notification) => (
                                   <TableRow key={notification.id}>
                                        <TableCell>
                                             {format(
                                                  notification.payment_date,
                                                  "MMMM dd, hh:mm aa",
                                             )}
                                        </TableCell>
                                        {/* <TableCell>
                                             {notification.payment_reference}
                                        </TableCell> */}
                                        <TableCell>
                                             {FNTC.format(
                                                  Number(notification.amount),
                                             )}
                                        </TableCell>
                                        {/* <TableCell>
                                             {notification.revenue_name}
                                        </TableCell> */}
                                   </TableRow>
                              ))
                         ) : (
                              <TableRow>
                                   <TableCell
                                        colSpan={2}
                                        className="text-center"
                                   >
                                        No Payment History
                                   </TableCell>
                              </TableRow>
                         )}
                    </TableBody>
               </Table>
               {hasPagination && (
                    <div className="mt-4 flex items-center justify-between">
                         <Button
                              asChild
                              variant="outline"
                              size="sm"
                              disabled={isFirstPage}
                         >
                              <Link
                                   href={
                                        isFirstPage
                                             ? "#"
                                             : `?page=${pagination.page - 1}&pagesize=${pagination.pageSize}`
                                   }
                              >
                                   <ChevronLeft className="mr-2 h-4 w-4" />{" "}
                                   Previous
                              </Link>
                         </Button>
                         <span>
                              Page {pagination.page} of {pagination.totalPages}
                         </span>
                         <Button
                              asChild
                              variant="outline"
                              size="sm"
                              disabled={isLastPage}
                         >
                              <Link
                                   href={
                                        isLastPage
                                             ? "#"
                                             : `?page=${pagination.page + 1}&pagesize=${pagination.pageSize}`
                                   }
                              >
                                   Next{" "}
                                   <ChevronRight className="ml-2 h-4 w-4" />
                              </Link>
                         </Button>
                    </div>
               )}
          </div>
     );
}
