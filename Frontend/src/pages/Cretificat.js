import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useParams } from "react-router-dom";

import data from "../asset/certifModel";

import Modal from "../component/Modal";

export const Cretificat = () => {
  const { id } = useParams();

  const [certificat, setCertificat] = useState([]);
  const [nomDoctor, setNomDoctor] = useState(".................");
  const [nomPation, setNomPation] = useState("................");
  const [date, setDate] = useState(".................");
  const [nomberJour, setNomberJour] = useState("..............");
  const [dateDebut, setDateDebut] = useState("................");
  const [dateFin, setDateFin] = useState(".................");
  const [place, setPlace] = useState("..................");
  const [handicap, setHandicap] = useState(".............");
  const [typeOfWork, setTypeOfWork] = useState(".............");
  const [note, setNote] = useState(".......................");
  const [isTrue, setIsTrue] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [head, setHead] = useState();
  const [foot, setFoot] = useState();
  const [singture, setSingture] = useState();

  const [textPrinter, setTextPrinter] = useState("");
  const [textPrinter2, setTextPrinter2] = useState("");
  const [textPrinter3, setTextPrinter3] = useState("");
  const [textPrinter4, setTextPrinter4] = useState("");

  useEffect(() => {
    axios.get(` http://localhost:8082/model/${id}`).then((response) => {
      setCertificat(response.data);
      if (id == 1) {
        console.log(id);

        setTextPrinter(
          response.data.part1 +
            " " +
            nomDoctor +
            " " +
            response.data.part2 +
            " " +
            date +
            " " +
            response.data.part10 +
            " " +
            nomPation +
            " " +
            response.data.part3 +
            " " +
            nomberJour +
            " " +
            response.data.part4 +
            " " +
            dateDebut +
            " " +
            response.data.part5 +
            " " +
            dateFin +
            " " +
            response.data.part6
        );
        setTextPrinter2(
          place +
            " " +
            response.data.part7 +
            " " +
            " " +
            date +
            response.data.part8
        );
        console.log(textPrinter2);
        console.log(id);
      } else if (id == 2) {
        setTextPrinter(
          response.data.part1 +
            " " +
            nomDoctor +
            " " +
            response.data.part2 +
            " " +
            date +
            " " +
            response.data.part10 +
            " " +
            nomPation +
            " " +
            response.data.part3 +
            " " +
            nomberJour +
            " " +
            response.data.part4
        );
        setTextPrinter2(
          place +
            " " +
            response.data.part5 +
            " " +
            date +
            " " +
            response.data.part6
        );
      } else if (id == 3) {
        setTextPrinter(
          response.data.part1 +
            " " +
            nomDoctor +
            " " +
            response.data.part2 +
            " " +
            date +
            " " +
            response.data.part10 +
            " " +
            nomPation +
            " " +
            response.data.part3 +
            " " +
            nomberJour +
            " " +
            response.data.part4
        );
        setTextPrinter2(
          place +
            " " +
            response.data.part5 +
            " " +
            date +
            " " +
            response.data.part6
        );
      } else if (id == 4) {
        setTextPrinter(
          response.data.part1 +
            " " +
            nomDoctor +
            " " +
            response.data.part2 +
            " " +
            date +
            " " +
            response.data.part10 +
            " " +
            nomPation +
            " " +
            response.data.part3 +
            " " +
            nomberJour +
            " " +
            response.data.part4
        );
        setTextPrinter2(
          place +
            " " +
            response.data.part7 +
            " " +
            date +
            " " +
            response.data.part8
        );
        setTextPrinter3(note + " " + response.data.part5);
        setTextPrinter4(response.data.part6);
      }
    });
  }, []);

  useEffect(() => {}, []);
  const textDefault1 = () => {};

  const save = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8082/saveInfo", {
        nomDoctor,
        nomPation,
        date,
        nomberJour,
        dateDebut,
        dateFin,
        place,
      })
      .then((res) => console.log("posting success", res))
      .catch((err) => console.log(err));
    setModalOpen(true);
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    setTextPrinter(
      certificat.part1 +
        " " +
        nomDoctor +
        " " +
        certificat.part2 +
        " " +
        date +
        " " +
        certificat.part10 +
        " " +
        nomPation +
        " " +
        certificat.part3 +
        " " +
        nomberJour +
        " " +
        certificat.part4 +
        " " +
        dateDebut +
        " " +
        certificat.part5 +
        " " +
        dateFin +
        " " +
        certificat.part6
    );
    setTextPrinter2(
      certificat.part7 + " " + place + " " + certificat.part8 + " " + date
    );

    setIsTrue(false);
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    setTextPrinter(
      certificat.part1 +
        " " +
        nomDoctor +
        " " +
        certificat.part2 +
        " " +
        date +
        " " +
        certificat.part10 +
        " " +
        nomPation +
        " " +
        certificat.part3 +
        " " +
        nomberJour +
        " " +
        certificat.part4
    );
    setTextPrinter2(
      certificat.part5 + " " + place + " " + certificat.part6 + " " + date
    );

    setIsTrue(false);
  };

  const handleSubmit3 = (e) => {
    e.preventDefault();
    setTextPrinter(
      certificat.part1 +
        " " +
        nomDoctor +
        " " +
        certificat.part2 +
        " " +
        date +
        " " +
        certificat.part10 +
        " " +
        nomPation +
        " " +
        certificat.part3 +
        " " +
        typeOfWork +
        " " +
        certificat.part4
    );
    setTextPrinter2(
      certificat.part5 + " " + place + " " + certificat.part6 + " " + date
    );

    setIsTrue(false);
  };
  const handleSubmit4 = (e) => {
    e.preventDefault();
    setTextPrinter(
      certificat.part1 +
        " " +
        nomDoctor +
        " " +
        certificat.part2 +
        " " +
        date +
        " " +
        certificat.part10 +
        " " +
        nomPation +
        " " +
        certificat.part3 +
        " " +
        handicap +
        " " +
        certificat.part4
    );
    setTextPrinter3(certificat.part5 + " " + note);
    setTextPrinter4(certificat.part6);
    setTextPrinter2(
      certificat.part7 + " " + place + " " + certificat.part8 + " " + date
    );

    setIsTrue(false);
  };

  async function generatePDF() {
    const firstp = document.getElementById("firstP");
    const secondp = document.getElementById("secondP");
    firstp.textContent = firstp.textContent
      .replaceAll("(", "&")
      .replaceAll(")", "(")
      .replaceAll("&", ")");
    secondp.textContent = secondp.textContent
      .replaceAll("(", "&")
      .replaceAll(")", "(")
      .replaceAll("&", ")");
    const input = document.getElementById("content");

    var imgHeader = new Image(10, 10);
    var imgFooter = new Image(10, 10);
    var imgSign = new Image(10, 10);

    imgHeader.src = URL.createObjectURL(head);

    imgFooter.src = URL.createObjectURL(foot);

    imgSign.src = URL.createObjectURL(singture);

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("");
      const pdf = new jsPDF();

      pdf.addImage(imgHeader, "PNG", 10, 5, 190, 40);
      pdf.addImage(imgData, "PNG", 20, 50, 160, 0);
      pdf.addImage(imgFooter, "PNG", 10, 250, 190, 40);
      pdf.addImage(imgSign, "PNG", 90, 160, 80, 40);

      pdf.save("download.pdf");
      firstp.textContent = firstp.textContent
        .replaceAll("(", "&")
        .replaceAll(")", "(")
        .replaceAll("&", ")");
      secondp.textContent = secondp.textContent
        .replaceAll("(", "&")
        .replaceAll(")", "(")
        .replaceAll("&", ")");
    });
    // let doc = new jsPDF("p", "pt", "a4");
  }
  const MyPdf = () => {};

  const clear1 = (e) => {
    e.preventDefault();
    setNomDoctor("..............");
    setNomPation("...............");
    setDate("..................");
    setDateDebut(".................");
    setDateFin("................");
    setNomberJour("............");
    setPlace(" .............. ");
    setTextPrinter(
      certificat.part1 +
        " ................" +
        certificat.part2 +
        " ..............." +
        certificat.part10 +
        " ............." +
        certificat.part3 +
        " ................" +
        certificat.part4 +
        " ................" +
        certificat.part5 +
        " .................." +
        certificat.part6
    );
    setTextPrinter2(
      " .............." +
        certificat.part7 +
        "............... " +
        certificat.part8
    );
  };

  const clear2 = (e) => {
    e.preventDefault();
    setNomDoctor("..............");
    setNomPation("...............");
    setDate("..................");
    setDateDebut(".................");
    setDateFin("................");
    setNomberJour("............");
    setPlace(" .............. ");
    setHandicap("....................");

    setTextPrinter(
      certificat.part1 +
        " ................" +
        certificat.part2 +
        " ..............." +
        certificat.part10 +
        " ............." +
        certificat.part3 +
        " ................" +
        certificat.part4
    );
    setTextPrinter2(
      " .............." +
        certificat.part5 +
        "............... " +
        certificat.part6
    );
  };
  const clear3 = (e) => {
    e.preventDefault();
    setNomDoctor("..............");
    setNomPation("...............");
    setDate("..................");
    setDateDebut(".................");
    setDateFin("................");
    setNomberJour("............");
    setPlace(" .............. ");
    setTypeOfWork("..................");

    setTextPrinter(
      certificat.part1 +
        " ................" +
        certificat.part2 +
        " ..............." +
        certificat.part10 +
        " ............." +
        certificat.part3 +
        " ................" +
        certificat.part4
    );
    setTextPrinter2(
      " .............." +
        certificat.part5 +
        "............... " +
        certificat.part6
    );
  };
  const clear4 = (e) => {
    e.preventDefault();
    setHandicap("....................");
    setNomDoctor("..............");
    setNomPation("...............");
    setDate("..................");
    setDateDebut(".................");
    setDateFin("................");
    setNomberJour("............");
    setPlace(" .............. ");
    setTypeOfWork("..................");
    setNote("...............");

    setTextPrinter(
      certificat.part1 +
        " ................" +
        certificat.part2 +
        " ..............." +
        certificat.part10 +
        " ............." +
        certificat.part3 +
        " ................" +
        certificat.part4
    );
    setTextPrinter3(" .............." + certificat.part5);
    setTextPrinter2(
      " .............." +
        certificat.part7 +
        "............... " +
        certificat.part8
    );
  };
  // var today = new Date();
  // var dd = today.getDate();
  // var mm = today.getMonth() + 1; //January is 0!
  // var yyyy = today.getFullYear();

  // if (dd < 10) {
  //   dd = "0" + dd;
  // }

  // if (mm < 10) {
  //   mm = "0" + mm;
  // }

  // today = yyyy + "-" + mm + "-" + dd;
  // document.getElementById("datefield").setAttribute("min", today);

  let btns;
  console.log(textPrinter);
  if (id == 1) {
    btns = (
      <>
        {/* <PDFDownloadLink
          document={<MyDocument text={textPrinter}></MyDocument>}
        > */}
        <button onClick={generatePDF} className=" btn-primry">
          PDF
        </button>
        {/* </PDFDownloadLink> */}
        <button onClick={save} className="btn-primry">
          Save
        </button>
      </>
    );
  } else if (id == 2) {
    btns = (
      <>
        {/* <PDFDownloadLink
          document={<MyDocument text={textPrinter}></MyDocument>}
        > */}
        <button onClick={generatePDF} className=" btn-primry">
          PDF
        </button>
        {/* </PDFDownloadLink> */}
        <button onClick={save} className="btn-primry">
          Save
        </button>
      </>
    );
  } else if (id == 3) {
    btns = (
      <>
        {/* <PDFDownloadLink
          document={<MyDocument text={textPrinter}></MyDocument>}
        > */}
        <button onClick={generatePDF} className=" btn-primry">
          PDF
        </button>
        {/* </PDFDownloadLink> */}
        <button onClick={save} className="btn-primry">
          Save
        </button>
      </>
    );
  } else if (id == 4) {
    btns = (
      <>
        {/* <PDFDownloadLink
          document={<MyDocument text={textPrinter}></MyDocument>}
        > */}
        <button onClick={generatePDF} className=" btn-primry">
          PDF
        </button>
        {/* </PDFDownloadLink> */}
        <button onClick={save} className="btn-primry">
          Save
        </button>
      </>
    );
  }
  let v;

  console.log(head);

  if (id == 1) {
    v = (
      <>
        <div className="input-item">
          <input
            onFocus={() => setNomDoctor("")}
            type="text"
            value={nomDoctor}
            onChange={(e) => setNomDoctor(e.target.value)}
          />
          <label> الاسم الكامل</label>
        </div>
        <div className="input-item">
          <input
            onFocus={() => setNomPation("")}
            type="text"
            value={nomPation}
            onChange={(e) => setNomPation(e.target.value)}
          />
          <label> اسم المريض</label>
        </div>
        <div className="input-item">
          <input
            type="date"
            value={date}
            id="datefield"
            min="2022-12-12"
            max="2023-12-11"
            onChange={(e) => setDate(e.target.value)}
          />
          <label>التاريخ</label>
        </div>
        <div className="input-item">
          <input
            type="number"
            min={0}
            value={nomberJour}
            onChange={(e) => setNomberJour(e.target.value)}
          />
          <label> مدة التوقف عن العمل</label>
        </div>
        <div className="input-item">
          <input
            type="date"
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
          />
          <label>ابتداء من يوم</label>
        </div>
        <div className="input-item">
          <input
            type="date"
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)}
          />
          <label>الى غاية</label>
        </div>
        <div className="input-item">
          <input
            type="text"
            value={place}
            onFocus={() => setPlace("")}
            onChange={(e) => setPlace(e.target.value)}
          />
          <label>حرر ب</label>
        </div>
        <button onClick={handleSubmit1} className=" btn-primry btn-apply">
          Apply
        </button>
        <button onClick={clear1} className=" btn-primry ">
          Clear
        </button>
      </>
    );
  } else if (id == 2) {
    v = (
      <>
        <div className="input-item">
          <input
            type="text"
            value={nomDoctor}
            onFocus={() => setNomDoctor("")}
            onChange={(e) => setNomDoctor(e.target.value)}
          />
          <label> الاسم الكامل</label>
        </div>
        <div className="input-item">
          <input
            type="text"
            value={nomPation}
            onFocus={() => setNomPation("")}
            onChange={(e) => setNomPation(e.target.value)}
          />
          <label> اسم المريض</label>
        </div>
        <div className="input-item">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>التاريخ</label>
        </div>
        <div className="input-item">
          <input
            type="text"
            value={handicap}
            onFocus={() => setHandicap("")}
            onChange={(e) => setHandicap(e.target.value)}
          />
          <label>نوع الإعاقة</label>
        </div>

        <div className="input-item">
          <input
            type="text"
            value={place}
            onFocus={() => setPlace("")}
            onChange={(e) => setPlace(e.target.value)}
          />
          <label>حرر ب</label>
        </div>
        <button onClick={handleSubmit2} className=" btn-primry btn-apply">
          Apply
        </button>
        <button onClick={clear2} className=" btn-primry ">
          Clear
        </button>
      </>
    );
  } else if (id == 3) {
    v = (
      <>
        <div className="input-item">
          <input
            type="text"
            value={nomDoctor}
            onFocus={() => setNomDoctor("")}
            onChange={(e) => setNomDoctor(e.target.value)}
          />
          <label> الاسم الكامل</label>
        </div>
        <div className="input-item">
          <input
            type="text"
            value={nomPation}
            onFocus={() => setNomPation("")}
            onChange={(e) => setNomPation(e.target.value)}
          />
          <label> اسم المريض</label>
        </div>
        <div className="input-item">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>التاريخ</label>
        </div>
        <div className="input-item">
          <input
            type="text"
            value={typeOfWork}
            onFocus={() => setTypeOfWork("")}
            onChange={(e) => setTypeOfWork(e.target.value)}
          />
          <label>نوع العمل</label>
        </div>

        <div className="input-item">
          <input
            type="text"
            value={place}
            onFocus={() => setPlace("")}
            onChange={(e) => setPlace(e.target.value)}
          />
          <label>حرر ب</label>
        </div>
        <button onClick={handleSubmit3} className=" btn-primry btn-apply">
          Apply
        </button>
        <button onClick={clear3} className=" btn-primry ">
          Clear
        </button>
      </>
    );
  } else if (id == 4) {
    v = (
      <>
        <div className="input-item">
          <input
            type="text"
            value={nomDoctor}
            onFocus={() => setNomDoctor("")}
            onChange={(e) => setNomDoctor(e.target.value)}
          />
          <label> الاسم الكامل</label>
        </div>
        <div className="input-item">
          <input
            type="text"
            value={nomPation}
            onFocus={() => setNomPation("")}
            onChange={(e) => setNomPation(e.target.value)}
          />
          <label> اسم المريض</label>
        </div>
        <div className="input-item">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>التاريخ</label>
        </div>
        <div className="input-item">
          <input
            type="text"
            value={handicap}
            onFocus={() => setHandicap("")}
            onChange={(e) => setHandicap(e.target.value)}
          />
          <label> البطاقة الوطنية</label>
        </div>
        <div className="input-item">
          <input
            type="text"
            value={note}
            onFocus={() => setNote("")}
            onChange={(e) => setNote(e.target.value)}
          />
          <label>استنتاجات</label>
        </div>

        <div className="input-item">
          <input
            type="text"
            value={place}
            onFocus={() => setPlace("")}
            onChange={(e) => setPlace(e.target.value)}
          />
          <label>حرر ب</label>
        </div>
        <button onClick={handleSubmit4} className=" btn-primry btn-apply">
          Apply
        </button>
        <button onClick={clear4} className=" btn-primry ">
          Clear
        </button>
      </>
    );
  }

  const n = data.find((i) => i.id == id);

  return (
    <>
      <h1 className="certif-name">{n.name}</h1>
      <div className="certif-container-page">
        <div className="certificat-text">
          <div id="content">
            <p className="text-final" id="firstP">
              {textPrinter}
            </p>
            <p>{textPrinter3}</p>
            <p>{textPrinter4}</p>
            <p className="text-final" id="secondP">
              {" "}
              {textPrinter2}
            </p>
            <p> إمضاء </p>
          </div>
          {btns}
        </div>

        <form className="form-certif">
          <h2>information</h2>
          {v}
        </form>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
      <div className="fileInfo">
        <div className="file11">
          <label>
            header{" "}
            <input type="file" onChange={(e) => setHead(e.target.files[0])} />
          </label>
        </div>
        <div className="file11">
          <label>
            footer{" "}
            <input type="file" onChange={(e) => setFoot(e.target.files[0])} />
          </label>
        </div>
        <div className="file11">
          <label>
            singiature{" "}
            <input
              type="file"
              onChange={(e) => setSingture(e.target.files[0])}
            />
          </label>
        </div>
      </div>
    </>
  );
};
