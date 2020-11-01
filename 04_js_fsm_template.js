// 每个函数是一个状态，函数参数就是输入
function state (input) {
    // 在函数中，添加状态的处理逻辑
    doSomething()
    // 返回值作为下一个状态
    return next;
}

// 调用
while(input) {
    // 获取输入
    sate = state(input);    //把状态机的返回值作为下一个状态
}