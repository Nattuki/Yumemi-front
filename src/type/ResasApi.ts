type PrefectureResponse = {
  message: null
  result: {
    prefCode: number
    prefName: string
  }[]
}

const isPrefectureResponse = (prefs: object): prefs is PrefectureResponse => {
  return 'message' in prefs && prefs.message === null && 'result' in prefs
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
      }[]
    }[]
  }
}

type Composition = {
  name: string
  info: {
    label: string
    data: {
      year: number
      value: number
    }[]
  }[]
}

const isCompositionResponse = (comp: object): comp is CompositionResponse => {
  return 'message' in comp && comp.message === null && 'result' in comp
}

export type { Prefecture, CompositionResponse, Composition }
export { isPrefectureResponse, isCompositionResponse }
