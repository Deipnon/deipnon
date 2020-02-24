import React from 'react'
import { Form , TimePicker} from 'antd'

import { EditableContext } from './EditableRow'

class EditableCell extends React.PureComponent {
  state = {
    editing: false,
  };
  
  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = (isOpen) => {
    const { record, handleSave } = this.props;
    
    if(isOpen) return
  
    
    this.form.validateFields((error, values) => {
      if (error) {
        return;
      }
      
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(
          <TimePicker ref={node => (this.input = node)} minuteStep={15} size="large" use12Hours format="h:mm a" onOpenChange={this.save} open={true}/>)}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {record[dataIndex].format('h:mm a')}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

export default EditableCell