import { versions } from '../utils/env';

//混入编程
export default {
    beforeMount() {
        const _this = this as any;

        //兼容vue2、3 destroyed <-> unmounted
        if (_this.$options.unmounted && versions() === 2) {
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
        }
    }
};
