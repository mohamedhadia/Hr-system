import { LockClosedIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./../features/login/loginSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const schema = yup
  .object({
    email: yup.string().email(),
    password: yup.string().min(7).required("Password is required"),
  })
  .required();

const Test = () => {
  const [error, setError] = useState();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.isLoggedin) {
      navigate("admin");
    }
  }, [user.isLoggedin]);

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      dispatch(login(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex  flex-col items-center justify-center bg-[#dceef3] md:flex-row   ">
        <div className="relative w-full md:h-screen md:w-2/5">
          <div className=" backdrop absolute inset-0 bg-[#dceef3]/50"></div>
          <img
            className="  h-full w-full  object-cover 	"
            src="https://images.unsplash.com/photo-1565060169194-19fabf63012c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="h-full w-full space-y-8 p-4 md:w-3/5 ">
          <div className="flex  flex-col items-center justify-center">
            <h2 className="mt-6 text-left text-6xl font-extrabold text-gray-900">
              Sign in
            </h2>
            <div className="my-4 flex flex-col items-center justify-center rounded-xl bg-amber-100 p-2 text-xs">
              <p>please use these info to login</p>
              <span>mail@mail.com</span>
              <span>12345678</span>
            </div>
            <form
              className="mt-8 w-full max-w-md space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    {...register("email")}
                    className=" relative block w-full   border-gray-300 bg-transparent px-3 py-4 text-gray-900 placeholder-gray-500  focus:outline-none  focus:ring-[#bbd5dd]  sm:text-sm"
                    placeholder="Email address"
                    autoFocus
                    name="email"
                    type="email"
                  />
                  <p className="py-2 text-sm text-red-600">
                    {errors.email?.message}
                  </p>
                </div>
                <div className="mt-2">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    {...register("password")}
                    className=" relative block w-full border-b  border-gray-300 bg-transparent px-3 py-4 text-gray-900 placeholder-gray-500 focus:outline-none    focus:ring-[#bbd5dd]  sm:text-sm"
                    placeholder="password"
                  />
                  <p className="py-2 text-sm text-red-600">
                    {errors.password?.message}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="/"
                    className="font-medium text-black/50 hover:text-black/60"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center  border border-transparent bg-[#bbd5dd] py-4 px-4 text-sm font-medium text-black hover:bg-[#98b2ba] focus:outline-none"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  Sign in
                </button>
                <p className="py-2 text-sm text-red-600">{error && error}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
