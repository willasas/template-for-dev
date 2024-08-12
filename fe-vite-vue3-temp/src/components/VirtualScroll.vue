<template>
  <!-- 定义一个可滚动的区域，并应用虚拟滚动逻辑 -->
  <div class="v-scroll" @scroll="doScroll" ref="scrollBox">
    <ul :style="blankStyle" style="height: 100%">
      <!-- 动态渲染列表项，根据当前滚动位置决定显示哪些项 -->
      <li v-for="item in currentList" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, nextTick } from 'vue';

export default defineComponent({
  name: 'VirtualScroll',
  setup() {
    // 定义所有列表项的数据源
    const allList = ref<string[]>([]);
    // 引用滚动容器
    const scrollBox = ref<HTMLElement | null>(null);
    // 滚动容器的高度
    const boxHeight = ref<number>(0);
    // 滚动容器中每个列表项的高度
    const itemHeight = ref<number>(40);
    // 当前显示的列表项的起始索引
    const startIndex = ref<number>(0);
    // 当前显示的列表项的结束索引
    const itemNum = computed(() => Math.floor(boxHeight.value / itemHeight.value) + 2);
    const endIndex = computed(() => {
      let index = startIndex.value + itemNum.value * 2;
      if (!allList.value[index]) {
        index = allList.value.length - 1;
      }
      return index;
    });
    // 根据当前滚动位置决定显示哪些列表项
    const currentList = computed(() => {
      let index = 0;
      if (startIndex.value <= itemNum.value) {
        index = 0;
      } else {
        index = startIndex.value - itemNum.value;
      }
      return allList.value.slice(index, endIndex.value + 1);
    });
    // 计算顶部和底部的空白区域的高度
    const blankStyle = computed(() => {
      let index = 0;
      if (startIndex.value <= itemNum.value) {
        index = 0;
      } else {
        index = startIndex.value - itemNum.value;
      }
      return {
        paddingTop: `${index * itemHeight.value}px`,
        paddingBottom: `${(allList.value.length - endIndex.value - 1) * itemHeight.value}px`
      };
    });
    // 获取全部列表项数据
    const getAllList = (count: number) => {
      const length = allList.value.length;
      for (let i = 0; i < count; i++) {
        allList.value.push(`我是列表${length + i + 1}项`);
      }
    };

    // 使用 setTimeout 来实现 throttle 效果
    let scrollTimeoutId: ReturnType<typeof setTimeout> | null = null;
    // 处理滚动事件，更新 startIndex
    const doScroll = () => {
      const index = Math.floor(scrollBox.value!.scrollTop / itemHeight.value);
      if (index === startIndex.value) return;
      startIndex.value = index;
      if (scrollTimeoutId !== null) {
        clearTimeout(scrollTimeoutId);
      }
      scrollTimeoutId = setTimeout(() => {
        scrollTimeoutId = null;
      }, 200);
    };
    // 获取滚动容器的高度
    const getScrollBoxHeight = () => {
      if (scrollBox.value) {
        boxHeight.value = scrollBox.value.clientHeight;
      }
    };
    // 在组件挂载后初始化数据和事件监听
    onMounted(() => {
      getAllList(600);
      // 确保 DOM 已经准备好
      nextTick(() => {
        getScrollBoxHeight();
        // 监听窗口大小变化和方向变化事件，以更新滚动容器的高度
        window.addEventListener('resize', getScrollBoxHeight);
        window.addEventListener('orientationchange', getScrollBoxHeight);
      });

      // 清理事件监听器
      return () => {
        window.removeEventListener('resize', getScrollBoxHeight);
        window.removeEventListener('orientationchange', getScrollBoxHeight);
      };
    });

    // 返回定义的数据和方法
    return {
      allList,
      currentList,
      boxHeight,
      itemHeight,
      scrollBox,
      doScroll,
      blankStyle
    };
  }
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.v-scroll {
  width: 100%;
  height: 400px;
  overflow-y: scroll;
  margin: 0 auto;
}

li {
  list-style: none;
  padding-left: 20px;
  line-height: 40px;
  height: 40px;
  box-sizing: border-box;
}
</style>