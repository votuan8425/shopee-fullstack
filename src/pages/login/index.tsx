import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, notification } from 'antd';
import { TFormLogin, callLogin } from '../../services/api';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 16, color: "white" }} spin />;


const Login: React.FC = () => {
    const [isLoading, SetIsLoading] = useState<boolean>(false)
    const onFinish = async (data: TFormLogin) => {
        SetIsLoading(true)
        const result: any = await callLogin(data);
        SetIsLoading(false)
        if (result.user_id) {
            message.success("Đăng nhập thành công");
        } else {
            notification.error({
                message: result.error
            });
        }

    };

    return (
        <div className='wrapper'>
            <div className='form' >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    layout="vertical"
                    autoComplete="off"
                >

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!', type: "email" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button htmlType="submit"  >
                            {isLoading ? (
                                <Spin indicator={antIcon} size='large' />
                            ) :
                                <>Submit</>
                            }

                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}

export default Login;