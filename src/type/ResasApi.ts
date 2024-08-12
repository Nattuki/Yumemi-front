type PrefectureResponse = {
  message: null
  result: {
    prefCode: number
    prefName: string
  }[]
}

type Prefecture = {
  code: number
  name: string
}

type CompositionResponse = {
  message: null
  result: {
    boundaryYear: number
    data: {
      label: string
      data: {
        year: number
        value: number
        rate?: number
      }
    }[]
  }
}

const isPrefectureResponse = (prefs: object): prefs is PrefectureResponse => {
  return 'message' in prefs && prefs.message === null && 'result' in prefs
}

export type { Prefecture }
export { isPrefectureResponse }
