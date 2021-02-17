<template>
    <q-page class="constrain q-py-md q-px-lg home-page">
        <div class="row q-col-gutter-sm">
            <div class="col-12 col-sm-8">
                <q-card
                    class="card-post q-mb-md"
                    flat
                    bordered
                    v-for="post in posts"
                    :key="post.id"
                >
                    <q-item>
                        <q-item-section avatar>
                            <q-avatar>
                                <img
                                    src="https://avatars.githubusercontent.com/u/46294299?s=460&u=205425f2a3c752dd73448ca8b6b329edb30a948f&v=4"
                                />
                            </q-avatar>
                        </q-item-section>

                        <q-item-section class="text-grey-10">
                            <q-item-label class="text-bold">{{ post.username }}</q-item-label>
                            <q-item-label caption>{{ post.location }}</q-item-label>
                        </q-item-section>

                        <q-btn
                            flat
                            to="/camera"
                            icon="las la-ellipsis-h"
                            size="12px"
                            class="menu-kiri"
                        />
                    </q-item>

                    <!-- <q-separator /> -->
                    <img :src="post.imageUrl" />

                    <q-item class="flex justify-between">
                        <div class="text-grey-10">
                            <q-btn
                                flat
                                dense
                                class="icon-aksi q-mr-md"
                                icon="ion-heart-empty"
                                size="17px"
                            />
                            <q-btn
                                flat
                                dense
                                class="icon-aksi q-mr-md"
                                icon="lar la-comment"
                                size="17px"
                            />
                            <q-btn flat dense class="icon-aksi" icon="ion-paper-plane" size="17px" />
                        </div>

                        <q-btn
                            flat
                            dense
                            icon="lar la-bookmark"
                            class="icon-aksi text-grey-10"
                            size="17px"
                        />
                    </q-item>

                    <q-card-section class="text-grey-10 q-py-none">
                        <div class="flex items-center text-body2">
                            <q-item-label class="text-bold q-mr-xs">{{ post.username }}</q-item-label>
                            <q-item-label>{{ post.caption }}</q-item-label>
                        </div>
                        <q-item-label
                            caption
                            class="q-my-sm text-caption"
                        >{{ post.date | dateFormat }}</q-item-label>
                    </q-card-section>
                </q-card>
            </div>

            <div class="col-4 large-screen-only">
                <div class="fixed">
                    <q-item class="q-mt-lg">
                        <q-item-section avatar>
                            <q-avatar size="60px">
                                <img
                                    src="https://avatars.githubusercontent.com/u/46294299?s=460&u=205425f2a3c752dd73448ca8b6b329edb30a948f&v=4"
                                />
                            </q-avatar>
                        </q-item-section>

                        <q-item-section class="text-grey-10">
                            <q-item-label class="text-bold">rido_vcd</q-item-label>
                            <q-item-label class="text-grey-6">Rido</q-item-label>
                        </q-item-section>
                    </q-item>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import { date } from "quasar";
export default {
    name: "PageHome",
    data() {
        return {
            posts: [
                {
                    id: 1,
                    username: "rido_js",
                    caption: "Gunung mana nih?",
                    date: 1613464595425,
                    location: "Serang City, Banten",
                    imageUrl: "https://cdn.quasar.dev/img/mountains.jpg"
                },
                {
                    id: 2,
                    username: "rido_js",
                    caption: "Gunung mana nih?",
                    date: 1613464595425,
                    location: "Serang City, Banten",
                    imageUrl: "https://cdn.quasar.dev/img/mountains.jpg"
                },
                {
                    id: 3,
                    username: "rido_js",
                    caption: "Gunung mana nih?",
                    date: 1613464595425,
                    location: "Serang City, Banten",
                    imageUrl: "https://cdn.quasar.dev/img/mountains.jpg"
                }
            ]
        };
    },
    filters: {
        dateFormat(value) {
            return date.formatDate(value, "MMM YYYY ");
        }
    }
};
</script>

<style lang="sass">
.home-page
    @media (max-width: $breakpoint-xs-max)
        padding: 0
        // padding-top: 10px

.card-post
    .q-img
        min-height: 200px
    @media (max-width: $breakpoint-xs-max)
        border: none
        background-color: $grey-1

.menu-kiri
    .q-btn__wrapper
        padding: 0

.icon-aksi
    .q-btn__wrapper
        padding: 0
        margin: 0
</style>
