import { Col, Layout, Row } from 'antd'
import { useState } from 'react'
import Cell from './components/Cell'
function App(): JSX.Element {
  const [items, setItems] = useState(new Array(16).fill(0))
  return (
    <Layout className="w-screen h-screen bg-indigo-200 grid grid-cols-4 grid-rows-4">
      {items.map((item, index) => {
        return (
          <Row className="w-full" key={index}>
            <Col span={24} className="">
              <Cell></Cell>
            </Col>
          </Row>
        )
      })}
    </Layout>
  )
}

export default App
