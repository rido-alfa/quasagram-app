<template>
    <q-page class="constrain-more q-py-md q-px-lg">
        <div class="q-pa-md camera-frame">
            <video v-show="!imageCaptured" ref="video" class="full-width" autoplay />
            <canvas v-show="imageCaptured" ref="canvas" class="full-width" height="240" />
        </div>
        <div class="text-center q-pa-md">
            <q-btn
                v-if="hasCameraSupport"
                @click="captureImage"
                unelevated
                round
                color="grey-10"
                icon="ion-camera"
            />
            <q-file
                @input="captureImageFallback"
                v-if="!hasCameraSupport"
                color="grey-3"
                outlined
                accept="image/*"
                v-model="imageUpload"
                label-color="grey-6"
                label="Upload Photo"
            >
                <template v-slot:append>
                    <q-icon name="attachment" color="grey-6" />
                </template>
            </q-file>
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
            <q-input
                :loading="formLoading"
                v-model="post.location"
                class="col col-sm-8"
                dense
                borderless
                label="Location"
            >
                <template v-slot:append>
                    <q-btn
                        v-if="!formLoading && locationSupport"
                        @click="getLocation"
                        round
                        dense
                        flat
                        icon="ion-pin"
                        size="10px"
                    />
                </template>
            </q-input>
        </div>
        <div class="row justify-center q-ma-md">
            <q-btn @click="addPost()" rounded unelevated color="red-5">
                <q-icon name="ion-add-circle-outline" size="20px" class="q-mr-xs" />
                <div>Post</div>
            </q-btn>
        </div>
    </q-page>
</template>

<script>
import { uid } from "quasar";
require("md-gum-polyfill");

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
            imageCaptured: false,
            imageUpload: [],
            hasCameraSupport: true,
            formLoading: false
        };
    },

    computed: {
        locationSupport() {
            if ("geolocation" in navigator) return true;
            return false;
        }
    },

    methods: {
        initCamera() {
            navigator.mediaDevices
                .getUserMedia({
                    video: true
                })
                .then(stream => {
                    this.$refs.video.srcObject = stream;
                })
                .catch(error => {
                    console.log("error", error);
                    this.hasCameraSupport = false;
                });
        },

        captureImage() {
            let video = this.$refs.video;
            let canvas = this.$refs.canvas;
            canvas.width = video.getBoundingClientRect().width;
            canvas.height = video.getBoundingClientRect().height;

            let context = canvas.getContext("2d");
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            this.imageCaptured = true;
            this.post.photo = this.dataURItoBlob(canvas.toDataURL());
            this.disableCamera();
        },

        captureImageFallback(file) {
            this.post.photo = file;
            let canvas = this.$refs.canvas;
            let context = canvas.getContext("2d");

            let reader = new FileReader();
            reader.onload = event => {
                let img = new Image();
                img.onload = () => {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    context.drawImage(img, 0, 0);
                    this.imageCaptured = true;
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        },

        disableCamera() {
            this.$refs.video.srcObject.getVideoTracks().forEach(track => {
                track.stop();
            });
        },

        dataURItoBlob(dataURI) {
            // convert base64 to raw binary data held in a string
            // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
            var byteString = atob(dataURI.split(",")[1]);

            // separate out the mime component
            var mimeString = dataURI
                .split(",")[0]
                .split(":")[1]
                .split(";")[0];

            // write the bytes of the string to an ArrayBuffer
            var ab = new ArrayBuffer(byteString.length);

            // create a view into the buffer
            var ia = new Uint8Array(ab);

            // set the bytes of the buffer to the correct values
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            // write the ArrayBuffer to a blob, and you're done
            var blob = new Blob([ab], { type: mimeString });
            return blob;
        },

        getLocation() {
            this.formLoading = true;
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.getCityCountry(position);
                },
                err => {
                    this.locationError();
                },
                { timeout: 3000 }
            );
        },

        getCityCountry(position) {
            let apiUrl = `https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?json=1`;
            this.$axios
                .get(apiUrl)
                .then(result => {
                    this.locationSuccess(result);
                })
                .catch(err => {
                    this.locationError();
                });
        },

        locationSuccess(result) {
            this.post.location = result.data.city;
            if (result.data.country) {
                this.post.location += `, ${result.data.country}`;
            }
            this.formLoading = false;
        },

        locationError() {
            this.$q.dialog({
                title: "Error",
                message: "Couldnt find your location"
            });
            this.formLoading = false;
        },

        addPost() {
            let formData = new FormData();
            formData.append("id", this.post.id);
            formData.append("caption", this.post.caption);
            formData.append("location", this.post.location);
            formData.append("date", this.post.date);
            formData.append("file", this.post.photo, this.post.id + ".png");
            this.$axios
                .post(`${process.env.API}/createPost`, formData)
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },

    mounted() {
        this.initCamera();
    },

    beforeDestroy() {
        if (this.hasCameraSupport) {
            this.disableCamera();
        }
    }
};
</script>

<style lang="sass">
.camera-frame
    border: 1px solid $grey-10
    border-radius: 5px
</style>
