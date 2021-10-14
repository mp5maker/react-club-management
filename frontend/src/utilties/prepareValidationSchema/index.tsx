import get from 'lodash/get'

export const prepareValidationSchema = (errorObj: any) => {
  const inner: Array<any> = get(errorObj, 'inner', [])
  return inner.reduce((newErrorObj, item) => {
    const message = get(item, 'message', '')
    const path = get(item, 'path', '')
    return {
      ...newErrorObj,
      [path]: message
    }
  }, {})
}

export default prepareValidationSchema