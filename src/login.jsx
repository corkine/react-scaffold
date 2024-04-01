import { useAuth } from "./reducer/user"
import { useRef } from "react"
import { message } from "antd"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useAuth();
    const nav = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const u = useRef()
    const p = useRef()
    function handleLogin(e) {
        e.preventDefault()
        const u2 = u.current.value
        const p2 = p.current.value
        if (!u2 || !p2) {
            messageApi.error("用户名或密码不能为空")
        } else {
            messageApi.success("登录成功")
            login(u2, p2)
            nav("/")
        }
    }

    return <div className="hero min-h-screen bg-base-200">
        {contextHolder}
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left mr-32">
                <h1 className="text-5xl font-bold w-96">Marvin Studio</h1>
                <p className="py-6">欢迎使用可观测系统</p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">用户名</span>
                        </label>
                        <input type="text" placeholder="" className="input input-bordered"
                            ref={u} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">密码</span>
                        </label>
                        <input type="password" placeholder="" className="input input-bordered" required
                            ref={p} />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">忘记密码</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary"
                            onClick={handleLogin}>登录</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}