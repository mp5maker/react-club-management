const prepareFormData = ({ form }: { form: { [x: string]: string } }) => {
  const formData = new FormData()
  const allKeys = Object.keys(form)

  allKeys.forEach((key) => {
    formData.append(key, form[key])
  })

  return formData
}

export default prepareFormData
