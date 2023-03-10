import { IFormConfig } from "@/base-ui/form"

export const initiaSearchFormConfig = (teacherOptions: any) :IFormConfig => {
  return {
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
        field: "teacher_id",
        label: "老师",
        type: "select",
        placeholder: "请输入要查找的课程的老师",
        options: teacherOptions
      },
      {
        field: "credit",
        label: "学分",
        type: "select",
        placeholder: "请选择学分进行筛选课程",
        options: [
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          },
          {
            label: '3',
            value: '3'
          }
        ]
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
      },
      {
        field: "date",
        label: "开课时间",
        type: "datePicker",
        itemType: "daterange"
      }
    ]
  }

}
