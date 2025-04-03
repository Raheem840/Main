const ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April","May"],
    datasets: [
      {
        label: "Revenue",
        data: [10, 20, 15, 25, 45],
        borderColor: "blue",
        fill: false,
        tension: 0.4,
      },
    ],
  },
  options: {
    animation: {
      duration: 1500,
      easing: "easeInOutQuad",
    },
  },
});

