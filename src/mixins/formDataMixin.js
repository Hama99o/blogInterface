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
        { text: 'Easy', value: 'Easy' },
        { text: 'Medium', value: 'Medium' },
        { text: 'Hard', value: 'Hard' },
        { text: 'Posible', value: 'Posible' }
      ],
      submitted: false,
      blog: {
        title: '',
        content: '',
        categories: [],
        language: 'JavaScript'
      }
    }
  }
}
