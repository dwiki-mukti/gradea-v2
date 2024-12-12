declare global {
  interface typeStateForm {
    values?: Record<string, any>;
    labels?: Record<string, any>;
    invalids?: Record<string, string[]>;
    uncompleteds?: string[];
    statusCode?: number;
    valuePrimaryKey?: any;
  }
  interface typeStateInput {
    values?: Record<string, any>;
    labels?: Record<string, any>;
    invalids?: Record<string, string[]>;
    uncompleteds?: string[];
    statusCode?: number;
  }

  interface typeValidations {
    required?: boolean;
    max?: number;
    min?: number;
    length?: number;
    allowedTypes?: string[];
    confirmationColumn?: string;
  }
}
export {};
