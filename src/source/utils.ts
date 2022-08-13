export interface TaskStatus<T> {
  done: boolean;
  value?: T | null;
}

/**
 * A task that can be retried
 */
export interface Task<T> {
  run(): Promise<TaskStatus<T>>;
  description: string;
}
