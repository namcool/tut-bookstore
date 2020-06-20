export const API_ROOT = 'https://bookstore.lehuy.co/api/';
export const BASE_URL = 'https://bookstore.lehuy.co';

export default {
  HOME: {
    BEST_SELLERS: API_ROOT + 'home/bestsellers',
    NEW_RELEASES:  API_ROOT + 'home/newReleases',
  },
  BOOK: {
    LIST: API_ROOT + 'books',
    GET:  API_ROOT + 'books/:id',
  },
  CATEGORY: {
    LIST: API_ROOT + 'categories',
  },
  BOOK_CATEGORY: {
    LIST: API_ROOT + 'book_categories',
  },
};
