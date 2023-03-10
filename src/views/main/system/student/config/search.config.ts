import { IFormConfig } from "@/base-ui/form"

export const initiaSearchFormConfig = (departmentOptions: any, classOptions: any) :IFormConfig => {
  return {
    labelWidth: "100px",
    formItems: [
      {
        field: "id",
        label: "id",
        type: "input",
        placeholder: "请输入学生id",
        itemType: "text"
      },
      {
        field: "name",
        label: "姓名",
        type: "input",
        placeholder: "请输入学生姓名",
        itemType: "text"
      },
      {
        field: "department_id",
        label: "学院",
        type: "select",
        placeholder: "请输入学生所属学院",
        options: departmentOptions
      },
      {
        field: "class_id",
        label: "班级",
        type: "select",
        placeholder: "请输入学生班级",
        options: classOptions
      },
      {
        field: "status",
        label: "状态",
        type: "select",
        placeholder: "请选择状态",
        options: [
          {
            label: '启用',
            value: '1'
          },
          {
            label: '禁用',
            value: '0'
          },

        ]
      }
    ]
  }

}

