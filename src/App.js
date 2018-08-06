import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class PluginOverView extends Component {

  render() {
  const data = [
      {
      pluginName: "Asana",
      errorNum: "453",
      happinessLevel: "great",
      },
      {
      pluginName: "Slack",
      errorNum: "11",
      happinessLevel: "not great",
      },
    ];

  const renderTable = true;

    if (renderTable) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
          <div>
            <ReactTable
              data={data}
              columns={[
                {
                  columns: [
                    {
                      Header: "Plugin",
                      accessor: "pluginName"
                    },
                    {
                      Header: "Errors",
                      accessor: "errorNum"
                    },
                    {
                      Header: "Happiness Level",
                      accessor: "happinessLevel"
                    }
                  ]
                }
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
          </div>
          </p>
        </div>
      );
    }


    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              columns: [
                {
                  Header: "Plugin",
                  accessor: "pluginName"
                },
                {
                  Header: "Errors",
                  accessor: "errorNum"
                },
                {
                  Header: "Happiness Level",
                  accessor: "happinessLevel"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default PluginOverView;
