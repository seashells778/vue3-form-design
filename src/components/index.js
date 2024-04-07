import FormDesigner from "./form-designer/index.vue";
import FormRender from "./form-render/index.vue";

// 按需引入
export { FormDesigner,FormRender };

const component = [FormDesigner,FormRender];

const VForm3 = {
	install(App) {
		component.forEach((item) => {
			App.component(item.name, Button);
		});
	},
};

export default VForm3;
