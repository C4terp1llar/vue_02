<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости</h2>
      <hr>
      <h4>Новостей открыто: {{openRate}}</h4>
      <h4>Новостей прочитано: {{readRate}}</h4>
      <h4>Список прочитанных новостей:</h4>
      <ul
          class="pl-25 read-list"
          v-if="listOfReadNews.length !== 0"
          v-for="item in listOfReadNews"
          :key="item.id"
      >
        <li>
          <strong>#{{item.id}} {{item.header}}</strong>
          <app-btn
              color="danger"
              @action="delFromListOfReadNews(item.id)"
          >{{'Отметить непрочитанным'}}</app-btn>
        </li>
      </ul>
      <div
          v-else
          class="pl-25"
      >
        <span>Прочитанных новостей пока нет</span>
      </div>
      <hr>
      <p>Дата: {{date}}</p>
    </div>
    <div
        class="card"
        v-for="item in news"
        :key="item.id"
    >
      <app-news
          :id="item.id"
          :header="item.header"
          :text="item.text"
          :is-open="item.isOpen"
          :is-read="item.isRead"
          @open-news="openRate++"
          @read-news="readLogic"
      />
    </div>
  </div>
</template>

<script>
import AppNews from "@/AppNews.vue";
import AppBtn from "@/AppBtn.vue";
export default {
  data() {
    return{
      date: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      listOfReadNews: [],
      news: [
        {
          id: 1,
          header: 'Интересное событие в городе',
          text: 'Сегодня в нашем городе произошло удивительное событие. Местные жители собрались на площади, чтобы отметить важный момент в истории города.',
          isOpen: false,
          isRead: false
        },
        {
          id: 2,
          header: 'Открытие нового культурного центра',
          text: 'Вчера открылся новый культурный центр, который предлагает широкий спектр мероприятий для всех возрастов. Жители приглашаются посетить это уникальное место.',
          isOpen: false,
          isRead: false
        },
        {
          id: 3,
          header: 'Новые технологии в образовании',
          text: 'Образовательные учреждения города внедрили новые технологии в обучение. Это позволит студентам получать более современные и интерактивные знания.',
          isOpen: false,
          isRead: false
        },
      ],
    }
  },
  methods: {
    readLogic(id) {
      this.readRate ++;
      const readNews = this.news.find(el => el.id === id);
      this.listOfReadNews.push(readNews);

      const index = id - 1;
      this.news[index].isRead = true;
    },
    delFromListOfReadNews(id){
      this.listOfReadNews = this.listOfReadNews.filter(el => el.id !== id);

      const index = id - 1;
      this.news[index].isRead = false;
      this.readRate--;
    }
  },
  components: {
    'app-news': AppNews,
    'app-btn': AppBtn
  }
}

</script>

<style lang="scss">

</style>
