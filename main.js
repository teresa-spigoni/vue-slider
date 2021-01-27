new Vue({
  el: '#root',
  data: {
    image: [
      'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
    ],
    imageIndex: 0
  },
  methods: {
    next: function() {
      if (this.imageIndex === (this.image.length -1)) {
        this.imageIndex = 0
      } else {
        this.imageIndex += 1;
      }
    },
    prev: function() {
      if (this.imageIndex === 0) {
        this.imageIndex = (this.image.length -1)
      } else {
        this.imageIndex -= 1;
      }
    }
  }
});
Vue.config.devtools = true;
