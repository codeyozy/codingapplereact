// /* eslint-disable */ warning message 삭제

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState(['여자 코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  [1,2,3].map(function (a){
    console.log(a)
  })

  const 함수 = (i) =>{
    console.log(i);
    let copy = [...따봉];
    copy[i] = copy[i] +1; 
    {따봉변경(copy)}
  }
  const 제목변경 = () =>{
    let copy = [...글제목];
    copy[0] = '남자 코트 추천';
    글제목변경(copy);
  }
  const 가나다순정렬 = () =>{
    let copy = [...글제목].sort();
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      {/* <div className='list'>
        <button onClick={가나다순정렬}>가나다순정렬</button>
        <button onClick={제목변경}> 제목 수정 </button>
        <h4>{글제목[0]} <span onClick={ 함수 }> 👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
        [1,2,3].map(function(el, index){
        return (
            <div className='list' key={index}>
              <h4 onClick={()=>{setModal(!modal); setTitle(index)}}>{글제목[index]}
              <span onClick={()=>함수(index) }> 👍</span> {따봉[index]} </h4>
              <p>2월 17일 발행</p>
          </div>  
          )
        
        }) 
      }
      {/* <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      
      <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        // 조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드        
        modal == true ? <Modal 제목변경={제목변경} title={title} 글제목={글제목}></Modal> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{props.제목변경()}}>글수정</button>
    </div>
  )
}
//const 형식으로 만들면 실수 줄일수 있음
// 컴포넌트로 만들면 좋은경우
// 1. 반복적인 HTML 축약할 때
// 2. 큰 페이지들
// 3. 자주변경되는 것들 

// 동적인 UI 만드는 Step 
// 1. html css 로 미리 디자인 완성
// 2. UI의 현재 상태를 state 로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성
export default App;
