import { NButton, NTag } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { h } from 'vue'
import { formatUtcTime } from '@/utils/formatTime'

export const tableColumnsConfig: DataTableColumns = [
  {
    title: '序号',
    key: 'sort',
    align: 'center',
    width: '3%'
  },
  {
    title: '课程名',
    key: 'name',
    align: 'center',
    width: '10%',
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: '课程描述',
    key: 'description',
    align: 'center',
    width: '20%',
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: '老师',
    key: 'teacher_id',
    align: 'center',
    width: '7%',
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: '课程专业',
    key: 'department_id',
    align: 'center',
    width: '10%',
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: '学分',
    key: 'credit',
    align: 'center',
    width: 40
  },
  {
    title: '开课时间',
    key: 'start_time',
    align: 'center'
  },
  {
    title: '结课时间',
    key: 'end_time',
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
  start_time: string
  end_time: string
  description: string
  teacher_id: string
  credit: number
  status: string
  action: any[]
  department_id: string
}

export const initiaTableRowFn = (listInfo: any[], btnEvents: Function[]) => {
  const rowListInfo: ITableRowType[] = []
  listInfo.forEach((item, index: number) => {
    rowListInfo.push({
      sort: index + 1,
      id: item.id,
      name: item.name,
      start_time: formatUtcTime(item.start_time),
      end_time: formatUtcTime(item.end_time),
      description: item.description,
      teacher_id: item.teacher_name,
      status: item.status,
      credit: item.credit,
      department_id: item.department ? `${item.department}` : '公共课',
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

