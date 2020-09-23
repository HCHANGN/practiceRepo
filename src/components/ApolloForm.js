import React, { useEffect, useRef } from "react";
import {Formik, Form, Field, useField} from "formik";
import * as Yup from "yup";

const initialValues ={
    address:""
};

const validationSchema = Yup.object({
    address: Yup.string().required("Required!")
})

const onSubmit = (values,{resetForm})=>{
    alert("你的地點在: "+ values.address);
    resetForm({address:""});
}

const setAutoHeight = (e)=>{
    e.target.style.minHeight="auto";
    e.target.style.minHeight = `${e.target.scrollHeight}px`;
}



const ApolloForm = ()=>{

    const textAreaRef = useRef("null");

    useEffect(()=>{
        console.log(textAreaRef);
    },[])

    return (
        <div>
            <div className="topBG">
                <div id="BGImg">
                    <div id="BGText">打卡機管理</div>
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
                                name="address"
                            >
                                {
                                    (props)=>{
                                        const {field, form, meta} = props;
                                        return(
                                            <div>
                                                {
                                                    form.submitCount && meta.error ? 
                                                    <textarea ref={textAreaRef} id="address" className="withError" {...field} onInput={setAutoHeight}></textarea> 
                                                    :<textarea ref={textAreaRef} id="address" className="noError" {...field} onInput={setAutoHeight}></textarea>
                                                }
                                                {/* <textarea id="address" {...field} onInput={setAutoHeight}></textarea> */}
                                                {form.submitCount && meta.error ? <div className="error">{meta.error}</div>:null}
                                            </div>
                                            
                                        )
                                    }
                                }
                            </Field>
                            {/* <ErrorMessage name="address" component={TextError}></ErrorMessage> */}
                            <button type="submit" id="submitBtn">確定</button>
                            <button type="reset" id="cancelBtn">取消</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default ApolloForm;