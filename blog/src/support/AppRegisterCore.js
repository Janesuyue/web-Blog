/**
 * vue 实列注册
 * - 基础组件(@/components)
 * - ps: 注册得组件命名方式需大小写混合使用
 * - 指令注册
 */
import Vue from "vue";
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

let AppRegister = {};

/**
 * 注册自定义组件
 * @param vue
 */
AppRegister.registerComponents = () => {
    const requireComponent = require.context(
        // 其组件目录的相对路径
        '../components',
        // 是否查询其子目录
        false,
        // 匹配基础组件文件名的正则表达式 // Base
        /[A-Z]\w+\.(vue|js)$/
    )
    requireComponent.keys().forEach(fileName => {
        // 获取组件配置
        const componentConfig = requireComponent(fileName)
        // console.log(componentConfig)

        // 获取组件的 PascalCase 命名
        const componentName = upperFirst(
            camelCase(
                // 获取和目录深度无关的文件名
                fileName
                    .split('/')
                    .pop()
                    .replace(/\.\w+$/,'')
            )
        )

        // 如果这个组件选项是通过 'export default' 导出的，
        // 那么就会优先使用 '.default'
        // 否则回退到使用模块的根
        let componentDef = componentConfig.default || componentConfig
        // 全局注册组件
        Vue.component(
            componentName,
            componentDef
        )
    })
}

AppRegister.install = (vue) => {
    AppRegister.registerComponents(vue)
}

export default AppRegister