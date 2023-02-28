const renderCss = () => {
  return `
  .team-heading {
      background-color: orangered;
      color: white;
    }

    .card {
      -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
      box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    }

    .card-header {
      color: white;
    }

    .card-body {
      background-color: #d3d3d3;
    }
    
    .manager {
      background-color: #172A3A;
    }

    .engineer {
      background-color: #35CE8D;
    }

    .intern {
      background-color: #E56399;
    }
    
    .employee-card {
      margin-left: 4rem;
    }

    .list-group-item {
      margin-bottom: 0.5rem;
    }

    @media only screen and (max-width: 600px) {
      .card {
        margin-right: 4rem;
      }
    }
  `;
};

module.exports = renderCss;