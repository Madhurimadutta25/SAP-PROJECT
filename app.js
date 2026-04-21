// =============================================
// SAP IMS - SHARED APP UTILITIES
// =============================================

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function showToast(msg, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-times-circle' : 'fa-info-circle';
  toast.innerHTML = `<i class="fas ${icon}"></i> ${msg}`;
  toast.className = `toast ${type} show`;
  setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

function formatCurrency(n) {
  return '₹ ' + Number(n).toLocaleString('en-IN');
}

function formatDate(d) {
  if (!d) return '';
  const dt = new Date(d);
  return dt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function getStatusBadge(status) {
  const map = {
    'Approved': 'badge-success',
    'Active': 'badge-success',
    'Posted': 'badge-success',
    'Pending': 'badge-warning',
    'Closed': 'badge-info',
    'Inactive': 'badge-danger',
    'Critical': 'badge-danger',
    'Low': 'badge-warning',
    'OK': 'badge-success',
  };
  return `<span class="badge ${map[status] || 'badge-info'}">${status}</span>`;
}

function getStockStatus(stock, reorder) {
  if (stock <= 0) return { label: 'Out of Stock', cls: 'badge-danger' };
  if (stock < reorder) return { label: 'Low', cls: 'badge-warning' };
  if (stock < reorder * 1.2) return { label: 'Near Reorder', cls: 'badge-warning' };
  return { label: 'OK', cls: 'badge-success' };
}

// Set current date in topbar
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('topbar-date');
  if (el) {
    el.textContent = new Date().toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
  }
});

// Generate unique IDs
function genId(prefix, arr) {
  const nums = arr.map(x => parseInt(x.id.split('-').pop())).filter(n => !isNaN(n));
  const next = nums.length ? Math.max(...nums) + 1 : 1;
  return `${prefix}-${String(next).padStart(4, '0')}`;
}
