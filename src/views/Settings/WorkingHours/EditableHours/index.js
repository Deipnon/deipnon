import React from 'react'
import { Popconfirm, Table, Button} from 'antd'

import EditableRow from './EditableRow'
import EditableCell from './EditableCell'

import './style.css'

class EditableTable extends React.PureComponent {
  constructor(props) {
    super(props)

    this.columns = [
      {
        title: 'Day',
        dataIndex: 'day',
        width: '30%',
      },
      {
        title: 'Start at',
        dataIndex: 'startAt',
        editable: true,
      },
      {
        title: 'End at',
        dataIndex: 'endAt',
        editable: true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) => (
          <Popconfirm title={`This action will copy data from ${record.day} to other days!`} onConfirm={() => this.handleCopy(record.key)}>
            <a>Copy to all</a>
          </Popconfirm>
        )
      },
    ];

    this.state = {
      dataSource: [],
      fetched: false
    };
  }

  static getDerivedStateFromProps( { data }, state) {
    return !state.fetched ? {
      dataSource: data,
      fetched: true
    } : null
  }

  handleCopy = key => {
    const referanceItem = this.state.dataSource.find(item => item.key === key)
    
    const updatedItems = this.state.dataSource.map(item => ({
      ...item,
      startAt: referanceItem.startAt,
      endAt: referanceItem.endAt
    }))
    
    
    this.setState({
      dataSource: updatedItems  
    })
  }

  handleSave = row => {
    // console.log('row', row.startAt.format('hh mm'))
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };
  
  
  handleSaveAll = () => {
    this.props.onSave(this.state.dataSource, () => {
      this.setState({ fetched: false })
    })
  }

  render() {

    const { dataSource } = this.state

    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Table
          pagination={false}
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
        
        <Button type="primary" size="large" style={{marginTop: '15px'}} onClick={this.handleSaveAll}>Save</Button>
      </div>
    );
  }
}

export default EditableTable