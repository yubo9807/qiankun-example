import React from 'react';

function App() {

  function openSubVue() {
    const isInQiankun = window.__POWERED_BY_QIANKUN__;
    if (!isInQiankun) {
      alert('当前已经是单独运行的子应用');
      return
    }
    window.open(window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__);
  }

  return (
    <div className="App">
      <h1>React</h1>
      <button onClick={openSubVue}>打开独立运行环境</button>
    </div>
  );
}

export default App;
