import { IFormConfig } from '@/base-ui/form'

export const initiaModalFormConfig = (): IFormConfig => {
  return {
    labelWidth: '100px',
    formItems: [
      {
        field: 'name',
        label: '姓名',
        type: 'input',
        itemType: 'text',
        placeholder: '请输入姓名'
      },
      {
        field: 'gender',
        label: '性别',
        type: 'select',
        placeholder: '请选择性别',
        options: [
          {
            label: '男',
            value: '男'
          },
          {
            label: '女',
            value: '女'
          }
        ]
      },
      {
        field: 'id_card',
        label: '身份证号',
        type: 'input',
        placeholder: '请输入身份证号',
        itemType: 'text'
      },
      {
        field: 'address',
        label: '家庭住址',
        type: 'input',
        placeholder: '请输入家庭住址',
        itemType: 'text'
      },
      {
        field: 'cellphone',
        label: '电话号码',
        type: 'input',
        placeholder: '请输入电话号码',
        itemType: 'text'
      },
      {
        field: 'nation',
        label: '民族',
        type: 'input',
        placeholder: '请输入民族',
        itemType: 'text'
      },
      {
        field: 'job_id',
        label: '工号',
        type: 'input',
        placeholder: '请输入工号',
        itemType: 'text'
      },
      {
        field: 'status',
        label: '状态',
        type: 'select',
        placeholder: '请选择状态',
        options: [
          {
            label: '启用',
            value: '1'
          },
          {
            label: '禁用',
            value: '0'
          }
        ]
      }
    ]
  }
}
