import customers from './customers.json';
import { renderVertionContent } from './renderPage';
import { setFilteredCustomers, setCurrentPage, search } from './customers';

export function searchCustomers() {
  const searchValue = search.value.toLowerCase();
  const filtered = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchValue)
  );

  setFilteredCustomers(filtered);
  setCurrentPage(1);
  renderVertionContent();
}
