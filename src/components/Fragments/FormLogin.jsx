import Button from "../Elemtnts/Button";
import InputForm from "../Elemtnts/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />

      <InputForm
        label="Password"
        type="password"
        placeholder="*****"
        name="password"
      />

      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
