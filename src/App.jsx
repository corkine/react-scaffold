import { useState } from 'react'
import { Button, Tooltip } from 'antd'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount, increment, decrement } from './reducer/counter';
import { logout, userSelector } from './reducer/user';

export function About() {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  return <div className="mx-10 my-3">
    <h1 className='mt-5 text-xl hover:underline cursor-pointer'>About</h1>
    <p>Now Counter is {count}</p>
    <Button className="mr-3" onClick={() => dispatch(increment())}>Inc</Button>
    <Button danger className="mr-3" onClick={() => dispatch(decrement())}>Dec</Button>
    <Link to='/'>
      <Button type="primary" className='mt-3'>
        Go To /
      </Button>
    </Link>
  </div>
}

function Hero() {
  return <div className="hero h-96 mb-5" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
}

function Footer() {
  return <footer className="footer p-10 bg-base-200 text-base-content mt-10">
    <aside>
      <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
      <p>Marvin Studio.<br />Providing reliable tech since 2018</p>
    </aside>
    <nav>
      <h6 className="footer-title">Services</h6>
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav>
    <nav>
      <h6 className="footer-title">Company</h6>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav>
    <nav>
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>
}

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const { noAuth } = useSelector(userSelector)
  return (
    <>
      {noAuth && <Navigate to="/login" />}
      <Header />
      <Hero />
      <Stat />
      <Code />
      <Card />
      <Button type="primary" className='ml-10 my-3'
        onClick={() => setCount(count + 1)}>Now is {count}</Button>
      <Link to='/about'>
        <Button type="primary" className='ml-3 my-3'>
          Go To /about
        </Button>
      </Link>
      <Link to='/login'>
        <Button type="primary" className='ml-3 my-3'>
          Login
        </Button>
      </Link>
      <Footer />
    </>
  )
}

function Code() {
  return <div className="mockup-code mx-10 my-3">
    <pre data-prefix="$"><code>npm i daisyui</code></pre>
    <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
    <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
  </div>
}

function Stat() {
  return <div className="stats shadow mx-10">

    <div className="stat">
      <div className="stat-figure text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
      </div>
      <div className="stat-title">Total Likes</div>
      <div className="stat-value text-primary">25.6K</div>
      <div className="stat-desc">21% more than last month</div>
    </div>

    <div className="stat">
      <div className="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      </div>
      <div className="stat-title">Page Views</div>
      <div className="stat-value text-secondary">2.6M</div>
      <div className="stat-desc">21% more than last month</div>
    </div>

    <div className="stat">
      <div className="stat-figure text-secondary">
        <div className="avatar online">
          <div className="w-16 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
      <div className="stat-value">86%</div>
      <div className="stat-title">Tasks done</div>
      <div className="stat-desc text-secondary">31 tasks remaining</div>
    </div>

  </div>
}

function Card() {
  return <div className="card card-compact w-96 bg-base-100 shadow-xl mx-10 my-3">
    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
}

function Header() {
  const dispatch = useDispatch()
  const { username } = useSelector(userSelector)
  const nav = useNavigate()
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">System</a>
        <ul className="menu menu-horizontal px-1">
          <li><a>Link</a></li>
          <li>
            <details>
              <summary>
                Parent
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Tooltip title={username ? "点击登出" : "点击登录"}>
              <a onClick={username ? () => {
                dispatch(logout())
                //nav("/login")
              }
                : () => nav("/login")}>{username ?? "登录"}</a>
            </Tooltip>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
