const render = (options) => {
  // options是基座下发的参数，可以保存到全局的状态管理或其他地方，用于后面与基座进行通信
  
  // 可通过 options.getGlobalState() 获取基座下发的数据
  // options.setGlobalState({user: {name: ''}}) 改变全局的数据
  // options.onGlobalStateChange 监听全局数据的变化

  
  document.querySelector('#current-env').innerHTML = 'qiankun'
  const globalState = options.getGlobalState()

  // 展示基座下发的状态
  const node = document.createElement('div')
  node.innerHTML = `基座 state： <code>${JSON.stringify(globalState)}</code>。<a target="_blank" href="${window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__}">打开独立运行环境</a>`

  document.querySelector('.container').appendChild(node)

  return Promise.resolve();
};

(global => {
  global['prehtml'] = {
    bootstrap: () => {
      console.log('bootstrap');
      return Promise.resolve();
    },
    mount: (options) => {
      console.log('mount', options);
      return render(options);
    },
    unmount: () => {
      console.log('unmount');
      return Promise.resolve();
    },
  };
})(window);
