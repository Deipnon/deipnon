// @flow
import React, { useState } from 'react';
import { Form, Input, Row, Col, Button } from 'antd';

// Helpers
import { formValidators, toFormData } from '../../../helpers/form'

import type { RestaurantType } from '../../../types/restaurant'

type PropsType = {|
  onSubmit: (restaurant: RestaurantType, done: () => void) => void,
  id: String,
  restaurant: RestaurantType
|}

const RestaurantInfoForm = ({ restaurant, onSubmit }: PropsType): React$Node => {
  const [isBusy, setBusy] = useState(false)
  const [form] = Form.useForm();

  const handleSubmit = values => {
    setBusy(true)
    
    onSubmit({
      id: restaurant.id,
      ...values
    }, () => setBusy(false));
  };
  
  return (
    <Form form={form} fields={toFormData(restaurant)} onFinish={handleSubmit} layout="vertical">
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item label="Name" name="name" rules={formValidators.name} hasFeedback>
            <Input size="large" />
          </Form.Item>
        </Col>
      </Row>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="Phone" name="phone">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="E-Mail" name="email">
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="Address line" name="addressLine" rules={formValidators.addressLine} hasFeedback>
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Zip Code" name="zipCode" rules={formValidators.zipCode} hasFeedback>
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="City" name="city" rules={formValidators.city} hasFeedback>
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="State" name="state" rules={formValidators.state} hasFeedback>
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
      <Button htmlType="submit" size="large" type="primary" disabled={isBusy}>
        Save Changes
    </Button>
    </Form>
  );
};


export default RestaurantInfoForm
