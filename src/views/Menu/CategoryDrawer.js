import React, { useState, useEffect } from 'react'
import { Drawer, Form, Row, Col, Avatar, Button, Input, InputNumber, notification } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { createProductCategory, updateProductCategory } from '../../graphql/mutations'
import { useRestaurant } from '../../hooks'
import { toFormData } from '../../helpers/form'
import { formatVariables } from '../../helpers/aws'

import ImageSelector from '../../components/ImageSelector'

const { TextArea } = Input

const CategoryDrawer = ({ isOpen, onClose, totalCategory, onSave, selectedCategory = {} }) => {
  const [form] = Form.useForm();
  const restaurant = useRestaurant();
  const [category, setCategory] = useState({})
  const [isImageSelectorVisible, setImageSelectorVisible] = useState(false);
  const [create] = useMutation(gql(createProductCategory))
  const [update] = useMutation(gql(updateProductCategory))
  
  useEffect(() => {
    setCategory(selectedCategory)
  }, [selectedCategory])
  
  const handleSubmit = values => {
    const categoryRequest = formatVariables({
      variables: {
        input: {
          ...selectedCategory,
          ...values,
          restaurantId: restaurant.id,
          image: category.image,
          isActive: true
        }
      }
    })
    
    if(selectedCategory.id){
      update(categoryRequest).then(() => {
        form.resetFields()
        notification.success({ message: 'Done!', description: 'Category has been updated!' })
        onSave()
      }).catch(() => {
        notification.error({ message: 'Error!', description: 'Something went wrong. Please try again!' })
      })
    } else {
      create(categoryRequest).then(() => {
        form.resetFields()
        notification.success({ message: 'Done!', description: 'New category has been created!' })
        onSave()
      }).catch(() => {
        notification.error({ message: 'Error!', description: 'Something went wrong. Please try again!' })
      })
    }
  }
  
  const fields =  [
    ...toFormData(category),
    ...[{ name: ["sortOrder"], value: category.sortOrder >= 0 ? category.sortOrder : totalCategory + 1 }]
  ]
  
  
  const handleOnClose = () => {
    form.resetFields()
    setCategory({})
    onClose()
  }

  return (
    <Drawer
      visible={isOpen}
      title="Create a new category"
      width={720}
      onClose={handleOnClose}>
      <Form
        form={form}
        fields={fields}
        layout="vertical"
        onFinish={handleSubmit}>

        <Form.Item label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter category name' }]}
        >
          <Input placeholder="Please enter category name" size="large" />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <TextArea rows={3} placeholder="Description.." size="large" />
        </Form.Item>

        <Form.Item label="Select Image" extra="It's optional.">
          {!category.image && <Button size="large" icon={<DownloadOutlined />} block onClick={() => setImageSelectorVisible(true)}>Select Image</Button> }
          {category.image && <Row gutter={16}>
            <Col span={8}>
              <Avatar size={200} shape="square" src={category.image.small} style={{ cursor: 'pointer' }} onClick={() => setImageSelectorVisible(true)} />
            </Col> 
            <Col span={16}>
              <Button size="large" icon={<DownloadOutlined />} onClick={() => setImageSelectorVisible(true)} block>Update Image</Button>
              <Button size="large" type="danger" onClick={() => setCategory({image: null})} block style={{marginTop: '15px'}}>Remove Image</Button>
            </Col> 
          </Row>}
        </Form.Item>

        <Form.Item label="Sort order" name="sortOrder">
          <InputNumber min={1} max={50} />
        </Form.Item>

        <Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Button size="large" type="secondary" onClick={onClose} block>Cancel</Button>
            </Col>
            <Col span={12}>
              <Button size="large" type="primary" htmlType="submit" block>Save Category</Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
      <ImageSelector
        visible={isImageSelectorVisible}
        onClose={() => setImageSelectorVisible(false)}
        onSelect={image => {
          setCategory({ image })
          setImageSelectorVisible(false)
        }} />
    </Drawer>
  )
}


export default CategoryDrawer