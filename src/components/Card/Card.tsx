import React, { FunctionComponent } from "react";
import styles from "./Card.module.scss";
import { Button } from "../index";
import ImageLazy from "../ImageLazy/ImageLazy";
interface CardProps {
  data: {
    image: string;
    name: string;
    content: string;
    aff_link: string;
    time_left: string;
    merchant: string;
    domain: string;
    campaign_name: string;
    coupons: [];
  };
  hanldeBuy: (item: any) => void;
  handleCopy: (item: any) => void;
  filterByMerchant:(item:any)=>void
}

const Card: FunctionComponent<CardProps> = ({
  data,
  hanldeBuy,
  handleCopy,
    filterByMerchant
}) => {
  return (
    <div className={styles.card} style={{ display: "flex" }}>
      <ImageLazy
        className={styles.img}
        imgUrl={data?.image}
        loading={"lazy"}
        alt={data?.name}
        width={"100%"}
        height={"100%"}
      />
      <div className={styles.container}>
        <h4 style={{ fontSize: "13px" }}>
          <b>{data?.name?.slice(0, 100)}</b>
        </h4>
        <div>
          {data?.coupons?.map((it: any) => (
            <div
              title={"Bấm để sao chép mã khuyến mãi"}
              onClick={() => {
                handleCopy(it);
              }}
              key={it?.coupon_code}
            >
              <strong>Mã giảm giá : </strong>
              <span className={styles.vocher}>{it?.coupon_code}</span>
            </div>
          ))}
        </div>
        <div>
          <strong>Hạn sử dụng: </strong>{" "}
          <span style={{ fontSize: "14px" }}>{data?.time_left}</span>
        </div>
        <div>
          <strong>Nhà cung cấp: </strong>{" "}
          <span onClick={()=>{
            // filterByMerchant(data?.domain)
          }} className={styles.vocher} style={{ fontSize: "14px" }}>{data?.merchant}</span>
        </div>
        <div style={{ marginTop: "12px" }}>
          <Button
            onClick={() => {
              hanldeBuy(data);
            }}
            background={"palevioletred"}
            type={"button"}
            text={"Mua Ngay"}
          />
        </div>
        {/*<p>{data?.content}</p>*/}
      </div>
    </div>
  );
};

export default Card;
