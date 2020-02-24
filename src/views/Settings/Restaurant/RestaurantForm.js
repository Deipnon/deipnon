// @flow
import React, { useState } from 'react';
import { Form, Input, Row, Col, Button } from 'antd';

// Helpers
import FormValidators from '../../../helpers/formValidatiors'

import type { RestaurantType } from '../../../types/restaurant'

type PropsType = {|
  form: Form,
  onSubmit: (restaurant: RestaurantType, done: () => void) => void,
  id: String
|}

const RestaurantInfoForm = ({ form, onSubmit, id }: PropsType): React$Node => {
  const [isBusy, setBusy] = useState(false)

  const submit = e => {
    e.preventDefault();
    
    form.validateFields((err, values) => {
      if (!err) {
        setBusy(true)
        onSubmit({
          id,
          ...values
        }, () => setBusy(false));
      }
    });
  };

  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={submit}>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item label="Name" hasFeedback>
            {getFieldDecorator('name', FormValidators.name)(<Input size="large" />)}
          </Form.Item>
        </Col>
      </Row>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="Phone">
              {getFieldDecorator('phone')(<Input size="large" />)}
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="E-Mail">
              {getFieldDecorator('email')(<Input size="large" />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="Address line" hasFeedback>
              {getFieldDecorator('addressLine', FormValidators.addressLine)(<Input size="large" />)}
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Zip Code" hasFeedback>
              {getFieldDecorator('zipCode', FormValidators.zipCode)(<Input size="large" />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="City" hasFeedback>
              {getFieldDecorator('city', FormValidators.city)(<Input size="large" />)}
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="State" hasFeedback>
              {getFieldDecorator('state', FormValidators.state)(<Input size="large" />)}
            </Form.Item>
          </Col>
        </Row>
      <Button htmlType="submit" size="large" type="primary" disabled={isBusy}>
        Save Changes
    </Button>
    </Form>
  );
};

const fields = ['name', 'phone', 'email', 'addressLine', 'zipCode', 'city', 'state'];

export default Form.create({
  mapPropsToFields(props) {
    return fields.reduce((prev, curr) => {
      prev[curr] = Form.createFormField({
        value: props[curr]
      });
      return prev;
    }, {});
  }
})(RestaurantInfoForm);
