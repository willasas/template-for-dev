<script setup lang="ts">
import { onActivated, ref } from "vue";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

import HeroCard from "./components/HeroCard/index.vue";
import HeroToolbar from "./components/HeroToolbar/index.vue";

import { HeroStore } from "@/store";
import { FilterSidebar, KBackTop, KEmpty } from "@/components/business";
import { LibGrid } from "@/components/common";
import { useChangeListLineNum, usePagingLoad, usePlayAudio } from "@/hooks";
import { $heroDetail } from "@/utils/busTransfer";
import { _debounce, _promiseTimeout } from "@/utils/tool";

defineOptions({
  name: "Hero",
});

const $heroStore = HeroStore();
const { scroll, show_list, finish, loading } = storeToRefs($heroStore);

const { playAudio } = usePlayAudio();
const { page_count } = usePagingLoad();
const { line_num } = useChangeListLineNum(9, [
  [2200, 8],
  [1800, 7],
  [1600, 6],
  [1400, 5],
  [1024, 4],
  [720, 3],
  [480, 2],
]);

const heroToolbarRef = ref<InstanceType<typeof HeroToolbar>>();
const heroListRef = ref<InstanceType<typeof LibGrid>>();

/** 显示列表 */
const show_hero_list = ref(false);
/** 是否显示返回顶部 */
const back_top = ref(false);

$heroStore.getHeroList();

/** @description 滚动触发 */
const debounceScroll = _debounce((v: number) => {
  $heroStore.setScroll(v);
  back_top.value = v > 250;
}, 250);

/** @description 悬浮卡片 */
const handleEnterCard = () => {
  playAudio("n4r4");
};

/** @description 查看详情
 * @param id 英雄id
 */
const onViewDetail = (id: number) => {
  $heroDetail(id);
};

/** @description 返回顶部 */
const onBackTop = () => {
  heroListRef.value?._setPosition(0, true);
};

/** @description 点击侧边栏触发 */
const onSidebarChange = () => {
  debounceScroll(0);
  heroToolbarRef.value?._clearName();
};

onMounted(async () => {
  await _promiseTimeout(250);
  show_hero_list.value = true;
});

onActivated(() => {
  playAudio("iv51");
  heroListRef.value?._setPosition(scroll.value);
});
</script>

<template>
  <div class="hero">
    <div class="hero-main">
      <transition name="to-bottom" appear>
        <HeroToolbar ref="heroToolbarRef" @change="debounceScroll(0)" />
      </transition>

      <KBackTop :active="back_top" @back-top="onBackTop" />

      <!-- 列表 -->
      <LibGrid
        v-if="show_list.length && show_hero_list"
        ref="heroListRef"
        :finish="finish"
        :loading="loading"
        gap="1rem"
        :count="line_num"
        @scroll="debounceScroll"
        @load-more="$heroStore.loadMore"
      >
        <transition-group name="card" appear>
          <div
            v-for="(item, index) in show_list"
            :key="index"
            :style="{
              'transition-delay': (index % page_count) * 0.025 + 's',
            }"
            @mouseenter="handleEnterCard"
            @touchstart="handleEnterCard"
          >
            <HeroCard :data="item" @view="onViewDetail" />
          </div>
        </transition-group>
      </LibGrid>

      <KEmpty v-if="show_list.length === 0" tip="你还没有拥有英雄" />
    </div>

    <!--右侧英雄职业分类侧边栏-->
    <FilterSidebar type="hero" @change="onSidebarChange" />
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
