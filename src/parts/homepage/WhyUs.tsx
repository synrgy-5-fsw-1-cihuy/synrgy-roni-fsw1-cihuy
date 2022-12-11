import { FC } from "react";

import Card from "../../components/cards/ServiceCard";
import BadgeIcon from "../../components/icons/BadgeIcon";
import LikeIcon from "../../components/icons/LikeIcon";
import TagIcon from "../../components/icons/TagIcon";
import TimeIcon from "../../components/icons/TimeIcon";

const WhyUs: FC = () => {
  return (
    <section id="why-us" className="py-2 mt-5">
      <div className="container px-3">
        <div className="text-center text-md-start">
          <h2 className="fs-2 fw-bold">Why us?</h2>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="mt-4 row row-cols-lg-4 row-cols-1 gy-4">
          <Card title="Mobil Lengkap" icon={<LikeIcon />}>
            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
            terawat
          </Card>
          <Card title="Harga Murah" icon={<TagIcon />}>
            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
            mobil lain
          </Card>
          <Card title="Layanan 24 Jam" icon={<TimeIcon />}>
            Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
            tersedia di akhir minggu
          </Card>
          <Card title="Sopir Profesional" icon={<BadgeIcon />}>
            Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
            waktu
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
