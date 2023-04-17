import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, notification } from 'antd';
import { TFormRegister, callRegister } from '../../services/api';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';

const antIcon = <LoadingOutlined style={{ fontSize: 16, color: "white" }} spin />;


const Register: React.FC = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onFinish = async (data: TFormRegister) => {
        setIsLoading(true);
        const result: any = await callRegister(data);
        setIsLoading(false);
        console.log("result", result);

        if (result === "Successfully Signed Up!!") {
            message.success(result);
            navigate("/login");
        } else {
            notification.error({
                message: "Error",
                description: result.error,
                duration: 5,
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
                        label="First Name"
                        name="first_name"
                        rules={[{ required: true, message: 'Please input your First Name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="last_name"
                        rules={[{ required: true, message: 'Please input your Last Name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your Number!' }]}
                    >
                        <Input />
                    </Form.Item>

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

export default Register;