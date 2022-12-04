import { App } from 'vue'
import {
  create,
  NButton,
  NCard,
  NForm,
  NFormItem,
  NInput,
  NTabPane,
  NTabs,
  NMessageProvider,
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NMenu,
  NIcon,
  NBreadcrumb,
  NBreadcrumbItem,
  NDropdown,
  NAvatar,
  NDialogProvider,
  NRadio,
  NGrid,
  NGridItem,
  NDatePicker,
  NConfigProvider,
  NDataTable,
  NSelect,
  NLayoutFooter,
  NTag,
  NCarousel,
} from 'naive-ui'

const components = create({
  components: [
    NButton,
    NCard,
    NTabs,
    NTabPane,
    NForm,
    NFormItem,
    NInput,
    NMessageProvider,
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutContent,
    NMenu,
    NIcon,
    NBreadcrumb,
    NBreadcrumbItem,
    NDropdown,
    NAvatar,
    NDialogProvider,
    NRadio,
    NGrid,
    NGridItem,
    NDatePicker,
    NConfigProvider,
    NDataTable,
    NSelect,
    NLayoutFooter,
    NTag,
    NCarousel
  ]
})

const registerEl = (app: App) => {
  app.use(components)
}

export default registerEl
