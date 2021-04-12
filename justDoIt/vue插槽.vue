<template name="component-name">
  <div>
    <!-- 1.第一种方式 （默认）-->
    <!-- 父组件 -->
    <div>
      <child>你好，我是父组件</child>
    </div>

    <!-- 子组件child -->
    <div>
      <p>我是子组件</p>
      <slot></slot>
    </div>

    <!-- 2.添加name属性，指定插槽位置
          -父组件通过v-slot:属性名，指定子组件渲染位置
          -若没有指定名称则父组件中未使用v-slot的内容会渲染到子组件对应的默认位置
    -->
    <!-- 父组件 -->
    <div>
      <child>
        <template v-slot:header>你好，我是父组件</template>
        <template>你好，我是默认内容</template>
      </child>
    </div>

    <!-- 子组件child -->
    <div>
      <p>我是子组件</p>
      <slot></slot>
      <slot name="header"></slot>
    </div>

    <!-- 3.默认是父组件，子组件的数据不互通；但通过插槽，父组件可以获取子组件的数据
          -若子组件slot指定了名称，可以在父组件自定义一个名称（如first）获取子组件插槽传来的子组件数据
          -若没有指定名称。v-slot:default='自定义名'，default即可
    -->

    <!-- 父组件 -->
    <div>
      <child>
        <template v-slot:default="first">{{ first.child1 }}</template>
        <template v-slot:header="secound">{{ secound.child2 }}</template>
      </child>
    </div>

    <!-- 子组件child -->
    <div>
      <p>我是子组件</p>
      <slot :value1="child1"></slot>
      <slot name="header" :value2="child2"></slot>
    </div>
  </div>
</template>

