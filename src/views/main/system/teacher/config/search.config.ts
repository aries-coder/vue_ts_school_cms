import { IFormConfig } from "@/base-ui/form"

export const initiaSearchFormConfig = () :IFormConfig => {
  return {
    labelWidth: "100px",
    formItems: [
      {
        field: "id",
        label: "id",
        type: "input",
        placeholder: "请输入id",
        itemType: "text"
      },
      {
        field: "name",
        label: "姓名",
        type: "input",
        placeholder: "请输入要查找的老师名称",
        itemType: "text"
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

