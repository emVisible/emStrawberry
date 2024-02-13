import { Card, Col, Image, Layout, Row } from 'antd'
import { useState } from 'react'
function Cell(): JSX.Element {
  return (
    <Card
      className=""
      title={
        <div className="h-[40px] w-[40px]">
          <img src="/src/renderer/src/assets/qq.png"></img>
        </div>
      }></Card>
  )
}

export default Cell
