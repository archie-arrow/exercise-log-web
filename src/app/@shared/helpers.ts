export function enumToDropdownOptions<T>(enumObj: T): { name: string }[] {
  return Object.values(enumObj).map((item: string) => ({ name: item }));
}
