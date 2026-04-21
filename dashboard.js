// =============================================
// SAP IMS - DASHBOARD LOGIC
// =============================================

let poGrChartInstance = null;
let stockPieChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  renderRecentPO();
  renderLowStock();
  renderPoGrChart('2026');
  renderStockPieChart();
  updateKPIs();
});

function updateKPIs() {
  document.getElementById('kpi-materials').textContent = SAPData.materials.length;
  const openPOs = SAPData.purchaseOrders.filter(p => p.status === 'Pending' || p.status === 'Approved').length;
  document.getElementById('kpi-po').textContent = openPOs;
  const low = SAPData.materials.filter(m => m.stock < m.reorder).length;
  document.getElementById('kpi-low').textContent = low;
  document.getElementById('kpi-vendors').textContent = SAPData.vendors.filter(v => v.status === 'Active').length;
}

function renderRecentPO() {
  const tbody = document.getElementById('recent-po-table');
  if (!tbody) return;
  const recent = [...SAPData.purchaseOrders].slice(-5).reverse();
  tbody.innerHTML = recent.map(po => `
    <tr>
      <td><strong>${po.id}</strong></td>
      <td>${po.vendorName}</td>
      <td>${formatCurrency(po.amount)}</td>
      <td>${getStatusBadge(po.status)}</td>
    </tr>
  `).join('');
}

function renderLowStock() {
  const tbody = document.getElementById('low-stock-table');
  if (!tbody) return;
  const low = SAPData.materials.filter(m => m.stock < m.reorder);
  tbody.innerHTML = low.map(m => {
    const s = getStockStatus(m.stock, m.reorder);
    const pct = Math.min(100, Math.round((m.stock / m.reorder) * 100));
    const barCls = pct < 30 ? 'red' : 'orange';
    return `
      <tr>
        <td><strong>${m.name}</strong></td>
        <td>
          <div>${m.stock} ${m.uom}</div>
          <div class="progress-bar" style="margin-top:4px"><div class="progress-fill ${barCls}" style="width:${pct}%"></div></div>
        </td>
        <td>${m.reorder} ${m.uom}</td>
        <td><span class="badge ${s.cls}">${s.label}</span></td>
      </tr>
    `;
  }).join('');
}

function updateChart(year) {
  renderPoGrChart(year);
}

function renderPoGrChart(year) {
  const ctx = document.getElementById('poGrChart');
  if (!ctx) return;
  const d = SAPData.chartData[year];
  if (poGrChartInstance) poGrChartInstance.destroy();
  poGrChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: d.labels,
      datasets: [
        {
          label: 'Purchase Orders',
          data: d.po,
          backgroundColor: 'rgba(0,87,184,0.7)',
          borderRadius: 5,
        },
        {
          label: 'Goods Receipts',
          data: d.gr,
          backgroundColor: 'rgba(16,126,62,0.7)',
          borderRadius: 5,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'top' } },
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 2 } }
      }
    }
  });
}

function renderStockPieChart() {
  const ctx = document.getElementById('stockPieChart');
  if (!ctx) return;
  const groups = {};
  SAPData.materials.forEach(m => {
    groups[m.group] = (groups[m.group] || 0) + m.stock;
  });
  if (stockPieChartInstance) stockPieChartInstance.destroy();
  stockPieChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(groups),
      datasets: [{
        data: Object.values(groups),
        backgroundColor: ['#0057b8','#107e3e','#e76500','#6a2382','#bb0000','#00539b','#3d7a57'],
        borderWidth: 2, borderColor: '#fff',
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom', labels: { font: { size: 11 } } } },
      cutout: '60%'
    }
  });
}
