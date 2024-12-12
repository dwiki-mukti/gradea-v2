declare global {
  interface typeDataTable {
    dataRows?: Record<string, any>[];
    paginate?: {
      current_page: number;
      last_page: number;
      per_page: number;
      total: number;
    };
    primaryKey?: string;
    statusCode?: number;
  }
}
export {};
