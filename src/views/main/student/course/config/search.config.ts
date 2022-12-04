import { IFormConfig } from "@/base-ui/form"

export const searchFormConfig: IFormConfig = {
  labelWidth: "100px",
  formItems: [
    {
      field: "id",
      label: "id",
      type: "input",
      placeholder: "请输入要查找的课程id",
      itemType: "text"
    },
    {
      field: "name",
      label: "课程名",
      type: "input",
      placeholder: "请输入要查找的课程名",
      itemType: "text"
    },
    {
      field: "teacher",
      label: "老师",
      type: "input",
      placeholder: "请输入要查找的课程的老师",
      itemType: "text"
    },
    {
      field: "credit",
      label: "学分",
      type: "input",
      placeholder: "请输入学分进行筛选课程",
      itemType: "text"
    },
    {
      field: "status",
      label: "状态",
      type: "input",
      placeholder: "请选择状态",
      itemType: "text"
    },
    {
      field: "date",
      label: "开课时间",
      type: "datePicker",
      itemType: "daterange"
    }
  ]
}
