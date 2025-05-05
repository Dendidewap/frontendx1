const Button = (props) => {
  const { onClick = () => {}, type = "button" } = props;
  return (
    <button
      className={`px-4 font-semibold ${props.classname} rounded-md ${props.color} text-white`}
      type={type}
      onClick={() => onClick()} // Placeholder for onClick function
    >
      {props.title}
    </button>
  );
};

export default Button;
