import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, Card, Clock, DigistalClock, Navbar } from "../components";
import axios from "axios";
import styles from "./Home.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
interface HomeProps {
  shopdata: [];
  hanldeNext: () => void;
}

const Home = ({ shopdata, hanldeNext }: HomeProps) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isSelectMerchant, setSelectMerchant] = useState(true);
  const router = useRouter();
  const changeClock = () =>{
    setSelectMerchant(!isSelectMerchant)
  }

  return (
    <>
      <Head>
        <title>
          Đồng hồ online, Đồng Hồ thế giới, Giờ Việt Nam, giờ quốc tế{" "}
        </title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, maximum-scale=1.0, initial-scale=1.0, user-scalable=no;user-scalable=0;"
        />
        <meta name="googlebot" content="index,follow" />
        <meta
          name="keyword"
          content="Đồng hồ online, Đồng Hồ thế giới, Giờ Việt Nam, giờ quốc tế"
        />
        <meta
          name="description"
          content="Trang web Đồng hồ online, Đồng Hồ thế giới, Giờ Việt Nam, giờ quốc tế"
        />

        <meta
          property="og:title"
          content="Mã giảm giá, Mã Khuyến Mại,Coupon Shopee,Lazada,Tiki"
        />
        <meta
          property="og:site_name"
          content="Mã giảm giá, Mã Khuyến Mại,Coupon Shopee,Lazada,Tiki"
        />
        <meta property="og:url" content="https://coupon.phuongmychi.vn" />
        <meta
          property="og:description"
          content="Tổng hợp Mã giảm giá, Mã Khuyến Mại,Coupon Shopee,Lazada,Tiki mới nhất"
        />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="" />
      </Head>
      <div>
        <Navbar color={"#4df23a"} title={"Clock"} />
        <div className={styles.pageBody}>
          <div style={{ marginTop: "80px" }}>
            {isSelectMerchant ? <Clock/> : <DigistalClock/>}
          </div>
          <div style={{display:'flex',justifyContent:'center'}}>
            <Button type={"button"} text={isSelectMerchant? "Đồng Hồ Kỹ Thuật Số":"Đồng Hồ Kim"} onClick={changeClock}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
