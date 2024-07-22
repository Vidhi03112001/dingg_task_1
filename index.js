document.addEventListener("DOMContentLoaded", function () {
  const currency = "OMR";
  const name="MUHAMMED SHAKKEER"
  const round_off_adjustment_amount=0.000;
  const user_supplier_advance_amount=0.000;
  const receiptData = {
    date: new Date().toLocaleDateString(),
    grn_num: "BST-GRN01558",
    warehouse_name: "CHIC BY SISTERS CLINIC",
    supl_invoice_num: "003/24/240389",
    grn_date: "13/06/2024",
    supplier_name: "Muscat Pharmacy",
    supl_invoice_date: "11/06/2024",
    items: [
      {
        sr_no: 1,
        item_code: "T01991",
        item_name: "LIDOCAINE 2% (LIGNOCAINE) INJECTION",
        received_quantity: 10.0,
        free_quantity: 0.0,
        total_quantity: 10.0,
        mes_unit: "Qty",
        item_level_discount_peercent: 0.0,
        tax_name: "",
        item_unit_price_after_tax: 3.7,
        effective_rate_per_unit: 3.7,
        MRP: 0.0,
      },

      {
        sr_no: 2,
        item_code: "T01992",
        item_name: "LIDOCAINE 2% (LIGNOCAINE) INJECTION",
        received_quantity: 10.0,
        free_quantity: 0.0,
        total_quantity: 10.0,
        mes_unit: "Qty",
        item_level_discount_peercent: 0.0,
        tax_name: "",
        item_unit_price_after_tax: 3.7,
        effective_rate_per_unit: 3.7,
        MRP: 0.0,
      },
    ],
  };

  document.getElementById("date").textContent = receiptData.date;
  document.getElementById("grn_num").textContent = receiptData.grn_num;
  document.getElementById("warehouse_name").textContent =
    receiptData.warehouse_name;
  document.getElementById("supl_invoice_num").textContent =
    receiptData.supl_invoice_num;
  document.getElementById("grn_date").textContent = receiptData.grn_date;
  document.getElementById("supplier_name").textContent =
    receiptData.supplier_name;
  document.getElementById("supl_invoice_date").textContent =
    receiptData.supl_invoice_date;
    

  const itemList = document.querySelector("#item-list");

  let subTotal=0;


  receiptData.items.forEach((item) => {
    const total_after_tax = item.total_quantity * item.effective_rate_per_unit;
    subTotal+=total_after_tax
    const row = document.createElement("tr");
    row.innerHTML = `<td id="sr_no">${item.sr_no}</td>
          <td id="item_code">${item.item_code}</td>
          <td id="item_name">${item.item_name}</td>
          <td id="received_quantity">${item.received_quantity.toFixed(3)}</td>
          <td id="free_quantity">${item.free_quantity.toFixed(3)} </td>
          <td id="total_quantity">${item.total_quantity.toFixed(3)}</td>
          <td id="mes_unit">${item.mes_unit}</td>
          <td id="item_level_discount_peercent">${item.item_level_discount_peercent.toFixed(
            3
          )}
          </td>
          <td id="tax_name">${item.tax_name}</td>
          <td id="item_unit_price_after_tax">${item.item_unit_price_after_tax.toFixed(
            3
          )}${currency}</td>
          <td id="effective_rate_per_unit">${item.effective_rate_per_unit.toFixed(
            3
          )}${currency}</td>
          <td id="MRP">${item.MRP.toFixed(3)}${currency}</td>
          <td id="total_after_tax">${total_after_tax.toFixed(
            3
          )}${currency}</td>`;

    itemList.appendChild(row);
  });
  let total=subTotal-round_off_adjustment_amount;
  document.querySelector("#name").textContent=`Receiving Employee: ${name}`
  document.querySelector("#sub_total").textContent=`${subTotal.toFixed(3)}${currency}`
  document.querySelector('#round_off').textContent=`${round_off_adjustment_amount.toFixed(3)}${currency}`
  document.querySelector('#total_amount').textContent=`${total.toFixed(3)}${currency}`
  document.querySelector('#supplier_advance_amount').textContent=`${user_supplier_advance_amount.toFixed(3)}${currency}`
  document.querySelector('#grand_total').textContent=`${(total-user_supplier_advance_amount).toFixed(3)}${currency}`
  
});
