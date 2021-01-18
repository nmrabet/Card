export interface ListUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: AllUsers[];
  support: {
    url: string;
    text: string;
  };
}

interface AllUsers {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
