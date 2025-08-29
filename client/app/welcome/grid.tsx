import { useEffect, useState } from 'react'
import { useStore } from 'zustand'

export function Grid() {
  const [data, setData] = useState([])

  useStore((state) => state.results)

  return (
    data.map(d => <h2>{d._source?.metadata.title}</h2>)
  )
}