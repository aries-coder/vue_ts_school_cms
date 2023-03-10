import { NButton, NTag } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { h } from 'vue'
import { formatUtcTime } from '@/utils/formatTime'

export const tableColumnsConfig: DataTableColumns = [
  {
    title: '序号',
    key: 'sort',
    align: 'center'
  },
  {
    title: '课程名',
    key: 'name',
    align: 'center'
  },
  {
    title: '课程描述',
    key: 'description',
    align: 'center',
    width: 100,
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: '老师',
    key: 'teacher_name',
    align: 'center'
  },
  {
    title: '课程专业',
    key: 'department',
    align: 'center'
  },
  {
    title: '学分',
    key: 'credit',
    align: 'center'
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
          type: row.status === 1 ? 'success' : 'error'
        },
        {
          default: () => (row.status === 1 ? '进行中' : '已结束')
        }
      )
    }
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
    render(row: any) {
      const btns = row.action.map((item: any) => {
        return h(
          NButton,
          {
            type: item.type,
            onClick: () => {
              switch (item.text) {
                case '选课':
                  item.fn({
                    course_id: row.id,
                    teacher_id: row.teacher_id,
                    department_id: row.department_id
                  })
                  break;
                case '退课':
                  item.fn(row.id)
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
  teacher_name: string
  credit: number
  status: number
  department: string
  action: any[]
  teacher_id: number
  department_id: number
}

export const initiaTableRowFn = (listInfo: any[], fn: Function) => {
  const rowListInfo: ITableRowType[] = []
  listInfo.forEach((item, index: number) => {
    rowListInfo.push({
      sort: index + 1,
      id: item.id,
      name: item.name,
      start_time: formatUtcTime(item.start_time),
      end_time: formatUtcTime(item.end_time),
      description: item.description,
      teacher_id: item.teacher_id,
      teacher_name: item.teacher_name,
      status: parseInt(item.status),
      credit: item.credit,
      department: item.department ? `${item.department}` : '公共课',
      department_id: item.department_id,
      action: [
        {
          text: '选课',
          type: 'primary',
          fn
        }
      ]
    })
  })


  return rowListInfo
}

export const initiaCurrentSelectCourseInfo = (currentInfo: any[], fn: Function) => {
  const currentListInfo: ITableRowType[] = []
 

  currentInfo.forEach((item, index) => {
    currentListInfo.push({
      sort: index + 1,
      id: item.id,
      name: item.name,
      start_time: formatUtcTime(item.start_time),
      end_time: formatUtcTime(item.end_time),
      description: item.description,
      teacher_id: item.teacher_id,
      teacher_name: item.teacher_name,
      status: parseInt(item.status),
      credit: item.credit,
      department: item.department ? `${item.department}` : '公共课',
      department_id: item.department_id,
      action: [
        {
          text: '退课',
          type: 'error',
          fn
        }
      ]
    })

  })

  return currentListInfo
}
