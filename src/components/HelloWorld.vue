<template>
  <v-container>
    <v-row>
      <v-col class="col-12"><h2>Прогноз на марку нефти Brent</h2></v-col>      
    </v-row>
    <v-row>
      <v-col class="col-3 row-3">
        <money-rate/>
      </v-col>
      <v-col class="col-6">
        <div class="small">
          <line-chart :chart-data="datacollection" :options="chartOptions"></line-chart>
        </div>
        <div v-if="rates">
          <div id="USD">Доллар США $ — {{getDollar}} руб.</div>
          <div id="EUR">Евро € — {{getEuro}} руб.</div>
        </div>
      </v-col>
      <v-col class="col-3 align-content-space-around">
        <h3>Новости</h3>
        <v-card outlined>
          <news-loader/>
          <news-loader/>
          <news-loader/>

        </v-card>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>

  import LineChart from '@/components/LineChart.js'
  import MoneyRate from '@/components/MoneyRate.vue'
  import NewsLoader from '@/components/NewsLoader.vue'

  export default {
    name: 'HelloWorld',

    components: {
      LineChart,
      MoneyRate,
      NewsLoader
    },

    data: () => ({
      chartOptions: null,
      datacollection: null,
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
      rates: null,
    }),
    mounted () {
      this.$on('getrates', (rates) => {
        this.rates = rates;
      })
      this.fillData()
      setInterval(() => {
        this.moveData()
      },2000)
    },
    computed: {
    getDollar() {
       return this.rates.Valute.USD.Value.toFixed(4).replace('.', ',');
    },
    getEuro() {
      return this.rates.Valute.EUR.Value.toFixed(4).replace('.', ',');
    }
  },
    methods: {
      fillData () {
        
        this.chartOptions = {
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
                suggestedMin: 10,

                // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
                suggestedMax: 50
              }
            }]
          },
          animation: {
              duration: 0
            
          }
        //   legend: {
        //     display: true,
        //     labels: {
        //         fontColor: 'rgb(255, 99, 132)'
        //     }
        // }
        }

        this.datacollection = {
          labels: this.fillArray(),
          datasets: [
            {
              label: 'Brent',
              backgroundColor: 'green',
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              data: this.fillArray(),
              pointRadius: 1,
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (30 - 5 + 1)) + 11
      },
      fillArray(){
        let data = []
        for (let i = 0; i<=25; i++){
          data.push(this.getRandomInt())
        }
        return data
      },
      moveData(){
        const dataPoint = this.getRandomInt()

        const len = this.datacollection.datasets[0].data.length
        for (let i=0; i<len-1; i++){
          this.datacollection.datasets[0].data[i] = this.datacollection.datasets[0].data[i+1]
        }
        this.datacollection.datasets[0].data.push(dataPoint) 
        // const lablePoint = this.getRandomInt()

        // this.datacollection.labels.push(lablePoint)
        // this.datacollection.datasets[0].data.push(dataPoint)

        // this.datacollection.labels.shift()
        // this.datacollection.datasets[0].data.shift()

        this.datacollection = {
          labels: this.datacollection.labels,
          datasets: [
            {
              label: 'Brent',
              backgroundColor: 'green',
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              data: this.datacollection.datasets[0].data,
              pointRadius: 1,
            }
          ]
        }
      }
    }
  }

</script>

<style scoped>
  .small {
    /* max-width: 500px;
    max-height: 500px; */
  }
</style>
