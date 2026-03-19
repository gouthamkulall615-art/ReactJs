import React from "react";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
const App = () => {
  const users = [
    {
      img: "https://imgs.search.brave.com/_atVS1czj6HsQrKEmNw7dtqT8MpJErnd80x6_2N-mSA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/NzA1MzAzMi9waG90/by9oYXBweS1idXNp/bmVzcy10ZWFtLXdv/cmtpbmctb24tcmVw/b3J0cy1pbi10aGUt/b2ZmaWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1LRXJv/ZmhtSU5xRXZJVkxf/MHFLZlZfbjVGaXpC/MmZJcjd6MWF3dEZ3/Q1VRPQ",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://imgs.search.brave.com/S7YRo8henqNQECt0CK-TwGf0ZTNy_ywN6RW3R_j7JLU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/MjY5NDAxMS9waG90/by9kaXZlcnNlLWVu/dHJlcHJlbmV1cnMt/d29ya2luZy1vbi1s/YXB0b3AtaW4tdGhl/LW9mZmljZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TXJf/SW1HWjdKbWxYWWtC/ZFY5cXpnN0NXa0Rv/WDE2ZTN4djlIeHow/MHRpND0",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://imgs.search.brave.com/6bobEczykYmACpYFYF7Pr4SY4FfIZap5i5gjXiehYac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/NzA2OTE2Ni9waG90/by90YWtlLWNvbnRy/b2wtYW5kLXdhdGNo/LXlvdXItY29tcGFu/eS1ncm93LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz15bUJv/WWRSWlpnUmZScF9w/QlpsVEVsRGtSUHY0/YkZQdXFja1pkYS1F/bUV3PQ",
      intro: "",
      tag: "Underbanked",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
    </div>
  );
};

export default App;
