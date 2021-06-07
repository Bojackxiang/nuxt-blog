import Vuex from 'vuex'

const initialState = {
  posts: [],
  loading: false,
}


const createStore = () => {

  return new Vuex.Store({
    state: initialState,
    actions: {
      async nuxtServerInit({commit}, {req}){
        console.log(req.session);
        // REVIEW 这个是一定会被 updated 的
        console.log('nuxtServerInit'.toUpperCase());
        const response = await this.$axios.get(
          "https://jsonplaceholder.typicode.com/todos/1"
        );

        const {data} = response; 
        
        const post = {
          postId: data.id,
          content: data.title,
          title: data.title,
          createdAt: new Date().toString(),
        };

        commit('setPosts', [post])

      },
      setPosts(context, posts) {
        console.log('ACTION');
        context.commit('setPosts', posts)
      }
    },  
    mutations: {
      setPosts(state, posts) {
        console.log('MUTATION');
        state.posts = posts;
      }
    },
    getters: {
      post(state) {
        console.log('GETTERS');
        return state.posts[0];
      }
    }
  })
}

export default createStore;

