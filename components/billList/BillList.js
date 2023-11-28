// <td className={bill.status ? styles.paid : styles.notpaid}>{bill.status ? "Paid" : "Not Paid"}</td>
import React from 'react'

export default function BillList({bills}) {
  return (
    <div>
    <h1>BillList</h1>
    <table>
    <tr>
            <th>Name</th>
            <th>Adress</th>
            <th>Units</th>
            <th>Phone Number</th>
    </tr>
    {bills?.map((bill) => (
      <tr key={bill.name} className=''>
        <td>{bill.adress}</td>
        <td>{bill.units}</td>
        <td>{bill.phone}</td>
      </tr>
    ))}
    </table>
    </div>
  )
}
