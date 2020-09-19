<template>
  <div class="hello">
    HEADER
    <div class="small">
      <line-chart :chart-data="datacollection" :options="chartOptions"></line-chart>
      <button @click="fillData()">Randomize</button>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart.js'

export default {
  name: 'HelloWorld',
  components: {
      LineChart
    },
    data () {
      return {
        chartOptions: null,
        datacollection: null,
        labels: [],
        datasetsData: []
      }
    },
    mounted () {
      this.fillData()
      setInterval(() => {
        this.moveData()
      },2000)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.small {
    max-width: 600px;
    margin:  150px auto;
  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
