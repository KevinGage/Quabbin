import React from 'react';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter, numberFilter } from 'react-bootstrap-table2-filter';
import stringToOunces from '../../util/ToOz';

function RawData({fish}) {
  const CustomExportCsvButton = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="btn btn-primary" onClick={ handleClick }>Download Spreadsheet</button>
      </div>
    );
  };

  const filterByLbs = (filterVal, data) => {
    if (filterVal.number === "") {
      return data;
    }
    switch (filterVal.comparator){
      case '':
        return data;
      case '=':
        return data.filter(d => d.Oz === stringToOunces(filterVal.number));
      case '!=':
        return data.filter(d => d.Oz !== stringToOunces(filterVal.number));
      case '>':
        return data.filter(d => d.Oz > stringToOunces(filterVal.number));
      case '>=':
        return data.filter(d => d.Oz >= stringToOunces(filterVal.number));;
      case '<':
        return data.filter(d => d.Oz < stringToOunces(filterVal.number));
      case '<=':
        return data.filter(d => d.Oz <= stringToOunces(filterVal.number));
      default:
        return data;
    }
  }

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
      },
      filter: numberFilter({
        onFilter: filterByLbs
      })
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
  ];

  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];

  return (
    <ToolkitProvider
      keyField='Id'
      bootstrap4 = {true}
      data={fish}
      columns={ columns }
      exportCSV
    >
      {
        props => (
          <div>
            <CustomExportCsvButton { ...props.csvProps }>Download Spreadsheet</CustomExportCsvButton>
            <hr />
            <BootstrapTable
              { ...props.baseProps }
              striped = {true}
              defaultSorted = {defaultSorted}
              filter={ filterFactory() }
            />
          </div>
        )
      }
    </ToolkitProvider>
  );
}

export default RawData;