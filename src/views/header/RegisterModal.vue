<template>
  <div>
    <a href="#" class="user--login button--default" @click="visible = !visible"
      >Регистрация</a
    >

    <Modal
      title="Регистрация"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="loading"
      @cancel="visible = !visible"
    >
      <p>
        <Input placeholder="Email" v-model="form.email" />
      </p>
      <p>
        <Input placeholder="Password" v-model="form.password" type="password" />
      </p>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Modal, Input, Message } from 'ant-design-vue'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'register-modal',
  components: {
    Modal,
    Input
  },
  data: () => ({
    visible: false,
    form: { email: '' }
  }),
  validations: {
    form: {
      email: { required, email }
    }
  },
  computed: mapState('users', {
    loading: ({ loadings }) => loadings.register
  }),
  methods: {
    handleOk(e) {
      this.$v.$touch()

      if (this.$v.$invalid) {
        const {
          form: { email }
        } = this.$v

        if (email.$invalid) Message.warning('email')
        // if (!password.$invalid) Message.warning('password')

        return
      }
    }
  }
}
</script>
