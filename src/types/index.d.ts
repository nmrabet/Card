export interface Card {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: [
    {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    },
    {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    },
    {
      id: 9;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    },
    {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    },
    {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    },
    {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    }
  ];
  support: {
    url: string;
    text: string;
  };
}
