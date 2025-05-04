const Button = (props) => {
  return (
    <button
      className={`px-4 font-semibold ${props.classname} rounded-md ${props.color} text-white`}
    >
      {props.title}
    </button>
  );
};

export default Button;
