// @flow
import React, { useState } from 'react'
import { Typography, Card, Empty, Button, Drawer, Form, Input, Row, Col, Avatar } from 'antd'

const { Title } = Typography

const CategoryForm = Form.create()(({ form, onCancel }) => {

  const [categoryImage, setCategoryImage] = useState()

  const { getFieldDecorator } = form;
  const { TextArea } = Input;

  const imageList = Array(20).fill(null).map(() => ({ src: "https://i.pinimg.com/originals/da/59/48/da5948e191f841484264d805d732bc81.jpg" }))

  return (
    <Form layout="vertical" >

      <Form.Item label="Name">
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please enter category name' }],
        })(<Input placeholder="Please enter category name" size="large" />)}
      </Form.Item>

      <Form.Item label="Description">
        {getFieldDecorator('description')(
          <TextArea rows={4} placeholder="Description.." size="large" />)
        }
      </Form.Item>

      <Form.Item label="Select Image" extra="It's optional.">
        <Row gutter={16}>
          <Col span={12}>
            <Card size="small">
              <div style={{ height: '303px', "overflowY": 'auto', "overflowX": 'hidden' }}>
                <Row gutter={[16, 16]}>
                  {imageList.map((image, index) => (
                    <Col key={index} span={8}>
                      <Avatar size={84} shape="square" src={image.src} style={{ cursor: 'pointer' }} onClick={() => setCategoryImage(image.src)} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card size="small">
              <div style={{ height: '303px' }}>
                {categoryImage ?
                  <Avatar size={303} shape="square" src={categoryImage} /> : <Empty />
                }
              </div>

            </Card>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Button type="secondary" onClick={onCancel} block>Cancel</Button>
          </Col>
          <Col span={12}>
            <Button type="primary" htmlType="submit" block>Save Category</Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  )
})

const Menu = () => {
  const [isDrawerOpen, setDrawerStatus] = useState(true)

  return (<React.Fragment>
    <Title className="page-title" level={3}>Restaurant Menu</Title>

    <Card title="Categories">
      <Button type="primary" onClick={() => setDrawerStatus(true)}>
        Add Category
      </Button>
      <Empty />
    </Card>

    <Drawer
      visible={isDrawerOpen}
      title="Create a new category"
      width={720}
      onClose={() => setDrawerStatus(false)}>
      <CategoryForm onCancel={() => setDrawerStatus(false)} />
    </Drawer>

  </React.Fragment>)
}


export default Menu
