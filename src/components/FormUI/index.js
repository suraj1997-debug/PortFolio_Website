import React, { useState } from 'react';
import './style.css';

 const MaterialInput=(props)=>{
    const [focus,setFocus] = useState(props.value === "" ? false:true);
    const [touch,setTouch] = useState(false);
    return(
      
        <div className="materialInput">
            <label
            className={`label ${focus ? "focus" : ""}`}
            >
                {props.label && props.label}
            </label>
            <input
            className="input"
            type={props.type}
            name={props.name}
            autoComplete={props.autocomplete}
            value={props.value}
            onChange={props.onChange}
            onFocus={(e)=>{
                setFocus(true);
                setTouch(true);
            }}
            onBlur={(e)=>{
                if(e.target.value === ""){
                    setFocus(false);
                    setTouch(false);
                }
                else if(e.target.value !== ""){
                    setFocus(true);
                    setTouch(false);
                }
            }}
            />
            {
                touch && (
                    <div
                    style={{
                        fontSize: "1.28rem",
                        color: "red",
                        fontWeight: 500,
                        paddingTop:".32rem"
                    }}
                    >
                        `{props.label} is required`
                    </div>
                )
            }

        </div>

    )
}

const MaterialTextArea=(props)=>{
    const [focus,setFocus] = useState(props.value === "" ? false:true);
    const [touch,setTouch] = useState(false);
    return(
    
        <div className="materialTextArea">
            <label
            className={`label ${focus ? "focus" : ""}`}
            // style={{
            //     top: 0,
            //     lineHeight: "none",
            //   }}
            >
                {props.label && props.label}
            </label>
            <textarea
            className="textarea"
            name={props.name}
            rows={props.rows}
            value={props.value}
            onChange={props.onChange}
            onFocus={(e)=>{
                setFocus(true);
                setTouch(true);
            }}
            onBlur={(e)=>{
                if(e.target.value === ""){
                    setFocus(false);
                    setTouch(false);
            }else if(e.target.value !== ""){
                setFocus(true);
                setTouch(false);
            }
        }}
            ></textarea>
            {
                touch && (
                    <div
                    style={{
                        fontSize: "1.28rem",
                        color: "red",
                        fontWeight: 500
                    }}
                    >
                        `{props.name} is required`
                    </div>
                )
            }

        </div>

    )
}

const MaterialButton = (props) => {
    const onClick = () => {
      props.onClick && props.onClick();
    };
    return (
      <div
        style={{
          ...props.style,
        }}
      >
        <button
          className="materialButton"
          type={props.type}
          style={{
            backgroundColor: props.bgColor,
            color: props.textColor,
            fontSize: props.fontSize,
          }}
          onClick={onClick}
        >
          {props.title && props.title}
        </button>
      </div>
    );
  };



export  {MaterialInput,MaterialTextArea,MaterialButton};