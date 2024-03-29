import { useState } from 'react'
import './App.css'
import { Button, Carousel } from 'antd'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount, increment, decrement } from './counter';

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


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
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
          <li><a>登录</a></li>
        </ul>
      </div>
    </div>
  )
}

export default App
