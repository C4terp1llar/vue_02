<template>
  <div class="card">
    <h2># {{id}} </h2>
    <h3>{{header}}</h3>
    <app-btn
        :color="isOpenLocal ? '' : 'primary'"
        @action="toggleNewsVisible"
    >{{isOpenLocal ? 'Свернуть' : 'Развернуть'}}</app-btn>
    <div v-if="isOpenLocal">
      <p >{{text}}</p>
      <app-btn
          color="primary"
          :disabled="isRead"
          @action="toggleReadRate"
      >{{isRead  ? 'Новость прочитана' : 'Прочитать'}}</app-btn>
    </div>
  </div>
</template>

<script>
import AppBtn from "@/AppBtn.vue";

export default {
  data() {
    return {
      //создание копии isOpen чтобы не было рассинхрона с родительской компонентой при мутации на локальном уровне
      isOpenLocal: this.isOpen,
      //для isRead ввидимо копия не нуэна тк в обоих компонентах все его изменения отслеживаются
      //что-то мксимально странное... если по условию брать исрид, который родительский, то все нормально (он переопределяется и приходит обновленным)
      isReadLocal: this.isRead,
    }
  },
  methods: {
    toggleNewsVisible(){
      this.isOpenLocal = !this.isOpenLocal;
      if (this.isOpenLocal){
        // посылает именованное событие в род компоненту
        this.$emit('open-news');
      }
    },
    toggleReadRate() {
      this.isReadLocal = !this.isReadLocal;
      this.$emit('read-news', this.id);
    }
  },
  // для документирования (простого упоминания кастомных ивентов) эммитов и их валидации
  emits: {
    'open-news': null,
    'read-news'(id){
      if (id){
        return true;
      }
      alert('У новости по какой-то причине не оказалось параметра id')
      return false;
    }

  },
  props: {
    header: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      /*
      * Для более детальной валидации
      *
      * validator(value) {

      }
      * */
    },
    isRead: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  components: {
    'app-btn': AppBtn
  }
}
</script>