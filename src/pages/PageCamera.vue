<template>
    <q-page class="constrain-more q-py-md q-px-lg">
        <div class="q-pa-md camera-frame">
            <video v-show="!imageCaptured" ref="video" class="full-width" autoplay />
            <canvas v-show="imageCaptured" ref="canvas" class="full-width" height="240" />
        </div>
        <div class="text-center q-pa-md">
            <q-btn @click="captureImage" unelevated round color="grey-10" icon="ion-camera" />
        </div>
        <div class="row justify-center q-ma-md">
            <q-input
                v-model="post.caption"
                class="col col-sm-8"
                dense
                borderless
                label="Type Caption Here..."
            />
        </div>
        <div class="row justify-center q-ma-md">
            <q-input v-model="post.location" class="col col-sm-8" dense borderless label="Location">
                <template v-slot:append>
                    <q-btn round dense flat icon="ion-pin" size="10px" />
                </template>
            </q-input>
        </div>
        <div class="row justify-center q-ma-md">
            <q-btn rounded unelevated color="red-5">
                <q-icon name="ion-add-circle-outline" size="20px" class="q-mr-xs" />
                <div>Post</div>
            </q-btn>
        </div>
    </q-page>
</template>

<script>
import { uid } from "quasar";
require('md-gum-polyfill')

export default {
    name: "PageCamera",
    data() {
        return {
            post: {
                id: uid(),
                caption: "",
				location: "",
				photo: null,
				date: Date.now()
            },
            imageCaptured: false
        };
    },

    methods: {
        initCamera() {
            navigator.mediaDevices.getUserMedia({
                video: true                
            }).then(stream => {
                this.$refs.video.srcObject = stream
            })
        },

        captureImage() {
            let video = this.$refs.video
            let canvas = this.$refs.canvas
            canvas.width = video.getBoundingClientRect().width
            canvas.height = video.getBoundingClientRect().height
            let context = canvas.getContext('2d')
            context.drawImage(video, 0, 0, canvas.width, canvas.height)
            this.imageCaptured = true
        }
    },

    mounted() {
        this.initCamera()
    }

    
};
</script>

<style lang="sass">
.camera-frame
  border: 1px solid $grey-10
  border-radius: 5px
</style>
