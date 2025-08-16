// use PascalCasing for name of function
function Message() {
    // below is JSX: Javascript XML code, not HTML
    const name = '';
    if (name)
        return <h1>Hello {name}!</h1>;
    return <h1>Hello World!</h1>;
}

export default Message;