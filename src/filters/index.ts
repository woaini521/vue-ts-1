/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(num: number): string {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}
