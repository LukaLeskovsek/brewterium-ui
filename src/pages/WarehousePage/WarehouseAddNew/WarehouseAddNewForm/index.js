import React from 'react';
import { Button, Form, Input, Radio } from 'antd';
const FormItem = Form.Item;

const WarehouseAddNewForm = Form.create()(
    class extends React.Component {
        render() {
            const { getFieldDecorator } = this.props.form;
            return(
                <Form layout="vertical">
                <FormItem label="Title">
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: 'Please input the title of collection!' }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem label="Description">
                  {getFieldDecorator('description')(<Input type="textarea" />)}
                </FormItem>
                <FormItem className="collection-create-form_last-form-item">
                  {getFieldDecorator('modifier', {
                    initialValue: 'public',
                  })(
                    <Radio.Group>
                      <Radio value="public">Public</Radio>
                      <Radio value="private">Private</Radio>
                    </Radio.Group>
                  )}
                </FormItem>
              </Form>
            );
        }
    }
);