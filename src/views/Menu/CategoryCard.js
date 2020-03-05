import React, { useState, useEffect } from 'react'
import { Button, Card, PageHeader, Tag, Switch, Typography, Modal } from 'antd'
import { PlusOutlined, DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

const { confirm } = Modal;
const { Paragraph } = Typography

function showDeleteConfirm(onOk, category) {
  confirm({
    title: 'Are you sure delete this category?',
    icon: <ExclamationCircleOutlined />,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk: () => {
      onOk(category)
    },
  });
}

const CategoryCard = ({category, onEdit, onRemove, onStatusChange}) => {
  
  const [isActive, setIsActive] = useState(category.isActive)
  
  useEffect(() => {
    setIsActive(category.isActive)
  }, [category.isActive])
  
  const handleStatusChange = () => {
    setIsActive(!category.isActive)
    onStatusChange(category)
  }
  
  return (
    <Card style={{marginBottom: '15px'}}>
      <PageHeader
      title={category.name}
      style={{
        padding: '0 0 18px 0'
      }}
      tags={<Tag color="green">Active</Tag>}
      extra={[
        <Switch key="switch" checked={isActive} onChange={handleStatusChange} />,
        <Button icon={<PlusOutlined />} key="add_product">Add Product</Button>,
        <Button icon={<EditOutlined />} key="edit_product" onClick={() => onEdit(category)} />,
        <Button icon={<DeleteOutlined />} key="remove_category"  type="danger" onClick={() => showDeleteConfirm(onRemove, category)}/>,
      ]}
    />
    <Paragraph>
        {category.description}
      </Paragraph>
    </Card>
  )
}

export default CategoryCard