import { AxiosError } from "axios"
import axios from "../../utils/axios-customize"

export type TFormRegister = {
    first_name: string
    last_name: string
    email: string
    phone: number
    password: string
}

export const callRegister = async (data: TFormRegister) => {
    try {
        const response = await axios.post("/users/signup", data);
        if (response.status === 201 && response.data === "Success") {
            return "Success";
        } else {
            return { error: "Unexpected response from server" };
        }
    } catch (error) {
        if (isAxiosError(error)) {
            // error is now of type AxiosError<any>
            if (error.response) {
                return error.response.data;
            } else if (error.request) {
                return { error: "No response received from server" };
            } else {
                return { error: error.message };
            }
        } else {
            return { error: "Unknown error occurred" };
        }
    }
};


function isAxiosError(error: any): error is AxiosError<any> {
    return error.isAxiosError;
}




export type TFormLogin = {
    password: string
    email: string
}

export const callLogin = async (data: TFormLogin) => {
    try {
        const response = await axios.post("/users/login", data);
        return response;
    } catch (error) {
        return error;
    }
}