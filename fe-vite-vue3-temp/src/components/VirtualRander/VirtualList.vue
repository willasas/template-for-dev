<template>
  <!-- 可视区域 -->
  <div ref="listRef" class="infinite-list-container" @scroll="scrollEvent">
    <!-- 虚拟高度占位符 -->
    <div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }"></div>
  
    <!-- 动态渲染数据的区域 -->
    <div class="infinite-list" :style="{ transform: getTransform }">
      <div v-if="visibleData.length > 0" class="infinite-list-item" v-for="item in visibleData" :key="item.id" :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }">
        {{ item.value }}
      </div>
      <div v-else class="no-data-message">No Data Available</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive, computed, onMounted, ref, nextTick, watch } from 'vue';

type ListItem = { id: number, value: string };

interface Props {
  listData: ListItem[];
  itemSize?: number;
}

const props = defineProps<Props>();

const state = reactive({
  screenHeight: 0, // 可视区域高度
  startOffset: 0, // 当前偏移量
  start: 0, // 开始索引
  end: 0, // 结束索引
});

const visibleCount = computed(() => {
  return Math.ceil(state.screenHeight / (props.itemSize || 50)); // 可视区域内能显示的项目数量
});

const visibleData = computed(() => {
  return props.listData.slice(state.start, Math.min(state.end, props.listData.length)); // 当前可视数据
});

const listHeight = computed(() => {
  return props.listData.length * (props.itemSize || 50); // 列表总高度
});

const getTransform = computed(() => {
  return `translateY(${state.startOffset}px)`; // 计算transform值
});

const listRef = ref<HTMLElement | null>(null);

onMounted(() => {
  // 初始化可视区域高度
  state.screenHeight = listRef.value?.clientHeight || 0;
  state.end = state.start + visibleCount.value; // 初始化结束索引
  nextTick(() => {
    // 确保 DOM 更新完成后重新计算
    updateVisibleData();
  });
});

watch(() => props.listData, () => {
  state.end = state.start + visibleCount.value; // 更新结束索引
  nextTick(() => {
    // 确保 DOM 更新完成后重新计算
    updateVisibleData();
  });
});

const scrollEvent = () => {
  const scrollTop = listRef.value?.scrollTop || 0; // 当前滚动距离
  state.start = Math.floor(scrollTop / (props.itemSize || 50)); // 计算开始索引
  state.end = state.start + visibleCount.value; // 更新结束索引
  state.startOffset = scrollTop - (scrollTop % (props.itemSize || 50)); // 更新偏移量
  updateVisibleData();
};

const updateVisibleData = () => {
  // 打印 visibleData 确认数据是否正确
  console.log('Visible Data:', visibleData.value);
  if (visibleData.value.length === 0) {
    console.error('Visible data is empty');
  }
};

// 添加一个初始更新函数
nextTick(() => {
  updateVisibleData();
});

// 检查 props.listData 是否为空
if (!props.listData || props.listData.length === 0) {
  console.error('List data is empty or not defined');
}
</script>

<style lang="css" scoped>
.infinite-list-container {
  min-height: 600px; /* 占满整个父容器高度 */
  overflow: auto; /* 允许滚动 */
  position: relative; /* 使内部元素可以相对于它定位 */
}

.infinite-list-phantom {
  position: absolute; /* 绝对定位 */
  left: 0;
  width: 100%;
  top: 0; /* 顶部对齐 */
  z-index: -1; /* 放在底层 */
}

.infinite-list {
  position: absolute; /* 绝对定位 */
  left: 0;
  width: 100%;
  top: 0; /* 顶部对齐 */
  text-align: center; /* 文本居中 */
}

.infinite-list-item {
  border-bottom: 1px solid #eee; /* 分隔线 */
  box-sizing: border-box; /* 包含边框和内边距 */
  font-size: 20px;
  text-align: center;
  color: #1effec;
}

.no-data-message {
  text-align: center;
  padding: 20px;
  color: #999;
}
</style>
