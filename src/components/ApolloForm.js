import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const initialValues ={
    address:""
};

const validationSchema = Yup.object({
    address: Yup.string().required("Required!")
})

const onSubmit = (values)=>{
    alert("你的地點在: "+ values.address);
}

const ApolloForm = ()=>{
    return (
        <div>
            <div className="topBG">
                <div>
                    <div>打卡機管理</div>
                </div>
            </div>
            <div id="mainFormDiv">
                <div id="deviceCodeForm">
                    <label className="formLabel">裝置代碼</label>
                    <div id="deviceCode">60:45:CB:3B:87:9F</div>
                </div>
                <div id="addressForm">
                    <label className="formLabel">地點</label>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form>
                            <Field 
                                type="text"
                                id="address"
                                name="address"
                            />
                            <ErrorMessage name="address"></ErrorMessage>
                            <button type="submit" id="submitBtn">確定</button>
                            <button id="cancelBtn">取消</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default ApolloForm;