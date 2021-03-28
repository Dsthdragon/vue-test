<template>
  <div class="form">
    <div>
      <input type="text" v-model="name" name="name" placeholder="Your Name" />
      <input
        type="text"
        v-model="email"
        name="email"
        placeholder="Your Email Address"
      />
      <input
        type="text"
        v-model="phone"
        name="phone"
        placeholder="Your Phone Number"
      />
      <input
        type="text"
        v-model="dob"
        name="dob"
        placeholder="Your Date Of Birth"
      />
      <input
        type="text"
        v-model="address"
        name="address"
        placeholder="Your Address"
      />
      <input type="text" v-model="bvn" name="bvn" placeholder="Your BVN" />

      <button @click.prevent="addUser()">ADD</button>
    </div>
  </div>
</template>

<script>
import { userCollections } from "../firebase";
export default {
  name: "AddUser",
  props: {
    msg: String,
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      dob: "",
      address: "",
      bvn: "",
    };
  },
  methods: {
    addUser() {
      userCollections
        .push({
          name: this.name,
          email: this.email,
          phone: this.phone,
          dob: this.dob,
          address: this.address,
          bvn: this.bvn,
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
      this.newTodo = "";
    },
  },
};
</script>

<style scoped>
.form {
  padding: 1em;
}
</style>