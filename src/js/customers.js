import customers from './customers.json';
import { renderVertionContent } from './renderPage';
import { searchCustomers } from './search';

const userNameEL = document.querySelector('.main__title');
export const search = document.querySelector('#searchInput');

export const itemsPerPage = 8;
export let currentPage = 1;
export let filteredCustomers = customers;

search.addEventListener('input', searchCustomers);

document.addEventListener('DOMContentLoaded', () => {
  userNameEL.textContent = getUserName();
});

export const setFilteredCustomers = newFilteredCustomers => {
  filteredCustomers = newFilteredCustomers;
};

export const setCurrentPage = page => {
  currentPage = page;
};

function getUserName() {
  const nameEl = document.querySelector('.user__name');
  const textEl = nameEl ? nameEl.textContent : '';
  const renderedName = `Hello ${textEl} 👋🏼,`;

  return renderedName;
}

export function getPaginatedData(data, page, perPage) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return data.slice(start, end);
}

export function goToPage(page) {
  currentPage = page;

  renderVertionContent();
}

renderVertionContent();
window.addEventListener('resize', renderVertionContent);
