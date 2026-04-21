// =============================================
// SAP INVENTORY MANAGEMENT SYSTEM - DATA STORE
// Student: Madhurima Dutta | Roll: 2328098
// =============================================

const SAPData = {
  materials: [
    { id: "MAT-1001", name: "Steel Rods 10mm", type: "ROH", uom: "KG", price: 85, stock: 1200, reorder: 500, plant: "P001", group: "Metals" },
    { id: "MAT-1002", name: "Copper Wire 2.5mm", type: "ROH", uom: "MTR", price: 210, stock: 320, reorder: 400, plant: "P001", group: "Electrical" },
    { id: "MAT-1003", name: "PVC Pipe 1 inch", type: "ROH", uom: "MTR", price: 55, stock: 890, reorder: 300, plant: "P002", group: "Plumbing" },
    { id: "MAT-1004", name: "Cement 50kg Bag", type: "ROH", uom: "BAG", price: 380, stock: 150, reorder: 200, plant: "P001", group: "Construction" },
    { id: "MAT-1005", name: "Paint White 20L", type: "HALB", uom: "CAN", price: 1450, stock: 45, reorder: 60, plant: "P002", group: "Finishing" },
    { id: "MAT-1006", name: "Nuts & Bolts Set", type: "ROH", uom: "SET", price: 120, stock: 2800, reorder: 1000, plant: "P001", group: "Hardware" },
    { id: "MAT-1007", name: "Aluminum Sheet 2mm", type: "ROH", uom: "SQM", price: 520, stock: 88, reorder: 150, plant: "P002", group: "Metals" },
    { id: "MAT-1008", name: "Safety Helmet", type: "FERT", uom: "EA", price: 650, stock: 200, reorder: 100, plant: "P001", group: "Safety" },
    { id: "MAT-1009", name: "Insulation Tape", type: "ROH", uom: "ROLL", price: 35, stock: 560, reorder: 200, plant: "P001", group: "Electrical" },
    { id: "MAT-1010", name: "Welding Rod 3.2mm", type: "ROH", uom: "KG", price: 165, stock: 40, reorder: 100, plant: "P002", group: "Metals" },
    { id: "MAT-1011", name: "Circuit Breaker 20A", type: "HALB", uom: "EA", price: 850, stock: 75, reorder: 50, plant: "P001", group: "Electrical" },
    { id: "MAT-1012", name: "Drill Machine Bit Set", type: "FERT", uom: "SET", price: 1200, stock: 30, reorder: 40, plant: "P002", group: "Tools" },
  ],

  vendors: [
    { id: "V-001", name: "Tata Steel Supplies", contact: "Rajan Kumar", email: "rajan@tatasteel.com", phone: "9800001111", city: "Jamshedpur", terms: "Net 30", status: "Active", rating: 5 },
    { id: "V-002", name: "Siemens Electric Co.", contact: "Priya Sharma", email: "priya@siemens.in", phone: "9800002222", city: "Mumbai", terms: "Net 45", status: "Active", rating: 4 },
    { id: "V-003", name: "BuildMart India", contact: "Amit Verma", email: "amit@buildmart.in", phone: "9800003333", city: "Delhi", terms: "Net 30", status: "Active", rating: 4 },
    { id: "V-004", name: "Eastern Hardware Ltd.", contact: "Suresh Das", email: "suresh@easternhw.com", phone: "9800004444", city: "Kolkata", terms: "Net 60", status: "Active", rating: 3 },
    { id: "V-005", name: "SafeGuard Equipment", contact: "Neha Singh", email: "neha@safeguard.in", phone: "9800005555", city: "Pune", terms: "Net 30", status: "Inactive", rating: 4 },
    { id: "V-006", name: "PipeLine Solutions", contact: "Kiran Rao", email: "kiran@pipeline.in", phone: "9800006666", city: "Hyderabad", terms: "Net 45", status: "Active", rating: 5 },
  ],

  purchaseOrders: [
    { id: "PO-2026-001", vendor: "V-001", vendorName: "Tata Steel Supplies", date: "2026-04-01", delivery: "2026-04-15", amount: 102000, status: "Approved", items: [{ mat: "MAT-1001", qty: 800, price: 85 }, { mat: "MAT-1007", qty: 100, price: 520 }] },
    { id: "PO-2026-002", vendor: "V-002", vendorName: "Siemens Electric Co.", date: "2026-04-03", delivery: "2026-04-20", amount: 76500, status: "Pending", items: [{ mat: "MAT-1002", qty: 200, price: 210 }, { mat: "MAT-1011", qty: 50, price: 850 }] },
    { id: "PO-2026-003", vendor: "V-003", vendorName: "BuildMart India", date: "2026-04-05", delivery: "2026-04-18", amount: 95200, status: "Approved", items: [{ mat: "MAT-1004", qty: 200, price: 380 }, { mat: "MAT-1003", qty: 400, price: 55 }] },
    { id: "PO-2026-004", vendor: "V-004", vendorName: "Eastern Hardware Ltd.", date: "2026-04-07", delivery: "2026-04-22", amount: 33600, status: "Pending", items: [{ mat: "MAT-1006", qty: 200, price: 120 }, { mat: "MAT-1009", qty: 200, price: 35 }] },
    { id: "PO-2026-005", vendor: "V-001", vendorName: "Tata Steel Supplies", date: "2026-04-10", delivery: "2026-04-25", amount: 27225, price: 165, status: "Closed", items: [{ mat: "MAT-1010", qty: 165, price: 165 }] },
    { id: "PO-2026-006", vendor: "V-005", vendorName: "SafeGuard Equipment", date: "2026-04-12", delivery: "2026-04-28", amount: 97500, status: "Pending", items: [{ mat: "MAT-1008", qty: 150, price: 650 }] },
    { id: "PO-2026-007", vendor: "V-006", vendorName: "PipeLine Solutions", date: "2026-04-14", delivery: "2026-04-30", amount: 49500, status: "Approved", items: [{ mat: "MAT-1003", qty: 900, price: 55 }] },
  ],

  goodsReceipts: [
    { id: "GR-2026-001", po: "PO-2026-001", date: "2026-04-16", vendor: "Tata Steel Supplies", plant: "P001", items: [{ mat: "MAT-1001", matName: "Steel Rods 10mm", qty: 800, uom: "KG" }], status: "Posted" },
    { id: "GR-2026-002", po: "PO-2026-003", date: "2026-04-19", vendor: "BuildMart India", plant: "P001", items: [{ mat: "MAT-1004", matName: "Cement 50kg Bag", qty: 200, uom: "BAG" }], status: "Posted" },
    { id: "GR-2026-003", po: "PO-2026-005", date: "2026-04-22", vendor: "Tata Steel Supplies", plant: "P002", items: [{ mat: "MAT-1010", matName: "Welding Rod 3.2mm", qty: 165, uom: "KG" }], status: "Pending" },
    { id: "GR-2026-004", po: "PO-2026-007", date: "2026-04-23", vendor: "PipeLine Solutions", plant: "P002", items: [{ mat: "MAT-1003", matName: "PVC Pipe 1 inch", qty: 900, uom: "MTR" }], status: "Pending" },
  ],

  chartData: {
    2026: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      po: [8, 12, 10, 15, 0, 0, 0, 0, 0, 0, 0, 0],
      gr: [6, 10, 9, 12, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    2025: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      po: [5, 8, 11, 9, 14, 12, 10, 15, 11, 13, 9, 16],
      gr: [4, 7, 9, 8, 12, 10, 9, 13, 10, 11, 8, 14],
    }
  }
};

// Save to localStorage for persistence
function saveData() {
  localStorage.setItem('sapData', JSON.stringify(SAPData));
}

function loadData() {
  const saved = localStorage.getItem('sapData');
  if (saved) {
    const parsed = JSON.parse(saved);
    Object.assign(SAPData, parsed);
  }
}

loadData();
