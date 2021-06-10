import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './page/index/index'
import FirstLoading from "./page/first-loading/first-loading";
import reportWebVitals from './reportWebVitals';
import 'lib-flexible'

function listen () {
    if (document.readyState == 'complete') { // 资源加载完成
        setTimeout( ()=> {
            ReactDOM.render(
                <React.StrictMode>
                    <Index />
                </React.StrictMode>,
                document.getElementById('root')
            )
        },2700)
    } else { // 资源加载中
        ReactDOM.render(
            <React.StrictMode>
                <FirstLoading />
            </React.StrictMode>,
            document.getElementById('root'))
    }
}

/*ReactDOM.render(
    <React.StrictMode>
        <FirstLoading />
    </React.StrictMode>,
    document.getElementById('root')
)*/

document.onreadystatechange = listen

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
