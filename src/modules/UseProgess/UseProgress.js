import { ref, watchEffect } from 'vue'

const UseProgress = model => {
  const loading = ref(false)

  const loadingProgress = ref(0)

  watchEffect(() => {
    if(!model.value) return

    loading.value = true
    const progressInterval = setInterval(() => {
      if(loadingProgress.value <= 100) {
        loadingProgress.value += 25
      }
      else {
        loading.value = false
        loadingProgress.value = 0
        clearInterval(progressInterval)
      }
    }, 125)
  })

  return {
    loading, loadingProgress
  }
}

export default UseProgress