import { Outlet, useLocation, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import data from '../../../assets/NavOptions.json'

const CategoryLayout = () => {
  const url = useLocation().pathname
  const [categoryName, setCategoryName] = useState('')
  const [searchParams] = useSearchParams()

  const findCategoryName = (data: any) => {
    data.forEach((item: any) => {
      if (item.url === url) {
        setCategoryName(item.title)
      } else if (item.children) {
        findCategoryName(item.children)
      }
    })
  }

  useEffect(() => {
    if (url.includes('/football')) {
      const params = new URLSearchParams(searchParams)

      console.log(params.get('sub'))

      const location = params.get('sub')
      let name

      if (location === 'europe') {
        name = 'Európa'
      } else if (location === 'america') {
        name = 'Amerika'
      }

      setCategoryName('Foci - ' + name)
    }
    findCategoryName(data)
  }, [url, searchParams])

  return (
    <div className="w-full h-full">
      <h1 className="text-center text-[30px]">{ categoryName }</h1>

      <Outlet />
    </div>
  )
}

export default CategoryLayout