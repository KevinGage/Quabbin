import React from 'react';
import stringToOunces from '../../util/ToOz';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter, numberFilter } from 'react-bootstrap-table2-filter';

function RawData({fishermen, species}) {
  const selectOptions = {
    true: 'Yes',
    false: 'No'
  };

  const columns = [
    {
      dataField: 'Name',
      text: 'Name',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'Species',
      text: 'Species',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'Oz',
      text: 'Weight in Oz',
      sort: true,
      filter: numberFilter()
    },
    {
      dataField: 'Weight',
      text: 'Weight in Lbs',
      sort: true,
      sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') {
          return rowA.Oz - rowB.Oz;
        }
        return rowB.Oz - rowA.Oz;
      }
    },
    {
      dataField: 'Year',
      text: 'Year',
      sort: true,
      filter: numberFilter()
    },
    {
      dataField: 'Winner',
      text: 'Winner',
      sort: true,
      formatter: cell => selectOptions[cell],
      filter: selectFilter({
        options: selectOptions
      })
    }
  ]

  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];

  const data = fishermen.flatMap(fm => {
    return fm.Fish.map((f, i) => {
      const speciesName = species.find(s => s.code === f.Species).name 
      return {
        ...f,
        'Id': fm.Name + i,
        'Name': fm.Name,
        'Species': speciesName,
        'Oz': stringToOunces(f.Weight)
      }
    });
  });

  return (
    <ToolkitProvider
      keyField='Id'
      bootstrap4 = {true}
      data={data}
      columns={ columns }
    >
      {
        props => <BootstrapTable
          { ...props.baseProps }
          striped = {true}
          defaultSorted = {defaultSorted}
          filter={ filterFactory() }
        />
      }
    </ToolkitProvider>
  );
}

export default RawData;