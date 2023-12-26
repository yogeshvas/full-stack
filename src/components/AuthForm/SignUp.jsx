import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
  });
  return (
    <>
      <Input
        placeholder="Email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        fontSize={14}
        size={"sm"}
        type="email"
      />
      <Input
        placeholder="Username"
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        fontSize={14}
        size={"sm"}
        type="text"
      />
      <Input
        placeholder="Full Name"
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        fontSize={14}
        size={"sm"}
        type="text"
      />

      <InputGroup>
        <Input
          placeholder="Password"
          fontSize={14}
          value={inputs.password}
          type={showPassword ? "text" : "password"}
          size={"sm"}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Signup
      </Button>
    </>
  );
};

export default SignUp;
