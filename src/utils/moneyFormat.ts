export function moneyFormat(value: number) {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  })
}
