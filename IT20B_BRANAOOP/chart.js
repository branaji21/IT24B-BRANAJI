class ChartCreator {
  constructor(dataUrl) {
    this.dataUrl = dataUrl;
    this.barCtx = document.getElementById("barChart");
    this.pieCtx = document.getElementById("pieChart");
  }

  async fetchData() {
    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return await response.json();
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }

  createBarChart(data) {
    new Chart(this.barCtx, {
      type: "bar",
      data: {
        labels: ["Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
        datasets: [
          {
            label: "# of Student",
            data: data.values,
            borderWidth: 1,
            backgroundColor: [
              "green",
              "yellow",
              "red",
              "blue",
              "Orange",
              "brown",
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  createPieChart(data) {
    new Chart(this.pieCtx, {
      type: "pie",
      data: {
        labels: ["# Grade 7 passer", "# Grade 8 passer", "# Grade 9 passer", "# Grade 10 passer", "# Grade 11 passer", "# Grade 12 passer"],
        datasets: [
          {
            data: [28, 35, 25, 39 , 17, 23],
            backgroundColor: [
              "green",
              "yellow",
              "red",
              "blue",
              "Orange",
              "brown",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
  }

  async init() {
    const data = await this.fetchData();
    if (data) {
      this.createBarChart(data);
      this.createPieChart(data);
    }
  }
}

const chartCreator = new ChartCreator("OOB.json");
chartCreator.init();