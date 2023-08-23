export interface ShinobiInterface {
  id: string;
  name: string;
  images?: string[];
}

export interface PageResponse {
  currentPage: number;
  pageSize: number;
}
