import BillList from "@/components/billList/BillList";
import BillModel from "@/components/model/billModel";
import { prisma } from "../config/prisma";


const fetchBills = async()=>{
  try {
    const bills = await prisma.bills.findMany()
    return bills
  } catch (error) {
    console.log('error',error);
  }
}

export default async function Home() {
  const bills = await fetchBills()

  return (
<div className="bg-slate-900">
<h1 className="bg-blue-700 text-3xl font-bold text-center py-5">Bills App</h1>
<BillModel/>
<BillList bills={bills}/>
</div>)
}
