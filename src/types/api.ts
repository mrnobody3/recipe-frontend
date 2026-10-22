/**
 * Standard Django REST Framework paginated response structure.
 */
export interface PaginatedResponseDto<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

/**
 * Standard Django REST Framework error response structure.
 */
export interface ApiErrorResponseDto {
  detail?: string;
  [key: string]: unknown;
}
