import Button from "../Element/Button";
import Input from "../Element/Input";
import Label from "../Element/Label";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Sign Up</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        <form action="">
          <div className="mb-6">
            <Label name="Fullname" type="fullname" />
            <Input placeholder="Nama Lengkap" type="fullname" />
          </div>
          <div className="mb-6">
            <Label name="Email" type="email" />
            <Input placeholder="example@gmail.com" type="email" />
          </div>
          <div className="mb-6">
            <Label name="Password" type="password" />
            <Input placeholder="*********" type="password" />
          </div>
          <div className="mb-6">
            <Label name="Confirm Password" type="password" />
            <Input placeholder="*********" type="password" />
          </div>

          <Button color="bg-blue-600" title="Sign Up" classname="w-full" />
        </form>
        <p className="text-center text-sm font-normal mt-5 ">
          Have an account?{" "}
          <Link to="/login" className="font-bold text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
