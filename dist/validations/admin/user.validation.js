"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.forgotPasswordValidation = exports.resetPasswordValidation = exports.createValidation = void 0;
const createValidation = (req, res, next) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPhoneNumber = /^(0[3-9]\d{8})$/;
    if (!req.body["password"]) {
        return res.json({
            code: 400,
            message: "Mật khẩu không được để trống"
        });
    }
    if (!req.body["first_name"]) {
        return res.json({
            code: 400,
            message: "Tên không được để trống"
        });
    }
    if (!req.body["email"]) {
        return res.json({
            code: 400,
            message: "Email không được để trống"
        });
    }
    if (!parseInt(req.body["role_id"])) {
        return res.json({
            code: 400,
            message: "Role_id không được để trống"
        });
    }
    if (!req.body["email"].trim().match(emailRegex)) {
        return res.json({
            code: 400,
            message: "Email không đúng định dạng"
        });
    }
    if (req.body["phone"] && !req.body["phone"].trim().match(regexPhoneNumber)) {
        return res.json({
            code: 400,
            message: "Số điện thoại không đúng định dạng"
        });
    }
    next();
};
exports.createValidation = createValidation;
const resetPasswordValidation = (req, res, next) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!req.body["email"]) {
        return res.json({
            code: 400,
            message: "Email không được để trống"
        });
    }
    if (!req.body["email"].trim().match(emailRegex)) {
        return res.json({
            code: 400,
            message: "Email không đúng định dạng"
        });
    }
    if (!req.body["password"]) {
        return res.json({
            code: 400,
            message: "Mật khẩu không được để trống"
        });
    }
    if (!req.body["comfirmPassword"]) {
        return res.json({
            code: 400,
            message: "Xác nhận mật khẩu không được để trống"
        });
    }
    if (req.body["password"] !== req.body["comfirmPassword"]) {
        return res.json({
            code: 400,
            message: "Xác nhận mật khẩu không đúng"
        });
    }
    next();
};
exports.resetPasswordValidation = resetPasswordValidation;
const forgotPasswordValidation = (req, res, next) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!req.body["email"]) {
        return res.json({
            code: 400,
            message: "Email không được để trống"
        });
    }
    if (!req.body["email"].trim().match(emailRegex)) {
        return res.json({
            code: 400,
            message: "Email không đúng định dạng"
        });
    }
    next();
};
exports.forgotPasswordValidation = forgotPasswordValidation;
const loginValidation = (req, res, next) => {
    if (!req.body["username"].trim()) {
        return res.json({
            code: 400,
            message: "Tên đăng nhập không được để trống"
        });
    }
    if (!req.body["password"]) {
        return res.json({
            code: 400,
            message: "Mật khẩu không được để trống"
        });
    }
    next();
};
exports.loginValidation = loginValidation;
