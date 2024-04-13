import { Outlet, useParams } from 'react-router-dom'

const CategoryLayout = () => {
  const { category } = useParams<{ category: string }>()

  return (
    <div className="w-full h-full">
      <h1 className="text-center text-[30px]">{ category }</h1>

      <Outlet />
    </div>
  )
}

export default CategoryLayout