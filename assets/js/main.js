Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  index: 0,
  data: {
    albums: [],
  },
  mounted() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {

        this.albums = response.data.response ;
      })
    }
  })
