import { IFormConfig } from '@/base-ui/form'

export const initiaModalFormConfig = (departmentOptions: any, classOptions: any): IFormConfig => {
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
        field: 'grade',
        label: '年级',
        type: 'input',
        placeholder: '请输入年级',
        itemType: 'text'
      },
      {
        field: 'department_id',
        label: '学院',
        type: 'select',
        placeholder: '请选择学院',
        options: departmentOptions
      },
      {
        field: 'class_id',
        label: '班级',
        type: 'select',
        placeholder: '请选择班级',
        options: classOptions
      },
      {
        field: 'student_id',
        label: '学号',
        type: 'input',
        placeholder: '请输入学号',
        itemType: 'text'
      },
      {
        field: 'date',
        label: '在校时间',
        type: 'datePicker',
        placeholder: '请输入在校时间',
        itemType: 'daterange'
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
