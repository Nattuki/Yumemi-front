export type PrefecturesResponse = {
  message: null
  result: {
    prefCode: number
    prefName: string
  }[]
}

export type CompositionResponse = {
  message: null
  result: {
    boundaryYear: number
    data: {
      label: string
      data: {
        year: number
        value: number
      }
    }[]
  }
}
