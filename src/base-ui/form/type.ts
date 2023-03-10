export interface IFormItem {
  field: string
  label: string
  type: string
  placeholder?: string
  itemType?: string
  options?: any[]
  radioValue?: string[]
}

export interface IFormConfig {
  formItems: IFormItem[]
  labelWidth: string
}
