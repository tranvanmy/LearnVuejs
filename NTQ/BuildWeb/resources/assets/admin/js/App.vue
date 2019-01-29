<template>
	<div class="wrapper" style="position: relative">
		<app-header></app-header>
		<app-aside></app-aside>
		<div class="content-wrapper">
			<app-breadcrumd :list="list"></app-breadcrumd>
				<section class="content">
					<router-view></router-view>
				</section>
		</div>
		<app-footer></app-footer>
		<app-control-siderbar></app-control-siderbar>
		<div class="control-sidebar-bg"></div>
	</div>
</template>

<script>
	import AppHeader from "./components/header/Header";
	import AppAside from "./components/aside/Aside";
	import AppBreadcrumd from "./components/breadcrumb/Breadcrumb";
	import AppFooter from "./components/footer/Footer";
	import AppControlSiderbar from "./components/control_siderbar/ControlSiderbar";

	export default {
		name: "App",
		components: {
			AppHeader,
			AppAside,
			AppBreadcrumd,
			AppControlSiderbar,
			AppFooter,
		}
	}
</script>