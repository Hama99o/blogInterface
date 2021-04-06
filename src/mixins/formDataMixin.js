export default {
  data(){
    return{
      id: this.$route.params.id,
      options: [
        { value: 'JavaScript', text: 'JavaScript' },
        { value: 'Ruby', text: 'Ruby' },
        { value: 'PHP', text: 'PHP' },
        { value: 'C++', text: 'C++' },
        { value: 'Python', text: 'Python', disabled: true }
      ],
      ninjas: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' }
      ],
      submitted: false,
      blog: {
        title: '',
        content: '',
        categories: [],
        author: 'JavaScript'
      }
    }
  }
}
