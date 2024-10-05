import DashboardCard from "@/components/layout/dashboard-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getVehicleById } from "@/lib/controllers/vehicle-controller";
import { getSSession } from "@/lib/get-data";
import { failureIcon, successIcon } from "@/lib/icons";
import { addDays, format } from "date-fns";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
     params,
}: {
     params: { bcid: string };
}) {
     const vehicle = await getVehicleById(params.bcid);
     if (vehicle) {
          return {
               title: `${
                    vehicle?.owner.name
               } - ${vehicle?.category?.toLocaleUpperCase() ?? "Not Stated"}`,
          };
     }
}

export default async function StatusPage({
     params,
}: {
     params: { bcid: string };
}) {
     const { role } = await getSSession();
     const vehicle = await getVehicleById(params.bcid);
     if (!vehicle) return notFound();
     // const waivers = await getVehicleWaiver(params.bcid);
     const onWaiver = false;

     const isOwing = false;
     // const dateSupplied = new Date(vehicle.wallet.next_transaction_date);
     // dateSupplied.setUTCHours(dateSupplied.getUTCHours() + 2);

     return (
          <div className="w-full">
               <div className="flex h-full w-full flex-col gap-6 p-6">
                    <div className="flex w-full flex-col justify-between gap-1 text-center">
                         <div className="text-sm">
                              <div className="uppercase">{`Vehicle Owner`}</div>
                              <div className="text-xl font-bold">
                                   {vehicle.owner.name}
                              </div>
                         </div>
                         <div className="text-sm uppercase">
                              <div className="">Plate number</div>
                              <div className="text-xl font-bold">
                                   {vehicle.plate_number}
                              </div>
                         </div>
                         <div
                              className={`text-sm uppercase ${
                                   isOwing
                                        ? "text-red-500"
                                        : "text-awesome-foreground"
                              }`}
                         >
                              <div className="">Next Payment Date</div>
                              <div className="text-xl font-bold">
                                   {format(
                                        addDays(new Date(), 2),
                                        "MMMM d, yyyy",
                                   )}
                              </div>
                         </div>
                         {/* {vehicle.wallet.wallet_balance && (
                              <div className="text-sm uppercase">
                                   <div className="">Total Payment</div>
                                   <div className="text-xl font-bold text-awesome-foreground">
                                        ₦{vehicle.wallet.net_total}
                                   </div>
                              </div>
                         )}
                         {vehicle.wallet.wallet_balance && (
                              <div className="text-sm uppercase">
                                   <div className="">Wallet Balance</div>
                                   <div className="text-xl font-bold text-awesome-foreground">
                                        ₦{vehicle.wallet.wallet_balance}
                                   </div>
                              </div>
                         )} */}

                         {role &&
                              vehicle.fairFlexImei &&
                              vehicle.fairFlexImei !== "" && (
                                   <Button
                                        className="mx-auto w-full max-w-xl rounded-xl bg-primary-800 text-white"
                                        asChild
                                        variant={"default"}
                                   >
                                        <Link
                                             href={`/vehicles/${params.bcid}/location`}
                                             className="shrink-0 whitespace-nowrap"
                                        >
                                             <MapPin className="mr-2 h-4 w-4 shrink-0" />
                                             View live location
                                        </Link>
                                   </Button>
                              )}
                    </div>
                    <Tabs
                         defaultValue="overview"
                         className="mx-auto w-full max-w-xl"
                    >
                         <TabsList
                              className={`grid ${
                                   isOwing ? "grid-cols-2" : "grid-cols-1"
                              }`}
                         >
                              <TabsTrigger value="overview">
                                   OVERVIEW
                              </TabsTrigger>
                              {isOwing && (
                                   <TabsTrigger value="days-owed">
                                        DAYS OWED
                                   </TabsTrigger>
                              )}
                         </TabsList>
                         <TabsContent value="overview">
                              {/* <Card className='grid gap-2 w-full p-3 bg-secondary text-xs lg:text-base'>
							<div className='uppercase text-center font-bold pb-3'>
								Payment Details
							</div>
							<div className=''>
								<div className='flex justify-between items-center gap-5'>
									<div className=''>Bank Name</div>
									{vehicle.wallet.meta.bank_name}
								</div>
								<div className='flex justify-between items-center gap-5'>
									<div className=''>
										Account Name
									</div>
									{vehicle.wallet.meta.account_name}
								</div>
								<div className='flex justify-between items-center gap-5'>
									<div className=''>
										Account Number
									</div>
									{vehicle.wallet.meta.nuban}
								</div>
							</div>
							<CopyButton
								label='Copy Account Details'
								text={`${vehicle.wallet.meta.bank_name} ${vehicle.wallet.meta.nuban} ${vehicle.wallet.meta.account_name}`}
							/>
						</Card> */}
                              <div className="w-full">
                                   {onWaiver ? (
                                        <div className="mb-20 flex w-full flex-col items-center gap-2 p-3">
                                             <div className="text-green-500">
                                                  {successIcon}
                                             </div>
                                             <div className="flex py-2">
                                                  <div className="shrink-0 grow-0 text-title1Bold">
                                                       Vehicle is on Waiver!
                                                  </div>
                                             </div>
                                             <Button asChild>
                                                  <Link
                                                       href={"waiver/history"}
                                                       className="uppercase"
                                                  >
                                                       View Waiver History
                                                  </Link>
                                             </Button>
                                        </div>
                                   ) : isOwing ? (
                                        <>
                                             <div className="flex w-full flex-col items-center gap-2 p-3">
                                                  <div className="text-red-500">
                                                       {failureIcon}
                                                  </div>
                                                  <div className="flex flex-col items-center py-2">
                                                       <div className="shrink-0 grow-0 text-title1Bold">
                                                            Vehicle is Owing!
                                                       </div>
                                                       <div className="text-4xl font-bold text-destructive-foreground">
                                                            {/* {`₦${
												totalPendingAmount +
												daysOwed.length * 20
											}`} */}
                                                            {`₦5,000`}
                                                       </div>
                                                  </div>
                                             </div>
                                        </>
                                   ) : (
                                        <div className="mb-20 flex w-full flex-col items-center gap-2 p-3">
                                             <div className="text-green-500">
                                                  {successIcon}
                                             </div>
                                             <div className="flex py-2">
                                                  <div className="shrink-0 grow-0 text-title1Bold">
                                                       Vehicle is clear!
                                                  </div>
                                             </div>
                                        </div>
                                   )}
                              </div>
                         </TabsContent>
                         {/* {isOwing && (
					<TabsContent value='days-owed'>
						<div className='w-full grid'>
							<DataTable
								showPagination
								columns={debtColumns}
								data={daysOwed}
							/>
						</div>
					</TabsContent>
				)} */}
                    </Tabs>
                    <div className="w-full">
                         <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                              {role && (
                                   <>
                                        <DashboardCard
                                             name="Vehicle Information"
                                             href={`/vehicles/${vehicle.id}`}
                                             image={"/personalinfo.png"}
                                             description={
                                                  "View Vehicle information"
                                             }
                                        />

                                        {role?.toLowerCase() !== "agent" && (
                                             <>
                                                  <DashboardCard
                                                       name="Payment"
                                                       href={`/vehicles/${vehicle.id}/payments`}
                                                       image={"/payment.png"}
                                                       description={
                                                            "Make Payment & Check Payment History"
                                                       }
                                                  />

                                                  {/* <DashboardCard
										name='Fines & Penalties'
										href={`/vehicles/${vehicle.id}/fines`}
										image={'/fineandpenal.png'}
										description='Fine Driver & Check Fine Payment'
									/> */}
                                             </>
                                        )}
                                   </>
                              )}
                         </div>
                         {role && (
                              <div className="flex flex-col gap-5">
                                   {role?.toLowerCase() !== "agent" && (
                                        <>
                                             {/* <div className='flex flex-col gap-2'>
									<div className='flex justify-between py-2'>
										<div className='shrink-0 grow-0 text-title1Bold'>
											Fine History
										</div>
										<div className='shrink-0 grow-0 text-title1Bold'>
											<Button
												asChild
												variant='link'
											>
												<Link
													href={`/vehicles/${vehicle.id}/fines`}
												>
													See all
												</Link>
											</Button>
										</div>
									</div>
									<div className=''>
										<DataTable
											columns={
												viewDriversColumns
											}
											data={VIEW_DRIVER_TABLE.slice(
												0,
												3
											)}
										/>
									</div>
								</div> */}
                                             {/* <div className='flex flex-col gap-2 '>
									<div className='flex justify-between py-2'>
										<div className='shrink-0 grow-0 text-title1Bold'>
											Payment History
										</div>
										<div className='shrink-0 grow-0 text-title1Bold'>
											<Button
												asChild
												variant='link'
											>
												<Link
													href={`/vehicles/${vehicle.id}/payments`}
												>
													See all
												</Link>
											</Button>
										</div>
									</div>
									<div className=''>
										<DataTable
											columns={debtColumns}
											data={vehicle.VehicleTransactions.slice(
												0,
												3
											)}
										/>
									</div>
								</div> */}
                                        </>
                                   )}

                                   {/* <div className='flex flex-col gap-2 mb-20'>
							{vehicle.Drivers && (
								<>
									<div className='flex justify-between py-2'>
										<div className='shrink-0 grow-0 text-title1Bold'>
											Drivers
										</div>
										<div className='shrink-0 grow-0 text-title1Bold'>
											<Button
												asChild
												variant='link'
											>
												<Link
													href={`/vehicles/${vehicle.id}/drivers`}
												>
													See all
												</Link>
											</Button>
										</div>
									</div>
									<div className=''>
										<DataTable
											columns={driversColumns}
											data={vehicle.Drivers.slice(
												0,
												3
											)}
										/>
									</div>
								</>
							)}
						</div> */}
                              </div>
                         )}
                    </div>
               </div>
          </div>
     );
}
