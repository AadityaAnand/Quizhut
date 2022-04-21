import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import * as crypto from "crypto";

//Component imports
import firebase from "../Firebase";
import Loading from "./Loading";
import { supabase } from "../Supabase";
//Image imports
import HutLogo from "../images/hut_logo.svg"


function Login() {
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [data, setData] = useState("");
    const [redirect, setRedirect] = useState(false);

    
    const handle = async event => {
        event.preventDefault();
        var name= event.target.name.value
        var password= event.target.u_pass.value
        const { data, error } = await supabase.from('users').select().eq("username", name, "password", password)
        setData(data)
        if(data.length<=0){
            alert("User not found")
        }
        else{
            window.localStorage.setItem("logged", "true")
            window.location.href = '/dashboard'
        }
    }
    if (loading) return <Loading />;
    else
        return (
            <div className="container">
                <h1 className="col-lg-12 login-page-title" style={{textTransform: "none"}}>
                    <span className="brand-font">
                        <img className="user" height="150px" width="150px" src={HutLogo} alt=""/>
                            <div className="brand-text-gradient">Qu
                                <span className="brand-u-style brand-text-gradient">i</span>zH
                                <span className="brand-u-style brand-text-gradient">u</span>t
                            </div>
                    </span>
                </h1>
                {redirect === true ? (
                    <Redirect to="/dashboard" />
                ) : (
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 login-box" style={{marginTop: "30px"}}>
                            <div className="col-lg-12 login-img">
                                <i className="fa fa-key" aria-hidden="true"></i>
                            </div>
                            <div className="col-lg-12 login-title">LOGIN TO YOUR ACCOUNT</div>
                            <div className="col-lg-12 login-form">
                                <form
                                    name="login_form"
                                    id="login_form"
                                    onSubmit={handle}
                                >
                                    <div className="form-group">
                                        <label className="form-control-label">HANDLE</label>
                                        <input
                                            type="text"
                                            id="u_name"
                                            name="name"
                                            value={name}
                                            size="20"
                                            autoComplete="off"
                                            onChange={(event) => setName(event.target.value)}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">PASSWORD</label>
                                        <input
                                            type="password"
                                            id="u_pass"
                                            name="u_pass"
                                            value={password}
                                            size="20"
                                            onChange={(event) => setPassword(event.target.value)}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-12 login-btm login-text">
                                        </div>
                                        <Link to="/forgotpassword">
                                            <div className="col-lg-12 login-btm login-text pb-3">
                                                Forgot Password ?
                                            </div>
                                        </Link>
                                        <div className="col-lg-12 d-flex justify-content-between login-btm login-button">
                                            <button
                                                type="submit"
                                                value="Login"
                                                name="login"
                                                className="btn btn-l-neon-primary text-nowrap"
                                            >
                                                LOGIN
                                            </button>
                                            <Link to="/signup">
                                                <button
                                                    type="button"
                                                    value="Sign Up"
                                                    name="signup"
                                                    onClick=""
                                                    className="btn btn-l-neon-primary text-nowrap"
                                                >
                                                    SIGN UP
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
}
export default Login;
