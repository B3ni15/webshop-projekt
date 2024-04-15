import { Outlet, useLocation, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import data from '../../../assets/NavOptions.json'
import CardData from '../../../assets/CardData.json'
import Card from './Components/Card'

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
        name = 'Európai'
      } else if (location === 'america') {
        name = 'Amerikai'
      }

      setCategoryName('Foci - ' + name)
    }
    findCategoryName(data)
  }, [url, searchParams])

  return (
    <div className="w-full h-full flex flex-col items-center gap-10 px-[100px] max-lg:px-[10px]">
      <h1 className="text-[30px]">{ categoryName }</h1>

      <div className="grid grid-cols-4 gap-5 w-full max-lg:grid-cols-2 max-md:grid-cols-1 justify-center">
        {
          CardData.map((item) => {
            if(item.title == categoryName) {
              return (
                <>
                  {
                    Array.from({ length: 12 }).map((_, index) => (
                      <Card key={index} {...item} />
                    ))
                  }
                </>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default CategoryLayout