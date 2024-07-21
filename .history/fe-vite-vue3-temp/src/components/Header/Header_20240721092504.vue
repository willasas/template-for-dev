<script lang="ts">
import Vue from 'vue'
// export default Vue.extend({
  
// })
</script>

<template>
  <div class="common-header">
		<!-- 默认导航菜单 -->
		<div class="header-normal">
			<!-- logo -->
			<div class="header-logo-box">
				<a href="/" class="logo-official">
					<img src="src/assets/logo.png" alt="官网logo" />
				</a>
			</div>
			<!-- main menu -->
			<ul class="header-menu-list">
				<li class="menu-link">
					<a href="javascript:;" class="m-link1">
						<i class="common-icon icon1">
							<svg class="icon" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1"
								xmlns="http://www.w3.org/2000/svg">
								<path fill="#ffffff"
									d="M512 64.050782c60.495816 0 119.153774 11.836583 174.345794 35.181267 53.335742 22.558785 101.245915 54.864562 142.401244 96.01989s73.461105 89.066525 96.01989 142.401244c23.344684 55.19202 35.181267 113.851001 35.181267 174.345794 0 60.494793-11.836583 119.153774-35.181267 174.345793-22.558785 53.334719-54.864562 101.245915-96.01989 142.401244s-89.066525 73.461105-142.401244 96.019891c-55.19202 23.344684-113.851001 35.181267-174.345794 35.181267s-119.153774-11.836583-174.345794-35.181267c-53.335742-22.558785-101.245915-54.864562-142.401244-96.019891S121.791857 739.679489 99.233072 686.34477c-23.344684-55.19202-35.181267-113.851001-35.181267-174.345793 0-60.495816 11.836583-119.153774 35.181267-174.345794 22.558785-53.335742 54.864562-101.245915 96.01989-142.401244s89.066525-73.461105 142.401244-96.01989c55.19202-23.344684 113.849978-35.181267 174.345794-35.181267m0-51.16531c-275.653107 0-499.114528 223.461421-499.114528 499.114528S236.346893 1011.114528 512 1011.114528s499.114528-223.461421 499.114528-499.114528S787.653107 12.885472 512 12.885472z" />
								<path fill="#ffffff"
									d="M786.310529 540.674063c-9.080819 9.135054-23.858384 9.135054-32.992415 0L512.162706 298.765501 310.500776 501.072113h14.669095c25.791409 0 46.693462 21.063735 46.693462 46.963615v24.985044h0.054235l0.160659 141.318586c1.558495 15.368012 7.469112 19.452028 24.502044 20.633946 19.773346-1.774413 21.976524-8.705266 22.138206-34.819017l-0.054235-58.569953c0.215918-25.684986 21.010523-46.532803 46.641273-46.532803h23.320125v-0.591471l46.747697-0.107447v0.697895h23.320125c25.791409 0 46.74872 21.010523 46.74872 46.963614v24.985045h0.053212l0.053212 28.479634 0.053212-6.824429c0 36.539194 0 44.544519 22.997783 46.317909 23.481807-1.934049 23.696702-10.156314 23.696702-46.317909l-0.322341 46.641274h0.376576l-0.214894-188.336436c0-12.94994 10.477632-23.480784 23.373337-23.480784 12.896728 0 23.320125 10.530844 23.320125 23.480784l0.161682 163.350368h-0.161682v24.932856c0 25.953092-20.902052 47.015803-46.693462 47.015803h-46.694485c-25.52228 0-46.048779-20.578688-46.586015-46.103014l-0.054235-59.912532-0.160659-5.963828c0 0.591471 0.160659 1.020236 0.160659 1.664919l-0.053212-30.573319h-7.254218l6.5553 0.053212 0.591471 28.855188c-1.181919-22.998807-6.502088-27.942399-28.693506-28.855188l-37.238112 0.053212c-20.903076 0.966001-26.114774 5.748934-27.296693 26.006303l0.053212 42.826388h-0.160659v24.932856c0 25.953092-20.903076 47.015803-46.748721 47.015803h-46.694485c-25.469068 0-45.941332-20.525476-46.478567-46.048779l-0.215918-188.819436-12.08934 0.054235 11.44568 0.052188 0.160659 31.541367c-0.537236-25.738198-4.459568-30.68179-28.210505-31.594579l-40.622186 0.106424c-6.5553 0.485047-13.219069-1.503237-18.162662-6.555299-9.135054-9.134031-9.135054-24.019043 0-33.20731l256.093633-256.898974c0.591471-0.697895 0.859577-1.611707 1.505283-2.25639 9.134031-9.188266 23.910573-9.188266 33.045627 0l0.376577 0.375553 257.598916 258.405281c9.137101 9.18929 9.137101 24.073278 0.002046 33.261545z m-180.705641 194.783265l11.498892-0.053212-11.498892-0.053212v0.106424z m-140.190903-68.080561l0.537236-25.898857h-0.591471l0.054235 25.898857z m-93.334735 68.080561l11.498892-0.053212-11.498892-0.053212v0.106424z m-47.393403-156.417469c0.107447 4.78191 0.107447 10.209526 0.107447 16.549931l-0.107447-16.549931z" />
							</svg>
						</i>
						<span class="zh-text">首页</span>
					</a>
				</li>
			</ul>
			<!-- search -->
			<a class="header-search-btn" href="javascript:;" title="搜索">
				<svg class="icon" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1"
					xmlns="http://www.w3.org/2000/svg">
					<path fill="#ffffff"
						d="M953.474215 908.234504l-152.576516-163.241391c61.92508-74.48211 95.81186-167.36973 95.81186-265.073744 0-229.294809-186.63531-415.930119-416.102133-415.930119-229.294809 0-415.930119 186.63531-415.930119 415.930119s186.63531 415.930119 415.930119 415.930119c60.032925 0 118.00168-12.55703 172.186125-37.327062 16.169326-7.396607 23.221905-26.318159 15.825298-42.315471-7.396607-16.169326-26.318159-23.221905-42.315471-15.825298-45.927768 20.813707-94.951789 31.478582-145.695952 31.478582-194.031917 0-351.94087-157.908953-351.94087-351.94087 0-194.031917 157.908953-351.94087 351.94087-351.94087 194.031917 0 351.94087 157.908953 351.94087 351.94087 0 91.339493-34.918864 177.86259-98.048043 243.743995-12.213002 12.729044-11.868974 33.026709 0.860071 45.239711 1.032085 0.860071 2.236183 1.204099 3.268268 2.064169 0.860071 1.204099 1.376113 2.752226 2.408198 3.956325l165.477574 177.00252c6.192508 6.70855 14.793214 10.148833 23.393919 10.148833 7.912649 0 15.653284-2.92424 21.845792-8.600706C964.827146 941.433227 965.515202 921.135562 953.474215 908.234504z" />
				</svg>
			</a>
			<!-- theme -->
			<a class="themes-toggle-btn" href="javascript:;" title="主题">
				<svg class="icon" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1"
					xmlns="http://www.w3.org/2000/svg">
					<path fill="#ffffff"
						d="M512 960C264.533333 960 64 759.466667 64 512S264.533333 64 512 64 960 264.533333 960 512c0 81.066667-89.6 98.133333-170.666667 115.2-55.466667 12.8-110.933333 21.333333-132.266666 51.2-29.866667 34.133333-34.133333 85.333333-38.4 132.266667-8.533333 68.266667-12.8 149.333333-106.666667 149.333333z m0-853.333333c-221.866667 0-405.333333 183.466667-405.333333 405.333333s183.466667 405.333333 405.333333 405.333333c46.933333 0 55.466667-34.133333 64-110.933333 4.266667-55.466667 8.533333-115.2 46.933333-157.866667 34.133333-38.4 98.133333-51.2 157.866667-64 81.066667-17.066667 136.533333-29.866667 136.533333-72.533333 0-221.866667-183.466667-405.333333-405.333333-405.333333z" />
					<path fill="#ffffff"
						d="M597.333333 384c-46.933333 0-85.333333-38.4-85.333333-85.333333s38.4-85.333333 85.333333-85.333334 85.333333 38.4 85.333334 85.333334-38.4 85.333333-85.333334 85.333333z m0-128c-25.6 0-42.666667 17.066667-42.666666 42.666667s17.066667 42.666667 42.666666 42.666666 42.666667-17.066667 42.666667-42.666666-17.066667-42.666667-42.666667-42.666667zM341.333333 469.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333s38.4-85.333333 85.333333-85.333333 85.333333 38.4 85.333334 85.333333-38.4 85.333333-85.333334 85.333333z m0-128c-25.6 0-42.666667 17.066667-42.666666 42.666667s17.066667 42.666667 42.666666 42.666667 42.666667-17.066667 42.666667-42.666667-17.066667-42.666667-42.666667-42.666667zM362.666667 746.666667c-46.933333 0-85.333333-38.4-85.333334-85.333334s38.4-85.333333 85.333334-85.333333 85.333333 38.4 85.333333 85.333333-38.4 85.333333-85.333333 85.333334z m0-128c-25.6 0-42.666667 17.066667-42.666667 42.666666 0 21.333333 17.066667 42.666667 42.666667 42.666667s42.666667-21.333333 42.666666-42.666667-17.066667-42.666667-42.666666-42.666666z" />
				</svg>
			</a>
			<!-- login -->
			<ul class="header-user">
				<li class="user-item">
					<a class="signin" href="#0">Sign in</a>
				</li>
				<li class="user-item">
					<a class="signup" href="#0">Sign up</a>
				</li>
			</ul>
			<!-- 移动端显示 -->
			<div class="header-menu-toggle">
				<input class="menu-btn" type="checkbox" id="menu-btn" />
				<label class="menu-icon" for="menu-btn">
					<span class="navicon"></span>
				</label>
			</div>
		</div>
		<!-- 导航栏子菜单 -->
		<div class="header-nav">
			<ul class="head-nav-list">
				<li class="nav-link" id="nav-link-list1">
					<a href="javascript:;" class="m-n-link1" target="_blank">
						<i class="common-icon nav-icon1"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link2" target="_blank">
						<i class="common-icon nav-icon2"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link3" target="_blank">
						<i class="common-icon nav-icon3"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link4" target="_blank">
						<i class="common-icon nav-icon4"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link5" target="_blank">
						<i class="common-icon nav-icon5"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link6" target="_blank">
						<i class="common-icon nav-icon6"></i>
						<span class="nav-text">子菜单一</span>
					</a>
				</li>
				<li class="nav-link" id="nav-link-list2">
					<a href="javascript:;" class="m-n-link1" target="_blank">
						<i class="common-icon nav-icon1"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link2" target="_blank">
						<i class="common-icon nav-icon2"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link3" target="_blank">
						<i class="common-icon nav-icon3"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link4" target="_blank">
						<i class="common-icon nav-icon4"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link5" target="_blank">
						<i class="common-icon nav-icon5"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link6" target="_blank">
						<i class="common-icon nav-icon6"></i>
						<span class="nav-text">子菜单一</span>
					</a>
				</li>
				<li class="nav-link" id="nav-link-list3">
					<a href="javascript:;" class="m-n-link1" target="_blank">
						<i class="common-icon nav-icon1"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link2" target="_blank">
						<i class="common-icon nav-icon2"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link3" target="_blank">
						<i class="common-icon nav-icon3"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link4" target="_blank">
						<i class="common-icon nav-icon4"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link5" target="_blank">
						<i class="common-icon nav-icon5"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link6" target="_blank">
						<i class="common-icon nav-icon6"></i>
						<span class="nav-text">子菜单一</span>
					</a>
				</li>
				<li class="nav-link" id="nav-link-list4">
					<a href="javascript:;" class="m-n-link1" target="_blank">
						<i class="common-icon nav-icon1"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link2" target="_blank">
						<i class="common-icon nav-icon2"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link3" target="_blank">
						<i class="common-icon nav-icon3"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link4" target="_blank">
						<i class="common-icon nav-icon4"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link5" target="_blank">
						<i class="common-icon nav-icon5"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link6" target="_blank">
						<i class="common-icon nav-icon6"></i>
						<span class="nav-text">子菜单一</span>
					</a>
				</li>
				<li class="nav-link" id="nav-link-list5">
					<a href="javascript:;" class="m-n-link1" target="_blank">
						<i class="common-icon nav-icon1"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link2" target="_blank">
						<i class="common-icon nav-icon2"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link3" target="_blank">
						<i class="common-icon nav-icon3"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link4" target="_blank">
						<i class="common-icon nav-icon4"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link5" target="_blank">
						<i class="common-icon nav-icon5"></i>
						<span class="nav-text">子菜单一</span>
					</a>
					<a href="javascript:;" class="m-n-link6" target="_blank">
						<i class="common-icon nav-icon6"></i>
						<span class="nav-text">子菜单一</span>
					</a>
				</li>
			</ul>
		</div>
		<!-- Search -->
		<div class="header-search-hover">
			<div class="search-container">
				<a class="search-btn-close" href="javascript:;" title="关闭搜索"></a>
				<div class="search-inner">
					<!-- Search function -->
					<div class="search-input-and-btn">
						<input type="text" class="input-search" placeholder="搜索..." autocomplete="off" />
						<a href="javascript:;" class="btn-search" title="点击搜索">
							<svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1"
								xmlns="http://www.w3.org/2000/svg">
								<path fill="#000"
									d="M953.474215 908.234504l-152.576516-163.241391c61.92508-74.48211 95.81186-167.36973 95.81186-265.073744 0-229.294809-186.63531-415.930119-416.102133-415.930119-229.294809 0-415.930119 186.63531-415.930119 415.930119s186.63531 415.930119 415.930119 415.930119c60.032925 0 118.00168-12.55703 172.186125-37.327062 16.169326-7.396607 23.221905-26.318159 15.825298-42.315471-7.396607-16.169326-26.318159-23.221905-42.315471-15.825298-45.927768 20.813707-94.951789 31.478582-145.695952 31.478582-194.031917 0-351.94087-157.908953-351.94087-351.94087 0-194.031917 157.908953-351.94087 351.94087-351.94087 194.031917 0 351.94087 157.908953 351.94087 351.94087 0 91.339493-34.918864 177.86259-98.048043 243.743995-12.213002 12.729044-11.868974 33.026709 0.860071 45.239711 1.032085 0.860071 2.236183 1.204099 3.268268 2.064169 0.860071 1.204099 1.376113 2.752226 2.408198 3.956325l165.477574 177.00252c6.192508 6.70855 14.793214 10.148833 23.393919 10.148833 7.912649 0 15.653284-2.92424 21.845792-8.600706C964.827146 941.433227 965.515202 921.135562 953.474215 908.234504z" />
							</svg>
						</a>
					</div>
					<!-- Search records -->
					<div class="search-records-box">
						<div class="search-records-inner">
							<!-- 加滚动条 -->
							<ul class="search-records-list">
								<li data-key="最新搜索记录文本" class="search-records-text re-txt1">
									<i class="icon-history">
										<svg class="icon" width="16px" height="16.00px" viewBox="0 0 1024 1024"
											version="1.1" xmlns="http://www.w3.org/2000/svg">
											<path fill="#000000"
												d="M512 800c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z m16-320V368a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v192a16 16 0 0 1-16 16H384a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h144z" />
										</svg>
									</i>
									<p class="history-text">最新搜索记录文本</p>
									<a href="#" class="clear-search-records" title="清除搜索记录">
										<svg class="icon" width="16px" height="16.00px" viewBox="0 0 1024 1024"
											version="1.1" xmlns="http://www.w3.org/2000/svg">
											<path fill="#000000"
												d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" />
										</svg>
									</a>
								</li>
								<li data-key="最新搜索记录文本" class="search-records-text re-txt2">
									<i class="icon-history">
										<svg class="icon" width="16px" height="16.00px" viewBox="0 0 1024 1024"
											version="1.1" xmlns="http://www.w3.org/2000/svg">
											<path fill="#000000"
												d="M512 800c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z m16-320V368a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v192a16 16 0 0 1-16 16H384a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h144z" />
										</svg>
									</i>
									<p class="history-text">最新搜索记录文本</p>
									<a href="#" class="clear-search-records" title="清除搜索记录">
										<svg class="icon" width="16px" height="16.00px" viewBox="0 0 1024 1024"
											version="1.1" xmlns="http://www.w3.org/2000/svg">
											<path fill="#000000"
												d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" />
										</svg>
									</a>
								</li>
								<li data-key="最新搜索记录文本" class="search-records-text re-txt3">
									<i class="icon-history">
										<svg class="icon" width="16px" height="16.00px" viewBox="0 0 1024 1024"
											version="1.1" xmlns="http://www.w3.org/2000/svg">
											<path fill="#000000"
												d="M512 800c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z m16-320V368a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v192a16 16 0 0 1-16 16H384a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h144z" />
										</svg>
									</i>
									<p class="history-text">最新搜索记录文本</p>
									<a href="#" class="clear-search-records" title="清除搜索记录">
										<svg class="icon" width="16px" height="16.00px" viewBox="0 0 1024 1024"
											version="1.1" xmlns="http://www.w3.org/2000/svg">
											<path fill="#000000"
												d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" />
										</svg>
									</a>
								</li>
								<li data-key="最新搜索记录文本" class="search-records-text re-txt4">
									<i class="icon-history">
										<svg class="icon" width="16px" height="16.00px" viewBox="0 0 1024 1024"
											version="1.1" xmlns="http://www.w3.org/2000/svg">
											<path fill="#000000"
												d="M512 800c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z m16-320V368a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v192a16 16 0 0 1-16 16H384a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h144z" />
										</svg>
									</i>
									<p class="history-text">最新搜索记录文本</p>
									<a href="#" class="clear-search-records" title="清除搜索记录">
										<svg class="icon" width="16px" height="16.00px" viewBox="0 0 1024 1024"
											version="1.1" xmlns="http://www.w3.org/2000/svg">
											<path fill="#000000"
												d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" />
										</svg>
									</a>
								</li>
								<li data-key="最新搜索记录文本" class="search-records-text re-txt5">
									<i class="icon-history">
										<svg class="icon" width="16px" height="16.00px" viewBox="0 0 1024 1024"
											version="1.1" xmlns="http://www.w3.org/2000/svg">
											<path fill="#000000"
												d="M512 800c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z m16-320V368a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v192a16 16 0 0 1-16 16H384a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h144z" />
										</svg>
									</i>
									<p class="history-text">最新搜索记录文本</p>
									<a href="#" class="clear-search-records" title="清除搜索记录">
										<svg class="icon" width="16px" height="16.00px" viewBox="0 0 1024 1024"
											version="1.1" xmlns="http://www.w3.org/2000/svg">
											<path fill="#000000"
												d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" />
										</svg>
									</a>
								</li>
								<li data-key="最新搜索记录文本" class="search-records-text re-txt6">
									<i class="icon-history">
										<svg class="icon" width="16px" height="16.00px" viewBox="0 0 1024 1024"
											version="1.1" xmlns="http://www.w3.org/2000/svg">
											<path fill="#000000"
												d="M512 800c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z m16-320V368a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v192a16 16 0 0 1-16 16H384a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h144z" />
										</svg>
									</i>
									<p class="history-text">最新搜索记录文本</p>
									<a href="#" class="clear-search-records" title="清除搜索记录">
										<svg class="icon" width="16px" height="16.00px" viewBox="0 0 1024 1024"
											version="1.1" xmlns="http://www.w3.org/2000/svg">
											<path fill="#000000"
												d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" />
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- theme hover -->
		<div class="header-themes-toggle">
			<div class="header-themes">
				<p class="theme-label">Theme:</p>
				<div class="theme-color t-dark">
					<input type="radio" name="color" class="theme-input" value="dark" checked />
					<span class="theme-icon"></span>
				</div>
				<div class="theme-color t-light">
					<input type="radio" name="color" class="theme-input" value="light" />
					<span class="theme-icon"></span>
				</div>
				<div class="theme-color t-green">
					<input type="radio" name="color" class="theme-input" value="green" />
					<span class="theme-icon"></span>
				</div>
				<div class="theme-color t-blue">
					<input type="radio" name="color" class="theme-input" value="blue" />
					<span class="theme-icon"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="sass" scoped>
@import "./header.scss"
</style>