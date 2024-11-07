import customers from './customers.json';

const vertionDesktop = document.querySelector('.content__table-info');
const contentDesktop = document.querySelector('.content__table-wrapper');
const vertionMobile = document.querySelector('.content__list');
const userNameEL = document.querySelector('.main__title');
const search = document.querySelector('#searchInput');
const paginationContainer = document.querySelector('.pagination');

const itemsPerPage = 8;
let currentPage = 1;
let filteredCustomers = customers;

search.addEventListener('input', searchCustomers);

document.addEventListener('DOMContentLoaded', () => {
  userNameEL.textContent = userName();
});

function userName() {
  const nameEl = document.querySelector('.user__name');
  const textEl = nameEl ? nameEl.textContent : '';
  const renderedName = `Hello ${textEl} 👋🏼,`;

  return renderedName;
}

function getPaginatedData(data, page, perPage) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return data.slice(start, end);
}
function renderPagination() {
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  paginationContainer.innerHTML = '';

  const prevButton = document.createElement('button');
  prevButton.innerHTML = `
          <svg class="prev__arrow" width="14" height="14">
          <use href="./img/svg/symbol-defs.svg#icon-arrow"></use>
          </svg>`;
  prevButton.disabled = currentPage === 1;
  prevButton.onclick = () => goToPage(currentPage - 1);
  paginationContainer.appendChild(prevButton);

  addPageButton(1);

  if (currentPage > 3) {
    paginationContainer.appendChild(createDots());
  }

  for (
    let i = Math.max(2, currentPage - 1);
    i <= Math.min(totalPages - 1, currentPage + 1);
    i++
  ) {
    addPageButton(i);
  }

  if (currentPage < totalPages - 2) {
    paginationContainer.appendChild(createDots());
  }

  if (totalPages > 1) {
    addPageButton(totalPages);
  }

  const nextButton = document.createElement('button');
  nextButton.innerHTML = `
          <svg class="next__arrow" width="14" height="14">
          <use href="./img/svg/symbol-defs.svg#icon-arrow"></use>
          </svg>`;
  nextButton.disabled = currentPage === totalPages;
  nextButton.onclick = () => goToPage(currentPage + 1);
  paginationContainer.appendChild(nextButton);

  function addPageButton(page) {
    const button = document.createElement('button');
    button.textContent = page;
    button.onclick = () => goToPage(page);
    if (page === currentPage) {
      button.classList.add('active');
    }
    paginationContainer.appendChild(button);
  }

  function createDots() {
    const dots = document.createElement('span');
    dots.textContent = '...';
    dots.classList.add('dots');
    return dots;
  }
}

function renderVertionContent() {
  vertionDesktop.innerHTML = '';

  const paginatedCustomers = getPaginatedData(
    filteredCustomers,
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

function searchCustomers() {
  const searchValue = search.value.toLowerCase();
  filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchValue)
  );
  currentPage = 1;
  renderVertionContent();
}

renderVertionContent();
window.addEventListener('resize', renderVertionContent);
