import React from "react";

export default function page() {
  return (
    <section className="px-4 py-12 ">
      {/* หัวข้อหลัก */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#C70039] mb-4">
          ประวัติและการพัฒนาหลักสูตร
        </h1>
        <div className="w-20 h-1 bg-[#C70039] mx-auto rounded-full"></div>
      </div>

      {/* ส่วนเนื้อหาประวัติ */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-12 leading-relaxed text-gray-700 text-lg space-y-6">
        <p>
          สาขาวิชาวิศวกรรมซอฟต์แวร์ก่อตั้งขึ้นในปี พ.ศ. 2552 โดย{" "}
          <strong>อ.เสวี เหลือบุญชู</strong> เริ่มแรกนั้นใช้ชื่อว่า
          “สาขาวิชาการพัฒนาซอฟต์แวร์” โดยมี อ.เสวี เหลือบุญชู เป็นประธานสาขาคนแรก
        </p>
        <p>
          หลักสูตรแรกคือ วิทยาศาสตรบัณฑิต สาขาการพัฒนาซอฟต์แวร์ (หลักสูตรปี พ.ศ. 2551) ซึ่งเป็นหลักสูตร 4 ปี และเริ่มรับนักศึกษารุ่นแรกในปี 2552
        </p>
        <p>
          ต่อมาเมื่อกระทรวงศึกษาธิการได้ประกาศใช้กรอบมาตรฐานคุณวุฒิระดับอุดมศึกษาแห่งชาติ
          ซึ่งแบ่งสาขาคอมพิวเตอร์ออกเป็น 5 สาขา ได้แก่ วิทยาการคอมพิวเตอร์, วิศวกรรมคอมพิวเตอร์,
          วิศวกรรมซอฟต์แวร์, เทคโนโลยีสารสนเทศ และคอมพิวเตอร์ธุรกิจ
        </p>
        <p>
          คณะกรรมการบริหารสาขาจึงมีมติปรับปรุงหลักสูตรให้สอดคล้องกับกรอบมาตรฐานฯ
          จึงได้พัฒนาหลักสูตรใหม่ในปี พ.ศ. 2553 และเริ่มใช้ในปี พ.ศ. 2554
          พร้อมกับเปลี่ยนชื่อสาขาเป็น “สาขาวิชาวิศวกรรมซอฟต์แวร์”
        </p>
        <p>
          นับแต่นั้นหลักสูตรได้รับการปรับปรุงอย่างต่อเนื่อง โดยหลักสูตรปัจจุบันเป็นฉบับปรับปรุงปี พ.ศ. 2559
          ซึ่งมุ่งเน้นความทันสมัยและตอบโจทย์ต่อความต้องการของอุตสาหกรรมซอฟต์แวร์
        </p>
      </div>

      {/* ส่วน ปรัชญา ปณิธาน วิสัยทัศน์ */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* ปรัชญา */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-[#C70039] mb-4 text-center">ปรัชญา</h2>
          <p className="text-gray-600 text-center">
            "ผลิตบัณฑิตที่มีความรู้และทักษะการพัฒนาซอฟต์แวร์อย่างเป็นระบบ
            สามารถประยุกต์ใช้อย่างมีคุณธรรม จริยธรรม"
          </p>
        </div>

        {/* ปณิธาน */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-[#C70039] mb-4 text-center">ปณิธาน</h2>
          <p className="text-gray-600 text-center">
            มุ่งมั่นผลิตบัณฑิตด้านวิศวกรรมซอฟต์แวร์ที่มีความรู้ ทักษะ และสามารถตอบสนองความต้องการของตลาดแรงงานและสังคม
          </p>
        </div>

        {/* วิสัยทัศน์ */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-[#C70039] mb-4 text-center">วิสัยทัศน์</h2>
          <p className="text-gray-600 text-center">
            เป็นสาขาวิชาชั้นนำด้านวิศวกรรมซอฟต์แวร์ในระดับภูมิภาค
            ที่เน้นการเรียนรู้แบบปฏิบัติจริง นวัตกรรม และความยั่งยืน
          </p>
        </div>
      </div>
    </section>
  );
}
