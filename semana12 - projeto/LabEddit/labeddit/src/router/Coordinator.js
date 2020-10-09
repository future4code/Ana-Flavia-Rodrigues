export const goToLogin = (history) => {
    history.push('/login')
  }
  
  export const goToFeedPage = (history) => {
    history.push('/feed')
  }
  
  export const goToPostPage = (history , id) => {
    history.push(`post/${id}`)
  }
  
  export const goToSignUp = (history) => {
    history.push('/register')
  }
  
  export const goToCreatePost = (history) => {
    history.push('/create')
  }
  