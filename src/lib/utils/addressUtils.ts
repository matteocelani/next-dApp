export function getShortAddress(address: string | `0x${string}`): string {
  if (!address || address.length <= 10) {
    return address;
  }

  const start = address.substring(0, 4);
  const end = address.substring(address.length - 4);

  return `${start}…${end}`;
}
