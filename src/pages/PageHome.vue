<template>
    <q-page class="constrain q-pa-md">
        <q-card class="card-post q-mb-md" flat bordered v-for="post in posts" :key="post.id">
            <q-item>
                <q-item-section avatar>
                    <q-avatar>
                        <img
                            src="https://avatars.githubusercontent.com/u/46294299?s=460&u=205425f2a3c752dd73448ca8b6b329edb30a948f&v=4"
                        />
                    </q-avatar>
                </q-item-section>

                <q-item-section class="text-grey-10">
                    <q-item-label class="text-bold"> {{ post.username }} </q-item-label>
                    <q-item-label caption>{{ post.location }}</q-item-label>
                </q-item-section>
            </q-item>

            <!-- <q-separator /> -->
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />

            <q-card-section class="text-grey-10">
                <div class="flex items-center text-body2">
                    <q-item-label class="text-bold q-mr-xs"> {{ post.username }} </q-item-label>
                    <q-item-label> {{ post.caption }} </q-item-label>
                </div>
                <q-item-label caption class="text-uppercase q-mt-sm text-caption"> {{ post.date }} </q-item-label>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
import {date} from 'quasar'
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
    }
};
</script>

<style lang="sass">
.card-post
  .q-img
    min-height: 200px
</style>
