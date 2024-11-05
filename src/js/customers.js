import customers from './customers.json';

const vertionDesktop = document.querySelector('.content__table-info');
const contentDesktop = document.querySelector('.content__table-wrapper');
const vertionMobile = document.querySelector('.content__list');
const search = document.querySelector('#searchInput');
const paginationContainer = document.querySelector('.pagination');

const itemsPerPage = 8;
let currentPage = 1;

function getPaginatedData(data, page, perPage) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return data.slice(start, end);
}

function renderPagination() {
  const totalPages = Math.ceil(customers.length / itemsPerPage);
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.onclick = () => goToPage(i);
    if (i === currentPage) {
      button.disabled = true;
    }
    paginationContainer.appendChild(button);
  }
}

function renderVertionContent() {
  vertionDesktop.innerHTML = '';

  const paginatedCustomers = getPaginatedData(
    customers,
    currentPage,
    itemsPerPage
  );

  if (window.innerWidth < 768) {
    contentDesktop.classList.add('visually-hidden');
    vertionMobile.classList.remove('visually-hidden');

    const mobileVersionHTML = paginatedCustomers
      .map(customer => {
        const statusClass =
          customer.status === 'Active' ? 'active' : 'inactive';

        return `
        <li class="content__card">
          <ul class="customer__info">
            <li class="customer-item">
              <label>Customer Name:</label>
              <span>${customer.name}</span>
            </li>
            <li class="customer-item">
              <label>Company:</label>
              <span>${customer.company}</span>
            </li>
            <li class="customer-item">
              <label>Phone Number:</label>
              <span>${customer.phone}</span>
            </li>
            <li class="customer-item">
              <label>Email:</label>
              <span>${customer.email}</span>
            </li>
            <li class="customer-item">
              <label>Country:</label>
              <span>${customer.country}</span>
            </li>
            <li class="customer-item">
              <label>Status:</label>
              <span class="status ${statusClass}">${customer.status}</span>
            </li>
          </ul>
        </li>`;
      })
      .join('');

    vertionMobile.innerHTML = mobileVersionHTML;
  } else {
    contentDesktop.classList.remove('visually-hidden');
    vertionMobile.classList.add('visually-hidden');

    const desktopVersionHTML = paginatedCustomers
      .map(customer => {
        const statusClass =
          customer.status === 'Active' ? 'active' : 'inactive';

        return `
          <tr>
            <td>${customer.name}</td>
            <td>${customer.company}</td>
            <td>${customer.phone}</td>
            <td>${customer.email}</td>
            <td>${customer.country}</td>
            <td><span class="status ${statusClass}">${customer.status}</span></td>
          </tr>`;
      })
      .join('');

    vertionDesktop.innerHTML = desktopVersionHTML;
  }

  renderPagination();
}

function goToPage(page) {
  currentPage = page;

  renderVertionContent();
}

renderVertionContent();
window.addEventListener('resize', renderVertionContent);
