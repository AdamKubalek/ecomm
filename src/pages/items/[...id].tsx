import { useRouter } from 'next/router'
import React from 'react'
import { api } from '../../utils/api'

const Item = () => {
  const id = useRouter().query.param
  if (typeof id !== 'string') return null
  const itemId = api.example.getItem.useQuery({ itemId: id });
  console.log(itemId)
  return (
    <div></div>
  )
}

export default Item