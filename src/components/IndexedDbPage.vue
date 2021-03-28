<template>
  <div>
    <add-user></add-user>
    <h1>INDEXED STORAGE</h1>
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th>DOB</th>
          <th>ADDRESS</th>
          <th>BVN</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in people" v-bind:key="person.id">
          <td>
            {{ person.name }}
          </td>
          <td>
            {{ person.email }}
          </td>
          <td>
            {{ person.phone }}
          </td>
          <td>
            {{ person.dob }}
          </td>
          <td>
            {{ person.address }}
          </td>
          <td>
            {{ person.bvn }}
          </td>
        </tr>
      </tbody>
    </table>
    <button v-on:click="fetchFunction()">CLICK ME</button>
  </div>
</template>

<script>
import { userCollections } from "../firebase";
import AddUser from "./AddUser";
export default {
  name: "IndexedDbPage",
  props: {
    msg: String,
  },
  data() {
    return {
      people: [],
      sortTime: 0,
      pushTime: 0,
      displayTime: 0,
    };
  },
  components: {
    AddUser,
  },
  mounted() {
    userCollections.on("value", (snapshot) => {
      this.people = snapshot.val();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
