<template>
  <q-page class="q-mt-md container full-height">
    <div style="max-width:925px; margin:0 auto; height: 100%">
      <q-card flat bordered>
        <div class="row">
          <div class="col-5 border-r">
            <div class="full-height">
              <div class="border-b items-center q-py-md q-px-lg">
                <div class="row">
                  <div class="col-10">
                    <div class="text-center">
                      <span>akun</span>
                    </div>
                  </div>
                  <div class="col-2">
                    <span>button</span>
                  </div>
                </div>
              </div>
              <div>
                <q-scroll-area style="height: 500px">
                  <q-list>
                    <q-item
                      v-for="(contact, index) in contacts"
                      :key="index"
                      class="q-my-sm"
                      clickable
                      v-ripple
                    >
                      <q-item-section avatar>
                        <q-avatar color="primary" text-color="white">
                          {{ contact.letter }}
                        </q-avatar>
                      </q-item-section>

                      <q-item-section>
                        <q-item-label>{{ contact.name }}</q-item-label>
                        <q-item-label caption lines="1">
                          {{ contact.email }}
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-scroll-area>
              </div>
            </div>
          </div>
          <div class="col-7">
            <div>asd</div>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
const contacts = [
  {
    id: 1,
    name: "Ruddy Jedrzej",
    email: "rjedrzej0@discuz.net",
    letter: "R"
  },
  {
    id: 2,
    name: "Mallorie",
    email: "malessandrini1",
    letter: "M"
  },
  {
    id: 1,
    name: "Ruddy Jedrzej",
    email: "rjedrzej0@discuz.net",
    letter: "R"
  },
  {
    id: 2,
    name: "Mallorie",
    email: "malessandrini1",
    letter: "M"
  },
  {
    id: 1,
    name: "Ruddy Jedrzej",
    email: "rjedrzej0@discuz.net",
    letter: "R"
  },
  {
    id: 2,
    name: "Mallorie",
    email: "malessandrini1",
    letter: "M"
  },
  {
    id: 1,
    name: "Ruddy Jedrzej",
    email: "rjedrzej0@discuz.net",
    letter: "R"
  },
  {
    id: 2,
    name: "Mallorie",
    email: "malessandrini1",
    letter: "M"
  },
  {
    id: 1,
    name: "Ruddy Jedrzej",
    email: "rjedrzej0@discuz.net",
    letter: "R"
  },
  {
    id: 2,
    name: "Mallorie",
    email: "malessandrini1",
    letter: "M"
  },
  {
    id: 1,
    name: "Ruddy Jedrzej",
    email: "rjedrzej0@discuz.net",
    letter: "R"
  },
  {
    id: 2,
    name: "Mallorie",
    email: "malessandrini1",
    letter: "M"
  }
];

export default {
  data() {
    return {
      contacts
    };
  }
};
</script>

<style lang="sass">
.border-br
	border-right: 1px solid $grey-4
	border-bottom: 1px solid $grey-4

.border-b
	border-bottom: 1px solid $grey-4

.border-r
	border-right: 1px solid $grey-4

.container
	@media (max-width: 935px)
		border: none
		margin: 0
		padding: 0
		height: 100%

.container
	.q-card
		@media (max-width: 935px)
			border: none
			height: 100%
		@media (min-width: $breakpoint-md-min)
			border: 1px solid $grey-4
			height: 100%
</style>
