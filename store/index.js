import axios from 'axios'
import Vuex from 'vuex'

const initialState = {
  posts: [],
  loading: false,
}


const createStore = () => {

  return new Vuex.Store({
    state: initialState,
    actions: {
      async nuxtServerInit({ commit }, { req }) {
        // REVIEW 初始化store (检查 user 之类的)
        // REVIEW 这个是一定会被 updated 的
        // REVIEW 这个是页面渲染之前会做的处理，所以说，在跑完之前 页面会一直等待
        commit('TOGGLE_LOADING')
        console.log('TOGGLE_LOADING, --- finished');
        console.log('nuxtServerInit'.toUpperCase());

        const response = await delayRequest('https://jsonplaceholder.typicode.com/todos/1', 0)
        
        const { data } = response;

        const post = {
          postId: data.id,
          content: data.title,
          title: data.title,
          createdAt: new Date().toString(),
        };

        commit('setPosts', [post])
        commit('TOGGLE_LOADING')

      },
      setPosts(context, posts) {
        console.log('ACTION');
        context.commit('setPosts', posts)
      },
      TOGGLE_LOADING({commit}){
        commit('TOGGLE_LOADING')
      }
    },
    mutations: {
      setPosts(state, posts) {
        console.log('MUTATION');
        state.posts = posts;
      },
      TOGGLE_LOADING(state){
        console.log('toggle loading ', state.loading);
        state.loading = !state.loading
      }
    },
    getters: {
      post(state) {
        console.log('GETTERS');
        return state.posts[0];
      }
    },
  })
}

const delayRequest = (link, time) => {
  return new Promise((resolve, reject)=>{
    setTimeout(async () => {
      try {
        const response = await axios.get(link)  
        resolve(response)
      } catch (error) {
        reject(error)
      }
      
    }, time);
  })
}

export default createStore;

