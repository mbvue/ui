<template>
    <div class="layout">
        <template v-if="$route.name">
            <div class="layout-left">
                <ul>
                    <li v-for="(item, index) in nav" :key="index">
                        <h3>{{ item.title }}</h3>
                        <template v-if="item.children">
                            <ul>
                                <li v-for="(children, childindex) in item.children" :key="childindex" :class="[$route.name === children.path ? 'active' : '']">
                                    <router-link :to="children.path">{{ children.title }}</router-link>
                                </li>
                            </ul>
                        </template>
                    </li>
                </ul>
            </div>

            <div class="layout-content">
                <router-view></router-view>
            </div>
        </template>

        <div v-else class="layout-home">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import urls from './depend/urls';

export default {
    data() {
        return {
            nav: urls.filter(obj => !obj.path)
        };
    }
};
</script>
