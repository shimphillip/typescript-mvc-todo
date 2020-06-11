export interface Todo {
  id: number
  text: string
  complete: boolean
}

export const areUniqueIds = (arr: Todo[]) => {
  const uniqIds: number[] = []

  arr.forEach(({ id }) => {
    if (uniqIds.includes(id)) {
      return false
    }

    uniqIds.push(id)
  })

  return true
}
