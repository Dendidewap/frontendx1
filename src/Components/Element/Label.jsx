const Label = (props) => {
  const { type, name } = props;
  return (
    <label
      htmlFor={type}
      className="block text-slate-700 text-sm font-bold mb-2"
    >
      {name}
    </label>
  );
};

export default Label;
