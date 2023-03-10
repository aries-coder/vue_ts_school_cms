export const tree = `vue_ts_school_cms
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   └── index.less
│   │   ├── images
│   │   │   ├── bg.svg
│   │   │   └── logo3.png
│   │   └── vue.svg
│   ├── base-ui
│   │   ├── form
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── index.vue
│   │   │   └── type.ts
│   │   ├── message-ui
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── message.vue
│   │   └── table
│   │       ├── index.ts
│   │       └── src
│   │           └── index.vue
│   ├── components
│   │   ├── login-form
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── index.vue
│   │   ├── nav-header
│   │   │   ├── config
│   │   │   │   └── modal.config.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── index.vue
│   │   ├── nav-menu
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── index.vue
│   │   ├── page-content
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── index.vue
│   │   ├── page-modal
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── index.vue
│   │   └── page-search
│   │       ├── index.ts
│   │       └── src
│   │           └── index.vue
│   ├── global
│   │   ├── index.ts
│   │   └── registerEl.ts
│   ├── global.d.ts
│   ├── hooks
│   │   ├── use-page-modal.ts
│   │   └── use-page-search.ts
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   └── main
│   │       ├── analysis
│   │       │   ├── overview
│   │       │   │   └── overview.ts
│   │       │   └── profile
│   │       │       └── profile.ts
│   │       ├── story
│   │       │   ├── chat
│   │       │   │   └── chat.ts
│   │       │   ├── list
│   │       │   │   └── list.ts
│   │       │   └── room
│   │       │       └── room.ts
│   │       ├── student
│   │       │   ├── course
│   │       │   │   └── course.ts
│   │       │   └── score
│   │       │       └── score.ts
│   │       ├── system
│   │       │   ├── course
│   │       │   │   └── course.ts
│   │       │   ├── student
│   │       │   │   └── index.ts
│   │       │   └── teacher
│   │       │       └── index.ts
│   │       └── teacher
│   │           ├── course
│   │           │   └── course.ts
│   │           └── score
│   │               └── score.ts
│   ├── service
│   │   ├── index.ts
│   │   ├── modules
│   │   │   ├── chat
│   │   │   │   └── index.ts
│   │   │   ├── login
│   │   │   │   └── index.ts
│   │   │   └── system
│   │   │       └── index.ts
│   │   └── request
│   │       ├── config.ts
│   │       ├── index.ts
│   │       └── type.ts
│   ├── store
│   │   ├── index.ts
│   │   └── modules
│   │       ├── chat
│   │       │   └── index.ts
│   │       ├── login
│   │       │   └── index.ts
│   │       ├── other
│   │       │   └── index.ts
│   │       └── system
│   │           ├── index.ts
│   │           └── type.ts
│   ├── utils
│   │   ├── cache.ts
│   │   ├── formatTime.ts
│   │   └── map-menus.ts
│   ├── views
│   │   ├── login
│   │   │   └── index.vue
│   │   └── main
│   │       ├── analysis
│   │       │   ├── overview
│   │       │   │   └── index.vue
│   │       │   └── profile
│   │       │       └── index.vue
│   │       ├── index.vue
│   │       ├── story
│   │       │   ├── chat
│   │       │   │   └── index.vue
│   │       │   ├── list
│   │       │   │   └── index.vue
│   │       │   ├── list-detail
│   │       │   │   └── index.vue
│   │       │   └── room
│   │       │       └── index.vue
│   │       ├── student
│   │       │   ├── course
│   │       │   │   ├── config
│   │       │   │   │   ├── content.config.ts
│   │       │   │   │   └── search.config.ts
│   │       │   │   └── index.vue
│   │       │   └── score
│   │       │       └── index.vue
│   │       ├── system
│   │       │   ├── course
│   │       │   │   ├── config
│   │       │   │   │   ├── content.config.ts
│   │       │   │   │   ├── modal.config.ts
│   │           ├── course
│   │           │   ├── config
│   │           │   │   ├── content.config.ts
│   │           │   │   └── search.config.ts
│   │           │   └── index.vue
│   │           └── score
│   │               └── index.vue
│   └── vite-env.d.ts
├── test.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts`

export const tree2 = `cms_node
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── config.js
│   │   ├── error-handler.js
│   │   ├── index.js
│   │   ├── keys
│   │   │   ├── private.key
│   │   │   └── public.key
│   │   └── socket.js
│   ├── constants
│   │   ├── error-types.js
│   │   ├── menus.js
│   │   └── path.js
│   ├── controller
│   │   ├── auth.controller.js
│   │   ├── chat.controller.js
│   │   ├── menu.controller.js
│   │   ├── student.controller.js
│   │   ├── system.controller.js
│   │   ├── teacher.controller.js
│   │   └── users.controller.js
│   ├── databases
│   │   └── index.js
│   ├── main.js
│   ├── middleware
│   │   ├── auth.middleware.js
│   │   ├── menu.middleware.js
│   │   └── users.middleware.js
│   ├── router
│   │   ├── auth.router.js
│   │   ├── chat.router.js
│   │   ├── index.js
│   │   ├── menu.router.js
│   │   ├── student.router.js
│   │   ├── system.router.js
│   │   ├── teacher.router.js
│   │   └── users.router.js
│   ├── service
│   │   ├── auth.service.js
│   │   ├── chat.service.js
│   │   ├── class.service.js
│   │   ├── course.service.js
│   │   ├── department.service.js
│   │   └── users.service.js
│   └── utils
│       ├── formatRequestBody.js
│       ├── formatSql.js
│       └── formatTime.js
├── test.html
└── test.js`
