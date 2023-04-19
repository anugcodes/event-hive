import React from 'react'
import { PageNav } from '../componenets/navbar'
import PageFooter from '../componenets/footer'
import { Outlet } from 'react-router-dom'

export default function ListLayout() {
  return (
    <div>
      <PageNav />
      <Outlet />
      <PageFooter />
    </div>
  )
}
