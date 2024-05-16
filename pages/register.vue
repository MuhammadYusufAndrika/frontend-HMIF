<template>
  <div class="account-pages regist-height">
    <div
      v-if="loading"
      style="position: absolute; z-index: 999"
      class="d-flex align-items-center justify-content-center h-100 w-100 box-color-custom"
    >
      <div class="text-center">
        <img src="/auth/loading-state.gif" height="160" />
        <p class="loading-text">Loading...</p>
      </div>
    </div>
    <div
      class="row bs-gutter-remover align-items-center justify-content-center h-100"
    >
      <div
        class="col-xl-5 position-relative d-flex align-items-center justify-content-center bg-white h-100 px-5"
      >
        <div class="top-images">
          <RouterLink to="/"
            ><img src="/index/logo-hmif.png" height="48" alt="" srcset=""
          /></RouterLink>
        </div>
        <div class="position-relative inside-wrap">
          <div class="">
            <div class="card-body">
              <div class="mt-2">
                <p class="auth-title">Register!</p>
                <p class="auth-subtitle">
                  Welcome! Please enter your details to Sign Up
                </p>
              </div>
              <div class="mt-4">
                <!-- <p v-if="error" class="auth-subtitle text-danger mb-0">
                  {{ $t("snackbar." + errorMsg) }}
                </p> -->

                <b-form @submit.prevent="userRegister">
                  <b-form-group
                    id="input-group-1"
                    label="Nim"
                    label-for="input-1"
                    class="mb-3 position-relative"
                  >
                    <i class="mdi mdi-speedometer-slow resp-img"></i>
                    <b-form-input
                      id="input-1"
                      v-model="nim"
                      type="text"
                      placeholder="Nim.."
                      :class="{ 'is-invalid': error }"
                      style="padding-left: 46px"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Name"
                    label-for="input-1"
                    class="mb-3 position-relative"
                  >
                    <i class="mdi  mdi-account resp-img"></i>
                    <b-form-input
                      id="input-1"
                      v-model="name"
                      type="text"
                      placeholder="Name.."
                      :class="{ 'is-invalid': error }"
                      style="padding-left: 46px"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Email"
                    label-for="input-1"
                    class="mb-3 position-relative"
                  >
                    <img
                      src="/auth/mail-01-line.png"
                      height="22"
                      alt="email"
                      class="resp-img"
                    />
                    <b-form-input
                      id="input-1"
                      v-model="email"
                      type="text"
                      placeholder="Email.."
                      :class="{ 'is-invalid': error }"
                      style="padding-left: 46px"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-2"
                    class="mb-3 position-relative"
                  >
                    <img
                      src="/auth/key-01-line.png"
                      height="22"
                      alt="email"
                      class="resp-img"
                    />
                    <img
                      v-if="passwordType == 'password'"
                      src="/auth/eye-line.svg"
                      height="20"
                      class="pass-img cursor-pointer"
                      :class="{ 'me-3': error }"
                      @click="changeType('text')"
                    />

                    <img
                      v-else
                      src="/auth/eye-off-line.svg"
                      height="20"
                      class="pass-img cursor-pointer"
                      :class="{ 'me-3': error }"
                      @click="changeType('password')"
                    />

                    <label for="input-2">Password</label>
                    <b-form-input
                      id="input-2"
                      v-model="password"
                      :type="passwordType"
                      placeholder="Enter Password.."
                      :class="{
                        'is-invalid': error
                      }"
                      style="padding-left: 46px"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-2"
                    class="mb-3 position-relative"
                  >
                    <img
                      src="/auth/key-01-line.png"
                      height="22"
                      alt="email"
                      class="resp-img"
                    />
                    <img
                      v-if="ConfirmType == 'password'"
                      src="/auth/eye-line.svg"
                      height="20"
                      class="pass-img cursor-pointer"
                      :class="{ 'me-3': error }"
                      @click="ConfirmType = 'text'"
                    />

                    <img
                      v-else
                      src="/auth/eye-off-line.svg"
                      height="20"
                      class="pass-img cursor-pointer"
                      :class="{ 'me-3': error }"
                      @click="ConfirmType = 'password'"
                    />

                    <label for="input-2">Confirm Password</label>
                    <b-form-input
                      id="input-2"
                      v-model="confirm_password"
                      :type="ConfirmType"
                      placeholder="Confirm Password.."
                      :class="{
                        'is-invalid': error
                      }"
                      style="padding-left: 46px"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Key Pass"
                    label-for="input-1"
                    class="mb-3 position-relative"
                  >
                    <i class="mdi  mdi-account-key resp-img"></i>
                    <b-form-input
                      id="input-1"
                      v-model="key_pass"
                      type="text"
                      placeholder="Key Pass.."
                      :class="{ 'is-invalid': error }"
                      style="padding-left: 46px"
                    ></b-form-input>
                  </b-form-group>

                  <div class="mt-4">
                    <button type="submit" class="btn bg-hmif w-100 btn-login">
                      <span class="btn-text">Sign Up</span>
                    </button>
                  </div>

                  <div class="mt-4 text-center">
                    <p class="mb-0 auth-subtitle">
                      Already have an account?
                      <nuxt-link to="/login" class="fw-medium text-hmif"
                        >Login!</nuxt-link
                      >
                    </p>
                  </div>
                </b-form>
              </div>
            </div>
          </div>
        </div>

        <p class="comp-text">© HMIF Amikom</p>
      </div>
      <div class="col-xl-7 d-none d-sm-none d-md-block text-center">
        <img src="/index/logo-hmif.png" height="500" class="img-fluid" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
  auth: false,

  head() {
    return {
      title: `${this.title}`
    };
  },

  data() {
    return {
      title: "Register",
      nim: "",
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      key_pass: "",

      //   Password Type
      passwordType: "password",
      ConfirmType: "password",

      //   error
      error: 0,
      errorMsg: "",

      // loading
      loading: 0
    };
  },

  mounted() {
    if (
      localStorage.getItem("def_lang") == null ||
      localStorage.getItem("def_lang") == undefined
    ) {
      localStorage.setItem("def_lang", "en");
    }
  },

  methods: {
    async userRegister() {
      this.loading = 1;
      try {
        this.error = 0;

        const res = await this.$axios.post(
          "https://api.hmifamikom.org/api/register",
          {
            nim: this.nim,
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.confirm_password,
            key_pass: this.key_pass
          }
        );

        this.$router.push("/login");
        this.$toast.success("Register Success, Please Login!");
        this.loading = 0;
      } catch ({ response }) {
        this.loading = 0;
        this.error = 1;
        this.$toast.error(response.data.error);
      }
    },

    changeType(type) {
      this.passwordType = type;
    }
  }
};
</script>

<style lang="scss" scoped>
.regist-height {
  height: 900px;
}
.left-auth {
  padding-left: 140px;
  padding-right: 140px;
}

.auth-title {
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 12px;
}

.auth-subtitle {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #475467;
}

.resp-img {
  position: absolute;
  top: 55%;
  left: 14px;
}

.pass-img {
  position: absolute;
  top: 58%;
  right: 16px;
}

.btn-login {
  border: 1px solid #500009 !important;
  border-radius: 8px !important;
  color: white;
}

.btn-login:hover {
  color: #101828 !important;
}

.btn-text {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

.forgot-text {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #3432a7;
}

.top-images {
  position: absolute;
  top: 24px;
  left: 24px;
}

.comp-text {
  position: absolute;
  bottom: 24px;
  left: 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 0px;
  color: #475467;
}

.inside-wrap {
  height: 100vh;
  max-width: 310px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.box-color-custom {
  background: rgba(52, 64, 84, 0.6);
  /* Background Blur/md */

  backdrop-filter: blur(8px);
}

.loading-text {
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  /* Gray/100 */

  color: #f2f4f7;
}

.text-hmif {
  color: #500009 !important;
}
</style>
