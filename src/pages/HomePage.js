import React, { useEffect } from 'react';
import '../App.js';
import '../App.css';
import { Link } from 'react-router-dom';
import Top from '../images/top.jpg';
import Top1 from '../images/top1.jpg';
import Kamera from '../images/kamera.png';
import { GoChecklist } from "react-icons/go";
import { MdSanitizer } from "react-icons/md";
import { IoFootsteps } from "react-icons/io5";


const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-fluid text-center homescreen">
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <img src={Top} alt="Top" width="600" />
          </div>
          <div className="col">
            <img src={Top1} alt="Top1" width="600" />
          </div>
        </div>
      </div>
      <h3 className="text-center fw-bold py-5">SOCIAL DISTANCING EVENTS</h3>
      <h5 className="text-center text1">
        Memang benar bahwa acara telah berubah, tetapi itu tidak berarti mereka tidak dapat menyertakan beberapa keseruan di booth foto Photobooth!!
      </h5>
      <h5 className="text-center"> Kami sibuk membuat produk baru dan memodifikasi yang sudah ada khusus untuk acara jarak sosial.</h5>
      <hr />
      <h3 className="text-center fw-bold py-5">Kami dengan Design OPEN AIR BOOT</h3>
      <h5 className="text-center text1">
        Tidak perlu masuk ke dalam bilik tertutup. Kami membuat keseruan photobooth terbuka berarti ada ruang untuk berpose tanpa merasa
      </h5>
      <h5 className="text-center"> harus berdesakan. Pengaturan kami memungkinkan operator menjaga jarak 2.5 sd 3 meter dari tamu setiap saat </h5>
      <img src={Kamera} alt="Kamera" width="600" />
      <hr />
      <h2 className="Membuat acara mengikuti aturan">
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
            <GoChecklist size={60} />
            <p size={10} >STAFF SCREENING</p>
            </div>
            <div class="col">
            <MdSanitizer size={60}/>
            <p size={10} >SANITIZER</p>
            </div>
            <div class="col">
            <IoFootsteps size={60} />
            <p size={10} >KONTROL LALU LINTAS</p>
            </div>
          </div>
        </div>
      </h2>
    </div>
  )
}

export default HomePage
