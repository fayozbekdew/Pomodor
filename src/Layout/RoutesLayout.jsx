import { Outlet } from "react-router-dom"

function RoutesLayout() {
  return (
   <>
   <header>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rerum ducimus est sit laborum aspernatur at assumenda officia molestiae dignissimos? Eveniet nam, dolorem molestias illo nulla delectus quaerat error nemo.</p>
   </header>
   <main><Outlet></Outlet></main>
   </>
  )
}

export default RoutesLayout