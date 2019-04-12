/* eslint-disable no-nested-ternary */
import React from 'react';

function RegisterForm() {
    return (
        <form className="needs-validation" noValidate>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label>نام</label>
                    <input type="text" className="form-control" id="name" placeholder="نام">
                </div>
                <div className="col-md-4 mb-3">
                    <label>نام خانوادگی</label>
                    <input type="text" className="form-control" id="family-name" placeholder="نام خانوادگی">
                </div>
                <div className="col-md-4 mb-3">
                    <label>نام‌کاربری</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text username-badge">@</span>
                        </div>
                        <input type="text" className="form-control" id="username" placeholder="نام کاربری">
                    </div>
                </div>
            </div>
    );
}

export default RegisterForm;
