export type NavItem = {
  name: string;
  to: string;
}

export type Navigation = [ NavItem, ...NavItem[] ];