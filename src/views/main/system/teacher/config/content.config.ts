import { NButton, NTag } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { h } from 'vue'
import { formatUtcTime } from '@/utils/formatTime'

export const tableColumnsConfig: DataTableColumns = [
  {
    title: '序号',
    key: 'sort',
    align: 'center',
    width: 40
  },
  {
    title: '姓名',
    key: 'name',
    align: 'center',
    width: 80,
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: '身份证号',
    key: 'id_card',
    align: 'center',
    width: 150,
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: '家庭地址',
    key: 'address',
    align: 'center',
    width: 150,
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: '性别',
    key: 'gender',
    align: 'center',
    width: 40
  },
  {
    title: '民族',
    key: 'nation',
    align: 'center',
    width: 80,
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: '工号',
    key: 'job_id',
    align: 'center'
  },
  {
    title: '电话号码',
    key: 'cellphone',
    align: 'center',
  },
  {
    title: '创建时间',
    key: 'createdAt',
    align: 'center'
  },
  {
    title: '更新时间',
    key: 'updatedAt',
    align: 'center'
  },
  {
    title: '状态',
    key: 'status',
    align: 'center',
    render(row: any) {
      return h(
        NTag,
        {
          type: row.status === '1' ? 'success' : 'error'
        },
        {
          default: () => (row.status === '1' ? '进行中' : '已结束')
        }
      )
    }
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
    width: 150,
    render(row: any) {
      const btns = row.action.map((item: any) => {
        return h(
          NButton,
          {
            type: item.type,
            onClick: () => {
              switch (item.text) {
                case '编辑':
                  item.fn(true, row)
                  break;
                case '删除':
                  item.fn(row.id)
                  break
                default:
                  break;
              }
            }
          },
          {
            default: () => item.text
          }
        )
      })

      return btns
    }
  }
]

export interface ITableRowType {
  sort: number
  id: number
  name: string
  gender: string
  id_card: string
  job_id: string
  cellphone: string
  createdAt: string
  address: string
  updatedAt: string
  status: string
  nation: string
  action: any[]
}

export const initiaTableRowFn = (listInfo: any[], btnEvents: Function[]) => {
  const rowListInfo: ITableRowType[] = []
  listInfo.forEach((item, index: number) => {
    rowListInfo.push({
      sort: index + 1,
      id: item.id,
      name: item.name,
      address: item.address,
      createdAt: formatUtcTime(item.createdAt),
      updatedAt: formatUtcTime(item.updatedAt),
      status: item.status,
      cellphone: item.cellphone,
      nation: item.nation,
      gender: item.gender,
      id_card: item.id_card,
      job_id: item.job_id,
      action: [
        {
          text: '编辑',
          type: 'primary',
          fn: btnEvents[0]
        },
        {
          text: '删除',
          type: 'error',
          fn: btnEvents[1]
        }
      ]
    })
  })


  return rowListInfo
}

