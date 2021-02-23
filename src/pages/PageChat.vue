<template>
    <q-page class="constrain q-py-md q-px-lg">
        <q-card flat bordered>
            <div class="row">
                <div class="col-4">
                    <q-card flat square class="q-pa-md border-br">
                        <div class="row">
                            <div class="col-10 text-center">
                                <span>current user</span>
                            </div>
                            <div class="col-2">
                                <span>button</span>
                            </div>
                        </div>
                    </q-card>
                    <div class="flex column border-r">
                        <q-item>
                            <q-item-section avatar>
                                <q-avatar size="60px">
                                    <img
                                        src=""
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
                <div class="col-8">
                    <q-card flat square class="q-pa-md border-b">
                        <div class="row">
                            <div class="col-10">
                                <span>current user</span>
                            </div>
                            <div class="col-2">
                                <span>button</span>
                            </div>
                        </div>
                    </q-card>
                </div>
            </div>
        </q-card>
    </q-page>
</template>

<script>
export default {};
</script>

<style lang="sass">
.border-br
    border-right: 1px solid $grey-4
    border-bottom: 1px solid $grey-4

.border-b
    border-bottom: 1px solid $grey-4

.border-r
    border-right: 1px solid $grey-4
</style>