import { IFormConfig } from "@/base-ui/form"
import { AccountKey } from "@/service";

export const initiaModalFormConfig = (accountKey: AccountKey) :IFormConfig => {
  let modalConfig: IFormConfig = {labelWidth: "", formItems: []}

  switch (accountKey) {
    case 'student':
      modalConfig = {
        labelWidth: "110px",
        formItems: [
          {
            field: "name",
            label: "姓名",
            type: "input",
            placeholder: "请输入姓名",
            itemType: "text"
          },
          {
            field: "address",
            label: "家庭地址",
            type: "input",
            placeholder: "请输入家庭地址",
            itemType: "text"
          },
          {
            field: "cellphone",
            label: "电话号码",
            type: "input",
            placeholder: "请输入电话号码",
            itemType: "text"
          },
          {
            field: "gender",
            label: "性别",
            type: "radio",
            radioValue: ["男", "女"]
          },
          {
            field: "nation",
            label: "民族",
            type: "input",
            placeholder: "请输入民族",
            itemType: "text"
          },
          {
            field: "id_card",
            label: "身份证号",
            type: "input",
            placeholder: "请输入身份证号",
            itemType: "text"
          },
          {
            field: "cellphone",
            label: "电话号码",
            type: "input",
            placeholder: "请输入电话号码",
            itemType: "text"
          }
        ]
      }
      break;
    case 'teacher':
      modalConfig = {
        labelWidth: "110px",
        formItems: [
          {
            field: "name",
            label: "姓名",
            type: "input",
            placeholder: "请输入姓名",
            itemType: "text"
          },
          {
            field: "address",
            label: "家庭地址",
            type: "input",
            placeholder: "请输入家庭地址",
            itemType: "text"
          },
          {
            field: "cellphone",
            label: "电话号码",
            type: "input",
            placeholder: "请输入电话号码",
            itemType: "text"
          },
          {
            field: "gender",
            label: "性别",
            type: "radio",
            radioValue: ["男", "女"]
          },
          {
            field: "nation",
            label: "民族",
            type: "input",
            placeholder: "请输入民族",
            itemType: "text"
          },
          {
            field: "id_card",
            label: "身份证号",
            type: "input",
            placeholder: "请输入身份证号",
            itemType: "text"
          },
          {
            field: "cellphone",
            label: "电话号码",
            type: "input",
            placeholder: "请输入电话号码",
            itemType: "text"
          }
        ]
      }
      break;
    case 'admin':
      modalConfig = {
        labelWidth: "110px",
        formItems: [
          {
            field: "name",
            label: "姓名",
            type: "input",
            placeholder: "请输入姓名",
            itemType: "text"
          },
          {
            field: "address",
            label: "家庭地址",
            type: "input",
            placeholder: "请输入家庭地址",
            itemType: "text"
          },
          {
            field: "cellphone",
            label: "电话号码",
            type: "input",
            placeholder: "请输入电话号码",
            itemType: "text"
          },
          {
            field: "gender",
            label: "性别",
            type: "radio",
            radioValue: ["男", "女"]
          },
          {
            field: "nation",
            label: "民族",
            type: "input",
            placeholder: "请输入民族",
            itemType: "text"
          },
          {
            field: "id_card",
            label: "身份证号",
            type: "input",
            placeholder: "请输入身份证号",
            itemType: "text"
          }
        ]
      }
    default:
      break;
  }

  return modalConfig
}
