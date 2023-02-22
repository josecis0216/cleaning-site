<template>
  <section>
    <header-nav />
    <div style="width: 44rem; margin: 10px auto">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ipsum ex accusamus ullam aliquam, dolore commodi! Quisquam eius, vel in
        officia doloremque a excepturi fugit quia voluptates sint eaque
        perferendis?
      </p>
    </div>
    <div class="card" style="width: 32rem; margin: 10px auto">
      <div class="card-body">
        <div class="card-title">
          <h2>Contact Us</h2>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <form class="contact-form" @submit.prevent="onSubmit">
                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <label for="frmFirstName">First Name</label>
                      <input
                        id="frmFirstName"
                        v-model="formData.firstName"
                        name="first_name"
                        type="text"
                        class="form-control"
                        placeholder="First Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <label for="frmLastName">Last Name</label>
                      <input
                        id="frmLastName"
                        v-model="formData.lastName"
                        name="last_name"
                        type="text"
                        class="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-7 mb-3">
                    <div class="form-group">
                      <label for="frmEmail">Email address</label>
                      <input
                        id="frmEmail"
                        v-model="formData.email"
                        name="user_email"
                        type="email"
                        class="form-control"
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-5 mb-3">
                    <div class="form-group">
                      <label for="frmSqFeet">Building Size(sq feet)</label>
                      <input
                        id="frmSqFeet"
                        v-model="formData.sqFeet"
                        name="sq_feet"
                        type="text"
                        class="form-control"
                        placeholder="Square Feet"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-12 mb-3">
                    <div class="form-group">
                      <label for="frmTextArea">Short Message (optional)</label>
                      <textarea
                        id="frmTextArea"
                        v-model="formData.message"
                        name="message"
                        class="form-control"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <AppButton type="submit">Submit</AppButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer-nav />
  </section>
</template>

<script>
import emailjs from 'emailjs-com'

import HeaderNav from '@/components/Nav/HeaderNav.vue'
import FooterNav from '@/components/Nav/FooterNav.vue'
import AppButton from '@/components/UI/AppButton.vue'

export default {
  components: {
    HeaderNav,
    FooterNav,
    AppButton,
  },
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        sqFeet: '',
        message: '',
      },
    }
  },
  methods: {
    onSubmit(e) {
      emailjs
        .sendForm(
          'service_cftw0yp',
          'template_76b2s45',
          e.target,
          'user_9d5t96GFJT2PnAEPbHV9j'
        )
        .then(
          (result) => {
            console.log('SUCCESS! Email sent!', result.status, result.text)
            this.$store.dispatch('contactMe', this.formData).then(() => {
              this.$router.push('/success')
            })
          },
          (error) => {
            console.log('FAILED... email did not send', error)
          }
        )
    },
  },
}
</script>
