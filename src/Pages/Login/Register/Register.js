import { reload } from "firebase/auth";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../Components/Shared/Loading/Loading";
import PageTitle from "../../../Components/Shared/PageTitle/PageTitle";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken/useToken";
import logo from "../../../images/pngwing.com.png";
import "../Login/Login.css";

const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser);

  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-danger mt-1">
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  if (token) {
    navigate("/home");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    alert("Profile Updated");
    reload();
    navigate("/home");
  };

  return (
    <div>
      <PageTitle title="Register"></PageTitle>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                style={{ width: "100%", height: "auto" }}
                src="https://i.ibb.co/ZLNSMY4/6300959.jpg"
                alt="login form"
                className="vert-move rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2 mx-auto">
                  <img
                    src={logo}
                    style={{ width: "50%", height: "50px" }}
                    alt=""
                  />
                  <span className="h1 fw-bold mb-0">BDFood</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  SignUp to your account
                </h5>

                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* for name */}
                  <div>
                    <div className="text-start ms-5">
                      {" "}
                      <label>Name</label>
                      <br />
                    </div>
                    <input
                      className="mb-2"
                      placeholder="Enter Your Name"
                      style={{
                        width: "82%",
                        marginBottom: "10px",
                        borderRadius: "8px",
                        height: "40px",
                      }}
                      type="text"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "name is required",
                        },
                      })}
                      size="lg"
                    />
                    <label className="label mb-2 text-danger">
                      {errors.name?.type === "required" && (
                        <span className="label-text-alt text-red">
                          {errors.name.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {/* for email */}
                  <div>
                    <div className="text-start ms-5">
                      {" "}
                      <label>Email</label>
                      <br />
                    </div>
                    <input
                      ClassName="mb-2"
                      placeholder="Enter Your Email"
                      style={{
                        width: "82%",
                        marginBottom: "10px",
                        borderRadius: "8px",
                        height: "40px",
                      }}
                      label="Email address"
                      id="formControlLg"
                      type="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "email is required",
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: "Provide a valid Email",
                        },
                      })}
                      size="lg"
                    />
                    <label className="label mb-2 text-danger">
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {/* for password */}
                  <div>
                    <div className="text-start ms-5">
                      {" "}
                      <label>Password</label>
                    </div>
                    <input
                      className="mb-2"
                      placeholder="Enter Your Password"
                      style={{
                        width: "82%",
                        marginBottom: "20px",
                        borderRadius: "8px",
                        height: "40px",
                      }}
                      id="formControlLg"
                      type="password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "password is required",
                        },
                        minLength: {
                          value: 6,
                          message: "Must be 6 characters or longer",
                        },
                      })}
                      size="lg"
                    />
                    <label className="label mb-2 text-danger">
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt text-red">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {signInError}
                  <input
                    type="submit"
                    value="SignUp"
                    className="mb-4 px-5"
                    style={{
                      backgroundColor: "black",
                      color: "whitesmoke",
                      fontWeight: "bolder",
                      width: "82%",
                      marginBottom: "20px",
                      borderRadius: "8px",
                      height: "40px",
                    }}
                  />
                </form>

                <p className="mb-2 pb-lg-2" style={{ color: "black" }}>
                  Already have an account?{" "}
                  <span>
                    <Link
                      style={{ color: "#393f81", fontWeight: "bold" }}
                      to="/login"
                    >
                      Login here
                    </Link>{" "}
                  </span>
                </p>
                <p>Or SignUp with:</p>

                <MDBBtn
                  onClick={() => signInWithGoogle()}
                  className="mb-2 mx-auto w-30"
                  size="lg"
                  style={{ backgroundColor: "#dd4b39" }}
                >
                  <MDBIcon
                    fab
                    icon="google"
                    style={{ color: "#f6ca64", fontWeight: "bold" }}
                    className="mx-2"
                  />
                  google
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Register;
