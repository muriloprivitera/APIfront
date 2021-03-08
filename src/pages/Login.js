import React from 'react'

import axios from 'axios'
import { history } from '../history'
import { Form, Input, Button, Checkbox } from 'antd';

import { UserOutlined, LockOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';

const Login = () => { 
  const onFinish = values => {
    axios.post('http://localhost:8080/login', values)
         .then(resp => {
           const { data } = resp
           console.log(data)
           if (data){
             localStorage.setItem('app-token',data)
             history.push('')
           }
         })    
  };

  return (
    <div style={{width:'40%'}}>
      <>
        <h1>Login</h1>
        <p>Insira suas informações</p>
    </>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Por favor insira seu email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Por favor insira sua senha!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Senha"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Lembre de mim</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Esqueceu a senha?
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Entrar
        </Button>
        Ou <a href="">Registre-se agora!</a>
      </Form.Item>
    </Form>
    </div>
  );
};


export default Login