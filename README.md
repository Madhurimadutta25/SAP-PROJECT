# SAP Inventory Management System

**Student:** Madhurima Dutta  
**Roll Number:** 2328098  
**Branch:** CSSE  
**Program:** SAP Track — Capstone Project  
**Deadline:** April 21, 2026  

---

## Project Overview

A full-stack **SAP MM (Materials Management) Inventory Management System** built as a web application. It simulates core SAP MM module transactions including Material Master, Vendor Master, Purchase Orders, Goods Receipt, and Stock Management — all with a real SAP-inspired UI.

## Features

| Module | SAP Transaction | Description |
|---|---|---|
| Dashboard | — | KPIs, charts, low-stock alerts, recent POs |
| Material Master | MM01 / MM60 | CRUD operations for all materials |
| Vendor Master | XK01 / XK03 | Manage vendor records with ratings |
| Purchase Orders | ME21N / ME23N | Create, approve, and manage POs with line items |
| Goods Receipt | MIGO / MB01 | Post GR against POs, auto-update stock |
| Stock Overview | MMBE / MB52 | View stock levels, adjust inventory |
| Reports | — | Vendor analysis, stock valuation, PO summary |

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Charts:** Chart.js v4.4.0
- **Icons:** Font Awesome 6.4.0
- **Storage:** Browser LocalStorage (persistent data)
- **Hosting:** GitHub Pages compatible (no backend required)

## Project Structure

```
sap-inventory-system/
├── index.html               # Dashboard
├── css/
│   └── style.css            # All styles
├── js/
│   ├── data.js              # Shared data store + localStorage
│   ├── app.js               # Shared utilities (toast, format, etc.)
│   └── dashboard.js         # Dashboard charts & logic
└── pages/
    ├── materials.html        # Material Master (MM60)
    ├── vendors.html          # Vendor Master (XK01)
    ├── purchase-orders.html  # Purchase Orders (ME21N)
    ├── goods-receipt.html    # Goods Receipt (MIGO)
    ├── stock.html            # Stock Overview (MMBE)
    └── reports.html          # Analytics & Reports
```

## How to Run

### Option 1 — Open Directly
Just open `index.html` in any modern browser. No server needed.

### Option 2 — GitHub Pages
1. Push this repository to GitHub
2. Go to Settings → Pages → Set source to `main` branch → `/root`
3. Access at `https://<your-username>.github.io/sap-inventory-system/`

### Option 3 — Local Server
```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

## SAP Concepts Demonstrated

- **Material Types:** ROH (Raw), HALB (Semi-Finished), FERT (Finished Goods)
- **UOM (Unit of Measure):** KG, MTR, EA, SET, BAG, ROLL, CAN, SQM
- **Plant Management:** Multi-plant stock tracking (P001, P002)
- **Procurement Cycle:** PO Creation → Approval → Goods Receipt → Stock Update
- **Vendor Evaluation:** Rating system aligned with SAP ME61
- **Stock Monitoring:** Reorder point alerts, stock valuation reports

## Screenshots

> See Project Documentation PDF for full screenshots.

## Future Improvements

- Integration with SAP S/4HANA via OData APIs
- Role-based access control (MM Consultant, Buyer, Store Manager)
- Invoice verification module (MIRO transaction)
- Automatic reorder trigger via MRP run simulation
- Export reports to Excel/PDF
- Email alerts for low stock and pending PO approvals

## License

This project is developed for academic purposes as part of the Capstone Project submission.

---

*Developed by Madhurima Dutta | Roll No: 2328098 | CSSE | April 2026*
