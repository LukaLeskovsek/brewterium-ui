import React from 'react'
import { Button, Form, Input } from 'antd'
const FormItem = Form.Item

const WarehouseEditForm = Form.create({
  onFieldsChange(props, changedFields) {
    console.log('onFieldsChange', changedFields)
    props.onChange(changedFields)
  },
  onValuesChange(_, values) {
    console.log(values)
  },
  mapPropsToFields(props) {
    return {
      name: Form.createFormField({
        ...props.name,
        value: props.name.value,
      }),
      description: Form.createFormField({
        ...props.description,
        value: props.description.value,
      }),
    }
  },
})(props => {
  const { getFieldDecorator } = props.form
  return (
    <Form layout="vertical" onSubmit={props.onSubmit}>
      <FormItem label="Name">
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please input the name of the warehouse!' }],
        })(<Input />)}
      </FormItem>

      <FormItem label="Description">
        {getFieldDecorator('description')(<Input type="textarea" />)}
      </FormItem>

      <Button type="primary" htmlType="submit">
        Save
      </Button>
    </Form>
  )
})
class WarehouseAddNew extends React.Component {
  state = {
    fields: {
      name: {
        value: 'benjycui',
      },
      description: {
        value: '',
      },
    },
  }

  handleFormChange = changedFields => {
    console.log('HandleFormChange')
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const fields = this.state.fields
    return (
      <div>
        <WarehouseEditForm
          {...fields}
          onChange={this.handleFormChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default WarehouseAddNew
