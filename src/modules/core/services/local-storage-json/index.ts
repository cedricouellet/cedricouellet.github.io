export function set(key: string, value: object): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getMany<T extends object>(key: string): T[] {
  const item = localStorage.getItem(key);

  if (item == null) {
    return [];
  }

  return JSON.parse(item);
}

export function get<T extends object>(key: string): T | undefined {
  const item = localStorage.getItem(key);

  if (item == null) {
    return undefined;
  }

  return JSON.parse(item);
}

export function remove(key: string) {
  localStorage.removeItem(key);
}

const LocalStorageJsonService = {
  set,
  get,
  getMany,
  remove,
};

export default LocalStorageJsonService;
