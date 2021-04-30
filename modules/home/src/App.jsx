import React from "react";
import { Layout, Row, Col, Divider, Button } from "antd";
import { RecoilRoot, useRecoilState } from "recoil";

const Header = React.lazy(() => import("nav/Header"));

import "./index.less";
import { product, selectedItems } from "./atoms";
import ProductCarousel from "./ProductCarousel";
import TheBill from "./TheBill";
const ResetButton =()=>{
  const [p,productSet]=useRecoilState(product)
  const [select,selectedSet] =useRecoilState(selectedItems)

  const onReset=()=>{
    selectedSet([])
    productSet([
     
    {
      name:"Eco",
      image:"http://localhost:3001/product/Eco.jpg",
      price:10000,
    },
    {
      name:"Auto",
    image:"http://localhost:3001/product/Auto.jpg",
    price:20000
     }

    ])
  }
  return <Button onClick={onReset}
  > Reset Items </Button>
}

function App() {
  return (
    <RecoilRoot>
      <Layout style={{ minHeight: 800 }}>
        <React.Suspense fallback={<div />}>
          <Header />
        </React.Suspense>
        <Layout.Content style={{ padding: "2em" }}>
          <ResetButton />
          <Row gutter={6}>
            <Col span={18}>
              <Divider orientation="left">Products You Might Like</Divider>
              <ProductCarousel />
            </Col>
            <Col span={6}>
              <h1>The Bill</h1>
              <TheBill />
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </RecoilRoot>
  
            

       
  );
}

export default App;
