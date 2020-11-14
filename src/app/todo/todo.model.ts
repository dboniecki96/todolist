export enum Priority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High'
}

export interface Todo {
  name: string;
  priority: Priority;
}

export const todosMock: Todo[] = [
  {
    name: 'Take out the trash',
    priority: Priority.Low
  },
  {
    name: 'Feed the dog',
    priority: Priority.Medium
  },
  {
    name: 'Order lunch',
    priority: Priority.Medium
  },
  {
    name: 'Send email to Peter',
    priority: Priority.High
  },
  {
    name: 'Buy groceries',
    priority: Priority.High
  }
];
