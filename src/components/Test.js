class App extends React.Component {
    state = {
      arr: [{ text: "foo" }, { text: "bar" }],
      isHovered: {}
    };
  
    handleMouseEnter = index => {
      this.setState(prevState => {
        return { isHovered: { ...prevState.isHovered, [index]: true } };
      });
    };
  
    handleMouseLeave = index => {
      this.setState(prevState => {
        return { isHovered: { ...prevState.isHovered, [index]: false } };
      });
    };
  
    render() {
      const { arr, isHovered } = this.state;
  
      return (
        <div>
          {arr.map((el, index) => (
            <Child
              onMouseEnter={() => this.handleMouseEnter(index)}
              onMouseLeave={() => this.handleMouseLeave(index)}
              text={el.text}
              isHovering={isHovered[index]}
              key={index}
            />
          ))}
        </div>
      );
    }
  }
  
  function Child({ onMouseEnter, onMouseLeave, text, isHovering }) {
    return (
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {text} {isHovering && " (hovering!)"}
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));