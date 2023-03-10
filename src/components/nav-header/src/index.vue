<template>
  <div class="nav-header">
    <div class="hamburger" @click="changeMenuCollapsed">
      <n-icon size="35" v-if="menuCollapsed">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path
            d="M118.784 184.32h786.432v131.072H118.784V184.32z m0 262.144h524.288v131.072H118.784V446.464z m0 262.144h786.432v131.072H118.784V708.608z m589.824-360.448l196.608 163.84-196.608 131.072V348.16z"
            data-v-85c5a77c=""
          ></path>
        </svg>
      </n-icon>
      <n-icon size="35" v-else>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path
            d="M905.216 184.32H118.784v131.072h786.432V184.32z m0 262.144H380.928v131.072h524.288V446.464z m0 262.144H118.784v131.072h786.432V708.608zM315.392 380.928L118.784 512l196.608 131.072V380.928z"
            data-v-85c5a77c=""
          ></path>
        </svg>
      </n-icon>
    </div>
    <div class="breadcrumb">
      <n-breadcrumb>
        <template v-for="item in breadcrumbItems">
          <n-breadcrumb-item>{{ item }}</n-breadcrumb-item>
        </template>
      </n-breadcrumb>
    </div>
    <div class="avatar">
      <span class="name">{{userInfo.name}}</span>
      <n-dropdown :options="dropdownOptions" @select="selectDropdownOptions">
        <n-avatar
          round
          src=""
        />
      </n-dropdown>
    </div>
    <n-dialog-provider>
      <page-modal
        :modal-form-config="modalFormConfig"
        :default-info="userInfo"
        title="修改个人信息"
        event-name="updateCurrentUserInfo"
        @handle-show-modal="changeShowModal"
        v-if="showModal"
      />
    </n-dialog-provider>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
import useLoginStore from '@/store/modules/login'
import { storeToRefs } from 'pinia'
import { DropdownOption } from 'naive-ui'
import PageModal from '@/components/page-modal'
import { initiaModalFormConfig } from '../config/modal.config'

// props
defineProps({
  menuCollapsed: {
    type: Boolean,
    default: false
  },
  breadcrumbItems: {
    type: Array,
    default: () => []
  }
})
//emits
const emits = defineEmits(['changeMenuCollapsed', 'logout'])

// store
const loginStore = useLoginStore()
const { userInfo, accountKey } = storeToRefs(loginStore)

// ref
const dropdownOptions = ref<DropdownOption[]>([
  {
    label: '修改资料',
    key: 'update_info'
  },
  {
    label: '退出',
    key: 'logout'
  }
])
const modalFormConfig = ref(initiaModalFormConfig(accountKey.value))
const showModal = ref(false)

// methods
const changeMenuCollapsed = () => {
  emits('changeMenuCollapsed')
}
const selectDropdownOptions = (key: string) => {
  switch (key) {
    case 'logout':
      emits('logout')
      break
    case 'update_info':
      changeShowModal(true)
      break
    default:
      break
  }
}
const changeShowModal = (key: boolean) => {


  showModal.value = key
}

</script>

<style lang="less" scoped>
.nav-header {
  height: 100%;
  // background-color: red;
  display: flex;
  align-items: center;

  .hamburger {
    display: flex;
    justify-items: center;
    cursor: pointer;
    margin-left: 10px;
  }

  .breadcrumb {
    margin-left: 10px;
  }

  .avatar {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin-right: 10px;
    cursor: pointer;

    .name {
      display: flex;
      align-items: center;
      margin-right: 5px;
    }
  }
}
</style>
