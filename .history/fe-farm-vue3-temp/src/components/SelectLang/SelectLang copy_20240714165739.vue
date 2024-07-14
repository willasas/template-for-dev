<template>
  <a-dropdown @select="handleSelect" :popup-max-height="false">
    <!-- 这里就是通过他的key，或者他的值 -->
    <a-button>{{langMap.langMap.get(curLanguage)}}<icon-down/>
    </a-button>
    <template #content>
      <!-- langMap.langMap.entries() 返回一个新的迭代器对象 比如  ['en','English'] -->
      <!-- 第一个是他的key 可以写成item[0]，第二个是他的值 item[1] -->
      <a-doption
        v-for="item in langMap.langMap.entries()"
        :key="item[0]"
        :value="item[0]"
        :disabled="curLanguage == item[0]"
        >{{ item[1] }}</a-doption>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Message } from "@arco-design/web-vue";
import { computed } from "vue";
import langMap from "../../i18n/langMap";

const i18n = useI18n();

const handleSelect = (v: any) => {
  localStorage.setItem("language", v);
  i18n.locale.value = v;
  Message.success({
    content: `${langMap.langMap.get(v)}`,
    duration: 2000,
  });
};

const curLanguage = computed(() => {
  return i18n.locale.value;
});


</script>
<style scoped lang="less">
.arco-btn {
  position: absolute;
  right: 10px;
  top: 5px;
}
.arco-dropdown-open .arco-icon-down {
  transform: rotate(180deg);
}
</style>
