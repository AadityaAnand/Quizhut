import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { supabase } from "../Supabase";


//Component imports
import Loading from "./Loading";


function Register() {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [handle, setHandle] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setCPassword] = useState("");
    const [work_place, setWorkPlace] = useState("");

    const handleForm = async event => {
        event.preventDefault();
        var name= event.target.u_name.value
        var password= event.target.u_pass.value
        var email= event.target.u_email.value

        const { data, error } = await supabase
        .from('users')
        .upsert({ username: name, email: email, password: password })
        if(error){
            console.log(error);
        }
        else{
            alert("Success")
        }
    }
    
    if (loading) return <Loading />;


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 login-box">
                    <div className="col-lg-12 login-img">
                        <i className="far fa-id-badge" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-12 login-title">CREATE AN ACCOUNT</div>
                    <div className="col-lg-12 login-form">
                        <div className="important-text">* Required Fields</div>
                        <div className="important-text">
                            ** Password and Handle must contain atleast 5 characters
                        </div>
                        <form
                            name="reg_form"
                            id="reg_form"
                            autoComplete="off"
                            onSubmit={handleForm}>
                            <div className="form-group">
                                <label className="form-control-label">NAME*</label>
                                <input
                                    type="text"
                                    id="u_name"
                                    name="u_name"
                                    value={username}
                                    size="20"
                                    onChange={(event) => setUsername(event.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label className="form-control-label">EMAIL*</label>
                                <input
                                    type="text"
                                    id="u_email"
                                    name="u_email"
                                    value={email}
                                    size="20"
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label className="form-control-label">PASSWORD*</label>
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
                            <div className="form-group">
                                <label className="form-control-label">CONFIRM PASSWORD*</label>
                                <input
                                    type="password"
                                    id="u_cpass"
                                    name="u_cpass"
                                    value={confirm_password}
                                    size="20"
                                    onChange={(event) => setCPassword(event.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="col-lg-12 d-inline-flex login-btm login-button justify-content-between">

                                <Link to="/">
                                    <button
                                        className="btn btn-l-neon-primary text-nowrap"
                                        type="button"
                                        value="BACK">
                                        GO BACK
                                    </button>
                                </Link>

                                <input
                                    type="submit"
                                    value="SIGN UP"
                                    name="login"
                                    className="btn btn-l-neon-primary text-nowrap"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
                        
}
export default Register;
