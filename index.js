document.addEventListener("DOMContentLoaded", function () {
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
      ],
      taxRate: 0.07,
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
  });
  