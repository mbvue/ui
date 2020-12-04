import { vueVer } from '../utils/env';

//遍历子级
function getChildrenList(this: any, name: any) {
    const childrens: any = [];

    this.$children.map((child: any) => {
        if (name === child.$options.name) {
            childrens.push(child);
        } else {
            childrens.concat(getChildrenList.call(child, name) as any);
        }
    });

    return childrens;
}

//混入编程
export default {
    beforeMount() {
        const _this = this as any;

        //兼容vue2、3 destroyed <-> unmounted
        if (_this.$options && _this.$options.unmounted && vueVer === 2) {
            _this.$options.destroyed = [
                function destroyed() {
                    _this.$options.unmounted();
                }
            ];
        }
    },

    methods: {
        //获取父级
        getParent(this: any, name: any) {
            let _parent: any = this.$parent;

            while (_parent) {
                if (_parent.$options && _parent.$options.name !== name) {
                    _parent = _parent.$parent;
                } else {
                    return _parent;
                }
            }

            return false;
        },

        //获取所有子级
        getChildren(this: any, name: any) {
            return getChildrenList.call(this, name);
        }
    }
};
