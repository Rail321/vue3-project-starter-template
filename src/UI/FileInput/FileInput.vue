<template>
  <div class="input-field"
    v-bind:class="{ 'input-field_uploaded': value, 'input-field_error': error }"
  >
    <div class="input-field__body">
      <div class="input-field__row input-field__row_error"
        v-if="error"
        v-on:click="clickTargetInput"
      >
        <div class="input-field__col">
          <img class="input-field__icon" src="./icons/image.svg" alt="+">
        </div>
        <div class="input-field__col">
          <p class="input-field__text m-0">image.png</p>
        </div>
      </div>

      <div class="input-field__row input-field__row_loading"
        v-else-if="loading"
      >
        <div class="input-field__col">
          <p class="input-field__text m-0 mt-2">Uploading</p>
        </div>
        <div class="input-field__col pb-3">
          <slot
            name="loading"
          >
            <progress-bar
              v-bind:value="loadingProgress"
            />
          </slot>
        </div>
      </div>

      <div class="input-field__row input-field__uploaded"
        v-else-if="value"
      >
        <div class="input-field__preview"
          v-bind:style="{ backgroundImage: 'url(' + value + ')' }"
        >
          <div class="input-field__preview-overflow">
            <div class="input-field__preview-col"
              v-on:click="eyeButtonClick"
            >
              <img src="./icons/eye.svg" alt="See">
            </div>

            <div class="input-field__preview-col"
              v-on:click="resetValue"
            >
              <img src="./icons/trash.svg" alt="Del">
            </div>
          </div>            
        </div>
      </div>

      <div class="input-field__row input-field__upload"
        v-else
        v-on:click="clickTargetInput"
      >
        <div class="input-field__col">
          <img class="input-field__icon" src="./icons/plus.svg" alt="+">
        </div>
        <div class="input-field__col">
          <p class="input-field__text">Upload</p>
        </div>
      </div>
    </div>
    
    <div class="d-none">
      <input type="file"
        ref="targetInput"
        v-on:change.stop="setValue"
      >
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  import './main.scss'

  import openInNewTab from '@/modules/openInNewTab'
  import UseProgress from '@/modules/UseProgess'

  import ProgressBar from '@/UI/ProgressBar'

  export default {
    props: {
      error: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      value: {
        type: String,
        default: null,
      },
    },

    components: { ProgressBar },

    setup(props, { emit }) {
      const targetInput = ref(null)
      const clickTargetInput = () => {
        targetInput.value.click()
      }

      const setValue = event => {
        if(!event.target.files.length) return

        const [ value ] = event.target.files
        const valueSrc = URL.createObjectURL(value)

        emit('change', valueSrc)
        emit('update:value', valueSrc)
      }
      const resetValue = () => {
        targetInput.value.value = ''
        emit('change', null)
        emit('clear')
        emit('update:value', null)
      }

      const eyeButtonClick = () => {
        openInNewTab(props.value)
        emit('show', props.value)
      }

      const modelValue = ref(props.value)

      return {
        targetInput, clickTargetInput,
        setValue, resetValue,
        eyeButtonClick,
        ...UseProgress(modelValue)
      }
    }
  }
</script>
