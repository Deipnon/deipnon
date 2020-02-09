import React from 'react'
import { Form, Input, Row, Col, Button } from 'antd';

const RestaurantInfoForm = ({ form, onSubmit}) => {

    const submit = (e) => {
		e.preventDefault()
		form.validateFields((err, values) => {
			if (!err) {
				onSubmit(values)
			}
		});
	}


	const { getFieldDecorator } = form;

    return (<Form onSubmit={submit}>
        <Row gutter={16}>	
            <Col span={24}>
                <Form.Item label="Name" hasFeedback>
                    {getFieldDecorator('name',{	
                        rules: [{ required: true, message: 'Please input restaurant name'}]
                    })(<Input size="large"/>)}
                </Form.Item>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col xs={24} md={12}>	
                <Form.Item label="Phone">
                    {getFieldDecorator('phone')(<Input size="large"/>)}
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>	
                <Form.Item label="E-Mail">
                    {getFieldDecorator('email')(<Input size="large"/>)}
                </Form.Item>
            </Col>
        </Row>
        <Button htmlType="submit" size="large" type="primary">Save Changes</Button>
    </Form>)
}

const fields = ['name', 'phone', 'email']

export default Form.create({
	mapPropsToFields(props) {
		return fields.reduce((prev, curr) => {
                prev[curr] =  Form.createFormField({
                    value: props[curr]
                })
                return prev
            }, {})
		}
})(RestaurantInfoForm)