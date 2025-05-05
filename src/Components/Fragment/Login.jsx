import { Link } from "react-router-dom";
import Button from "../Element/Button";
import Input from "../Element/Input";
import Label from "../Element/Label";

const Login = () => {
  const handleLogin = (event) => {
    window.location.href = "/products"; // Redirect to the dashboard page
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(event.target.email.value); // Access the email input value
    console.log(event.target.password.value); // Access the email input value
    console.log("Login clicked");
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <Label name="Email" type="email" label="email" />
            <Input placeholder="example@gmail.com" type="email" name="email" />
          </div>
          <div className="mb-6">
            <Label name="Password" type="password" />
            <Input placeholder="*********" type="password" name="password" />
          </div>

          <Button
            color="bg-blue-600"
            title="Login"
            classname="w-full"
            type="submit"
          />
        </form>

        <p className="text-center text-sm font-normal mt-5 ">
          Dont have an account?{" "}
          <Link to="/register" className="font-bold text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
