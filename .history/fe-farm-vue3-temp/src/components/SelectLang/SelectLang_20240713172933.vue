<template>
  <div id="locale" class="bg-color dropdown   " data-component="Locale">
    <a id="localeMenuButton" role="menuitem" tabindex="0" aria-haspopup="true" aria-controls="localeMenuList" aria-label="Localization" aria-expanded="false" data-locale="简体中文" title="简体中文" class="locale-icon focusable text-color-hover" data-component="LocaleIcon">
      <i class="eg-header-icon-locale"></i>
    </a>
    <ul id="localeMenuList" class="locale-list bg-color  ul-left " role="menu" aria-labelledby="localeMenuButton">
      <li role="none" class="" data-lang="ar" data-component="Locale">
        <a href="/ar/?lang=ar" role="menuitem" data-index="0" class="text-color-hover text-color-nonactive">
          <span>العربية</span>
        </a>
      </li>
      <li role="none" class="" data-lang="de" data-component="Locale">
        <a href="/de/?lang=de" role="menuitem" data-index="1" class="text-color-hover text-color-nonactive">
          <span>Deutsch</span>
        </a>
      </li>
      <li role="none" class="" data-lang="en-US" data-component="Locale">
        <a href="/en-US/?lang=en-US" role="menuitem" data-index="2" class="text-color-hover text-color-nonactive">
          <span>English</span>
        </a>
      </li>
      <li role="none" class="" data-lang="es-ES" data-component="Locale">
        <a href="/es-ES/?lang=es-ES" role="menuitem" data-index="3" class="text-color-hover text-color-nonactive">
          <span>Español (Spain)</span>
        </a>
      </li>
      <li role="none" class="" data-lang="es-MX" data-component="Locale">
        <a href="/es-MX/?lang=es-MX" role="menuitem" data-index="4" class="text-color-hover text-color-nonactive">
          <span>Español (LA)</span>
        </a>
      </li>
      <li role="none" class="" data-lang="fr" data-component="Locale">
        <a href="/fr/?lang=fr" role="menuitem" data-index="5" class="text-color-hover text-color-nonactive">
          <span>Français</span>
        </a>
      </li>
      <li role="none" class="" data-lang="it" data-component="Locale">
        <a href="/it/?lang=it" role="menuitem" data-index="6" class="text-color-hover text-color-nonactive">
          <span>Italiano</span>
        </a>
      </li>
      <li role="none" class="" data-lang="ja" data-component="Locale">
        <a href="/ja/?lang=ja" role="menuitem" data-index="7" class="text-color-hover text-color-nonactive">
          <span>日本語</span>
        </a>
      </li>
      <li role="none" class="" data-lang="ko" data-component="Locale">
        <a href="/ko/?lang=ko" role="menuitem" data-index="8" class="text-color-hover text-color-nonactive">
          <span>한국어</span>
        </a>
      </li>
      <li role="none" class="" data-lang="pl" data-component="Locale">
        <a href="/pl/?lang=pl" role="menuitem" data-index="9" class="text-color-hover text-color-nonactive">
          <span>Polski</span>
        </a>
      </li>
      <li role="none" class="" data-lang="pt-BR" data-component="Locale">
        <a href="/pt-BR/?lang=pt-BR" role="menuitem" data-index="10" class="text-color-hover text-color-nonactive">
          <span>Português (Brasil)</span>
        </a>
      </li>
      <li role="none" class="" data-lang="ru" data-component="Locale">
        <a href="/ru/?lang=ru" role="menuitem" data-index="11" class="text-color-hover text-color-nonactive">
          <span>Русский</span>
        </a>
      </li>
      <li role="none" class="" data-lang="th" data-component="Locale">
        <a href="/th/?lang=th" role="menuitem" data-index="12" class="text-color-hover text-color-nonactive">
          <span>ไทย</span>
        </a>
      </li>
      <li role="none" class="" data-lang="tr" data-component="Locale">
        <a href="/tr/?lang=tr" role="menuitem" data-index="13" class="text-color-hover text-color-nonactive">
          <span>Türkçe</span>
        </a>
      </li>
      <li role="none" class="" data-lang="zh-Hant" data-component="Locale">
        <a href="/zh-Hant/?lang=zh-Hant" role="menuitem" data-index="15" class="text-color-hover text-color-nonactive">
          <span>繁體中文</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
@import "./selectlang.scss"
</style>